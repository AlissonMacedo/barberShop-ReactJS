import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Container, Content } from "./styles";
import SideBar from "../../components/SideBar";
import Perfil from "../../components/Perfil";
import Home from "../../components/Home";
import Agendamento from "../../components/Agendamento";

function Dashboard() {
  const dashboard = useSelector(state => state.user.dashboard);

  function selectComponent() {
    const state = dashboard;
    switch (state) {
      case "Home":
        return <Home />;
      case "Perfil":
        return <Perfil />;
      case "Agendamento":
        return <Agendamento />;
      default:
        return null;
    }
  }

  return (
    <>
      <Container>
        <SideBar />
        <Content>{selectComponent()}</Content>
      </Container>
    </>
  );
}

export default Dashboard;
