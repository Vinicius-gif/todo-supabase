import { ItodoProps } from "./ItodoProps";
import { supabase } from "./supabaseClient";

const tableName = "todos";

const getTodos = async (): Promise<ItodoProps[] | false> => {
  try {
    const { data } = await supabase.from(tableName).select("*");

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const addTodo = async (id: string, task: string) => {
  const { data, error } = await supabase.from(tableName).insert([{ id, task }]);
  return { data, error };
};

const updateTodo = async (id: string, task: string) => {
  const { data, error } = await supabase
    .from(tableName)
    .update({ task })
    .eq("id", id);
  return { data, error };
};

const deleteTodo = async (id: string) => {
  const { data, error } = await supabase.from(tableName).delete().eq("id", id);
  return { data, error };
};

export { getTodos, addTodo, updateTodo, deleteTodo };
