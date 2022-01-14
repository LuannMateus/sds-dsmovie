import { MovieCard } from 'components/MovieCard';
import { Pagination } from 'components/Pagination';
import { TMovie } from 'models/Movie';
import { useEffect, useState } from 'react';
import { http } from 'utils/http';

export const Listing = () => {
  const [pageNumberState, setPageNumberState] = useState(0);

  useEffect(() => {
    http.get('/movies?size=12&page=0').then((resp) => {
      const data = resp.data as TMovie;
    });
  }, []);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
};
