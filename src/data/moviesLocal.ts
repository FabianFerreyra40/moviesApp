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

export const movies: Movie[] = [

{
  id: 49,
  title: "Ex Machina",
  year: 2014,
  genre: ["Ciencia Ficción", "Thriller"],
  director: "Alex Garland",
  rating: 7.7,         
  runtime: 108,       
  plot: "Un joven programador es elegido para participar en un experimento donde debe evaluar la inteligencia y la conciencia de un avanzado robot con inteligencia artificial.",
  poster: "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_FMjpg_UX1000_.jpg",
  cast: ["Domhnall Gleeson", "Alicia Vikander", "Oscar Isaac"]
},

{
  id: 50,
  title: "Interstellar",
  year: 2014,
  genre: ["Ciencia Ficción", "Aventura", "Drama"],
  director: "Christopher Nolan",
  rating: 8.6,         
  runtime: 169,        
  plot: "Un grupo de exploradores viaja a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad ante la inminente extinción en la Tierra.",
  poster: "https://musicart.xboxlive.com/7/912b1000-0000-0000-0000-000000000002/504/image.jpg?q=90&m=6&h=270&w=270&b=%23FFFFFFFF&f=jpg&o=f&aim=true",
  cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
},
{
  id: 7,
  title: "Blade Runner 2049",
  year: 2017,
  genre: ["Ciencia Ficción", "Thriller", "Neo-noir"],
  director: "Denis Villeneuve",
  rating: 8.0,             
  runtime: 163,            
  plot: "Un blade runner descubre un secreto que podría cambiar el destino de la humanidad mientras busca a un hombre desaparecido.",
  poster: "https://onlyposter.it/cdn/shop/files/S34a276eff12846f487ef8624629d033f8.webp?v=1715030708&width=713",
  cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"]
},
{
  id: 7,
  title: "Blade Runner 2049",
  year: 2017,
  genre: ["Ciencia Ficción", "Thriller", "Neo-noir"],
  director: "Denis Villeneuve",
  rating: 8.0,             
  runtime: 163,            
  plot: "Un blade runner descubre un secreto que podría cambiar el destino de la humanidad mientras busca a un hombre desaparecido.",
  poster: "https://onlyposter.it/cdn/shop/files/S34a276eff12846f487ef8624629d033f8.webp?v=1715030708&width=713",
  cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"]
}
,{
  id: 8,
  title: "Matrix",
  year: 1999,
  genre: ["Ciencia Ficción", "Acción"],
  director: "Lana Wachowski, Lilly Wachowski",
  rating: 8.7,             
  runtime: 136,            
  plot: "Un hacker descubre que la realidad que conoce es una simulación creada por máquinas y se une a la rebelión para liberar a la humanidad.",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvLL9QpFxeMj60n94C91hfJTERSMGb8chaiM_5t2W4r9rm3PqtxNFUkaJnzLFVK99dX0&usqp=CAU",
  cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
},
{
  id: 9,
  title: "Arrival",
  year: 2016,
  genre: ["Ciencia Ficción", "Drama"],
  director: "Denis Villeneuve",
  rating: 7.9,            
  runtime: 116,           
  plot: "Una lingüista es reclutada para comunicarse con alienígenas y entender el propósito de su llegada a la Tierra.",
  poster: "https://es.web.img3.acsta.net/pictures/16/10/18/16/59/275907.jpg",
  cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"]
},
{
  id: 51,
  title: "John Wick: Chapter 2",
  year: 2017,
  genre: ["Acción", "Thriller"],
  director: "Chad Stahelski",
  rating: 7.5,            
  runtime: 122,            
  plot: "John Wick regresa al mundo criminal para cumplir un juramento de sangre y desatar una guerra absoluta mientras está rodeado de traiciones e intensas secuencias de acción.",
  poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
  cast: ["Keanu Reeves", "Riccardo Scamarcio", "Ian McShane"]
},
{
  id: 10,
  title: "Mad Max: Fury Road",
  year: 2015,
  genre: ["Acción", "Aventura", "Ciencia Ficción"],
  director: "George Miller",
  rating: 8.1,             
  runtime: 120,            
  plot: "En un mundo postapocalíptico, Max se une a Furiosa para escapar de un tirano y liberar a un grupo de cautivas.",
  poster: "https://mir-s3-cdn-cf.behance.net/project_modules/source/a6277c169328487.644a87f7d7f4f.jpg",
  cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]
},
{
  id: 11,
  title: "John Wick",
  year: 2014,
  genre: ["Acción", "Thriller"],
  director: "Chad Stahelski",
  rating: 7.4,             // IMDB rating aproximado
  runtime: 101,            // duración en minutos
  plot: "Un exasesino a sueldo regresa a la acción para vengarse de quienes destruyeron su vida y su mundo.",
  poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
  cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"]
},
{
  id: 12,
  title: "Gladiador",
  year: 2000,
  genre: ["Acción", "Aventura", "Drama"],
  director: "Ridley Scott",
  rating: 8.5,             // IMDB rating aproximado
  runtime: 155,            // duración en minutos
  plot: "Un general romano traicionado busca venganza en la arena como gladiador, enfrentando la corrupción del imperio.",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Yw9A2QJbf_WG1lsDn4gl1HmlAPZOFCOPsw&s",
  cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
},
{
  id: 13,
  title: "Duro de matar",
  year: 1988,
  genre: ["Acción", "Thriller"],
  director: "John McTiernan",
  rating: 8.2,             // IMDB rating aproximado
  runtime: 132,            // duración en minutos
  plot: "Un policía enfrenta solo a un grupo de terroristas que han tomado un edificio en Navidad.",
  poster: "https://m.media-amazon.com/images/M/MV5BYzliYWVmYjEtYWYyMi00MDBlLTk5MjMtYTQ1OWQ2MzVmMzRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"]
},
{
  id: 52,
  title: "El indomable Will Hunting",
  year: 1997,
  genre: ["Drama"],
  director: "Gus Van Sant",
  rating: 8.3,             // IMDB rating aproximado
  runtime: 126,            // duración en minutos
  plot: "Un joven con un talento excepcional para las matemáticas lucha con su pasado mientras encuentra orientación en un terapeuta poco convencional.",
  poster: "https://www.comunidadumbria.com/imgs/peliculas/1157.jpg",
  cast: ["Matt Damon", "Robin Williams", "Ben Affleck"]
},
{
  id: 14,
  title: "La nona",
  year: 1977,
  genre: ["Drama", "Comedia"],
  director: "José Cicala",
  rating: 7.0,             // IMDB rating aproximado
  runtime: 88,             // duración en minutos
  plot: "Una familia enfrenta problemas y conflictos mientras lidian con la figura dominante de la abuela.",
  poster: "https://m.media-amazon.com/images/M/MV5BMmI2YmJjY2MtNDU5OS00NDQzLWE1MWYtYjM1MTRiZTU3ZWRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Chunchuna Villafañe", "Luis Brandoni", "Chunchuna Villafañe"]

},
{
  id: 15,
  title: "En busca de la felicidad",
  year: 2006,
  genre: ["Drama", "Biografía"],
  director: "Gabriele Muccino",
  rating: 8.0,             // IMDB rating aproximado
  runtime: 117,            // duración en minutos
  plot: "Un hombre lucha contra la adversidad para construir una vida mejor para él y su hijo pequeño.",
  poster: "https://www.jovenescatolicos.es/wp-content/uploads/2022/09/dvd-en-busca-de-la-felicidad.jpg",
  cast: ["Will Smith", "Jaden Smith", "Thandie Newton"]
},
{
  id: 16,
  title: "La lista de Schindler",
  year: 1993,
  genre: ["Drama", "Historia"],
  director: "Steven Spielberg",
  rating: 9.0,             // IMDB rating aproximado
  runtime: 195,            // duración en minutos
  plot: "La historia real de un hombre que salvó a cientos de judíos durante el Holocausto.",
  poster: "https://m.media-amazon.com/images/S/pv-target-images/daf9ff249f7ce8b515ae5ec64ade44ccf37e397f9b7c982bed1155e5b4820eee.jpg",
  cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"]
},
{
  id: 17,
  title: "Una mente maravillosa",
  year: 2001,
  genre: ["Drama", "Biografía"],
  director: "Ron Howard",
  rating: 8.2,             // IMDB rating aproximado
  runtime: 135,            // duración en minutos
  plot: "La vida de un brillante matemático que lucha contra la esquizofrenia y logra grandes descubrimientos.",
  poster: "https://es.web.img3.acsta.net/pictures/16/02/24/14/29/284758.jpg",
  cast: ["Russell Crowe", "Jennifer Connelly", "Ed Harris"]
},
{
  id: 18,
  title: "Buenos muchachos",
  year: 1990,
  genre: ["Crimen", "Drama"],
  director: "Martin Scorsese",
  rating: 8.7,             // IMDB rating aproximado
  runtime: 146,            // duración en minutos
  plot: "La historia real de la vida en la mafia contada desde el punto de vista de un mafioso arrepentido.",
  poster: "https://www.elespectadorimaginario.com/wp-content/webpc-passthru.php?src=https://www.elespectadorimaginario.com/wp-content/uploads/u-g-F57P3N0-e1600362661786.jpg&nocache=1",
  cast: ["Ray Liotta", "Robert De Niro", "Joe Pesci"]
},
{
  id: 19,
  title: "Infiltrados",
  year: 2006,
  genre: ["Crimen", "Drama", "Thriller"],
  director: "Martin Scorsese",
  rating: 8.5,             // IMDB rating aproximado
  runtime: 151,            // duración en minutos
  plot: "Un agente encubierto y un topo dentro de la policía intentan descubrirse mientras infiltran una banda criminal.",
  poster: "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/82/22/20026978.jpg",
  cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
}, 
{
  id: 20,
  title: "Cara cortada",
  year: 1983,
  genre: ["Crimen", "Drama"],
  director: "Brian De Palma",
  rating: 8.3,             // IMDB rating aproximado
  runtime: 170,            // duración en minutos
  plot: "La ascensión y caída de un inmigrante cubano convertido en un despiadado capo del narcotráfico.",
  poster: "https://updateme.news/wp-content/uploads/2023/11/Scarface-movie-poster-682x1024.jpg",
  cast: ["Al Pacino", "Michelle Pfeiffer", "Steven Bauer"]
},
{
  id: 24,
  title: "Guasón",
  year: 2019,
  genre: ["Crimen", "Drama"],
  director: "Todd Phillips",
  rating: 8.4,             // IMDB rating aproximado
  runtime: 122,            // duración en minutos
  plot: "Un hombre marginado se transforma en el infame villano Guasón, explorando la locura y la sociedad.",
  poster: "https://es.web.img3.acsta.net/pictures/19/09/17/17/03/5442885.jpg",
  cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
},
{
  id: 23,
  title: "El curioso caso de Benjamin Button",
  year: 2008,
  genre: ["Drama", "Fantasía"],
  director: "David Fincher",
  rating: 7.8,             // IMDB rating aproximado
  runtime: 166,            // duración en minutos
  plot: "Un hombre que envejece al revés vive una vida extraordinaria, explorando el amor y el paso del tiempo de una forma única.",
  poster: "https://es.web.img2.acsta.net/medias/nmedia/18/68/03/69/19042450.jpg",
  cast: ["Brad Pitt", "Cate Blanchett", "Tilda Swinton"]
},
{
  id: 22,
  title: "Misión Imposible: Fallout",
  year: 2018,
  genre: ["Acción", "Aventura", "Thriller"],
  director: "Christopher McQuarrie",
  rating: 7.7,             // IMDB rating aproximado
  runtime: 147,            // duración en minutos
  plot: "Ethan Hunt y su equipo enfrentan una misión crítica para evitar un desastre nuclear mientras luchan contra enemigos implacables.",
  poster: "https://images.justwatch.com/poster/130496755/s718/mision-imposible-fallout.jpg",
  cast: ["Tom Cruise", "Henry Cavill", "Ving Rhames"]
},
{
  id: 21,
  title: "Duna",
  year: 2021,
  genre: ["Ciencia Ficción", "Aventura"],
  director: "Denis Villeneuve",
  rating: 8.0,             // IMDB rating aproximado
  runtime: 155,            // duración en minutos
  plot: "En un futuro lejano, un joven noble debe proteger el recurso más valioso del universo en el planeta desértico Arrakis.",
  poster: "https://images.justwatch.com/poster/253928871/s718/dune-2021.jpg",
  cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"]
},
{
  id: 25,
  title: "El gigante de hierro",
  year: 1999,
  genre: ["Animación", "Aventura", "Ciencia Ficción"],
  director: "Brad Bird",
  rating: 8.0,             // IMDB rating aproximado
  runtime: 86,             // duración en minutos
  plot: "Un niño hace amistad con un gigante robot en una conmovedora historia sobre redención y sacrificio.",
  poster: "https://m.media-amazon.com/images/M/MV5BYzVmNmZmM2EtMWJiZi00ZmFiLTljMjEtYjk3OWYyZWZhNmI0XkEyXkFqcGc@._V1_.jpg",
  cast: ["Eli Marienthal", "Harry Connick Jr.", "Jennifer Aniston"]
},
{
  id: 26,
  title: "Planeta prohibido", 
  year: 1956,
  genre: ["Ciencia Ficción", "Aventura"],
  director: "Fred M. Wilcox",
  rating: 7.6,             // IMDB rating aproximado
  runtime: 98,             // duración en minutos
  plot: "Pionero del sci-fi, donde exploradores llegan a un planeta remoto y enfrentan una inteligencia alienígena.",
  poster: "https://es.web.img2.acsta.net/pictures/210/121/21012191_20130612193243646.jpg",
  cast: ["Walter Pidgeon", "Anne Francis", "Leslie Nielsen"]

},
{
  id: 27,
  title: "Primer",  
  year: 2004,
  genre: ["Ciencia Ficción", "Drama"],
  director: "Shane Carruth",
  rating: 6.9,             // IMDB rating aproximado
  runtime: 77,             // duración en minutos
  plot: "Dos ingenieros construyen una máquina del tiempo casera y se enfrentan a consecuencias inesperadas.",
  poster: "https://es.web.img2.acsta.net/medias/nmedia/18/92/12/52/20181924.jpg",
  cast: ["Shane Carruth", "David Sullivan", "Carrie Crawford"]
},
{
  id: 28,
  title: "Solaris",
  year: 1972,
  genre: ["Ciencia Ficción", "Drama"],
  director: "Andrei Tarkovsky",
  rating: 8.1,             // IMDB rating aproximado
  runtime: 167,            // duración en minutos
  plot: "Un psicólogo viaja a una estación espacial para investigar fenómenos provocados por un planeta enigmático.",
  poster: "https://m.media-amazon.com/images/M/MV5BYTYyMjU4MjItYzZkNy00NmIyLTg1ZGEtYTY5ZTEyM2U2NDM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Donatas Banionis", "Natalya Bondarchuk", "Jüri Järvet"]
},
{
  id: 29,
  title: "Metropolis",
  year: 1927,   
  genre: ["Ciencia Ficción", "Drama", "Mudo"],
  director: "Fritz Lang",
  rating: 8.3,             // IMDB rating aproximado
  runtime: 153,            // duración en minutos
  plot: "Clásico mudo alemán que retrata una utopía distópica dividida entre ricos industriales y obreros oprimidos.",
  poster: "https://auladefilosofia.net/wp-content/uploads/2011/06/metopolis.jpeg",
  cast: ["Gustav Fröhlich", "Brigitte Helm", "Alfred Abel"]
},
{
  id: 30,
  title: "Gattaca", 
  year: 1997,
  genre: ["Ciencia Ficción", "Drama"],  
  director: "Andrew Niccol",
  rating: 7.8,            
  runtime: 106,           
  plot: "Un hombre lucha contra su destino genético en una sociedad obsesionada con la perfección biológica.",
  poster: "https://m.media-amazon.com/images/S/pv-target-images/a52763f8a2659bcefd0f6b7a8ab779d5a9c3fd975a13bfa2d55cea8a50835433.jpg",
  cast: ["Ethan Hawke", "Uma Thurman", "Jude Law"]
},
{
  id: 31,
  title: "La redada",
  year: 2011,
  genre: ["Acción", "Crimen"],
  director: "Gareth Evans",
  rating: 7.6,             
  runtime: 101,            
  plot: "Un equipo policial queda atrapado en un edificio tomado por criminales y debe abrirse paso a golpes.",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6SKJ8hAW4Sy4wG4pNjcDeAIJnoXkWYqSNA&s",
  cast: ["Iko Uwais", "Yayan Ruhian", "Joe Taslim"]
},
{
  id: 32,
  title: "Operación dragón",
  year: 1973,
  genre: ["Acción", "Arte Marcial"],
  director: "Robert Clouse",
  rating: 7.2,            
  runtime: 102,            
  plot: "Bruce Lee ingresa a torneo clandestino para enfrentar a un señor del crimen en su isla privada.",
  poster: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/1973/8/w1280/ssZnHf4cPRJGpQGv9unW8B76nrb.jpg",
  cast: ["Bruce Lee", "Chuck Norris", "Bolo Yeung"]
},
{
  id: 33,
  title: "Contracara",
  year: 1997,
  genre: ["Acción", "Thriller"],
  director: "John Woo",
  rating: 7.3,             
  runtime: 138,            
  plot: "Un agente y un terrorista se intercambian rostros en una misión encubierta y confunden identidades.",
  poster: "https://m.media-amazon.com/images/M/MV5BOGQyOWNmYTgtZWY0NS00NzhjLTg3NmMtMzcwYzQ2OTA2OTJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["John Travolta", "Nicolas Cage", "Joan Allen"]
},
{
  id: 34,
  title: "Drive",
  year: 2011,
  genre: ["Acción", "Thriller"],
  director: "Nicolas Winding Refn",
  rating: 7.8,             
  runtime: 100,            
  plot: "Un conductor de fuga taciturno se ve envuelto en una trama criminal tras proteger a su vecina.",
  poster: "https://i.blogs.es/d365ef/drive-2011/650_1200.jpg",
  cast: ["Ryan Gosling", "Carey Mulligan", "Bryan Cranston"]
},
{
  id: 35,
  title: "Casino Royale",
  year: 2006,
  genre: ["Acción", "Aventura", "Espionaje"],
  director: "Martin Campbell",
  rating: 8.0,             
  runtime: 144,            
  plot: "Reinicio de James Bond donde gana su estatus de agente secreto y enfrenta a un financiero terrorista en una partida de póker.",
  poster: "https://m.media-amazon.com/images/M/MV5BMWQ1ZDM4NDktMWY0NC00MjcxLWJlMDMtNmE2MGVhYzRjMWQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Daniel Craig", "Eva Green", "Mads Mikkelsen"]
},
{
  id: 36,
  title: "Top Gun: Maverick",
  year: 2022,
  genre: ["Acción", "Drama"],
  director: "Joseph Kosinski",
  rating: 8.3,             
  runtime: 131,            
  plot: "Maverick regresa a entrenar a nuevos pilotos en una misión de alto riesgo.",
  poster: "https://es.web.img2.acsta.net/pictures/22/03/29/15/57/1533124.jpg",
  cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"]
},
{
  id:37,
  title:"Los Fabelman",
  year:2022,
  genre:["Drama"],
  director:"Steven Spielberg",
  rating: 7.8,            
  runtime: 151,           
  plot: "Un joven cineasta procesa su infancia difícil y su amor por el cine, en un retrato semiautobiográfico.",
  poster: "https://m.media-amazon.com/images/M/MV5BOGI1YzQ3NTctYWVlZi00ZTI4LThkNTQtMDAwMWU4M2Q4NDI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Gabriel LaBelle", "Michelle Williams", "Paul Dano"]
},
{
  id: 38,
  title: "Manchester junto al mar",
  year: 2016,
  genre: ["Drama"],
  director: "Kenneth Lonergan",
  rating: 7.8,             
  runtime: 137,            
  plot: "Un hombre regresa a su pueblo tras la muerte de su hermano y enfrenta su pasado y relaciones rotas.",
  poster: "https://m.media-amazon.com/images/S/pv-target-images/a2c091f9e85f234528a83f88063e12ed25eb5e71e52ba58c58bbad0c72e5bbe1.jpg",
  cast: ["Casey Affleck", "Michelle Williams", "Kyle Chandler"]
},
{
  id: 39,
  title: "Monster",
  year: 2003,
  genre: ["Drama", "Crimen"],
  director: "Patty Jenkins",
  rating: 7.3,             
  runtime: 109,           
  plot: "Biopic de Aileen Wuornos, prostituta convertida en asesina en serie, con papel protagónico de Charlize Theron.",
  poster: "https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/89/79/27/20066813.jpg",
  cast: ["Charlize Theron", "Christina Ricci", "Bruce Dern"]
},
{
  id: 40,
  title: "Sonido de metal",
  year: 2020,
  genre: ["Drama"],
  director: "Darius Marder",
  rating: 7.8,             
  runtime: 120,           
  plot: "Un baterista pierde la audición y debe reconstruir su vida en una comunidad para sordos.",
  poster: "https://es.web.img2.acsta.net/pictures/20/09/25/09/06/1984747.jpg",
  cast: ["Riz Ahmed", "Olivia Cooke", "Paul Raci"]
},
{
  id:41,
  title:"Michael Clayton",
  year:2007,
  genre:["Drama"],
  director:"Tony Gilroy",
  rating:7.3,             
  runtime:119,             
  plot:"Un 'fixer' legal lidia con dilemas éticos tras un caso que pone en riesgo su integridad.",
  poster:"https://images.justwatch.com/poster/121703042/s718/michael-clayton.jpg",
  cast:["George Clooney", "Tom Wilkinson", "Tilda Swinton"]
},
{
  id: 42,
  title: "Cisne negro",
  year: 2010,
  genre: ["Drama", "Thriller", "Psicológico"],
  director: "Darren Aronofsky",  
  rating: 8.0,                   
  runtime: 108,
  plot: "Una bailarina se sumerge en la obsesión por la perfección y sufre trastornos psicológicos.",
  poster: "https://es.web.img2.acsta.net/medias/nmedia/18/82/49/41/19634717.jpg",
  cast: ["Natalie Portman", "Mila Kunis", "Vincent Cassel"]  
},
{
  id: 43,
  title: "Léon: El profesional",
  year: 1994,
  genre: ["Crimen", "Thriller", "Drama"],
  director: "Luc Besson",
  rating: 8.5,
  runtime: 110,
  plot: "Un asesino a sueldo entrena a una niña tras asesinar a su familia, en una intensa relación de protección.",
  poster: "https://es.web.img3.acsta.net/medias/nmedia/18/90/11/59/20081632.jpg",
  cast: ["Jean Reno", "Natalie Portman", "Gary Oldman"]
},
{
  id: 44,
  title: "Ciudad de Dios",
  year: 2002,
  genre: ["Crimen", "Drama"],
  director: "Fernando Meirelles",
  rating: 8.6,
  runtime: 130,
  plot: "Épica del crimen en una favela brasileña, retratando el ascenso de pandillas en Río de Janeiro.",
  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoohmVrLsrCcqOHU1FulF3eQ7vYr6_tRif1g&s",
  cast: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen"]
},
{
  id: 45,
  title: "Se7en",
  year: 1995,
  genre: ["Crimen", "Thriller", "Suspenso"],
  director: "David Fincher",
  rating: 8.6,
  runtime: 127,
  plot: "Dos detectives persiguen a un asesino que mata según los siete pecados capitales.",
  poster: "https://es.web.img3.acsta.net/medias/nmedia/18/69/04/89/19757783.jpg",
  cast: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow"]
},
{
  id: 46,
  title: "Fuego contra fuego",
  year: 1995,
  genre: ["Crimen", "Thriller", "Acción"],
  director: "Michael Mann",
  rating: 7.7,
  runtime: 170,
  plot: "Duelo entre un ladrón profesional y un detective en Los Ángeles, explorando su respeto mutuo.",
  poster: "https://play-lh.googleusercontent.com/vgF6icYbtsqdZ4PdSuYQld0SVig1vOcvI_ZH91HUoFHX75wxum0WYepBeLkG5Ou8aqHa",
  cast: ["Al Pacino", "Robert De Niro", "Val Kilmer"]
},
{
  id: 47,
  title: "Plan oculto",
  year: 2006,
  genre: ["Crimen", "Suspenso", "Drama"],
  director: "Spike Lee",
  rating: 7.7,
  runtime: 129,
  plot: "Un atracador planea un robo de banco sofisticado y enfrenta a un detective en un juego psicológico.",
  poster: "https://es.web.img3.acsta.net/medias/nmedia/18/82/00/29/19589954.jpg",
  cast: ["Denzel Washington", "Clive Owen", "Jodie Foster"]
},
{
  id: 48,
  title: "El padrino parte II",
  year: 1974,
  genre: ["Crimen", "Drama"],
  director: "Francis Ford Coppola",
  rating: 9.0,
  runtime: 200,
  plot: "Historia paralela del ascenso de Vito Corleone y el declive de Michael en la familia mafiosa.",
  poster: "https://http2.mlstatic.com/D_NQ_NP_960450-MLA76110154920_052024-OO.jpg",
  cast: ["Al Pacino", "Robert De Niro", "Robert Duvall"]
}
];
