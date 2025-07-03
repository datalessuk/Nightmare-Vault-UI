import { useGetFilm } from '@/hooks/useGetFilm';
import type { IFilmResponse } from '@/types/tmdb.types';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieInfo() {
  const { id } = useParams();
  //const [film, setFilm] = useState<IFilmResponse | null>(null);
  const { film, error } = useGetFilm(id || '');
  return <div>Welcome</div>;
}

export default MovieInfo;
