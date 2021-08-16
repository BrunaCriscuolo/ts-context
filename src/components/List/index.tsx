import { useContext, ReactNode } from 'react';
import { TransactionsContext } from '@/TransactionContex';

export const List = (): ReactNode => {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      {transactions.map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
};
