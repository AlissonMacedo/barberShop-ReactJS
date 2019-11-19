import styled, { css } from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 300px;
  background-color: #333;
  cursor: pointer;
`;

export const Div = styled.div`
  height: 55px;
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: ${props => (!props.active ? "#333" : "#F1F2F7")};
  &:hover {
    background-color: #999;
  }

  a {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: ${props => (!props.active ? "#ddd" : "#000")};
    font-weight: bold;
    &:hover {
      color: #fff;
    }
  }
`;
