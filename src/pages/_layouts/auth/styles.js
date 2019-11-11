import styled from "styled-components";
import { darken } from "polished";

import Background from "../../../assets/login/background-login-crop.jpg";

export const Wrapper = styled.div`
  height: 100%;
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  div {
    background: rgba(62, 63, 74, 0.9);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  input {
    width: 250px;
    background: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #333;
    margin: 0 0 10px;

    &::placeholder {
      color: #333;
    }
  }

  span {
    padding-left: 20px;
    color: #fff;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    width: 250px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, "#3b9eff")};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 12px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
