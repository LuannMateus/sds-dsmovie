import { TMovie } from 'models/Movie';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from 'utils/emailValidate';
import { http } from 'utils/http';
import './styles.css';

type FormCardProps = {
  movieId: string;
};

export const FormCard = ({ movieId }: FormCardProps) => {
  const navigate = useNavigate();

  const [movieState, setMovieState] = useState<TMovie>();

  useEffect(() => {
    http.get(`/movies/${movieId}`).then((resp) => {
      const data = resp.data;
      setMovieState(data);
    });
  }, [movieId]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if (!validateEmail(email)) {
      return;
    }

    const data = {
      email,
      movieId,
      score,
    };

    http.put('/scores', data).then((_) => navigate('/'));
  };

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movieState?.image}
        alt={movieState?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movieState?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
};
