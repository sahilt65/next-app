'use client'
import React from "react";



import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",    
  cache: new InMemoryCache(),
});

const Providers = ({children} : {children: React.ReactNode}) => {
  return <>
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
  </>;
};

export default Providers;
