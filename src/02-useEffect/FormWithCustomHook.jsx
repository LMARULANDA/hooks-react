import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  /*
  username: '',
  email: '',
  password: ''*/

  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });
  //otra forma
  //const {username,email,password} = formState;

  useEffect(() => {
    // arreglo vacio que solo se ejecute una vez
    console.log("useEffect called");
  }, []);

  useEffect(() => {
    // arreglo con el elemento que quiero q registre el cambio
    console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    console.log("email changed!");
  }, [email]);

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        id="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="lauris@gmail.com"
        id="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
