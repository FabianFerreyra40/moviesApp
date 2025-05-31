

export type Movie = {
  id: number;
  title: string;
  image: string;
  category: string;
  duration: number;
  year: number;
};

export const movies: Movie[] = [
  
  { id: 1, title: "El origen", 
    image: "https://m.media-amazon.com/images/I/81RvLBMmKiL._AC_UF894,1000_QL80_.jpg", 
    category: "Ciencia Ficción", 
    duration: 148, 
    year: 2010 
  },
  { id: 2, 
    title: "Interstellar", 
    image: "https://musicart.xboxlive.com/7/912b1000-0000-0000-0000-000000000002/504/image.jpg?q=90&m=6&h=270&w=270&b=%23FFFFFFFF&f=jpg&o=f&aim=true", 
    category: "Ciencia Ficción", 
    duration: 169, 
    year: 2014 
  },
  { id: 7, 
    title: "Blade Runner 2049", 
    image: "https://onlyposter.it/cdn/shop/files/S34a276eff12846f487ef8624629d033f8.webp?v=1715030708&width=713", 
    category: "Ciencia Ficción", 
    duration: 163, 
    year: 2017 
  },
  { id: 8, 
    title: "The Matrix", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvLL9QpFxeMj60n94C91hfJTERSMGb8chaiM_5t2W4r9rm3PqtxNFUkaJnzLFVK99dX0&usqp=CAU", 
    category: "Ciencia Ficción", 
    duration: 136, 
    year: 1999 
  },
  { id: 9, 
    title: "Arrival", 
    image: "https://es.web.img3.acsta.net/pictures/16/10/18/16/59/275907.jpg", 
    category: "Ciencia Ficción", 
    duration: 116, 
    year: 2016 
  },

  
  { id: 3, 
    title: "El caballero de la noche", 
    image: "https://play-lh.googleusercontent.com/EGAMPH-ce931SI34Xvp9rrbbiFfWq1qkw2Llg1YeGxG13S5FXt8gbwzDqzre12gD03UvchcWJOaM9NnGzss", 
    category: "Acción", 
    duration: 152, 
    year: 2008 
  },
  { id: 10, 
    title: "Mad Max: Fury Road", 
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/source/a6277c169328487.644a87f7d7f4f.jpg", 
    category: "Acción", 
    duration: 120, 
    year: 2015 
  },
  { id: 11, 
    title: "John Wick", 
    image: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg", 
    category: "Acción", 
    duration: 101, 
    year: 2014 
  },
  { id: 12, 
    title: "Gladiador", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Yw9A2QJbf_WG1lsDn4gl1HmlAPZOFCOPsw&s", 
    category: "Acción", 
    duration: 155, 
    year: 2000 
  },
  { id: 13, 
    title: "Duro de matar", 
    image: "https://m.media-amazon.com/images/M/MV5BYzliYWVmYjEtYWYyMi00MDBlLTk5MjMtYTQ1OWQ2MzVmMzRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    category: "Acción", 
    duration: 132, 
    year: 1988 
  },

  
  { id: 4, 
    title: "Cadena perpetua", 
    image: "https://play-lh.googleusercontent.com/u9Fjc6DXnwc9bKf6z0BcU398BjImXORcUGgJkKZTNM8bcXl1zmysizPmycSppCsUXT8D0ymEi1NmbXxJvg", 
    category: "Drama", 
    duration: 142, 
    year: 1994 
  },
  { id: 14, 
    title: "La nona", 
    image: "https://m.media-amazon.com/images/M/MV5BMmI2YmJjY2MtNDU5OS00NDQzLWE1MWYtYjM1MTRiZTU3ZWRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
    category: "Drama", 
    duration: 88, 
    year: 1977
  },
  { id: 15, 
    title: "En busca de la felicidad", 
    image: "https://play-lh.googleusercontent.com/g7n_yhtLFqtTL2qVcuQk6h6e8RQ2uhF0SFyMFycVvH6sDfZRbvJv8DhwF3DkI9sDWKvcpQ", 
    category: "Drama", 
    duration: 117, 
    year: 2006 
  },
  { id: 16, 
    title: "La lista de Schindler",
    image: "https://m.media-amazon.com/images/S/pv-target-images/daf9ff249f7ce8b515ae5ec64ade44ccf37e397f9b7c982bed1155e5b4820eee.jpg", 
    category: "Drama", 
    duration: 195, 
    year: 1993 
  },
  { id: 17, 
    title: "Una mente maravillosa", 
    image: "https://es.web.img3.acsta.net/pictures/16/02/24/14/29/284758.jpg", 
    category: "Drama", 
    duration: 135, 
    year: 2001 
  },

  
  { id: 5, 
    title: "Pulp Fiction", 
    image: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", 
    category: "Crimen", 
    duration: 154, 
    year: 1994
   },
  { id: 6, 
    title: "The Godfather", 
    image: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", 
    category: "Crimen", 
    duration: 175, 
    year: 1972 
  },
  { id: 18, 
    title: "Buenos muchachos", 
    image: "https://play-lh.googleusercontent.com/j8urzBU0d3NXbcF6tPzNMUglsWjRvooi2aDUaJPbqpAke6pk1Hk3miR_e0Q22Zhrns8", 
    category: "Crimen", 
    duration: 146, 
    year: 1990 },
  { id: 19, 
    title: "Infiltrados", 
    image: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/82/22/20026978.jpg", 
    category: "Crimen", 
    duration: 151, 
    year: 2006 },
  { id: 20, 
    title: "Cara cortada", 
    image: "https://updateme.news/wp-content/uploads/2023/11/Scarface-movie-poster-682x1024.jpg", 
    category: "Crimen", 
    duration: 170, 
    year: 1983 
  },
  { id: 24, 
    title: "Guasón", 
    image: "https://es.web.img3.acsta.net/pictures/19/09/17/17/03/5442885.jpg", 
    category: "Crimen", 
    duration: 122, 
    year: 2019 
  },
  {
     id: 23, 
     title: "El curioso caso de Benjamin Button",
     image: "https://es.web.img2.acsta.net/medias/nmedia/18/68/03/69/19042450.jpg",
     category: "Drama",
     duration: 166,
     year: 2008
  },
  {
     id: 22, 
     title: "Misión Imposible: Fallout", 
     image: "https://play-lh.googleusercontent.com/2VGAZwMJz7vW00qsXrqFnS5cm-3VvLUH-dQNe2KA1vtvxENhkyXh28cZhT7h6zcZatE3iA", 
     category: "Acción", 
     duration: 147, 
     year: 2018 
  },
  { id: 21, 
    title: "Duna", 
    image: "https://images.justwatch.com/poster/253928871/s718/dune-2021.jpg", 
    category: "Ciencia Ficción", 
    duration: 155, 
    year: 2021 
  },
];





