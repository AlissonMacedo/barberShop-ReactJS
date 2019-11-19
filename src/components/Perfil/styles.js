import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  width: 65%;
  min-width: 300px;
  height: 95%;
  min-height: 400px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 4px 10px 3px #ddd;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
    border-bottom: solid 1px #eee;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(95% - 40px);
  }

  input {
    width: 250px;
    background: #f1f2f7;
    border-radius: 4px;
    height: 35px;
    padding: 0 15px;
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
    margin-top: 100px;
    height: 44px;
    width: 250px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: 2px 4px 10px 3px #ddd;

    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, "#3b9eff")};
    }
  }
`;
