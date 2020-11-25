import * as React from "react";
import { FC } from "react";
import {Container, Content} from "./DetailsPage.styles";

interface DetailsPageProps {

}

export const DetailsPage: FC<DetailsPageProps> = ({}) => {
  return (
    <Container>
      <Content>
        Details
      </Content>
    </Container>
  );
};
