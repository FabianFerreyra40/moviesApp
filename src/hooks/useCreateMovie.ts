import { useMutation, useQueryClient, type UseMutationResult } from '@tanstack/react-query';
import { movieService } from '../services/movieService';
import type { Movie } from '../types';

export type NewMovie = Omit<Movie, 'id'>;

export const useCreateMovie = (): UseMutationResult<Movie, Error, NewMovie, unknown> => {
  const queryClient = useQueryClient();

  return useMutation<Movie, Error, NewMovie>({
    mutationFn: async (newMovie: NewMovie) => {
      return await movieService.createMovie(newMovie);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });
};

