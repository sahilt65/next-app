'use client'
import { GetUserLimitedDetailsQuery, useGetUserLimitedDetailsQuery, useUserQuery } from "@/generated";
import React from "react";

const GraphQLReactQuery = () => {
        const { data, error, isLoading } = useGetUserLimitedDetailsQuery<GetUserLimitedDetailsQuery>({ id: 1 });

        if (isLoading) return <p>Loading...</p>;
    
        return (
        <div>
            <h2>{data?.userById!.name}</h2>
            <p>Phone: {data?.userById!.phone}</p>
            <p>Website: {data?.userById!.website}</p>
        </div>
        );
};

export default GraphQLReactQuery;
