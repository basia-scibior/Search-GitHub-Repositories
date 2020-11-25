import * as React from "react";
import { FC } from "react";
import {
  Container,
  Content,
  Logo,
  Owner,
  Row,
  Title,
  Text,
  Header,
} from "./DetailsPage.styles";
import { getRepository } from "../../api/repository";
import { useParams } from "react-router";
import { Stars } from "../../component/Stars/Stars";
import { useQuery } from "react-query";

export const DetailsPage: FC = () => {
  const { ownerName, repoName } = useParams();

  const { data: repository } = useQuery(
    ["get-repository", ownerName, repoName],
    () => getRepository(ownerName, repoName)
  );

  return (
    <Container>
      <Content>
        <Header>
          <Title>{repository?.name}</Title>
          <Owner>
            <Logo src={repository?.owner.avatar_url} />
            {repository?.owner.login}
          </Owner>
        </Header>
        <Text>{repository?.description}</Text>

        <Row>
          <Stars number={repository?.stargazers_count} />
          <Text>
            <strong>{repository?.open_issues}</strong> open issues
          </Text>
          <Text>
            <strong>{repository?.forks}</strong> forks
          </Text>
        </Row>
      </Content>
    </Container>
  );
};
