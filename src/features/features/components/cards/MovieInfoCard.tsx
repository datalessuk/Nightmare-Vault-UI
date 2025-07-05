import type { IFilmResponse } from '@/types/tmdb.types';
import { Calendar, Clock, Globe, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Check } from 'lucide-react';
import React from 'react';
import { useAddToWatchList } from '@/hooks/useAddToWatchList';
import { useOnWatchList } from '@/hooks/useOnWatchList';
import { toast } from 'sonner';
import { useAuth } from '@/lib/AuthContext';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useRemoveWatchList } from '@/hooks/useRemoveWatchList';

interface IFilmResponseProps {
  film: IFilmResponse;
}

function MovieInfoCard({ film }: IFilmResponseProps) {
  const { user } = useAuth();
  //const posterBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  const { addToWatchList } = useAddToWatchList();
  const { removeWatchList } = useRemoveWatchList();
  const { isOnWatchList, refreshWatchListStatus } = useOnWatchList(film.id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const addToWatchEvent = async (filmId: string) => {
    await addToWatchList(filmId);
    await refreshWatchListStatus(film.id);
    toast(`${film.title} has been added to your watch list.`);
  };

  const removeFromWatchListEvent = async (filmId: string) => {
    await removeWatchList(filmId);
    await refreshWatchListStatus(filmId);
    toast(`${film.title} has been remove from your watch list.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {film.title}
          </h1>
          {film.original_title !== film.title && (
            <p className="text-xl text-slate-300 italic">
              Original Title: {film.original_title}
            </p>
          )}
        </div>
        <div>
          {!isOnWatchList && (
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Button
                    disabled={!user}
                    onClick={() => addToWatchEvent(film?.id)}
                    variant="outline"
                    size="icon"
                    className="rounded-full cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                {user
                  ? 'Add to Watchlist'
                  : 'Please log in to add to your watchlist'}
              </TooltipContent>
            </Tooltip>
          )}
          {isOnWatchList && (
            <Button
              onClick={() => removeFromWatchListEvent(film?.id)}
              className="rounded-full cursor-pointer"
              size="icon"
              variant="outline"
            >
              <Check className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Poster Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-slate-800 rounded-lg p-4 shadow-2xl">
                <div className="aspect-[2/3 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
                  />
                </div>

                <div className="flex justify-center mb-4">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">
                    {film.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {formatDate(film.release_date)}
                    </span>
                  </div>

                  <div className="flex items-center text-slate-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {formatRuntime(film.runtime)}
                    </span>
                  </div>

                  <div className="flex items-center text-slate-300">
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {film.original_language.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center text-slate-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{film.origin_country}</span>
                  </div>

                  <div className="flex items-center text-slate-300">
                    <Star className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      Popularity: {film.popularity.toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-800 rounded-lg p-6 shadow-2xl">
              {/* Overview */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {film.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-white mb-1">
                      Release Information
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Released on {formatDate(film.release_date)}
                    </p>
                    <p className="text-slate-300 text-sm">
                      Status: {film.status}
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-white mb-1">Runtime</h3>
                    <p className="text-slate-300 text-sm">
                      {formatRuntime(film.runtime)}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-white mb-1">
                      Language & Origin
                    </h3>
                    <p className="text-slate-300 text-sm">
                      Original Language: {film.original_language.toUpperCase()}
                    </p>
                    <p className="text-slate-300 text-sm">
                      Origin Country: {film?.origin_country}
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-white mb-1">
                      Popularity Score
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {film.popularity.toFixed(3)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-700 rounded-lg">
                <h3 className="font-semibold text-white mb-2">
                  Additional Details
                </h3>
                <div className="text-sm text-slate-300">
                  <p className="mb-1">
                    <span className="font-medium">Spoken Languages:</span>{' '}
                  </p>
                  <p>
                    <span className="font-medium">Original Title:</span>{' '}
                    {film.original_title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfoCard;
