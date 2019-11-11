import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import logo from "../../assets/login/barbershop.png";

import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("O e-mail é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O email é obrigatório!"),
  password: Yup.string()
    .min(6, "No minimo 6 caracteres.")
    .required("A senha é obrigatória")
});

function signUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <div>
        <Form schema={schema} onSubmit={handleSubmit}>
          <img
            src={logo}
            alt="BarberShop"
            style={{ height: 270, width: 200 }}
          />
          <Input name="name" type="text" placeholder="Seu nome" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <button>Acessar</button>
          <Link to="/signIn">Voltar para Login</Link>
        </Form>
      </div>
    </>
  );
}

export default signUp;
