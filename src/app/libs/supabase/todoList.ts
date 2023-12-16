import { ItodoProps } from "../../../types/ItodoProps";
import { supabase } from "./supabaseClient";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

const tableName = "todos";

const getTodos = async (): Promise<ItodoProps[] | false> => {
  try {
    noStore();
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

const addTodo = async (task: string): Promise<ItodoProps[] | false> => {
  try {
    const { data } = await supabase.from(tableName).insert([{ task }]);
    revalidatePath('/')
    
    if (data) {
      revalidatePath('/')
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
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
