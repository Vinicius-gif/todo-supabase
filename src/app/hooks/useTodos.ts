'use client'

import React from "react";
import { ItodoProps } from "@/types/ItodoProps";
import { getTodos } from "@/app/libs/supabase/todoList";

export function useTodos() {
  const [todos, setTodos] = React.useState<ItodoProps[]>([]);

  const fetchAndGetTodos = React.useMemo(async () => {
    const response = await getTodos();
    if (response) {
      setTodos(response);
    } else {
      console.error(response);
      return;
    }
  }, [setTodos]);

  return {
    todos,
    fetchAndGetTodos,
    setTodos,
  };
}