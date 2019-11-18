import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  padding: 0 30px;
  box-shadow: 0px 0px 5px #000;
`;

export const Content = styled.div`
  height: 64px;
  max-height: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav{
    display: flex;
    align-items: center;
  
  img {
    height: 50px;
    width: 65px;
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #eee;
  }

  a{
    font-weight: bold;
    color: #7159c1;
  }
}

  aside {
    display: flex;
    align-items: center;
  }
`;


export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }
  }
  img {
      height: 32px;
      border-radius: 50%;
    }
`;