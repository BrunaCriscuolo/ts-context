import { useContext } from 'react';
import { TransactionsContext } from '@/context/repositories/context';

import { RepositoryItem } from '../RepositoryItem';

export const RepositoryList = (): React.ReactElement => {
  const { listRepositories } = useContext(TransactionsContext);
  return (
    <ul>
      {listRepositories.map((item) => (
        <RepositoryItem key={item.id} repository={item} />
      ))}
    </ul>
  );
};
