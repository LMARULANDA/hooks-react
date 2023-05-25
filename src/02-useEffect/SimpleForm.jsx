import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "laura",
    email: "lauris@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // arreglo vacio que solo se ejecute una vez
    console.log("useEffect called");
  }, []);

  useEffect(() => {
    // arreglo con el elemento que quiero q registre el cambio
    console.log("formState changed");
  }, [formState]);

  useEffect( () => {
    console.log("email changed!")
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
      {
        (username === 'stridder2' ) &&  <Message/>
      }
    </>
  );
};
