export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string[];       
  director: string;
  rating: number;
  runtime: number;      
  plot: string;         
  poster: string;        
  cast: string[];       
};


export type NewMovie = {
  title: string;
  year: number;
  genre: string[];
  director: string;
  rating: number;
  runtime: number;
  plot: string;
  poster: string;
  cast: string[];
};
