import { SaasProvider } from "@saas-ui/react";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SaasProvider>{children}</SaasProvider>;
};

export default Providers;
