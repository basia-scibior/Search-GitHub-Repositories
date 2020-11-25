export type Repository = {
  id: number;
  name: string;
  stargazers_count: number;
  language: string;
  owner: {
    login: string
  }
};
