

export type Movie = {
  id: number;
  title: string;
  image: string;
  category: string;
  duration: number;
  year: number;
  description?: string;

};

export const movies: Movie[] = [
  
  { 
  id: 1, 
  title: "El origen", 
  image: "https://m.media-amazon.com/images/I/81RvLBMmKiL._AC_UF894,1000_QL80_.jpg", 
  category: "Ciencia Ficción", 
  duration: 148, 
  year: 2010,
  description: "Un experto en infiltración de sueños es contratado para plantar una idea en la mente de un objetivo, pero el límite entre realidad y sueño se vuelve difuso."
},

{ 
  id: 2, 
  title: "Interstellar", 
  image: "https://musicart.xboxlive.com/7/912b1000-0000-0000-0000-000000000002/504/image.jpg?q=90&m=6&h=270&w=270&b=%23FFFFFFFF&f=jpg&o=f&aim=true", 
  category: "Ciencia Ficción", 
  duration: 169, 
  year: 2014,
  description: "Un grupo de exploradores viaja a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad ante la inminente extinción en la Tierra."
},

{ 
  id: 7, 
  title: "Blade Runner 2049", 
  image: "https://onlyposter.it/cdn/shop/files/S34a276eff12846f487ef8624629d033f8.webp?v=1715030708&width=713", 
  category: "Ciencia Ficción", 
  duration: 163, 
  year: 2017,
  description: "Un blade runner descubre un secreto que podría cambiar el destino de la humanidad mientras busca a un hombre desaparecido."
},

{ 
  id: 8, 
  title: "Matrix", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvLL9QpFxeMj60n94C91hfJTERSMGb8chaiM_5t2W4r9rm3PqtxNFUkaJnzLFVK99dX0&usqp=CAU", 
  category: "Ciencia Ficción", 
  duration: 136, 
  year: 1999,
  description: "Un hacker descubre que la realidad que conoce es una simulación creada por máquinas y se une a la rebelión para liberar a la humanidad."
},

{ 
  id: 9, 
  title: "Arrival", 
  image: "https://es.web.img3.acsta.net/pictures/16/10/18/16/59/275907.jpg", 
  category: "Ciencia Ficción", 
  duration: 116, 
  year: 2016,
  description: "Una lingüista es reclutada para comunicarse con alienígenas y entender el propósito de su llegada a la Tierra."
},

{ 
  id: 3, 
  title: "El caballero de la noche", 
  image: "https://play-lh.googleusercontent.com/EGAMPH-ce931SI34Xvp9rrbbiFfWq1qkw2Llg1YeGxG13S5FXt8gbwzDqzre12gD03UvchcWJOaM9NnGzss", 
  category: "Acción", 
  duration: 152, 
  year: 2008,
  description: "Batman se enfrenta al Joker, un criminal que busca sembrar el caos en Gotham, mientras lucha con su propio código moral."
},

{ 
  id: 10, 
  title: "Mad Max: Fury Road", 
  image: "https://mir-s3-cdn-cf.behance.net/project_modules/source/a6277c169328487.644a87f7d7f4f.jpg", 
  category: "Acción", 
  duration: 120, 
  year: 2015,
  description: "En un mundo postapocalíptico, Max se une a Furiosa para escapar de un tirano y liberar a un grupo de cautivas."
},

{ 
  id: 11, 
  title: "John Wick", 
  image: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg", 
  category: "Acción", 
  duration: 101, 
  year: 2014,
  description: "Un exasesino a sueldo regresa a la acción para vengarse de quienes destruyeron su vida y su mundo."
},

{ 
  id: 12, 
  title: "Gladiador", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Yw9A2QJbf_WG1lsDn4gl1HmlAPZOFCOPsw&s", 
  category: "Acción", 
  duration: 155, 
  year: 2000,
  description: "Un general romano traicionado busca venganza en la arena como gladiador, enfrentando la corrupción del imperio."
},

{ 
  id: 13, 
  title: "Duro de matar", 
  image: "https://m.media-amazon.com/images/M/MV5BYzliYWVmYjEtYWYyMi00MDBlLTk5MjMtYTQ1OWQ2MzVmMzRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
  category: "Acción", 
  duration: 132, 
  year: 1988,
  description: "Un policía enfrenta solo a un grupo de terroristas que han tomado un edificio en Navidad."
},

{ 
  id: 4, 
  title: "Cadena perpetua", 
  image: "https://es.web.img3.acsta.net/medias/nmedia/18/74/26/88/20133359.jpg", 
  category: "Drama", 
  duration: 142, 
  year: 1994,
  description: "Dos hombres entablan una profunda amistad dentro de una prisión mientras sueñan con la libertad."
},

{ 
  id: 14, 
  title: "La nona", 
  image: "https://m.media-amazon.com/images/M/MV5BMmI2YmJjY2MtNDU5OS00NDQzLWE1MWYtYjM1MTRiZTU3ZWRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
  category: "Drama", 
  duration: 88, 
  year: 1977,
  description: "Una familia enfrenta problemas y conflictos mientras lidian con la figura dominante de la abuela."
},

{ 
  id: 15, 
  title: "En busca de la felicidad", 
  image: "https://play-lh.googleusercontent.com/g7n_yhtLFqtTL2qVcuQk6h6e8RQ2uhF0SFyMFycVvH6sDfZRbvJv8DhwF3DkI9sDWKvcpQ", 
  category: "Drama", 
  duration: 117, 
  year: 2006,
  description: "Un hombre lucha contra la adversidad para construir una vida mejor para él y su hijo pequeño."
},

{ 
  id: 16, 
  title: "La lista de Schindler",
  image: "https://m.media-amazon.com/images/S/pv-target-images/daf9ff249f7ce8b515ae5ec64ade44ccf37e397f9b7c982bed1155e5b4820eee.jpg", 
  category: "Drama", 
  duration: 195, 
  year: 1993,
  description: "La historia real de un hombre que salvó a cientos de judíos durante el Holocausto."
},

{ 
  id: 17, 
  title: "Una mente maravillosa", 
  image: "https://es.web.img3.acsta.net/pictures/16/02/24/14/29/284758.jpg", 
  category: "Drama", 
  duration: 135, 
  year: 2001,
  description: "La vida de un brillante matemático que lucha contra la esquizofrenia y logra grandes descubrimientos."
},

{ 
  id: 5, 
  title: "Pulp Fiction", 
  image: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", 
  category: "Crimen", 
  duration: 154, 
  year: 1994,
  description: "Historias entrelazadas de crimen y redención en Los Ángeles, con un estilo narrativo único."
},

{ 
  id: 6, 
  title: "El padrino", 
  image: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", 
  category: "Crimen", 
  duration: 175, 
  year: 1972,
  description: "La saga de una familia mafiosa y sus luchas de poder en Estados Unidos."
},

{ 
  id: 18, 
  title: "Buenos muchachos", 
  image: "https://play-lh.googleusercontent.com/j8urzBU0d3NXbcF6tPzNMUglsWjRvooi2aDUaJPbqpAke6pk1Hk3miR_e0Q22Zhrns8", 
  category: "Crimen", 
  duration: 146, 
  year: 1990,
  description: "La historia real de la vida en la mafia contada desde el punto de vista de un mafioso arrepentido."
},

{ 
  id: 19, 
  title: "Infiltrados", 
  image: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/82/22/20026978.jpg", 
  category: "Crimen", 
  duration: 151, 
  year: 2006,
  description: "Un agente encubierto y un topo dentro de la policía intentan descubrirse mientras infiltran una banda criminal."
},

{ 
  id: 20, 
  title: "Cara cortada", 
  image: "https://updateme.news/wp-content/uploads/2023/11/Scarface-movie-poster-682x1024.jpg", 
  category: "Crimen", 
  duration: 170, 
  year: 1983,
  description: "La ascensión y caída de un inmigrante cubano convertido en un despiadado capo del narcotráfico."
},

{ 
  id: 24, 
  title: "Guasón", 
  image: "https://es.web.img3.acsta.net/pictures/19/09/17/17/03/5442885.jpg", 
  category: "Crimen", 
  duration: 122, 
  year: 2019,
  description: "Un hombre marginado se transforma en el infame villano Guasón, explorando la locura y la sociedad."
},

{ 
  
  id: 23, 
  title: "El curioso caso de Benjamin Button",
  image: "https://es.web.img2.acsta.net/medias/nmedia/18/68/03/69/19042450.jpg",
  category: "Drama",
  duration: 166,
  year: 2008,
  description: "Un hombre que envejece al revés vive una vida extraordinaria, explorando el amor y el paso del tiempo de una forma única."
},

{ 
  id: 22, 
  title: "Misión Imposible: Fallout", 
  image: "https://images.justwatch.com/poster/130496755/s718/mision-imposible-fallout.jpg", 
  category: "Acción", 
  duration: 147, 
  year: 2018,
  description: "Ethan Hunt y su equipo enfrentan una misión crítica para evitar un desastre nuclear mientras luchan contra enemigos implacables."
},

{ 
  id: 21, //hasta aca era parte de la entrega-2 desde ahi para abajo es parte de la entrega-3
  title: "Duna", 
  image: "https://images.justwatch.com/poster/253928871/s718/dune-2021.jpg", 
  category: "Ciencia Ficción", 
  duration: 155, 
  year: 2021,
  description: "En un futuro lejano, un joven noble debe proteger el recurso más valioso del universo en el planeta desértico Arrakis."
},
{
    id: 25,
    title: "El gigante de hierro",
    image: "https://m.media-amazon.com/images/M/MV5BYzVmNmZmM2EtMWJiZi00ZmFiLTljMjEtYjk3OWYyZWZhNmI0XkEyXkFqcGc@._V1_.jpg",
    category: "Ciencia Ficción",
    duration: 86,
    year: 1999,
    description: "Un niño hace amistad con un gigante robot en una conmovedora historia sobre redención y sacrificio."
  },
  {
    id: 26,
    title: "Planeta prohibido",
    image: "https://es.web.img2.acsta.net/pictures/210/121/21012191_20130612193243646.jpg",
    category: "Ciencia Ficción",
    duration: 98,
    year: 1956,
    description: "Pionero del sci-fi, donde exploradores llegan a un planeta remoto y enfrentan una inteligencia alienígena."
  },
  {
    id: 27,
    title: "Primer",
    image: "https://es.web.img2.acsta.net/medias/nmedia/18/92/12/52/20181924.jpg",
    category: "Ciencia Ficción",
    duration: 77,
    year: 2004,
    description: "Dos ingenieros construyen una máquina del tiempo casera y se enfrentan a consecuencias inesperadas."
  },
  {
    id: 28,
    title: "Solaris",
    image: "https://m.media-amazon.com/images/M/MV5BYTYyMjU4MjItYzZkNy00NmIyLTg1ZGEtYTY5ZTEyM2U2NDM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    category: "Ciencia Ficción",
    duration: 167,
    year: 1972,
    description: "Un psicólogo viaja a una estación espacial para investigar fenómenos provocados por un planeta enigmático."
  },
  {
    id: 29,
    title: "Metropolis",
    image: "https://auladefilosofia.net/wp-content/uploads/2011/06/metopolis.jpeg",
    category: "Ciencia Ficción",
    duration: 153,
    year: 1927,
    description: "Clásico mudo alemán que retrata una utopía distópica dividida entre ricos industriales y obreros oprimidos."
  },
  {
    id: 30,
    title: "Gattaca",
    image: "https://m.media-amazon.com/images/S/pv-target-images/a52763f8a2659bcefd0f6b7a8ab779d5a9c3fd975a13bfa2d55cea8a50835433.jpg",
    category: "Ciencia Ficción",
    duration: 106,
    year: 1997,
    description: "Un hombre lucha contra su destino genético en una sociedad obsesionada con la perfección biológica."
  },
  {
    id: 31,
    title: "La redada",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6SKJ8hAW4Sy4wG4pNjcDeAIJnoXkWYqSNA&s",
    category: "Acción",
    duration: 101,
    year: 2011,
    description: "Un equipo policial queda atrapado en un edificio tomado por criminales y debe abrirse paso a golpes."
  },
  {
    id: 32,
    title: "Operación dragón",
    image: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/1973/8/w1280/ssZnHf4cPRJGpQGv9unW8B76nrb.jpg",
    category: "Acción",
    duration: 102,
    year: 1973,
    description: "Bruce Lee ingresa a torneo clandestino para enfrentar a un señor del crimen en su isla privada."
  },
  {
    id: 33,
    title: "Contracara",
    image: "https://m.media-amazon.com/images/M/MV5BOGQyOWNmYTgtZWY0NS00NzhjLTg3NmMtMzcwYzQ2OTA2OTJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    category: "Acción",
    duration: 138,
    year: 1997,
    description: "Un agente y un terrorista se intercambian rostros en una misión encubierta y confunden identidades."
  },
  {
    id: 34,
    title: "Drive",
    image: "https://i.blogs.es/d365ef/drive-2011/650_1200.jpg",
    category: "Acción",
    duration: 100,
    year: 2011,
    description: "Un conductor de fuga taciturno se ve envuelto en una trama criminal tras proteger a su vecina."
  },
  {
    id: 35,
    title: "Casino Royale",
    image: "https://m.media-amazon.com/images/M/MV5BMWQ1ZDM4NDktMWY0NC00MjcxLWJlMDMtNmE2MGVhYzRjMWQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    category: "Acción",
    duration: 144,
    year: 2006,
    description: "Reinicio de James Bond donde gana su 00, enfrenta a un financiero terrorista en una partida de póker."
  },
  {
    id: 36,
    title: "Top Gun: Maverick",
    image: "https://es.web.img2.acsta.net/pictures/22/03/29/15/57/1533124.jpg",
    category: "Acción",
    duration: 131,
    year: 2022,
    description: "Maverick regresa a entrenar a nuevos pilotos en una misión de alto riesgo."
  },
  {
    id: 37,
    title: "Los Fabelman",
    image: "https://m.media-amazon.com/images/M/MV5BOGI1YzQ3NTctYWVlZi00ZTI4LThkNTQtMDAwMWU4M2Q4NDI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    category: "Drama",
    duration: 151,
    year: 2022,
    description: "Un joven cineasta procesa su infancia difícil y su amor por el cine, en un retrato semiautobiográfico."
  },
  {
    id: 38,
    title: "Manchester junto al mar",
    image: "https://m.media-amazon.com/images/S/pv-target-images/a2c091f9e85f234528a83f88063e12ed25eb5e71e52ba58c58bbad0c72e5bbe1.jpg",
    category: "Drama",
    duration: 137,
    year: 2016,
    description: "Un hombre regresa a su pueblo tras la muerte de su hermano y enfrenta su pasado y relaciones rotas."
  },
  {
    id: 39,
    title: "Monster",
    image: "https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/79/27/20066813.jpg",
    category: "Drama",
    duration: 109,
    year: 2003,
    description: "Biopic de Aileen Wuornos, prostituta convertida en asesina en serie, con papel protagónico de Charlize Theron."
  },
  {
    id: 40,
    title: "Sonido de metal",
    image: "https://es.web.img2.acsta.net/pictures/20/09/25/09/06/1984747.jpg",
    category: "Drama",
    duration: 120,
    year: 2020,
    description: "Un baterista pierde la audición y debe reconstruir su vida en una comunidad para sordos."
  },
  {
    id: 41,
    title: "Michael Clayton",
    image: "https://images.justwatch.com/poster/121703042/s718/michael-clayton.jpg",
    category: "Drama",
    duration: 119,
    year: 2007,
    description: "Un 'fixer' legal lidia con dilemas éticos tras un caso que pone en riesgo su integridad."
  },
  {
    id: 42,
    title: "Cisne negro",
    image: "https://es.web.img2.acsta.net/medias/nmedia/18/82/49/41/19634717.jpg",
    category: "Drama",
    duration: 108,
    year: 2010,
    description: "Una bailarina se sumerge en la obsesión por la perfección y sufre trastornos psicológicos."
  },
  {
    id: 43,
    title: "Léon: El profesional",
    image: "https://es.web.img3.acsta.net/medias/nmedia/18/90/11/59/20081632.jpg",
    category: "Crimen",
    duration: 110,
    year: 1994,
    description: "Un asesino a sueldo entrena a una niña tras asesinar a su familia, en una intensa relación de protección."
  },
  {
    id: 44,
    title: "Ciudad de Dios",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoohmVrLsrCcqOHU1FulF3eQ7vYr6_tRif1g&s",
    category: "Crimen",
    duration: 130,
    year: 2002,
    description: "Épica del crimen en una favela brasileña, retratando el ascenso de pandillas en Río de Janeiro."
  },
  {
    id: 45,
    title: "Se7en",
    image: "https://es.web.img3.acsta.net/medias/nmedia/18/69/04/89/19757783.jpg",
    category: "Crimen",
    duration: 127,
    year: 1995,
    description: "Dos detectives persiguen a un asesino que mata según los siete pecados capitales."
  },
  {
    id: 46,
    title: "Fuego contra fuego",
    image: "https://play-lh.googleusercontent.com/vgF6icYbtsqdZ4PdSuYQld0SVig1vOcvI_ZH91HUoFHX75wxum0WYepBeLkG5Ou8aqHa",
    category: "Crimen",
    duration: 170,
    year: 1995,
    description: "Duelo entre un ladrón profesional y un detective en Los Ángeles, explorando su respeto mutuo."
  },
  {
    id: 47,
    title: "Plan oculto",
    image: "https://es.web.img3.acsta.net/medias/nmedia/18/82/00/29/19589954.jpg",
    category: "Crimen",
    duration: 129,
    year: 2006,
    description: "Un atracador planea un robo de banco sofisticado y enfrenta a un detective en un juego psicológico."
  },
  {
    id: 48,
    title: "El padrino parte II",
    image: "https://http2.mlstatic.com/D_NQ_NP_960450-MLA76110154920_052024-OO.jpg",
    category: "Crimen",
    duration: 200,
    year: 1974,
    description: "Historia paralela del ascenso de Vito Corleone y el declive de Michael en la familia mafiosa."
  }
];

