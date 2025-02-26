'use client'
import React from "react";
import { useForm } from "react-hook-form";
let rerender = 0;
type FormValues = {
    username: string,
    email: string,
    password: string
};
const SaaSUIForm = () => {
    const form = useForm<FormValues>();
    const {register, control, handleSubmit} = form;
    rerender++;
    const onSubmit  = (data: FormValues) => {
        console.log({data});
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username")}></input>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")}></input>

            <label htmlFor="username">Password</label>
            <input type="text" id="password" {...register("password")}></input>
            <button>Submit</button>
        </form>
    </div>
  )
};

export default SaaSUIForm;
