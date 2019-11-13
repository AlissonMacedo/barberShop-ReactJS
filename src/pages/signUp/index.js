import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import logo from "../../assets/login/barbershop.png";

import { signInRequest } from "../../store/modules/auth/actions";

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

function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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

export default SignUp;
