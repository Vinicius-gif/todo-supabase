'use client'

import { useQuery } from "react-query";
import { fetchTasks } from "../libs/supabase/todoList";

export function useTodos() {

  const { data: tasks = [], isLoading, refetch } = useQuery('todos', fetchTasks);

  return {
    tasks,
    isLoading,
    refetch
  }
}