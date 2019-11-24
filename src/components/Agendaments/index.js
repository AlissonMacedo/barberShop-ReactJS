import React from "react";
import { MdToday } from "react-icons/md";

import { Container } from "./styles";

export default function Agendamento() {
  return (
    <>
      <Container>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth: 0.5,
              borderBottom: "solid",
              borderBottomColor: "#eee",
              paddingBottom: 10
            }}
          >
            <h1>Agendamentos</h1>
          </div>
          <div>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 10,
                padding: 10
              }}
            >
              <div>
                <a style={{ paddingRight: 40 }}>Nome do Fulano</a>
                <a>10/10/2019</a>
              </div>
              <MdToday color="#333" size={20} />
            </li>
          </div>
        </div>
      </Container>
    </>
  );
}
