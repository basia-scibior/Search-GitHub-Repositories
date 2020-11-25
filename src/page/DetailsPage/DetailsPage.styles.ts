import styled from "styled-components";
import {pink} from "../../theme";

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  opacity: 0.9;
  text-align: center;
`;

export const Content = styled.div`
    width: 60%;
  min-height: 70px;
  margin: 10px 0;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 750px) {
    width: 85%;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${pink};
  margin-bottom: 20px;
`;

export const Button = styled.button`
  color: white;
  padding: 15px 30px;
  background-color: ${pink};
  opacity: 0.9;
  border-radius: 7px;
    margin-bottom: 10px;
`;
