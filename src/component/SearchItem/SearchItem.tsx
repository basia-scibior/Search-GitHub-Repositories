import { FC } from "react";
import * as React from "react";
import {
  Container,
  Name,
  UserName,
  Star,
  Row,
  Language,
  StarsNumber,
  Rating, Details,
} from "./SearchItem.styles";
import {Repository} from "../../models/Repository";
import starUrl from "../../images/star.png";

interface SearchItemProps {
  repository: Repository
}

export const SearchItem: FC<SearchItemProps> = ({ repository }) => {
  return (
    <Container to="/details">
      <Row>
          <Name>{repository.name}</Name>
        <Rating>
          <Star src={starUrl} />
          <StarsNumber>{repository.stargazers_count}</StarsNumber>
        </Rating>
      </Row>

        <Details><UserName>{repository.owner.login}</UserName> <Language>&bull; {repository.language}</Language></Details>
    </Container>
  );
};
