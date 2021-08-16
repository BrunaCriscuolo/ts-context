import { TransactionsProvider } from './TransactionContex';

export function App(): React.ReactElement {
  return (
    <TransactionsProvider>
      <h1>app</h1>
    </TransactionsProvider>
  );
}
