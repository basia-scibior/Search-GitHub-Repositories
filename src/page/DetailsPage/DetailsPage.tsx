import * as React from "react";
import { FC, useEffect, useState } from "react";
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
import { Repository } from "../../models/Repository";
import { Stars } from "../../component/Stars/Stars";

export const DetailsPage: FC = () => {
  const [repository, setRepository] = useState<Repository>();

  const { ownerName, repoName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repository = await getRepository(ownerName, repoName);
        setRepository(repository);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

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
