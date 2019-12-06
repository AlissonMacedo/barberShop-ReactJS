import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { Container, Content } from "./styles";
import SideBar from "../../components/SideBar";
import Profile from "../../components/Profile";
import Home from "../../components/Home";
import Agendamento from "../../components/Agendaments";

function Dashboard() {
  const dashboard = useSelector(state => state.user.dashboard);

  function selectComponent() {
    const state = dashboard;
    switch (state) {
      case "Home":
        return <Home />;
      case "Perfil":
        return <Profile />;
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
