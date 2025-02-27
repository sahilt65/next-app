'use client'
import { SaasProvider } from "@saas-ui/react";
import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient({});
const Providers = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>
    <SaasProvider>
      {children}
    </SaasProvider>
  </QueryClientProvider>;
};

export default Providers;
