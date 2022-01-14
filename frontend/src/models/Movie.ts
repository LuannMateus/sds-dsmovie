export type TMovie = {
  id: number;
  title: string;
  score: number;
  count: number;
  image: string;
};

export type TMoviePage = {
  content: TMovie[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
