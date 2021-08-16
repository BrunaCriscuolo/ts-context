import { Repository } from '@/context/repositories/types';

type OwnProps = {
  repository: Repository;
};

export const RepositoryItem = ({
  repository,
}: OwnProps): React.ReactElement => (
  <>
    {console.log(repository)}
    <li>{repository.name}</li>
  </>
);
