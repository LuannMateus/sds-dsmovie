import { FormCard } from 'components/FormCard';
import { useParams } from 'react-router-dom';

export const Form = () => {
  const { movieId } = useParams() as { movieId: string };

  return <FormCard movieId={movieId} />;
};
