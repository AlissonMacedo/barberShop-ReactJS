import React from "react";

import Indicadores from "../Indicadores";
import { Container } from "./styles";

import Agendaments from "../Agendaments";
import Messenges from "../Messenges";

export default function Home() {
  return (
    <>
      <Indicadores />
      <Container>
        <Agendaments />
        <Messenges />
      </Container>
    </>
  );
}
