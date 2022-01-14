import { MovieCard } from 'components/MovieCard';
import { Pagination } from 'components/Pagination';
import { TMovie, TMoviePage } from 'models/Movie';
import { useEffect, useState } from 'react';
import { http } from 'utils/http';

export const Listing = () => {
  const [pageNumberState, setPageNumberState] = useState(0);

  const [pageState, setPageState] = useState<TMoviePage>({
    content: [],
    last: false,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    http.get(`/movies?size=12&page=${pageNumberState}`).then((resp) => {
      const data = resp.data as TMoviePage;

      setPageState(data);
    });
  }, [pageNumberState]);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {pageState.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
