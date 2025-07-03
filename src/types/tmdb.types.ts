export interface IFilmsResponse {
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  id: string;
}

export interface IFilmResponse {
  origin_country: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  spoken_languages: languages[];
  poster_path: string;
}

interface languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IFilmsResponseList {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
}
