import React from "react";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";

import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O email é obrigatório!"),
  password: Yup.string().required("A senha é obrigatória")
});

function handleSubmit() {}

const loading = false;

export default function FormPerfil() {
  return (
    <>
      <Container>
        <div>
          <h2>Perfil</h2>
        </div>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="nome" type="email" placeholder="Seu nome completo" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <Input name="password" type="password" placeholder="Repita a senha" />
          <button>{loading ? "Carregando" : "Salvar"}</button>
        </Form>
      </Container>
    </>
  );
}
