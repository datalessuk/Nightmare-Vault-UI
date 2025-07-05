import { useGetFilm } from '@/hooks/useGetFilm';
import type { IFilmResponse } from '@/types/tmdb.types';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfoCard from '../cards/MovieInfoCard';

function MovieInfo() {
  const posterBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  //const [film, setFilm] = useState<IFilmResponse | null>(null);
  const { film, error } = useGetFilm(id || '');

  if (!film) return <div>Loading...</div>;
  return (
    <>
      <MovieInfoCard film={film} />
    </>
  );
}

export default MovieInfo;
