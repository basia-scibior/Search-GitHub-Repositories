import styled from "styled-components";
import {blue, lightGrey} from "../../theme";
import {Link} from "react-router-dom";

export const Container = styled(Link)`
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

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Details = styled.div`
  display: flex;
`;

export const Language = styled.span`
  color: ${lightGrey};
  margin-left: 10px;
  @media (max-width: 750px) {
    font-size: 15px;
  }
`;

export const Name = styled.span`
  font-size: 26px;
  font-weight: 400;
  color: ${blue};
    @media (max-width: 400px) {
    font-size: 20px;
    margin-bottom: 5px
  }
`;

export const UserName = styled.p`
  color: ${blue};
  opacity: 0.8;
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StarsNumber = styled.span`
  font-size: 18px;
    color: ${lightGrey};
`;

export const Star = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
  @media (max-width: 411px) {
    margin-right: 10px;
  }
`;
