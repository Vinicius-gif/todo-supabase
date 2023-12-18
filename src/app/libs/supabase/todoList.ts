import { supabase } from "./supabaseClient";

export const fetchTasks = async () => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) {
    throw error;
  }
  return data || [];
};

export const deleteTask = async (taskId: number) => {
  const { error } = await supabase.from('todos').delete().eq('id', taskId);
  if (error) {
    throw error;
  }
};