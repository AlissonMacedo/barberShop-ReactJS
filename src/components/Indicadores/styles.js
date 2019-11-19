import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-around;
  border-bottom: solid 1px #ddd;

  div {
    width: calc(80% / 3);
    height: 65px;
    background-color: #fff;
    border: solid 1px #7159c1;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px 2px #ddd;
  }
`;
