// lib/todo.ts

import { supabase } from "./supabaseClient";

const tableName = "todos";

const getTodos = async () => {
  const { data, error } = await supabase.from(tableName).select("*");
  return { data, error };
};

const addTodo = async (task: string) => {
  const { data, error } = await supabase.from(tableName).insert([{ task }]);
  return { data, error };
};

const updateTodo = async (id: number, task: string) => {
  const { data, error } = await supabase
    .from(tableName)
    .update({ task })
    .eq("id", id);
  return { data, error };
};

const deleteTodo = async (id: number) => {
  const { data, error } = await supabase.from(tableName).delete().eq("id", id);
  return { data, error };
};

export { getTodos, addTodo, updateTodo, deleteTodo };
