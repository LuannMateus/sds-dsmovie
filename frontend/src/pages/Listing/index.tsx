import { MovieCard } from 'components/MovieCard';
import { Pagination } from 'components/Pagination';
import { http } from 'utils/http';

export const Listing = () => {
  // ! WRONG WAY
  http.get('/movies?size=12&page=0').then((resp) => console.log(resp.data));

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
