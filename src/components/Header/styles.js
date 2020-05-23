import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-itens: center;
  margin: 50px 0;
`;
export const Title = styled(Link)`
  text-decoration: none;
  color: #bfcdd9;
  font-size: 32px;
`;
export const Cart = styled(Link)`
  display:flex;
  aling-items: center
  text-decoration: none;
  transition: opacity 0.2;

  &:hover{
    opacity: 0.7
  }

  div{
    text-aling: right;
    margin-right: 10px;

    strong{
      display: block;
      color: #FFF;
      
    }
    span{
      font-size: 12px;
      color: #999;
    }
  }
`;
