import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  min-width: 600px;
  margin: 15px auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 5px #ddd;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    input {
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;
      &::placeholder {
        color: #ccc;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: #ccc;
      margin: 10px 0 20px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, "#3b9eff")};
      }
    }
  }
  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.05, "#f64c75")};
    }
  }
`;
