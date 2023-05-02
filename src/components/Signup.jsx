import axios from "axios";
import React from "react";
import useInput from "../hooks/useInput";

const Signup = () => {
  const usuario = useInput();
  const password = useInput();
  const email = useInput();
  const nacionalidad = useInput();
  const edad = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/user", {
        usuario: usuario.value,
        password: password.value,
        email: email.value,
        nacionalidad: nacionalidad.value,
        edad: edad.value,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <label>
        Usuario:
        <input {...usuario} type="text" name="usuario" />
      </label>
      <br></br>
      <br></br>
      <label>
        Password:
        <input {...password} type="password" name="password" />
      </label>
      <br></br>
      <br></br>
      <label>
        Email:
        <input {...email} type="email" name="email" />
      </label>
      <br></br>
      <br></br>
      <label>
        Nacionalidad:
        <input {...nacionalidad} type="text" name="nacionalidad" />
      </label>
      <br></br>
      <br></br>
      <label>
        Edad:
        <input {...edad} type="number" name="edad" />
      </label>
      <br></br>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Signup;
