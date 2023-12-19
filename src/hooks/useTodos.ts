'use client'

import { fetchTasks } from "@/libs/supabase/todoList";
import { useQuery } from "react-query";

export function useTodos() {

  const { data: tasks = [], isLoading, refetch } = useQuery('todos', fetchTasks);

  return {
    tasks,
    isLoading,
    refetch
  }
}