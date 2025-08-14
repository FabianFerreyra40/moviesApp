import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieService';
import { transformToLocalMovie } from '../utils/transformMovie';

export const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const apiMovies = await movieService.getAllMovies();
      return apiMovies;
    },
    select: (data) => {
      return data.map((m) => transformToLocalMovie(m));
    }
  });
};

