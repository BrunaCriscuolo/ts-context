import { RepositoriesProvider } from './context/repositories/context';
import { RepositoryList } from './components/RepositoryList';

export function App(): React.ReactElement {
  return (
    <RepositoriesProvider>
      <RepositoryList />
    </RepositoriesProvider>
  );
}
