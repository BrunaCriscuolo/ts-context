import { ReactNode } from 'react';

export type Repositories = {
  id: number;
  title: string;
  full_name: number;
  name: string;
  private: string;
};

export type Repository = {
  id: number;
  name: string;
};

export type RepositoriesProviderProps = {
  children: ReactNode;
};

export type RepositoriesContextData = {
  listRepositories: Repositories[];
};
