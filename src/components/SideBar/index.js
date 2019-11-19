import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Div } from "./styles";

import { mostraHome } from "../../store/modules/user/actions";

export default function SideBar() {
  const dispatch = useDispatch();
  const dashboard = useSelector(state => state.user.dashboard);

  function handleSubmit(value) {
    dispatch(mostraHome(value));
  }

  return (
    <Container>
      <Div
        onClick={() => handleSubmit("Home")}
        active={dashboard === "Home" ? true : false}
      >
        <a>Home</a>
      </Div>
      <Div
        onClick={() => handleSubmit("Perfil")}
        active={dashboard === "Perfil" ? true : false}
      >
        <a>Perfil</a>
      </Div>
      <Div
        onClick={() => handleSubmit("Agendamento")}
        active={dashboard === "Agendamento" ? true : false}
      >
        <a>Agendamento</a>
      </Div>
    </Container>
  );
}
