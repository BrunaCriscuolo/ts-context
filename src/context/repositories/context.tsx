import { createContext, useEffect, useState } from 'react';
import { api } from '@/services/api';
import {
  RepositoriesProviderProps,
  RepositoriesContextData,
  Repositories,
} from './types';

export const TransactionsContext = createContext<RepositoriesContextData>(
  {} as RepositoriesContextData
);

export const RepositoriesProvider = ({
  children,
}: RepositoriesProviderProps): React.ReactElement => {
  const [listRepositories, setListRepositories] = useState<Repositories[]>([]);

  useEffect(() => {
    api
      .get('/users/brunacriscuolo/repos')
      .then((response) => setListRepositories(response.data));
  }, []);

  return (
    <TransactionsContext.Provider value={{ listRepositories }}>
      {children}
    </TransactionsContext.Provider>
  );
};
