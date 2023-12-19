'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
    children: React.ReactNode
}

const ReactQueryClient = ({children}: Props) => {

    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryClient