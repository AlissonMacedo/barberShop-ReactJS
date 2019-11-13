import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import logo from "../../assets/login/barbershop.png";
import * as Yup from "yup";

import { signInRequest } from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O email é obrigatório!"),
  password: Yup.string().required("A senha é obrigatória")
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
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
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <button>Acessar</button>
          <Link to="/signUp">Criar uma conta gratuita</Link>
        </Form>
      </div>
    </>
  );
}


