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
    const {register, control, handleSubmit, formState} = form;
    rerender++;
    const {errors} = formState;
    const onSubmit  = (data: FormValues) => {
        console.log({data});
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username", {required:"Username is required"})}></input>
            <p>{errors.username?.message}</p>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email",  {required:"Email is required"})}></input>
            <p>{errors.email?.message}</p>


            <label htmlFor="password">Password</label>
            <input type="text" id="password" {...register("password",  {required:"Password is required"})}></input>
            <p>{errors.password?.message}</p>

            <button>Submit</button>
        </form>
    </div>
  )
};

export default SaaSUIForm;
