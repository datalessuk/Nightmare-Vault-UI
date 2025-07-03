import type { IFilmsResponseList } from '@/types/tmdb.types';
import fallbackImg from '@/assets/public/fallback.png';
import { useNavigate } from 'react-router-dom';

interface ListMovieCardProps {
  film: IFilmsResponseList;
}

export function ListMovieCard({ film }: ListMovieCardProps) {
  const posterBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  const navigate = useNavigate();
  const truncateWords = (str: string, numWords: number): string =>
    str.split(' ').length <= numWords
      ? str
      : str.split(' ').slice(0, numWords).join(' ') + '...';

  const openFilm = (id: string): void => {
    navigate(`/film/${id}`);
  };

  return (
    <div onClick={() => openFilm(film?.id)} className="max-w-48 mx-auto">
      <div className="bg-white  overflow-hidden">
        <figure className="w-full transition overflow-hidden">
          <img
            src={
              film?.poster_path ? posterBaseUrl + film.poster_path : fallbackImg
            }
            alt="Event"
            className="w-full h-auto object-cover duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <div className="p-2">
          <h1 className="text-black text-sm font-semibold text-center">
            {truncateWords(film?.title, 3)}
          </h1>
          <h1 className="text-black text-sm font-semibold text-center">
            {film?.release_date}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ListMovieCard;
