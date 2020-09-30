
const MOVIES = [
    {
        "title": "Guardians of the Galaxy",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "James Gunn",
        "year": 2014,
        "length": 121,
        "rating": 8.1,
        "revenue": 333.13
    },
    {
        "title": "Prometheus",
        "genre": "Adventure,Mystery,Sci-Fi",
        "director": "Ridley Scott",
        "year": 2012,
        "length": 124,
        "rating": 7,
        "revenue": 126.46
    },
    {
        "title": "Split",
        "genre": "Horror,Thriller",
        "director": "M. Night Shyamalan",
        "year": 2016,
        "length": 117,
        "rating": 7.3,
        "revenue": 138.12
    },
    {
        "title": "Sing",
        "genre": "Animation,Comedy,Family",
        "director": "Christophe Lourdelet",
        "year": 2016,
        "length": 108,
        "rating": 7.2,
        "revenue": 270.32
    },
    {
        "title": "Suicide Squad",
        "genre": "Action,Adventure,Fantasy",
        "director": "David Ayer",
        "year": 2016,
        "length": 123,
        "rating": 6.2,
        "revenue": 325.02
    },
    {
        "title": "The Great Wall",
        "genre": "Action,Adventure,Fantasy",
        "director": "Yimou Zhang",
        "year": 2016,
        "length": 103,
        "rating": 6.1,
        "revenue": 45.13
    },
    {
        "title": "La La Land",
        "genre": "Comedy,Drama,Music",
        "director": "Damien Chazelle",
        "year": 2016,
        "length": 128,
        "rating": 8.3,
        "revenue": 151.06
    },
    {
        "title": "Mindhorn",
        "genre": "Comedy",
        "director": "Sean Foley",
        "year": 2016,
        "length": 89,
        "rating": 6.4,
        "revenue": null
    },
    {
        "title": "The Lost City of Z",
        "genre": "Action,Adventure,Biography",
        "director": "James Gray",
        "year": 2016,
        "length": 141,
        "rating": 7.1,
        "revenue": 8.01
    },
    {
        "title": "Passengers",
        "genre": "Adventure,Drama,Romance",
        "director": "Morten Tyldum",
        "year": 2016,
        "length": 116,
        "rating": 7,
        "revenue": 100.01
    },
    {
        "title": "Fantastic Beasts and Where to Find Them",
        "genre": "Adventure,Family,Fantasy",
        "director": "David Yates",
        "year": 2016,
        "length": 133,
        "rating": 7.5,
        "revenue": 234.02
    },
    {
        "title": "Hidden Figures",
        "genre": "Biography,Drama,History",
        "director": "Theodore Melfi",
        "year": 2016,
        "length": 127,
        "rating": 7.8,
        "revenue": 169.27
    },
    {
        "title": "Rogue One",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Gareth Edwards",
        "year": 2016,
        "length": 133,
        "rating": 7.9,
        "revenue": 532.17
    },
    {
        "title": "Moana",
        "genre": "Animation,Adventure,Comedy",
        "director": "Ron Clements",
        "year": 2016,
        "length": 107,
        "rating": 7.7,
        "revenue": 248.75
    },
    {
        "title": "Colossal",
        "genre": "Action,Comedy,Drama",
        "director": "Nacho Vigalondo",
        "year": 2016,
        "length": 109,
        "rating": 6.4,
        "revenue": 2.87
    },
    {
        "title": "The Secret Life of Pets",
        "genre": "Animation,Adventure,Comedy",
        "director": "Chris Renaud",
        "year": 2016,
        "length": 87,
        "rating": 6.6,
        "revenue": 368.31
    },
    {
        "title": "Hacksaw Ridge",
        "genre": "Biography,Drama,History",
        "director": "Mel Gibson",
        "year": 2016,
        "length": 139,
        "rating": 8.2,
        "revenue": 67.12
    },
    {
        "title": "Jason Bourne",
        "genre": "Action,Thriller",
        "director": "Paul Greengrass",
        "year": 2016,
        "length": 123,
        "rating": 6.7,
        "revenue": 162.16
    },
    {
        "title": "Lion",
        "genre": "Biography,Drama",
        "director": "Garth Davis",
        "year": 2016,
        "length": 118,
        "rating": 8.1,
        "revenue": 51.69
    },
    {
        "title": "Arrival",
        "genre": "Drama,Mystery,Sci-Fi",
        "director": "Denis Villeneuve",
        "year": 2016,
        "length": 116,
        "rating": 8,
        "revenue": 100.5
    },
    {
        "title": "Gold",
        "genre": "Adventure,Drama,Thriller",
        "director": "Stephen Gaghan",
        "year": 2016,
        "length": 120,
        "rating": 6.7,
        "revenue": 7.22
    },
    {
        "title": "Manchester by the Sea",
        "genre": "Drama",
        "director": "Kenneth Lonergan",
        "year": 2016,
        "length": 137,
        "rating": 7.9,
        "revenue": 47.7
    },
    {
        "title": "Hounds of Love",
        "genre": "Crime,Drama,Horror",
        "director": "Ben Young",
        "year": 2016,
        "length": 108,
        "rating": 6.7,
        "revenue": null
    },
    {
        "title": "Trolls",
        "genre": "Animation,Adventure,Comedy",
        "director": "Walt Dohrn",
        "year": 2016,
        "length": 92,
        "rating": 6.5,
        "revenue": 153.69
    },
    {
        "title": "Independence Day: Resurgence",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Roland Emmerich",
        "year": 2016,
        "length": 120,
        "rating": 5.3,
        "revenue": 103.14
    },
    {
        "title": "Paris pieds nus",
        "genre": "Comedy",
        "director": "Dominique Abel",
        "year": 2016,
        "length": 83,
        "rating": 6.8,
        "revenue": null
    },
    {
        "title": "Bahubali: The Beginning",
        "genre": "Action,Adventure,Drama",
        "director": "S.S. Rajamouli",
        "year": 2015,
        "length": 159,
        "rating": 8.3,
        "revenue": 6.5
    },
    {
        "title": "Dead Awake",
        "genre": "Horror,Thriller",
        "director": "Phillip Guzman",
        "year": 2016,
        "length": 99,
        "rating": 4.7,
        "revenue": 0.01
    },
    {
        "title": "Bad Moms",
        "genre": "Comedy",
        "director": "Jon Lucas",
        "year": 2016,
        "length": 100,
        "rating": 6.2,
        "revenue": 113.08
    },
    {
        "title": "Assassin's Creed",
        "genre": "Action,Adventure,Drama",
        "director": "Justin Kurzel",
        "year": 2016,
        "length": 115,
        "rating": 5.9,
        "revenue": 54.65
    },
    {
        "title": "Why Him?",
        "genre": "Comedy",
        "director": "John Hamburg",
        "year": 2016,
        "length": 111,
        "rating": 6.3,
        "revenue": 60.31
    },
    {
        "title": "Nocturnal Animals",
        "genre": "Drama,Thriller",
        "director": "Tom Ford",
        "year": 2016,
        "length": 116,
        "rating": 7.5,
        "revenue": 10.64
    },
    {
        "title": "X-Men: Apocalypse",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Bryan Singer",
        "year": 2016,
        "length": 144,
        "rating": 7.1,
        "revenue": 155.33
    },
    {
        "title": "Deadpool",
        "genre": "Action,Adventure,Comedy",
        "director": "Tim Miller",
        "year": 2016,
        "length": 108,
        "rating": 8,
        "revenue": 363.02
    },
    {
        "title": "Resident Evil: The Final Chapter",
        "genre": "Action,Horror,Sci-Fi",
        "director": "Paul W.S. Anderson",
        "year": 2016,
        "length": 107,
        "rating": 5.6,
        "revenue": 26.84
    },
    {
        "title": "Captain America: Civil War",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Anthony Russo",
        "year": 2016,
        "length": 147,
        "rating": 7.9,
        "revenue": 408.08
    },
    {
        "title": "Interstellar",
        "genre": "Adventure,Drama,Sci-Fi",
        "director": "Christopher Nolan",
        "year": 2014,
        "length": 169,
        "rating": 8.6,
        "revenue": 187.99
    },
    {
        "title": "Doctor Strange",
        "genre": "Action,Adventure,Fantasy",
        "director": "Scott Derrickson",
        "year": 2016,
        "length": 115,
        "rating": 7.6,
        "revenue": 232.6
    },
    {
        "title": "The Magnificent Seven",
        "genre": "Action,Adventure,Western",
        "director": "Antoine Fuqua",
        "year": 2016,
        "length": 132,
        "rating": 6.9,
        "revenue": 93.38
    },
    {
        "title": "5/25/77",
        "genre": "Comedy,Drama",
        "director": "Patrick Read Johnson",
        "year": 2007,
        "length": 113,
        "rating": 7.1,
        "revenue": null
    },
    {
        "title": "Sausage Party",
        "genre": "Animation,Adventure,Comedy",
        "director": "Greg Tiernan",
        "year": 2016,
        "length": 89,
        "rating": 6.3,
        "revenue": 97.66
    },
    {
        "title": "Moonlight",
        "genre": "Drama",
        "director": "Barry Jenkins",
        "year": 2016,
        "length": 111,
        "rating": 7.5,
        "revenue": 27.85
    },
    {
        "title": "Don't Fuck in the Woods",
        "genre": "Horror",
        "director": "Shawn Burkett",
        "year": 2016,
        "length": 73,
        "rating": 2.7,
        "revenue": null
    },
    {
        "title": "The Founder",
        "genre": "Biography,Drama,History",
        "director": "John Lee Hancock",
        "year": 2016,
        "length": 115,
        "rating": 7.2,
        "revenue": 12.79
    },
    {
        "title": "Lowriders",
        "genre": "Drama",
        "director": "Ricardo de Montreuil",
        "year": 2016,
        "length": 99,
        "rating": 6.3,
        "revenue": 4.21
    },
    {
        "title": "Pirates of the Caribbean: On Stranger Tides",
        "genre": "Action,Adventure,Fantasy",
        "director": "Rob Marshall",
        "year": 2011,
        "length": 136,
        "rating": 6.7,
        "revenue": 241.06
    },
    {
        "title": "Miss Sloane",
        "genre": "Drama,Thriller",
        "director": "John Madden",
        "year": 2016,
        "length": 132,
        "rating": 7.3,
        "revenue": 3.44
    },
    {
        "title": "Fallen",
        "genre": "Adventure,Drama,Fantasy",
        "director": "Scott Hicks",
        "year": 2016,
        "length": 91,
        "rating": 5.6,
        "revenue": null
    },
    {
        "title": "Star Trek Beyond",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Justin Lin",
        "year": 2016,
        "length": 122,
        "rating": 7.1,
        "revenue": 158.8
    },
    {
        "title": "The Last Face",
        "genre": "Drama",
        "director": "Sean Penn",
        "year": 2016,
        "length": 130,
        "rating": 3.7,
        "revenue": null
    },
    {
        "title": "Star Wars: Episode VII - The Force Awakens",
        "genre": "Action,Adventure,Fantasy",
        "director": "J.J. Abrams",
        "year": 2015,
        "length": 136,
        "rating": 8.1,
        "revenue": 936.63
    },
    {
        "title": "Underworld: Blood Wars",
        "genre": "Action,Adventure,Fantasy",
        "director": "Anna Foerster",
        "year": 2016,
        "length": 91,
        "rating": 5.8,
        "revenue": 30.35
    },
    {
        "title": "Mother's Day",
        "genre": "Comedy,Drama",
        "director": "Garry Marshall",
        "year": 2016,
        "length": 118,
        "rating": 5.6,
        "revenue": 32.46
    },
    {
        "title": "John Wick",
        "genre": "Action,Crime,Thriller",
        "director": "Chad Stahelski",
        "year": 2014,
        "length": 101,
        "rating": 7.2,
        "revenue": 43
    },
    {
        "title": "The Dark Knight",
        "genre": "Action,Crime,Drama",
        "director": "Christopher Nolan",
        "year": 2008,
        "length": 152,
        "rating": 9,
        "revenue": 533.32
    },
    {
        "title": "Silence",
        "genre": "Adventure,Drama,History",
        "director": "Martin Scorsese",
        "year": 2016,
        "length": 161,
        "rating": 7.3,
        "revenue": 7.08
    },
    {
        "title": "Don't Breathe",
        "genre": "Crime,Horror,Thriller",
        "director": "Fede Alvarez",
        "year": 2016,
        "length": 88,
        "rating": 7.2,
        "revenue": 89.21
    },
    {
        "title": "Me Before You",
        "genre": "Drama,Romance",
        "director": "Thea Sharrock",
        "year": 2016,
        "length": 106,
        "rating": 7.4,
        "revenue": 56.23
    },
    {
        "title": "Their Finest",
        "genre": "Comedy,Drama,Romance",
        "director": "Lone Scherfig",
        "year": 2016,
        "length": 117,
        "rating": 7,
        "revenue": 3.18
    },
    {
        "title": "Sully",
        "genre": "Biography,Drama",
        "director": "Clint Eastwood",
        "year": 2016,
        "length": 96,
        "rating": 7.5,
        "revenue": 125.07
    },
    {
        "title": "Batman v Superman: Dawn of Justice",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Zack Snyder",
        "year": 2016,
        "length": 151,
        "rating": 6.7,
        "revenue": 330.25
    },
    {
        "title": "The Autopsy of Jane Doe",
        "genre": "Horror,Mystery,Thriller",
        "director": "André Øvredal",
        "year": 2016,
        "length": 86,
        "rating": 6.8,
        "revenue": null
    },
    {
        "title": "The Girl on the Train",
        "genre": "Crime,Drama,Mystery",
        "director": "Tate Taylor",
        "year": 2016,
        "length": 112,
        "rating": 6.5,
        "revenue": 75.31
    },
    {
        "title": "Fifty Shades of Grey",
        "genre": "Drama,Romance,Thriller",
        "director": "Sam Taylor-Johnson",
        "year": 2015,
        "length": 125,
        "rating": 4.1,
        "revenue": 166.15
    },
    {
        "title": "The Prestige",
        "genre": "Drama,Mystery,Sci-Fi",
        "director": "Christopher Nolan",
        "year": 2006,
        "length": 130,
        "rating": 8.5,
        "revenue": 53.08
    },
    {
        "title": "Kingsman: The Secret Service",
        "genre": "Action,Adventure,Comedy",
        "director": "Matthew Vaughn",
        "year": 2014,
        "length": 129,
        "rating": 7.7,
        "revenue": 128.25
    },
    {
        "title": "Patriots Day",
        "genre": "Drama,History,Thriller",
        "director": "Peter Berg",
        "year": 2016,
        "length": 133,
        "rating": 7.4,
        "revenue": 31.86
    },
    {
        "title": "Mad Max: Fury Road",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "George Miller",
        "year": 2015,
        "length": 120,
        "rating": 8.1,
        "revenue": 153.63
    },
    {
        "title": "Wakefield",
        "genre": "Drama",
        "director": "Robin Swicord",
        "year": 2016,
        "length": 106,
        "rating": 7.5,
        "revenue": 0.01
    },
    {
        "title": "Deepwater Horizon",
        "genre": "Action,Drama,Thriller",
        "director": "Peter Berg",
        "year": 2016,
        "length": 107,
        "rating": 7.2,
        "revenue": 61.28
    },
    {
        "title": "The Promise",
        "genre": "Drama,History",
        "director": "Terry George",
        "year": 2016,
        "length": 133,
        "rating": 5.9,
        "revenue": null
    },
    {
        "title": "Allied",
        "genre": "Action,Drama,Romance",
        "director": "Robert Zemeckis",
        "year": 2016,
        "length": 124,
        "rating": 7.1,
        "revenue": 40.07
    },
    {
        "title": "A Monster Calls",
        "genre": "Drama,Fantasy",
        "director": "J.A. Bayona",
        "year": 2016,
        "length": 108,
        "rating": 7.5,
        "revenue": 3.73
    },
    {
        "title": "Collateral Beauty",
        "genre": "Drama,Romance",
        "director": "David Frankel",
        "year": 2016,
        "length": 97,
        "rating": 6.8,
        "revenue": 30.98
    },
    {
        "title": "Zootopia",
        "genre": "Animation,Adventure,Comedy",
        "director": "Byron Howard",
        "year": 2016,
        "length": 108,
        "rating": 8.1,
        "revenue": 341.26
    },
    {
        "title": "Pirates of the Caribbean: At World's End",
        "genre": "Action,Adventure,Fantasy",
        "director": "Gore Verbinski",
        "year": 2007,
        "length": 169,
        "rating": 7.1,
        "revenue": 309.4
    },
    {
        "title": "The Avengers",
        "genre": "Action,Sci-Fi",
        "director": "Joss Whedon",
        "year": 2012,
        "length": 143,
        "rating": 8.1,
        "revenue": 623.28
    },
    {
        "title": "Inglourious Basterds",
        "genre": "Adventure,Drama,War",
        "director": "Quentin Tarantino",
        "year": 2009,
        "length": 153,
        "rating": 8.3,
        "revenue": 120.52
    },
    {
        "title": "Pirates of the Caribbean: Dead Man's Chest",
        "genre": "Action,Adventure,Fantasy",
        "director": "Gore Verbinski",
        "year": 2006,
        "length": 151,
        "rating": 7.3,
        "revenue": 423.03
    },
    {
        "title": "Ghostbusters",
        "genre": "Action,Comedy,Fantasy",
        "director": "Paul Feig",
        "year": 2016,
        "length": 116,
        "rating": 5.3,
        "revenue": 128.34
    },
    {
        "title": "Inception",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Christopher Nolan",
        "year": 2010,
        "length": 148,
        "rating": 8.8,
        "revenue": 292.57
    },
    {
        "title": "Captain Fantastic",
        "genre": "Comedy,Drama",
        "director": "Matt Ross",
        "year": 2016,
        "length": 118,
        "rating": 7.9,
        "revenue": 5.88
    },
    {
        "title": "The Wolf of Wall Street",
        "genre": "Biography,Comedy,Crime",
        "director": "Martin Scorsese",
        "year": 2013,
        "length": 180,
        "rating": 8.2,
        "revenue": 116.87
    },
    {
        "title": "Gone Girl",
        "genre": "Crime,Drama,Mystery",
        "director": "David Fincher",
        "year": 2014,
        "length": 149,
        "rating": 8.1,
        "revenue": 167.74
    },
    {
        "title": "Furious Seven",
        "genre": "Action,Crime,Thriller",
        "director": "James Wan",
        "year": 2015,
        "length": 137,
        "rating": 7.2,
        "revenue": 350.03
    },
    {
        "title": "Jurassic World",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Colin Trevorrow",
        "year": 2015,
        "length": 124,
        "rating": 7,
        "revenue": 652.18
    },
    {
        "title": "Live by Night",
        "genre": "Crime,Drama",
        "director": "Ben Affleck",
        "year": 2016,
        "length": 129,
        "rating": 6.4,
        "revenue": 10.38
    },
    {
        "title": "Avatar",
        "genre": "Action,Adventure,Fantasy",
        "director": "James Cameron",
        "year": 2009,
        "length": 162,
        "rating": 7.8,
        "revenue": 760.51
    },
    {
        "title": "The Hateful Eight",
        "genre": "Crime,Drama,Mystery",
        "director": "Quentin Tarantino",
        "year": 2015,
        "length": 187,
        "rating": 7.8,
        "revenue": 54.12
    },
    {
        "title": "The Accountant",
        "genre": "Action,Crime,Drama",
        "director": "Gavin O'Connor",
        "year": 2016,
        "length": 128,
        "rating": 7.4,
        "revenue": 86.2
    },
    {
        "title": "Prisoners",
        "genre": "Crime,Drama,Mystery",
        "director": "Denis Villeneuve",
        "year": 2013,
        "length": 153,
        "rating": 8.1,
        "revenue": 60.96
    },
    {
        "title": "Warcraft",
        "genre": "Action,Adventure,Fantasy",
        "director": "Duncan Jones",
        "year": 2016,
        "length": 123,
        "rating": 7,
        "revenue": 47.17
    },
    {
        "title": "The Help",
        "genre": "Drama",
        "director": "Tate Taylor",
        "year": 2011,
        "length": 146,
        "rating": 8.1,
        "revenue": 169.71
    },
    {
        "title": "War Dogs",
        "genre": "Comedy,Crime,Drama",
        "director": "Todd Phillips",
        "year": 2016,
        "length": 114,
        "rating": 7.1,
        "revenue": 43.02
    },
    {
        "title": "Avengers: Age of Ultron",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Joss Whedon",
        "year": 2015,
        "length": 141,
        "rating": 7.4,
        "revenue": 458.99
    },
    {
        "title": "The Nice Guys",
        "genre": "Action,Comedy,Crime",
        "director": "Shane Black",
        "year": 2016,
        "length": 116,
        "rating": 7.4,
        "revenue": 36.25
    },
    {
        "title": "Kimi no na wa",
        "genre": "Animation,Drama,Fantasy",
        "director": "Makoto Shinkai",
        "year": 2016,
        "length": 106,
        "rating": 8.6,
        "revenue": 4.68
    },
    {
        "title": "The Void",
        "genre": "Horror,Mystery,Sci-Fi",
        "director": "Jeremy Gillespie",
        "year": 2016,
        "length": 90,
        "rating": 5.8,
        "revenue": 0.15
    },
    {
        "title": "Personal Shopper",
        "genre": "Drama,Mystery,Thriller",
        "director": "Olivier Assayas",
        "year": 2016,
        "length": 105,
        "rating": 6.3,
        "revenue": 1.29
    },
    {
        "title": "The Departed",
        "genre": "Crime,Drama,Thriller",
        "director": "Martin Scorsese",
        "year": 2006,
        "length": 151,
        "rating": 8.5,
        "revenue": 132.37
    },
    {
        "title": "Legend",
        "genre": "Biography,Crime,Drama",
        "director": "Brian Helgeland",
        "year": 2015,
        "length": 132,
        "rating": 7,
        "revenue": 1.87
    },
    {
        "title": "Thor",
        "genre": "Action,Adventure,Fantasy",
        "director": "Kenneth Branagh",
        "year": 2011,
        "length": 115,
        "rating": 7,
        "revenue": 181.02
    },
    {
        "title": "The Martian",
        "genre": "Adventure,Drama,Sci-Fi",
        "director": "Ridley Scott",
        "year": 2015,
        "length": 144,
        "rating": 8,
        "revenue": 228.43
    },
    {
        "title": "Contratiempo",
        "genre": "Crime,Mystery,Thriller",
        "director": "Oriol Paulo",
        "year": 2016,
        "length": 106,
        "rating": 7.9,
        "revenue": null
    },
    {
        "title": "The Man from U.N.C.L.E.",
        "genre": "Action,Adventure,Comedy",
        "director": "Guy Ritchie",
        "year": 2015,
        "length": 116,
        "rating": 7.3,
        "revenue": 45.43
    },
    {
        "title": "Hell or High Water",
        "genre": "Crime,Drama,Thriller",
        "director": "David Mackenzie",
        "year": 2016,
        "length": 102,
        "rating": 7.7,
        "revenue": 26.86
    },
    {
        "title": "The Comedian",
        "genre": "Comedy",
        "director": "Taylor Hackford",
        "year": 2016,
        "length": 120,
        "rating": 5.4,
        "revenue": 1.66
    },
    {
        "title": "The Legend of Tarzan",
        "genre": "Action,Adventure,Drama",
        "director": "David Yates",
        "year": 2016,
        "length": 110,
        "rating": 6.3,
        "revenue": 126.59
    },
    {
        "title": "All We Had",
        "genre": "Drama",
        "director": "Katie Holmes",
        "year": 2016,
        "length": 105,
        "rating": 5.8,
        "revenue": null
    },
    {
        "title": "Ex Machina",
        "genre": "Drama,Mystery,Sci-Fi",
        "director": "Alex Garland",
        "year": 2014,
        "length": 108,
        "rating": 7.7,
        "revenue": 25.44
    },
    {
        "title": "The Belko Experiment",
        "genre": "Action,Horror,Thriller",
        "director": "Greg McLean",
        "year": 2016,
        "length": 89,
        "rating": 6.3,
        "revenue": 10.16
    },
    {
        "title": "12 Years a Slave",
        "genre": "Biography,Drama,History",
        "director": "Steve McQueen",
        "year": 2013,
        "length": 134,
        "rating": 8.1,
        "revenue": 56.67
    },
    {
        "title": "The Bad Batch",
        "genre": "Romance,Sci-Fi",
        "director": "Ana Lily Amirpour",
        "year": 2016,
        "length": 118,
        "rating": 6.1,
        "revenue": null
    },
    {
        "title": "300",
        "genre": "Action,Fantasy,War",
        "director": "Zack Snyder",
        "year": 2006,
        "length": 117,
        "rating": 7.7,
        "revenue": 210.59
    },
    {
        "title": "Harry Potter and the Deathly Hallows: Part 2",
        "genre": "Adventure,Drama,Fantasy",
        "director": "David Yates",
        "year": 2011,
        "length": 130,
        "rating": 8.1,
        "revenue": 380.96
    },
    {
        "title": "Office Christmas Party",
        "genre": "Comedy",
        "director": "Josh Gordon",
        "year": 2016,
        "length": 105,
        "rating": 5.8,
        "revenue": 54.73
    },
    {
        "title": "The Neon Demon",
        "genre": "Horror,Thriller",
        "director": "Nicolas Winding Refn",
        "year": 2016,
        "length": 118,
        "rating": 6.2,
        "revenue": 1.33
    },
    {
        "title": "Dangal",
        "genre": "Action,Biography,Drama",
        "director": "Nitesh Tiwari",
        "year": 2016,
        "length": 161,
        "rating": 8.8,
        "revenue": 11.15
    },
    {
        "title": "10 Cloverfield Lane",
        "genre": "Drama,Horror,Mystery",
        "director": "Dan Trachtenberg",
        "year": 2016,
        "length": 104,
        "rating": 7.2,
        "revenue": 71.9
    },
    {
        "title": "Finding Dory",
        "genre": "Animation,Adventure,Comedy",
        "director": "Andrew Stanton",
        "year": 2016,
        "length": 97,
        "rating": 7.4,
        "revenue": 486.29
    },
    {
        "title": "Miss Peregrine's Home for Peculiar Children",
        "genre": "Adventure,Drama,Family",
        "director": "Tim Burton",
        "year": 2016,
        "length": 127,
        "rating": 6.7,
        "revenue": 87.24
    },
    {
        "title": "Divergent",
        "genre": "Adventure,Mystery,Sci-Fi",
        "director": "Neil Burger",
        "year": 2014,
        "length": 139,
        "rating": 6.7,
        "revenue": 150.83
    },
    {
        "title": "Mike and Dave Need Wedding Dates",
        "genre": "Adventure,Comedy,Romance",
        "director": "Jake Szymanski",
        "year": 2016,
        "length": 98,
        "rating": 6,
        "revenue": 46.01
    },
    {
        "title": "Boyka: Undisputed IV",
        "genre": "Action",
        "director": "Todor Chapkanov",
        "year": 2016,
        "length": 86,
        "rating": 7.4,
        "revenue": null
    },
    {
        "title": "The Dark Knight Rises",
        "genre": "Action,Thriller",
        "director": "Christopher Nolan",
        "year": 2012,
        "length": 164,
        "rating": 8.5,
        "revenue": 448.13
    },
    {
        "title": "The Jungle Book",
        "genre": "Adventure,Drama,Family",
        "director": "Jon Favreau",
        "year": 2016,
        "length": 106,
        "rating": 7.5,
        "revenue": 364
    },
    {
        "title": "Transformers: Age of Extinction",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Michael Bay",
        "year": 2014,
        "length": 165,
        "rating": 5.7,
        "revenue": 245.43
    },
    {
        "title": "Nerve",
        "genre": "Adventure,Crime,Mystery",
        "director": "Henry Joost",
        "year": 2016,
        "length": 96,
        "rating": 6.6,
        "revenue": 38.56
    },
    {
        "title": "Mamma Mia!",
        "genre": "Comedy,Family,Musical",
        "director": "Phyllida Lloyd",
        "year": 2008,
        "length": 108,
        "rating": 6.4,
        "revenue": 143.7
    },
    {
        "title": "The Revenant",
        "genre": "Adventure,Drama,Thriller",
        "director": "Alejandro González Iñárritu",
        "year": 2015,
        "length": 156,
        "rating": 8,
        "revenue": 183.64
    },
    {
        "title": "Fences",
        "genre": "Drama",
        "director": "Denzel Washington",
        "year": 2016,
        "length": 139,
        "rating": 7.3,
        "revenue": 57.64
    },
    {
        "title": "Into the Woods",
        "genre": "Adventure,Comedy,Drama",
        "director": "Rob Marshall",
        "year": 2014,
        "length": 125,
        "rating": 6,
        "revenue": 128
    },
    {
        "title": "The Shallows",
        "genre": "Drama,Horror,Thriller",
        "director": "Jaume Collet-Serra",
        "year": 2016,
        "length": 86,
        "rating": 6.4,
        "revenue": 55.12
    },
    {
        "title": "Whiplash",
        "genre": "Drama,Music",
        "director": "Damien Chazelle",
        "year": 2014,
        "length": 107,
        "rating": 8.5,
        "revenue": 13.09
    },
    {
        "title": "Furious 6",
        "genre": "Action,Crime,Thriller",
        "director": "Justin Lin",
        "year": 2013,
        "length": 130,
        "rating": 7.1,
        "revenue": 238.67
    },
    {
        "title": "The Place Beyond the Pines",
        "genre": "Crime,Drama,Thriller",
        "director": "Derek Cianfrance",
        "year": 2012,
        "length": 140,
        "rating": 7.3,
        "revenue": 21.38
    },
    {
        "title": "No Country for Old Men",
        "genre": "Crime,Drama,Thriller",
        "director": "Ethan Coen",
        "year": 2007,
        "length": 122,
        "rating": 8.1,
        "revenue": 74.27
    },
    {
        "title": "The Great Gatsby",
        "genre": "Drama,Romance",
        "director": "Baz Luhrmann",
        "year": 2013,
        "length": 143,
        "rating": 7.3,
        "revenue": 144.81
    },
    {
        "title": "Shutter Island",
        "genre": "Mystery,Thriller",
        "director": "Martin Scorsese",
        "year": 2010,
        "length": 138,
        "rating": 8.1,
        "revenue": 127.97
    },
    {
        "title": "Brimstone",
        "genre": "Mystery,Thriller,Western",
        "director": "Martin Koolhoven",
        "year": 2016,
        "length": 148,
        "rating": 7.1,
        "revenue": null
    },
    {
        "title": "Star Trek",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "J.J. Abrams",
        "year": 2009,
        "length": 127,
        "rating": 8,
        "revenue": 257.7
    },
    {
        "title": "Diary of a Wimpy Kid",
        "genre": "Comedy,Family",
        "director": "Thor Freudenthal",
        "year": 2010,
        "length": 94,
        "rating": 6.2,
        "revenue": 64
    },
    {
        "title": "The Big Short",
        "genre": "Biography,Comedy,Drama",
        "director": "Adam McKay",
        "year": 2015,
        "length": 130,
        "rating": 7.8,
        "revenue": 70.24
    },
    {
        "title": "Room",
        "genre": "Drama",
        "director": "Lenny Abrahamson",
        "year": 2015,
        "length": 118,
        "rating": 8.2,
        "revenue": 14.68
    },
    {
        "title": "Django Unchained",
        "genre": "Drama,Western",
        "director": "Quentin Tarantino",
        "year": 2012,
        "length": 165,
        "rating": 8.4,
        "revenue": 162.8
    },
    {
        "title": "Ah-ga-ssi",
        "genre": "Drama,Mystery,Romance",
        "director": "Chan-wook Park",
        "year": 2016,
        "length": 144,
        "rating": 8.1,
        "revenue": 2.01
    },
    {
        "title": "The Edge of Seventeen",
        "genre": "Comedy,Drama",
        "director": "Kelly Fremon Craig",
        "year": 2016,
        "length": 104,
        "rating": 7.4,
        "revenue": 14.26
    },
    {
        "title": "Watchmen",
        "genre": "Action,Drama,Mystery",
        "director": "Zack Snyder",
        "year": 2009,
        "length": 162,
        "rating": 7.6,
        "revenue": 107.5
    },
    {
        "title": "Superbad",
        "genre": "Comedy",
        "director": "Greg Mottola",
        "year": 2007,
        "length": 113,
        "rating": 7.6,
        "revenue": 121.46
    },
    {
        "title": "Inferno",
        "genre": "Action,Adventure,Crime",
        "director": "Ron Howard",
        "year": 2016,
        "length": 121,
        "rating": 6.2,
        "revenue": 34.26
    },
    {
        "title": "The BFG",
        "genre": "Adventure,Family,Fantasy",
        "director": "Steven Spielberg",
        "year": 2016,
        "length": 117,
        "rating": 6.4,
        "revenue": 55.47
    },
    {
        "title": "The Hunger Games",
        "genre": "Adventure,Sci-Fi,Thriller",
        "director": "Gary Ross",
        "year": 2012,
        "length": 142,
        "rating": 7.2,
        "revenue": 408
    },
    {
        "title": "White Girl",
        "genre": "Drama",
        "director": "Elizabeth Wood",
        "year": 2016,
        "length": 88,
        "rating": 5.8,
        "revenue": 0.2
    },
    {
        "title": "Sicario",
        "genre": "Action,Crime,Drama",
        "director": "Denis Villeneuve",
        "year": 2015,
        "length": 121,
        "rating": 7.6,
        "revenue": 46.88
    },
    {
        "title": "Twin Peaks: The Missing Pieces",
        "genre": "Drama,Horror,Mystery",
        "director": "David Lynch",
        "year": 2014,
        "length": 91,
        "rating": 8.1,
        "revenue": null
    },
    {
        "title": "Aliens vs Predator - Requiem",
        "genre": "Action,Horror,Sci-Fi",
        "director": "Colin Strause",
        "year": 2007,
        "length": 94,
        "rating": 4.7,
        "revenue": 41.8
    },
    {
        "title": "Pacific Rim",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Guillermo del Toro",
        "year": 2013,
        "length": 131,
        "rating": 7,
        "revenue": 101.79
    },
    {
        "title": "Crazy, Stupid, Love.",
        "genre": "Comedy,Drama,Romance",
        "director": "Glenn Ficarra",
        "year": 2011,
        "length": 118,
        "rating": 7.4,
        "revenue": 84.24
    },
    {
        "title": "Scott Pilgrim vs. the World",
        "genre": "Action,Comedy,Fantasy",
        "director": "Edgar Wright",
        "year": 2010,
        "length": 112,
        "rating": 7.5,
        "revenue": 31.49
    },
    {
        "title": "Hot Fuzz",
        "genre": "Action,Comedy,Mystery",
        "director": "Edgar Wright",
        "year": 2007,
        "length": 121,
        "rating": 7.9,
        "revenue": 23.62
    },
    {
        "title": "Mine",
        "genre": "Thriller,War",
        "director": "Fabio Guaglione",
        "year": 2016,
        "length": 106,
        "rating": 6,
        "revenue": null
    },
    {
        "title": "Free Fire",
        "genre": "Action,Comedy,Crime",
        "director": "Ben Wheatley",
        "year": 2016,
        "length": 90,
        "rating": 7,
        "revenue": 1.8
    },
    {
        "title": "X-Men: Days of Future Past",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Bryan Singer",
        "year": 2014,
        "length": 132,
        "rating": 8,
        "revenue": 233.91
    },
    {
        "title": "Jack Reacher: Never Go Back",
        "genre": "Action,Adventure,Crime",
        "director": "Edward Zwick",
        "year": 2016,
        "length": 118,
        "rating": 6.1,
        "revenue": 58.4
    },
    {
        "title": "Casino Royale",
        "genre": "Action,Adventure,Thriller",
        "director": "Martin Campbell",
        "year": 2006,
        "length": 144,
        "rating": 8,
        "revenue": 167.01
    },
    {
        "title": "Twilight",
        "genre": "Drama,Fantasy,Romance",
        "director": "Catherine Hardwicke",
        "year": 2008,
        "length": 122,
        "rating": 5.2,
        "revenue": 191.45
    },
    {
        "title": "Now You See Me 2",
        "genre": "Action,Adventure,Comedy",
        "director": "Jon M. Chu",
        "year": 2016,
        "length": 129,
        "rating": 6.5,
        "revenue": 65.03
    },
    {
        "title": "Woman in Gold",
        "genre": "Biography,Drama,History",
        "director": "Simon Curtis",
        "year": 2015,
        "length": 109,
        "rating": 7.3,
        "revenue": 33.31
    },
    {
        "title": "13 Hours",
        "genre": "Action,Drama,History",
        "director": "Michael Bay",
        "year": 2016,
        "length": 144,
        "rating": 7.3,
        "revenue": 52.82
    },
    {
        "title": "Spectre",
        "genre": "Action,Adventure,Thriller",
        "director": "Sam Mendes",
        "year": 2015,
        "length": 148,
        "rating": 6.8,
        "revenue": 200.07
    },
    {
        "title": "Nightcrawler",
        "genre": "Crime,Drama,Thriller",
        "director": "Dan Gilroy",
        "year": 2014,
        "length": 118,
        "rating": 7.9,
        "revenue": 32.28
    },
    {
        "title": "Kubo and the Two Strings",
        "genre": "Animation,Adventure,Family",
        "director": "Travis Knight",
        "year": 2016,
        "length": 101,
        "rating": 7.9,
        "revenue": 48.02
    },
    {
        "title": "Beyond the Gates",
        "genre": "Adventure,Horror",
        "director": "Jackson Stewart",
        "year": 2016,
        "length": 84,
        "rating": 5.2,
        "revenue": null
    },
    {
        "title": "Her",
        "genre": "Drama,Romance,Sci-Fi",
        "director": "Spike Jonze",
        "year": 2013,
        "length": 126,
        "rating": 8,
        "revenue": 25.56
    },
    {
        "title": "Frozen",
        "genre": "Animation,Adventure,Comedy",
        "director": "Chris Buck",
        "year": 2013,
        "length": 102,
        "rating": 7.5,
        "revenue": 400.74
    },
    {
        "title": "Tomorrowland",
        "genre": "Action,Adventure,Family",
        "director": "Brad Bird",
        "year": 2015,
        "length": 130,
        "rating": 6.5,
        "revenue": 93.42
    },
    {
        "title": "Dawn of the Planet of the Apes",
        "genre": "Action,Adventure,Drama",
        "director": "Matt Reeves",
        "year": 2014,
        "length": 130,
        "rating": 7.6,
        "revenue": 208.54
    },
    {
        "title": "Tropic Thunder",
        "genre": "Action,Comedy",
        "director": "Ben Stiller",
        "year": 2008,
        "length": 107,
        "rating": 7,
        "revenue": 110.42
    },
    {
        "title": "The Conjuring 2",
        "genre": "Horror,Mystery,Thriller",
        "director": "James Wan",
        "year": 2016,
        "length": 134,
        "rating": 7.4,
        "revenue": 102.46
    },
    {
        "title": "Ant-Man",
        "genre": "Action,Adventure,Comedy",
        "director": "Peyton Reed",
        "year": 2015,
        "length": 117,
        "rating": 7.3,
        "revenue": 180.19
    },
    {
        "title": "Bridget Jones's Baby",
        "genre": "Comedy,Romance",
        "director": "Sharon Maguire",
        "year": 2016,
        "length": 118,
        "rating": 6.7,
        "revenue": 24.09
    },
    {
        "title": "The VVitch: A New-England Folktale",
        "genre": "Horror,Mystery",
        "director": "Robert Eggers",
        "year": 2015,
        "length": 92,
        "rating": 6.8,
        "revenue": 25.14
    },
    {
        "title": "Cinderella",
        "genre": "Drama,Family,Fantasy",
        "director": "Kenneth Branagh",
        "year": 2015,
        "length": 105,
        "rating": 7,
        "revenue": 201.15
    },
    {
        "title": "Realive",
        "genre": "Sci-Fi",
        "director": "Mateo Gil",
        "year": 2016,
        "length": 112,
        "rating": 5.9,
        "revenue": null
    },
    {
        "title": "Forushande",
        "genre": "Drama,Thriller",
        "director": "Asghar Farhadi",
        "year": 2016,
        "length": 124,
        "rating": 8,
        "revenue": 3.4
    },
    {
        "title": "Love",
        "genre": "Drama,Romance",
        "director": "Gaspar Noé",
        "year": 2015,
        "length": 135,
        "rating": 6,
        "revenue": null
    },
    {
        "title": "Billy Lynn's Long Halftime Walk",
        "genre": "Drama,War",
        "director": "Ang Lee",
        "year": 2016,
        "length": 113,
        "rating": 6.3,
        "revenue": 1.72
    },
    {
        "title": "Crimson Peak",
        "genre": "Drama,Fantasy,Horror",
        "director": "Guillermo del Toro",
        "year": 2015,
        "length": 119,
        "rating": 6.6,
        "revenue": 31.06
    },
    {
        "title": "Drive",
        "genre": "Crime,Drama",
        "director": "Nicolas Winding Refn",
        "year": 2011,
        "length": 100,
        "rating": 7.8,
        "revenue": 35.05
    },
    {
        "title": "Trainwreck",
        "genre": "Comedy,Drama,Romance",
        "director": "Judd Apatow",
        "year": 2015,
        "length": 125,
        "rating": 6.3,
        "revenue": 110.01
    },
    {
        "title": "The Light Between Oceans",
        "genre": "Drama,Romance",
        "director": "Derek Cianfrance",
        "year": 2016,
        "length": 133,
        "rating": 7.2,
        "revenue": 12.53
    },
    {
        "title": "Below Her Mouth",
        "genre": "Drama",
        "director": "April Mullen",
        "year": 2016,
        "length": 94,
        "rating": 5.6,
        "revenue": null
    },
    {
        "title": "Spotlight",
        "genre": "Crime,Drama,History",
        "director": "Tom McCarthy",
        "year": 2015,
        "length": 128,
        "rating": 8.1,
        "revenue": 44.99
    },
    {
        "title": "Morgan",
        "genre": "Horror,Sci-Fi,Thriller",
        "director": "Luke Scott",
        "year": 2016,
        "length": 92,
        "rating": 5.8,
        "revenue": 3.91
    },
    {
        "title": "Warrior",
        "genre": "Action,Drama,Sport",
        "director": "Gavin O'Connor",
        "year": 2011,
        "length": 140,
        "rating": 8.2,
        "revenue": 13.65
    },
    {
        "title": "Captain America: The First Avenger",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Joe Johnston",
        "year": 2011,
        "length": 124,
        "rating": 6.9,
        "revenue": 176.64
    },
    {
        "title": "Hacker",
        "genre": "Crime,Drama,Thriller",
        "director": "Akan Satayev",
        "year": 2016,
        "length": 95,
        "rating": 6.3,
        "revenue": null
    },
    {
        "title": "Into the Wild",
        "genre": "Adventure,Biography,Drama",
        "director": "Sean Penn",
        "year": 2007,
        "length": 148,
        "rating": 8.1,
        "revenue": 18.35
    },
    {
        "title": "The Imitation Game",
        "genre": "Biography,Drama,Thriller",
        "director": "Morten Tyldum",
        "year": 2014,
        "length": 114,
        "rating": 8.1,
        "revenue": 91.12
    },
    {
        "title": "Central Intelligence",
        "genre": "Action,Comedy,Crime",
        "director": "Rawson Marshall Thurber",
        "year": 2016,
        "length": 107,
        "rating": 6.3,
        "revenue": 127.38
    },
    {
        "title": "Edge of Tomorrow",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Doug Liman",
        "year": 2014,
        "length": 113,
        "rating": 7.9,
        "revenue": 100.19
    },
    {
        "title": "A Cure for Wellness",
        "genre": "Drama,Fantasy,Horror",
        "director": "Gore Verbinski",
        "year": 2016,
        "length": 146,
        "rating": 6.5,
        "revenue": 8.1
    },
    {
        "title": "Snowden",
        "genre": "Biography,Drama,Thriller",
        "director": "Oliver Stone",
        "year": 2016,
        "length": 134,
        "rating": 7.3,
        "revenue": 21.48
    },
    {
        "title": "Iron Man",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Jon Favreau",
        "year": 2008,
        "length": 126,
        "rating": 7.9,
        "revenue": 318.3
    },
    {
        "title": "Allegiant",
        "genre": "Action,Adventure,Mystery",
        "director": "Robert Schwentke",
        "year": 2016,
        "length": 120,
        "rating": 5.7,
        "revenue": 66
    },
    {
        "title": "X: First Class",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Matthew Vaughn",
        "year": 2011,
        "length": 132,
        "rating": 7.8,
        "revenue": 146.41
    },
    {
        "title": "Raw (II)",
        "genre": "Drama,Horror",
        "director": "Julia Ducournau",
        "year": 2016,
        "length": 99,
        "rating": 7.5,
        "revenue": 0.51
    },
    {
        "title": "Paterson",
        "genre": "Comedy,Drama,Romance",
        "director": "Jim Jarmusch",
        "year": 2016,
        "length": 118,
        "rating": 7.5,
        "revenue": 2.14
    },
    {
        "title": "Bridesmaids",
        "genre": "Comedy,Romance",
        "director": "Paul Feig",
        "year": 2011,
        "length": 125,
        "rating": 6.8,
        "revenue": 169.08
    },
    {
        "title": "The Girl with All the Gifts",
        "genre": "Drama,Horror,Thriller",
        "director": "Colm McCarthy",
        "year": 2016,
        "length": 111,
        "rating": 6.7,
        "revenue": null
    },
    {
        "title": "San Andreas",
        "genre": "Action,Adventure,Drama",
        "director": "Brad Peyton",
        "year": 2015,
        "length": 114,
        "rating": 6.1,
        "revenue": 155.18
    },
    {
        "title": "Spring Breakers",
        "genre": "Drama",
        "director": "Harmony Korine",
        "year": 2012,
        "length": 94,
        "rating": 5.3,
        "revenue": 14.12
    },
    {
        "title": "Transformers",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Michael Bay",
        "year": 2007,
        "length": 144,
        "rating": 7.1,
        "revenue": 318.76
    },
    {
        "title": "Old Boy",
        "genre": "Action,Drama,Mystery",
        "director": "Spike Lee",
        "year": 2013,
        "length": 104,
        "rating": 5.8,
        "revenue": null
    },
    {
        "title": "Thor: The Dark World",
        "genre": "Action,Adventure,Fantasy",
        "director": "Alan Taylor",
        "year": 2013,
        "length": 112,
        "rating": 7,
        "revenue": 206.36
    },
    {
        "title": "Gods of Egypt",
        "genre": "Action,Adventure,Fantasy",
        "director": "Alex Proyas",
        "year": 2016,
        "length": 126,
        "rating": 5.5,
        "revenue": 31.14
    },
    {
        "title": "Captain America: The Winter Soldier",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Anthony Russo",
        "year": 2014,
        "length": 136,
        "rating": 7.8,
        "revenue": 259.75
    },
    {
        "title": "Monster Trucks",
        "genre": "Action,Adventure,Comedy",
        "director": "Chris Wedge",
        "year": 2016,
        "length": 104,
        "rating": 5.7,
        "revenue": 33.04
    },
    {
        "title": "A Dark Song",
        "genre": "Drama,Horror",
        "director": "Liam Gavin",
        "year": 2016,
        "length": 100,
        "rating": 6.1,
        "revenue": null
    },
    {
        "title": "Kick-Ass",
        "genre": "Action,Comedy",
        "director": "Matthew Vaughn",
        "year": 2010,
        "length": 117,
        "rating": 7.7,
        "revenue": 48.04
    },
    {
        "title": "Hardcore Henry",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Ilya Naishuller",
        "year": 2015,
        "length": 96,
        "rating": 6.7,
        "revenue": 9.24
    },
    {
        "title": "Cars",
        "genre": "Animation,Adventure,Comedy",
        "director": "John Lasseter",
        "year": 2006,
        "length": 117,
        "rating": 7.1,
        "revenue": 244.05
    },
    {
        "title": "It Follows",
        "genre": "Horror,Mystery",
        "director": "David Robert Mitchell",
        "year": 2014,
        "length": 100,
        "rating": 6.9,
        "revenue": 14.67
    },
    {
        "title": "The Girl with the Dragon Tattoo",
        "genre": "Crime,Drama,Mystery",
        "director": "David Fincher",
        "year": 2011,
        "length": 158,
        "rating": 7.8,
        "revenue": 102.52
    },
    {
        "title": "We're the Millers",
        "genre": "Comedy,Crime",
        "director": "Rawson Marshall Thurber",
        "year": 2013,
        "length": 110,
        "rating": 7,
        "revenue": 150.37
    },
    {
        "title": "American Honey",
        "genre": "Drama",
        "director": "Andrea Arnold",
        "year": 2016,
        "length": 163,
        "rating": 7,
        "revenue": 0.66
    },
    {
        "title": "The Lobster",
        "genre": "Comedy,Drama,Romance",
        "director": "Yorgos Lanthimos",
        "year": 2015,
        "length": 119,
        "rating": 7.1,
        "revenue": 8.7
    },
    {
        "title": "Predators",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Nimród Antal",
        "year": 2010,
        "length": 107,
        "rating": 6.4,
        "revenue": 52
    },
    {
        "title": "Maleficent",
        "genre": "Action,Adventure,Family",
        "director": "Robert Stromberg",
        "year": 2014,
        "length": 97,
        "rating": 7,
        "revenue": 241.41
    },
    {
        "title": "Rupture",
        "genre": "Horror,Sci-Fi,Thriller",
        "director": "Steven Shainberg",
        "year": 2016,
        "length": 102,
        "rating": 4.8,
        "revenue": null
    },
    {
        "title": "Pan's Labyrinth",
        "genre": "Drama,Fantasy,War",
        "director": "Guillermo del Toro",
        "year": 2006,
        "length": 118,
        "rating": 8.2,
        "revenue": 37.62
    },
    {
        "title": "A Kind of Murder",
        "genre": "Crime,Drama,Thriller",
        "director": "Andy Goddard",
        "year": 2016,
        "length": 95,
        "rating": 5.2,
        "revenue": 0
    },
    {
        "title": "Apocalypto",
        "genre": "Action,Adventure,Drama",
        "director": "Mel Gibson",
        "year": 2006,
        "length": 139,
        "rating": 7.8,
        "revenue": 50.86
    },
    {
        "title": "Mission: Impossible - Rogue Nation",
        "genre": "Action,Adventure,Thriller",
        "director": "Christopher McQuarrie",
        "year": 2015,
        "length": 131,
        "rating": 7.4,
        "revenue": 195
    },
    {
        "title": "The Huntsman: Winter's War",
        "genre": "Action,Adventure,Drama",
        "director": "Cedric Nicolas-Troyan",
        "year": 2016,
        "length": 114,
        "rating": 6.1,
        "revenue": 47.95
    },
    {
        "title": "The Perks of Being a Wallflower",
        "genre": "Drama,Romance",
        "director": "Stephen Chbosky",
        "year": 2012,
        "length": 102,
        "rating": 8,
        "revenue": 17.74
    },
    {
        "title": "Jackie",
        "genre": "Biography,Drama,History",
        "director": "Pablo Larraín",
        "year": 2016,
        "length": 100,
        "rating": 6.8,
        "revenue": 13.96
    },
    {
        "title": "The Disappointments Room",
        "genre": "Drama,Horror,Thriller",
        "director": "D.J. Caruso",
        "year": 2016,
        "length": 85,
        "rating": 3.9,
        "revenue": 2.41
    },
    {
        "title": "The Grand Budapest Hotel",
        "genre": "Adventure,Comedy,Drama",
        "director": "Wes Anderson",
        "year": 2014,
        "length": 99,
        "rating": 8.1,
        "revenue": 59.07
    },
    {
        "title": "The Host",
        "genre": "Action,Adventure,Romance",
        "director": "Andrew Niccol",
        "year": 2013,
        "length": 125,
        "rating": 5.9,
        "revenue": 26.62
    },
    {
        "title": "Fury",
        "genre": "Action,Drama,War",
        "director": "David Ayer",
        "year": 2014,
        "length": 134,
        "rating": 7.6,
        "revenue": 85.71
    },
    {
        "title": "Inside Out",
        "genre": "Animation,Adventure,Comedy",
        "director": "Pete Docter",
        "year": 2015,
        "length": 95,
        "rating": 8.2,
        "revenue": 356.45
    },
    {
        "title": "Rock Dog",
        "genre": "Animation,Adventure,Comedy",
        "director": "Ash Brannon",
        "year": 2016,
        "length": 90,
        "rating": 5.8,
        "revenue": 9.4
    },
    {
        "title": "Terminator Genisys",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Alan Taylor",
        "year": 2015,
        "length": 126,
        "rating": 6.5,
        "revenue": 89.73
    },
    {
        "title": "Percy Jackson & the Olympians: The Lightning Thief",
        "genre": "Adventure,Family,Fantasy",
        "director": "Chris Columbus",
        "year": 2010,
        "length": 118,
        "rating": 5.9,
        "revenue": 88.76
    },
    {
        "title": "Les Misérables",
        "genre": "Drama,Musical,Romance",
        "director": "Tom Hooper",
        "year": 2012,
        "length": 158,
        "rating": 7.6,
        "revenue": 148.78
    },
    {
        "title": "Children of Men",
        "genre": "Drama,Sci-Fi,Thriller",
        "director": "Alfonso Cuarón",
        "year": 2006,
        "length": 109,
        "rating": 7.9,
        "revenue": 35.29
    },
    {
        "title": "20th Century Women",
        "genre": "Comedy,Drama",
        "director": "Mike Mills",
        "year": 2016,
        "length": 119,
        "rating": 7.4,
        "revenue": 5.66
    },
    {
        "title": "Spy",
        "genre": "Action,Comedy,Crime",
        "director": "Paul Feig",
        "year": 2015,
        "length": 119,
        "rating": 7.1,
        "revenue": 110.82
    },
    {
        "title": "The Intouchables",
        "genre": "Biography,Comedy,Drama",
        "director": "Olivier Nakache",
        "year": 2011,
        "length": 112,
        "rating": 8.6,
        "revenue": 13.18
    },
    {
        "title": "Bonjour Anne",
        "genre": "Comedy,Drama,Romance",
        "director": "Eleanor Coppola",
        "year": 2016,
        "length": 92,
        "rating": 4.9,
        "revenue": 0.32
    },
    {
        "title": "Kynodontas",
        "genre": "Drama,Thriller",
        "director": "Yorgos Lanthimos",
        "year": 2009,
        "length": 94,
        "rating": 7.3,
        "revenue": 0.11
    },
    {
        "title": "Straight Outta Compton",
        "genre": "Biography,Drama,History",
        "director": "F. Gary Gray",
        "year": 2015,
        "length": 147,
        "rating": 7.9,
        "revenue": 161.03
    },
    {
        "title": "The Amazing Spider-Man 2",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Marc Webb",
        "year": 2014,
        "length": 142,
        "rating": 6.7,
        "revenue": 202.85
    },
    {
        "title": "The Conjuring",
        "genre": "Horror,Mystery,Thriller",
        "director": "James Wan",
        "year": 2013,
        "length": 112,
        "rating": 7.5,
        "revenue": 137.39
    },
    {
        "title": "The Hangover",
        "genre": "Comedy",
        "director": "Todd Phillips",
        "year": 2009,
        "length": 100,
        "rating": 7.8,
        "revenue": 277.31
    },
    {
        "title": "Battleship",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Peter Berg",
        "year": 2012,
        "length": 131,
        "rating": 5.8,
        "revenue": 65.17
    },
    {
        "title": "Rise of the Planet of the Apes",
        "genre": "Action,Drama,Sci-Fi",
        "director": "Rupert Wyatt",
        "year": 2011,
        "length": 105,
        "rating": 7.6,
        "revenue": 176.74
    },
    {
        "title": "Lights Out",
        "genre": "Horror",
        "director": "David F. Sandberg",
        "year": 2016,
        "length": 81,
        "rating": 6.4,
        "revenue": 67.24
    },
    {
        "title": "Norman: The Moderate Rise and Tragic Fall of a New York Fixer",
        "genre": "Drama,Thriller",
        "director": "Joseph Cedar",
        "year": 2016,
        "length": 118,
        "rating": 7.1,
        "revenue": 2.27
    },
    {
        "title": "Birdman or (The Unexpected Virtue of Ignorance)",
        "genre": "Comedy,Drama,Romance",
        "director": "Alejandro González Iñárritu",
        "year": 2014,
        "length": 119,
        "rating": 7.8,
        "revenue": 42.34
    },
    {
        "title": "Black Swan",
        "genre": "Drama,Thriller",
        "director": "Darren Aronofsky",
        "year": 2010,
        "length": 108,
        "rating": 8,
        "revenue": 106.95
    },
    {
        "title": "Dear White People",
        "genre": "Comedy,Drama",
        "director": "Justin Simien",
        "year": 2014,
        "length": 108,
        "rating": 6.2,
        "revenue": 4.4
    },
    {
        "title": "Nymphomaniac: Vol. I",
        "genre": "Drama",
        "director": "Lars von Trier",
        "year": 2013,
        "length": 117,
        "rating": 7,
        "revenue": 0.79
    },
    {
        "title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
        "genre": "Action,Adventure,Comedy",
        "director": "Dave Green",
        "year": 2016,
        "length": 112,
        "rating": 6,
        "revenue": 0.54
    },
    {
        "title": "Knock Knock",
        "genre": "Drama,Horror,Thriller",
        "director": "Eli Roth",
        "year": 2015,
        "length": 99,
        "rating": 4.9,
        "revenue": 0.03
    },
    {
        "title": "Dirty Grandpa",
        "genre": "Comedy",
        "director": "Dan Mazer",
        "year": 2016,
        "length": 102,
        "rating": 6,
        "revenue": 35.54
    },
    {
        "title": "Cloud Atlas",
        "genre": "Drama,Sci-Fi",
        "director": "Tom Tykwer",
        "year": 2012,
        "length": 172,
        "rating": 7.5,
        "revenue": 27.1
    },
    {
        "title": "X-Men Origins: Wolverine",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Gavin Hood",
        "year": 2009,
        "length": 107,
        "rating": 6.7,
        "revenue": 179.88
    },
    {
        "title": "Satanic",
        "genre": "Horror",
        "director": "Jeffrey G. Hunt",
        "year": 2016,
        "length": 85,
        "rating": 3.7,
        "revenue": null
    },
    {
        "title": "Skyfall",
        "genre": "Action,Adventure,Thriller",
        "director": "Sam Mendes",
        "year": 2012,
        "length": 143,
        "rating": 7.8,
        "revenue": 304.36
    },
    {
        "title": "The Hobbit: An Unexpected Journey",
        "genre": "Adventure,Fantasy",
        "director": "Peter Jackson",
        "year": 2012,
        "length": 169,
        "rating": 7.9,
        "revenue": 303
    },
    {
        "title": "21 Jump Street",
        "genre": "Action,Comedy,Crime",
        "director": "Phil Lord",
        "year": 2012,
        "length": 110,
        "rating": 7.2,
        "revenue": 138.45
    },
    {
        "title": "Sing Street",
        "genre": "Comedy,Drama,Music",
        "director": "John Carney",
        "year": 2016,
        "length": 106,
        "rating": 8,
        "revenue": 3.23
    },
    {
        "title": "Ballerina",
        "genre": "Animation,Adventure,Comedy",
        "director": "Eric Summer",
        "year": 2016,
        "length": 89,
        "rating": 6.8,
        "revenue": null
    },
    {
        "title": "Oblivion",
        "genre": "Action,Adventure,Mystery",
        "director": "Joseph Kosinski",
        "year": 2013,
        "length": 124,
        "rating": 7,
        "revenue": 89.02
    },
    {
        "title": "22 Jump Street",
        "genre": "Action,Comedy,Crime",
        "director": "Phil Lord",
        "year": 2014,
        "length": 112,
        "rating": 7.1,
        "revenue": 191.62
    },
    {
        "title": "Zodiac",
        "genre": "Crime,Drama,History",
        "director": "David Fincher",
        "year": 2007,
        "length": 157,
        "rating": 7.7,
        "revenue": 33.05
    },
    {
        "title": "Everybody Wants Some!!",
        "genre": "Comedy",
        "director": "Richard Linklater",
        "year": 2016,
        "length": 117,
        "rating": 7,
        "revenue": 3.37
    },
    {
        "title": "Iron Man Three",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Shane Black",
        "year": 2013,
        "length": 130,
        "rating": 7.2,
        "revenue": 408.99
    },
    {
        "title": "Now You See Me",
        "genre": "Crime,Mystery,Thriller",
        "director": "Louis Leterrier",
        "year": 2013,
        "length": 115,
        "rating": 7.3,
        "revenue": 117.7
    },
    {
        "title": "Sherlock Holmes",
        "genre": "Action,Adventure,Crime",
        "director": "Guy Ritchie",
        "year": 2009,
        "length": 128,
        "rating": 7.6,
        "revenue": 209.02
    },
    {
        "title": "Death Proof",
        "genre": "Thriller",
        "director": "Quentin Tarantino",
        "year": 2007,
        "length": 113,
        "rating": 7.1,
        "revenue": null
    },
    {
        "title": "The Danish Girl",
        "genre": "Biography,Drama,Romance",
        "director": "Tom Hooper",
        "year": 2015,
        "length": 119,
        "rating": 7,
        "revenue": 12.71
    },
    {
        "title": "Hercules",
        "genre": "Action,Adventure",
        "director": "Brett Ratner",
        "year": 2014,
        "length": 98,
        "rating": 6,
        "revenue": 72.66
    },
    {
        "title": "Sucker Punch",
        "genre": "Action,Fantasy",
        "director": "Zack Snyder",
        "year": 2011,
        "length": 110,
        "rating": 6.1,
        "revenue": 36.38
    },
    {
        "title": "Keeping Up with the Joneses",
        "genre": "Action,Comedy",
        "director": "Greg Mottola",
        "year": 2016,
        "length": 105,
        "rating": 5.8,
        "revenue": 14.9
    },
    {
        "title": "Jupiter Ascending",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Lana Wachowski",
        "year": 2015,
        "length": 127,
        "rating": 5.3,
        "revenue": 47.38
    },
    {
        "title": "Masterminds",
        "genre": "Action,Comedy,Crime",
        "director": "Jared Hess",
        "year": 2016,
        "length": 95,
        "rating": 5.8,
        "revenue": 17.36
    },
    {
        "title": "Iris",
        "genre": "Thriller",
        "director": "Jalil Lespert",
        "year": 2016,
        "length": 99,
        "rating": 6.1,
        "revenue": null
    },
    {
        "title": "Busanhaeng",
        "genre": "Action,Drama,Horror",
        "director": "Sang-ho Yeon",
        "year": 2016,
        "length": 118,
        "rating": 7.5,
        "revenue": 2.13
    },
    {
        "title": "Pitch Perfect",
        "genre": "Comedy,Music,Romance",
        "director": "Jason Moore",
        "year": 2012,
        "length": 112,
        "rating": 7.2,
        "revenue": 65
    },
    {
        "title": "Neighbors 2: Sorority Rising",
        "genre": "Comedy",
        "director": "Nicholas Stoller",
        "year": 2016,
        "length": 92,
        "rating": 5.7,
        "revenue": 55.29
    },
    {
        "title": "The Exception",
        "genre": "Drama",
        "director": "David Leveaux",
        "year": 2016,
        "length": 107,
        "rating": 7.7,
        "revenue": null
    },
    {
        "title": "Man of Steel",
        "genre": "Action,Adventure,Fantasy",
        "director": "Zack Snyder",
        "year": 2013,
        "length": 143,
        "rating": 7.1,
        "revenue": 291.02
    },
    {
        "title": "The Choice",
        "genre": "Drama,Romance",
        "director": "Ross Katz",
        "year": 2016,
        "length": 111,
        "rating": 6.6,
        "revenue": 18.71
    },
    {
        "title": "Ice Age: Collision Course",
        "genre": "Animation,Adventure,Comedy",
        "director": "Mike Thurmeier",
        "year": 2016,
        "length": 94,
        "rating": 5.7,
        "revenue": 64.06
    },
    {
        "title": "The Devil Wears Prada",
        "genre": "Comedy,Drama",
        "director": "David Frankel",
        "year": 2006,
        "length": 109,
        "rating": 6.8,
        "revenue": 124.73
    },
    {
        "title": "The Infiltrator",
        "genre": "Biography,Crime,Drama",
        "director": "Brad Furman",
        "year": 2016,
        "length": 127,
        "rating": 7.1,
        "revenue": 15.43
    },
    {
        "title": "There Will Be Blood",
        "genre": "Drama,History",
        "director": "Paul Thomas Anderson",
        "year": 2007,
        "length": 158,
        "rating": 8.1,
        "revenue": 40.22
    },
    {
        "title": "The Equalizer",
        "genre": "Action,Crime,Thriller",
        "director": "Antoine Fuqua",
        "year": 2014,
        "length": 132,
        "rating": 7.2,
        "revenue": 101.53
    },
    {
        "title": "Lone Survivor",
        "genre": "Action,Biography,Drama",
        "director": "Peter Berg",
        "year": 2013,
        "length": 121,
        "rating": 7.5,
        "revenue": 125.07
    },
    {
        "title": "The Cabin in the Woods",
        "genre": "Horror",
        "director": "Drew Goddard",
        "year": 2012,
        "length": 95,
        "rating": 7,
        "revenue": 42.04
    },
    {
        "title": "The House Bunny",
        "genre": "Comedy,Romance",
        "director": "Fred Wolf",
        "year": 2008,
        "length": 97,
        "rating": 5.5,
        "revenue": 48.24
    },
    {
        "title": "She's Out of My League",
        "genre": "Comedy,Romance",
        "director": "Jim Field Smith",
        "year": 2010,
        "length": 104,
        "rating": 6.4,
        "revenue": 31.58
    },
    {
        "title": "Inherent Vice",
        "genre": "Comedy,Crime,Drama",
        "director": "Paul Thomas Anderson",
        "year": 2014,
        "length": 148,
        "rating": 6.7,
        "revenue": 8.09
    },
    {
        "title": "Alice Through the Looking Glass",
        "genre": "Adventure,Family,Fantasy",
        "director": "James Bobin",
        "year": 2016,
        "length": 113,
        "rating": 6.2,
        "revenue": 77.04
    },
    {
        "title": "Vincent N Roxxy",
        "genre": "Crime,Drama,Thriller",
        "director": "Gary Michael Schultz",
        "year": 2016,
        "length": 110,
        "rating": 5.5,
        "revenue": null
    },
    {
        "title": "The Fast and the Furious: Tokyo Drift",
        "genre": "Action,Crime,Thriller",
        "director": "Justin Lin",
        "year": 2006,
        "length": 104,
        "rating": 6,
        "revenue": 62.49
    },
    {
        "title": "How to Be Single",
        "genre": "Comedy,Romance",
        "director": "Christian Ditter",
        "year": 2016,
        "length": 110,
        "rating": 6.1,
        "revenue": 46.81
    },
    {
        "title": "The Blind Side",
        "genre": "Biography,Drama,Sport",
        "director": "John Lee Hancock",
        "year": 2009,
        "length": 129,
        "rating": 7.7,
        "revenue": 255.95
    },
    {
        "title": "La vie d'Adèle",
        "genre": "Drama,Romance",
        "director": "Abdellatif Kechiche",
        "year": 2013,
        "length": 180,
        "rating": 7.8,
        "revenue": 2.2
    },
    {
        "title": "The Babadook",
        "genre": "Drama,Horror",
        "director": "Jennifer Kent",
        "year": 2014,
        "length": 93,
        "rating": 6.8,
        "revenue": 0.92
    },
    {
        "title": "The Hobbit: The Battle of the Five Armies",
        "genre": "Adventure,Fantasy",
        "director": "Peter Jackson",
        "year": 2014,
        "length": 144,
        "rating": 7.4,
        "revenue": 255.11
    },
    {
        "title": "Harry Potter and the Order of the Phoenix",
        "genre": "Adventure,Family,Fantasy",
        "director": "David Yates",
        "year": 2007,
        "length": 138,
        "rating": 7.5,
        "revenue": 292
    },
    {
        "title": "Snowpiercer",
        "genre": "Action,Drama,Sci-Fi",
        "director": "Bong Joon Ho",
        "year": 2013,
        "length": 126,
        "rating": 7,
        "revenue": 4.56
    },
    {
        "title": "The 5th Wave",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "J Blakeson",
        "year": 2016,
        "length": 112,
        "rating": 5.2,
        "revenue": 34.91
    },
    {
        "title": "The Stakelander",
        "genre": "Action,Horror",
        "director": "Dan Berk",
        "year": 2016,
        "length": 81,
        "rating": 5.3,
        "revenue": null
    },
    {
        "title": "The Visit",
        "genre": "Comedy,Horror,Thriller",
        "director": "M. Night Shyamalan",
        "year": 2015,
        "length": 94,
        "rating": 6.2,
        "revenue": 65.07
    },
    {
        "title": "Fast Five",
        "genre": "Action,Crime,Thriller",
        "director": "Justin Lin",
        "year": 2011,
        "length": 131,
        "rating": 7.3,
        "revenue": 209.81
    },
    {
        "title": "Step Up",
        "genre": "Crime,Drama,Music",
        "director": "Anne Fletcher",
        "year": 2006,
        "length": 104,
        "rating": 6.5,
        "revenue": 65.27
    },
    {
        "title": "Lovesong",
        "genre": "Drama",
        "director": "So Yong Kim",
        "year": 2016,
        "length": 84,
        "rating": 6.4,
        "revenue": 0.01
    },
    {
        "title": "RocknRolla",
        "genre": "Action,Crime,Thriller",
        "director": "Guy Ritchie",
        "year": 2008,
        "length": 114,
        "rating": 7.3,
        "revenue": 5.69
    },
    {
        "title": "In Time",
        "genre": "Action,Sci-Fi,Thriller",
        "director": "Andrew Niccol",
        "year": 2011,
        "length": 109,
        "rating": 6.7,
        "revenue": 37.55
    },
    {
        "title": "The Social Network",
        "genre": "Biography,Drama",
        "director": "David Fincher",
        "year": 2010,
        "length": 120,
        "rating": 7.7,
        "revenue": 96.92
    },
    {
        "title": "The Last Witch Hunter",
        "genre": "Action,Adventure,Fantasy",
        "director": "Breck Eisner",
        "year": 2015,
        "length": 106,
        "rating": 6,
        "revenue": 27.36
    },
    {
        "title": "Victor Frankenstein",
        "genre": "Drama,Horror,Sci-Fi",
        "director": "Paul McGuigan",
        "year": 2015,
        "length": 110,
        "rating": 6,
        "revenue": 5.77
    },
    {
        "title": "A Street Cat Named Bob",
        "genre": "Biography,Comedy,Drama",
        "director": "Roger Spottiswoode",
        "year": 2016,
        "length": 103,
        "rating": 7.4,
        "revenue": 0.04
    },
    {
        "title": "Green Room",
        "genre": "Crime,Horror,Thriller",
        "director": "Jeremy Saulnier",
        "year": 2015,
        "length": 95,
        "rating": 7,
        "revenue": 3.22
    },
    {
        "title": "Blackhat",
        "genre": "Crime,Drama,Mystery",
        "director": "Michael Mann",
        "year": 2015,
        "length": 133,
        "rating": 5.4,
        "revenue": 7.1
    },
    {
        "title": "Storks",
        "genre": "Animation,Adventure,Comedy",
        "director": "Nicholas Stoller",
        "year": 2016,
        "length": 87,
        "rating": 6.9,
        "revenue": 72.66
    },
    {
        "title": "American Sniper",
        "genre": "Action,Biography,Drama",
        "director": "Clint Eastwood",
        "year": 2014,
        "length": 133,
        "rating": 7.3,
        "revenue": 350.12
    },
    {
        "title": "Dallas Buyers Club",
        "genre": "Biography,Drama",
        "director": "Jean-Marc Vallée",
        "year": 2013,
        "length": 117,
        "rating": 8,
        "revenue": 27.3
    },
    {
        "title": "Lincoln",
        "genre": "Biography,Drama,History",
        "director": "Steven Spielberg",
        "year": 2012,
        "length": 150,
        "rating": 7.4,
        "revenue": 182.2
    },
    {
        "title": "Rush",
        "genre": "Action,Biography,Drama",
        "director": "Ron Howard",
        "year": 2013,
        "length": 123,
        "rating": 8.1,
        "revenue": 26.9
    },
    {
        "title": "Before I Wake",
        "genre": "Drama,Fantasy,Horror",
        "director": "Mike Flanagan",
        "year": 2016,
        "length": 97,
        "rating": 6.1,
        "revenue": null
    },
    {
        "title": "Silver Linings Playbook",
        "genre": "Comedy,Drama,Romance",
        "director": "David O. Russell",
        "year": 2012,
        "length": 122,
        "rating": 7.8,
        "revenue": 132.09
    },
    {
        "title": "Tracktown",
        "genre": "Drama,Sport",
        "director": "Alexi Pappas",
        "year": 2016,
        "length": 88,
        "rating": 5.9,
        "revenue": null
    },
    {
        "title": "The Fault in Our Stars",
        "genre": "Drama,Romance",
        "director": "Josh Boone",
        "year": 2014,
        "length": 126,
        "rating": 7.8,
        "revenue": 124.87
    },
    {
        "title": "Blended",
        "genre": "Comedy,Romance",
        "director": "Frank Coraci",
        "year": 2014,
        "length": 117,
        "rating": 6.5,
        "revenue": 46.28
    },
    {
        "title": "Fast & Furious",
        "genre": "Action,Crime,Thriller",
        "director": "Justin Lin",
        "year": 2009,
        "length": 107,
        "rating": 6.6,
        "revenue": 155.02
    },
    {
        "title": "Looper",
        "genre": "Action,Crime,Drama",
        "director": "Rian Johnson",
        "year": 2012,
        "length": 119,
        "rating": 7.4,
        "revenue": 66.47
    },
    {
        "title": "White House Down",
        "genre": "Action,Drama,Thriller",
        "director": "Roland Emmerich",
        "year": 2013,
        "length": 131,
        "rating": 6.4,
        "revenue": 73.1
    },
    {
        "title": "Pete's Dragon",
        "genre": "Adventure,Family,Fantasy",
        "director": "David Lowery",
        "year": 2016,
        "length": 102,
        "rating": 6.8,
        "revenue": 76.2
    },
    {
        "title": "Spider-Man 3",
        "genre": "Action,Adventure",
        "director": "Sam Raimi",
        "year": 2007,
        "length": 139,
        "rating": 6.2,
        "revenue": 336.53
    },
    {
        "title": "The Three Musketeers",
        "genre": "Action,Adventure,Romance",
        "director": "Paul W.S. Anderson",
        "year": 2011,
        "length": 110,
        "rating": 5.8,
        "revenue": 20.32
    },
    {
        "title": "Stardust",
        "genre": "Adventure,Family,Fantasy",
        "director": "Matthew Vaughn",
        "year": 2007,
        "length": 127,
        "rating": 7.7,
        "revenue": 38.35
    },
    {
        "title": "American Hustle",
        "genre": "Crime,Drama",
        "director": "David O. Russell",
        "year": 2013,
        "length": 138,
        "rating": 7.3,
        "revenue": 150.12
    },
    {
        "title": "Jennifer's Body",
        "genre": "Comedy,Horror",
        "director": "Karyn Kusama",
        "year": 2009,
        "length": 102,
        "rating": 5.1,
        "revenue": 16.2
    },
    {
        "title": "Midnight in Paris",
        "genre": "Comedy,Fantasy,Romance",
        "director": "Woody Allen",
        "year": 2011,
        "length": 94,
        "rating": 7.7,
        "revenue": 56.82
    },
    {
        "title": "Lady Macbeth",
        "genre": "Drama",
        "director": "William Oldroyd",
        "year": 2016,
        "length": 89,
        "rating": 7.3,
        "revenue": null
    },
    {
        "title": "Joy",
        "genre": "Drama",
        "director": "David O. Russell",
        "year": 2015,
        "length": 124,
        "rating": 6.6,
        "revenue": 56.44
    },
    {
        "title": "The Dressmaker",
        "genre": "Comedy,Drama",
        "director": "Jocelyn Moorhouse",
        "year": 2015,
        "length": 119,
        "rating": 7.1,
        "revenue": 2.02
    },
    {
        "title": "Café Society",
        "genre": "Comedy,Drama,Romance",
        "director": "Woody Allen",
        "year": 2016,
        "length": 96,
        "rating": 6.7,
        "revenue": 11.08
    },
    {
        "title": "Insurgent",
        "genre": "Adventure,Sci-Fi,Thriller",
        "director": "Robert Schwentke",
        "year": 2015,
        "length": 119,
        "rating": 6.3,
        "revenue": 130
    },
    {
        "title": "Seventh Son",
        "genre": "Action,Adventure,Fantasy",
        "director": "Sergei Bodrov",
        "year": 2014,
        "length": 102,
        "rating": 5.5,
        "revenue": 17.18
    },
    {
        "title": "Demain tout commence",
        "genre": "Comedy,Drama",
        "director": "Hugo Gélin",
        "year": 2016,
        "length": 118,
        "rating": 7.4,
        "revenue": null
    },
    {
        "title": "The Theory of Everything",
        "genre": "Biography,Drama,Romance",
        "director": "James Marsh",
        "year": 2014,
        "length": 123,
        "rating": 7.7,
        "revenue": 35.89
    },
    {
        "title": "This Is the End",
        "genre": "Comedy,Fantasy",
        "director": "Evan Goldberg",
        "year": 2013,
        "length": 107,
        "rating": 6.6,
        "revenue": 101.47
    },
    {
        "title": "About Time",
        "genre": "Comedy,Drama,Fantasy",
        "director": "Richard Curtis",
        "year": 2013,
        "length": 123,
        "rating": 7.8,
        "revenue": 15.29
    },
    {
        "title": "Step Brothers",
        "genre": "Comedy",
        "director": "Adam McKay",
        "year": 2008,
        "length": 98,
        "rating": 6.9,
        "revenue": 100.47
    },
    {
        "title": "Clown",
        "genre": "Horror,Thriller",
        "director": "Jon Watts",
        "year": 2014,
        "length": 100,
        "rating": 5.7,
        "revenue": 0.05
    },
    {
        "title": "Star Trek Into Darkness",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "J.J. Abrams",
        "year": 2013,
        "length": 132,
        "rating": 7.8,
        "revenue": 228.76
    },
    {
        "title": "Zombieland",
        "genre": "Adventure,Comedy,Horror",
        "director": "Ruben Fleischer",
        "year": 2009,
        "length": 88,
        "rating": 7.7,
        "revenue": 75.59
    },
    {
        "title": "Hail, Caesar!",
        "genre": "Comedy,Mystery",
        "director": "Ethan Coen",
        "year": 2016,
        "length": 106,
        "rating": 6.3,
        "revenue": 30
    },
    {
        "title": "Slumdog Millionaire",
        "genre": "Drama",
        "director": "Danny Boyle",
        "year": 2008,
        "length": 120,
        "rating": 8,
        "revenue": 141.32
    },
    {
        "title": "The Twilight Saga: Breaking Dawn - Part 2",
        "genre": "Adventure,Drama,Fantasy",
        "director": "Bill Condon",
        "year": 2012,
        "length": 115,
        "rating": 5.5,
        "revenue": 292.3
    },
    {
        "title": "American Wrestler: The Wizard",
        "genre": "Drama,Sport",
        "director": "Alex Ranarivelo",
        "year": 2016,
        "length": 117,
        "rating": 6.9,
        "revenue": null
    },
    {
        "title": "The Amazing Spider-Man",
        "genre": "Action,Adventure",
        "director": "Marc Webb",
        "year": 2012,
        "length": 136,
        "rating": 7,
        "revenue": 262.03
    },
    {
        "title": "Ben-Hur",
        "genre": "Action,Adventure,Drama",
        "director": "Timur Bekmambetov",
        "year": 2016,
        "length": 123,
        "rating": 5.7,
        "revenue": 26.38
    },
    {
        "title": "Sleight",
        "genre": "Action,Drama,Sci-Fi",
        "director": "J.D. Dillard",
        "year": 2016,
        "length": 89,
        "rating": 6,
        "revenue": 3.85
    },
    {
        "title": "The Maze Runner",
        "genre": "Action,Mystery,Sci-Fi",
        "director": "Wes Ball",
        "year": 2014,
        "length": 113,
        "rating": 6.8,
        "revenue": 102.41
    },
    {
        "title": "Criminal",
        "genre": "Action,Crime,Drama",
        "director": "Ariel Vromen",
        "year": 2016,
        "length": 113,
        "rating": 6.3,
        "revenue": 14.27
    },
    {
        "title": "Wanted",
        "genre": "Action,Crime,Fantasy",
        "director": "Timur Bekmambetov",
        "year": 2008,
        "length": 110,
        "rating": 6.7,
        "revenue": 134.57
    },
    {
        "title": "Florence Foster Jenkins",
        "genre": "Biography,Comedy,Drama",
        "director": "Stephen Frears",
        "year": 2016,
        "length": 111,
        "rating": 6.9,
        "revenue": 27.37
    },
    {
        "title": "Collide",
        "genre": "Action,Crime,Thriller",
        "director": "Eran Creevy",
        "year": 2016,
        "length": 99,
        "rating": 5.7,
        "revenue": 2.2
    },
    {
        "title": "Black Mass",
        "genre": "Biography,Crime,Drama",
        "director": "Scott Cooper",
        "year": 2015,
        "length": 123,
        "rating": 6.9,
        "revenue": 62.56
    },
    {
        "title": "Creed",
        "genre": "Drama,Sport",
        "director": "Ryan Coogler",
        "year": 2015,
        "length": 133,
        "rating": 7.6,
        "revenue": 109.71
    },
    {
        "title": "Swiss Army Man",
        "genre": "Adventure,Comedy,Drama",
        "director": "Dan Kwan",
        "year": 2016,
        "length": 97,
        "rating": 7.1,
        "revenue": 4.21
    },
    {
        "title": "The Expendables 3",
        "genre": "Action,Adventure,Thriller",
        "director": "Patrick Hughes",
        "year": 2014,
        "length": 126,
        "rating": 6.1,
        "revenue": 39.29
    },
    {
        "title": "What We Do in the Shadows",
        "genre": "Comedy,Fantasy,Horror",
        "director": "Jemaine Clement",
        "year": 2014,
        "length": 86,
        "rating": 7.6,
        "revenue": 3.33
    },
    {
        "title": "Southpaw",
        "genre": "Drama,Sport",
        "director": "Antoine Fuqua",
        "year": 2015,
        "length": 124,
        "rating": 7.4,
        "revenue": 52.42
    },
    {
        "title": "Hush",
        "genre": "Horror,Thriller",
        "director": "Mike Flanagan",
        "year": 2016,
        "length": 81,
        "rating": 6.6,
        "revenue": null
    },
    {
        "title": "Bridge of Spies",
        "genre": "Drama,History,Thriller",
        "director": "Steven Spielberg",
        "year": 2015,
        "length": 142,
        "rating": 7.6,
        "revenue": 72.31
    },
    {
        "title": "The Lego Movie",
        "genre": "Animation,Action,Adventure",
        "director": "Phil Lord",
        "year": 2014,
        "length": 100,
        "rating": 7.8,
        "revenue": 257.76
    },
    {
        "title": "Everest",
        "genre": "Action,Adventure,Drama",
        "director": "Baltasar Kormákur",
        "year": 2015,
        "length": 121,
        "rating": 7.1,
        "revenue": 43.25
    },
    {
        "title": "Pixels",
        "genre": "Action,Comedy,Family",
        "director": "Chris Columbus",
        "year": 2015,
        "length": 105,
        "rating": 5.6,
        "revenue": 78.75
    },
    {
        "title": "Robin Hood",
        "genre": "Action,Adventure,Drama",
        "director": "Ridley Scott",
        "year": 2010,
        "length": 140,
        "rating": 6.7,
        "revenue": 105.22
    },
    {
        "title": "The Wolverine",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "James Mangold",
        "year": 2013,
        "length": 126,
        "rating": 6.7,
        "revenue": 132.55
    },
    {
        "title": "John Carter",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Andrew Stanton",
        "year": 2012,
        "length": 132,
        "rating": 6.6,
        "revenue": 73.06
    },
    {
        "title": "Keanu",
        "genre": "Action,Comedy",
        "director": "Peter Atencio",
        "year": 2016,
        "length": 100,
        "rating": 6.3,
        "revenue": 20.57
    },
    {
        "title": "The Gunman",
        "genre": "Action,Crime,Drama",
        "director": "Pierre Morel",
        "year": 2015,
        "length": 115,
        "rating": 5.8,
        "revenue": 10.64
    },
    {
        "title": "Steve Jobs",
        "genre": "Biography,Drama",
        "director": "Danny Boyle",
        "year": 2015,
        "length": 122,
        "rating": 7.2,
        "revenue": 17.75
    },
    {
        "title": "Whisky Galore",
        "genre": "Comedy,Romance",
        "director": "Gillies MacKinnon",
        "year": 2016,
        "length": 98,
        "rating": 5,
        "revenue": null
    },
    {
        "title": "Grown Ups 2",
        "genre": "Comedy",
        "director": "Dennis Dugan",
        "year": 2013,
        "length": 101,
        "rating": 5.4,
        "revenue": 133.67
    },
    {
        "title": "The Age of Adaline",
        "genre": "Drama,Fantasy,Romance",
        "director": "Lee Toland Krieger",
        "year": 2015,
        "length": 112,
        "rating": 7.2,
        "revenue": 42.48
    },
    {
        "title": "The Incredible Hulk",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Louis Leterrier",
        "year": 2008,
        "length": 112,
        "rating": 6.8,
        "revenue": 134.52
    },
    {
        "title": "Couples Retreat",
        "genre": "Comedy",
        "director": "Peter Billingsley",
        "year": 2009,
        "length": 113,
        "rating": 5.5,
        "revenue": 109.18
    },
    {
        "title": "Absolutely Anything",
        "genre": "Comedy,Sci-Fi",
        "director": "Terry Jones",
        "year": 2015,
        "length": 85,
        "rating": 6,
        "revenue": null
    },
    {
        "title": "Magic Mike",
        "genre": "Comedy,Drama",
        "director": "Steven Soderbergh",
        "year": 2012,
        "length": 110,
        "rating": 6.1,
        "revenue": 113.71
    },
    {
        "title": "Minions",
        "genre": "Animation,Action,Adventure",
        "director": "Kyle Balda",
        "year": 2015,
        "length": 91,
        "rating": 6.4,
        "revenue": 336.03
    },
    {
        "title": "The Black Room",
        "genre": "Horror",
        "director": "Rolfe Kanefsky",
        "year": 2016,
        "length": 91,
        "rating": 3.9,
        "revenue": null
    },
    {
        "title": "Bronson",
        "genre": "Action,Biography,Crime",
        "director": "Nicolas Winding Refn",
        "year": 2008,
        "length": 92,
        "rating": 7.1,
        "revenue": 0.1
    },
    {
        "title": "Despicable Me",
        "genre": "Animation,Adventure,Comedy",
        "director": "Pierre Coffin",
        "year": 2010,
        "length": 95,
        "rating": 7.7,
        "revenue": 251.5
    },
    {
        "title": "The Best of Me",
        "genre": "Drama,Romance",
        "director": "Michael Hoffman",
        "year": 2014,
        "length": 118,
        "rating": 6.7,
        "revenue": 26.76
    },
    {
        "title": "The Invitation",
        "genre": "Drama,Mystery,Thriller",
        "director": "Karyn Kusama",
        "year": 2015,
        "length": 100,
        "rating": 6.7,
        "revenue": 0.23
    },
    {
        "title": "Zero Dark Thirty",
        "genre": "Drama,History,Thriller",
        "director": "Kathryn Bigelow",
        "year": 2012,
        "length": 157,
        "rating": 7.4,
        "revenue": 95.72
    },
    {
        "title": "Tangled",
        "genre": "Animation,Adventure,Comedy",
        "director": "Nathan Greno",
        "year": 2010,
        "length": 100,
        "rating": 7.8,
        "revenue": 200.81
    },
    {
        "title": "The Hunger Games: Mockingjay - Part 2",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Francis Lawrence",
        "year": 2015,
        "length": 137,
        "rating": 6.6,
        "revenue": 281.67
    },
    {
        "title": "Vacation",
        "genre": "Adventure,Comedy",
        "director": "John Francis Daley",
        "year": 2015,
        "length": 99,
        "rating": 6.1,
        "revenue": 58.88
    },
    {
        "title": "Taken",
        "genre": "Action,Thriller",
        "director": "Pierre Morel",
        "year": 2008,
        "length": 93,
        "rating": 7.8,
        "revenue": 145
    },
    {
        "title": "Pitch Perfect 2",
        "genre": "Comedy,Music",
        "director": "Elizabeth Banks",
        "year": 2015,
        "length": 115,
        "rating": 6.5,
        "revenue": 183.44
    },
    {
        "title": "Monsters University",
        "genre": "Animation,Adventure,Comedy",
        "director": "Dan Scanlon",
        "year": 2013,
        "length": 104,
        "rating": 7.3,
        "revenue": 268.49
    },
    {
        "title": "Elle",
        "genre": "Crime,Drama,Thriller",
        "director": "Paul Verhoeven",
        "year": 2016,
        "length": 130,
        "rating": 7.2,
        "revenue": null
    },
    {
        "title": "Mechanic: Resurrection",
        "genre": "Action,Adventure,Crime",
        "director": "Dennis Gansel",
        "year": 2016,
        "length": 98,
        "rating": 5.6,
        "revenue": 21.2
    },
    {
        "title": "Tusk",
        "genre": "Comedy,Drama,Horror",
        "director": "Kevin Smith",
        "year": 2014,
        "length": 102,
        "rating": 5.4,
        "revenue": 1.82
    },
    {
        "title": "The Headhunter's Calling",
        "genre": "Drama",
        "director": "Mark Williams",
        "year": 2016,
        "length": 108,
        "rating": 6.9,
        "revenue": null
    },
    {
        "title": "Atonement",
        "genre": "Drama,Mystery,Romance",
        "director": "Joe Wright",
        "year": 2007,
        "length": 123,
        "rating": 7.8,
        "revenue": 50.92
    },
    {
        "title": "Harry Potter and the Deathly Hallows: Part 1",
        "genre": "Adventure,Family,Fantasy",
        "director": "David Yates",
        "year": 2010,
        "length": 146,
        "rating": 7.7,
        "revenue": 294.98
    },
    {
        "title": "Shame",
        "genre": "Drama",
        "director": "Steve McQueen",
        "year": 2011,
        "length": 101,
        "rating": 7.2,
        "revenue": 4
    },
    {
        "title": "Hanna",
        "genre": "Action,Drama,Thriller",
        "director": "Joe Wright",
        "year": 2011,
        "length": 111,
        "rating": 6.8,
        "revenue": 40.25
    },
    {
        "title": "The Babysitters",
        "genre": "Drama",
        "director": "David Ross",
        "year": 2007,
        "length": 88,
        "rating": 5.7,
        "revenue": 0.04
    },
    {
        "title": "Pride and Prejudice and Zombies",
        "genre": "Action,Horror,Romance",
        "director": "Burr Steers",
        "year": 2016,
        "length": 108,
        "rating": 5.8,
        "revenue": 10.91
    },
    {
        "title": "300: Rise of an Empire",
        "genre": "Action,Drama,Fantasy",
        "director": "Noam Murro",
        "year": 2014,
        "length": 102,
        "rating": 6.2,
        "revenue": 106.37
    },
    {
        "title": "London Has Fallen",
        "genre": "Action,Crime,Drama",
        "director": "Babak Najafi",
        "year": 2016,
        "length": 99,
        "rating": 5.9,
        "revenue": 62.4
    },
    {
        "title": "The Curious Case of Benjamin Button",
        "genre": "Drama,Fantasy,Romance",
        "director": "David Fincher",
        "year": 2008,
        "length": 166,
        "rating": 7.8,
        "revenue": 127.49
    },
    {
        "title": "Sin City: A Dame to Kill For",
        "genre": "Action,Crime,Thriller",
        "director": "Frank Miller",
        "year": 2014,
        "length": 102,
        "rating": 6.5,
        "revenue": 13.75
    },
    {
        "title": "The Bourne Ultimatum",
        "genre": "Action,Mystery,Thriller",
        "director": "Paul Greengrass",
        "year": 2007,
        "length": 115,
        "rating": 8.1,
        "revenue": 227.14
    },
    {
        "title": "Srpski film",
        "genre": "Horror,Mystery,Thriller",
        "director": "Srdjan Spasojevic",
        "year": 2010,
        "length": 104,
        "rating": 5.2,
        "revenue": null
    },
    {
        "title": "The Purge: Election Year",
        "genre": "Action,Horror,Sci-Fi",
        "director": "James DeMonaco",
        "year": 2016,
        "length": 109,
        "rating": 6,
        "revenue": 79
    },
    {
        "title": "3 Idiots",
        "genre": "Comedy,Drama",
        "director": "Rajkumar Hirani",
        "year": 2009,
        "length": 170,
        "rating": 8.4,
        "revenue": 6.52
    },
    {
        "title": "Zoolander 2",
        "genre": "Comedy",
        "director": "Ben Stiller",
        "year": 2016,
        "length": 102,
        "rating": 4.7,
        "revenue": 28.84
    },
    {
        "title": "World War Z",
        "genre": "Action,Adventure,Horror",
        "director": "Marc Forster",
        "year": 2013,
        "length": 116,
        "rating": 7,
        "revenue": 202.35
    },
    {
        "title": "Mission: Impossible - Ghost Protocol",
        "genre": "Action,Adventure,Thriller",
        "director": "Brad Bird",
        "year": 2011,
        "length": 132,
        "rating": 7.4,
        "revenue": 209.36
    },
    {
        "title": "Let Me Make You a Martyr",
        "genre": "Action,Crime,Drama",
        "director": "Corey Asraf",
        "year": 2016,
        "length": 102,
        "rating": 6.4,
        "revenue": null
    },
    {
        "title": "Filth",
        "genre": "Comedy,Crime,Drama",
        "director": "Jon S. Baird",
        "year": 2013,
        "length": 97,
        "rating": 7.1,
        "revenue": 0.03
    },
    {
        "title": "The Longest Ride",
        "genre": "Drama,Romance",
        "director": "George Tillman Jr.",
        "year": 2015,
        "length": 123,
        "rating": 7.1,
        "revenue": 37.43
    },
    {
        "title": "The imposible",
        "genre": "Drama,Thriller",
        "director": "J.A. Bayona",
        "year": 2012,
        "length": 114,
        "rating": 7.6,
        "revenue": 19
    },
    {
        "title": "Kick-Ass 2",
        "genre": "Action,Comedy,Crime",
        "director": "Jeff Wadlow",
        "year": 2013,
        "length": 103,
        "rating": 6.6,
        "revenue": 28.75
    },
    {
        "title": "Folk Hero & Funny Guy",
        "genre": "Comedy",
        "director": "Jeff Grace",
        "year": 2016,
        "length": 88,
        "rating": 5.6,
        "revenue": null
    },
    {
        "title": "Oz the Great and Powerful",
        "genre": "Adventure,Family,Fantasy",
        "director": "Sam Raimi",
        "year": 2013,
        "length": 130,
        "rating": 6.3,
        "revenue": 234.9
    },
    {
        "title": "Brooklyn",
        "genre": "Drama,Romance",
        "director": "John Crowley",
        "year": 2015,
        "length": 117,
        "rating": 7.5,
        "revenue": 38.32
    },
    {
        "title": "Coraline",
        "genre": "Animation,Family,Fantasy",
        "director": "Henry Selick",
        "year": 2009,
        "length": 100,
        "rating": 7.7,
        "revenue": 75.28
    },
    {
        "title": "Blue Valentine",
        "genre": "Drama,Romance",
        "director": "Derek Cianfrance",
        "year": 2010,
        "length": 112,
        "rating": 7.4,
        "revenue": 9.7
    },
    {
        "title": "The Thinning",
        "genre": "Thriller",
        "director": "Michael J. Gallagher",
        "year": 2016,
        "length": 81,
        "rating": 6,
        "revenue": null
    },
    {
        "title": "Silent Hill",
        "genre": "Adventure,Horror,Mystery",
        "director": "Christophe Gans",
        "year": 2006,
        "length": 125,
        "rating": 6.6,
        "revenue": 46.98
    },
    {
        "title": "Dredd",
        "genre": "Action,Sci-Fi",
        "director": "Pete Travis",
        "year": 2012,
        "length": 95,
        "rating": 7.1,
        "revenue": 13.4
    },
    {
        "title": "Hunt for the Wilderpeople",
        "genre": "Adventure,Comedy,Drama",
        "director": "Taika Waititi",
        "year": 2016,
        "length": 101,
        "rating": 7.9,
        "revenue": 5.2
    },
    {
        "title": "Big Hero 6",
        "genre": "Animation,Action,Adventure",
        "director": "Don Hall",
        "year": 2014,
        "length": 102,
        "rating": 7.8,
        "revenue": 222.49
    },
    {
        "title": "Carrie",
        "genre": "Drama,Horror",
        "director": "Kimberly Peirce",
        "year": 2013,
        "length": 100,
        "rating": 5.9,
        "revenue": 35.27
    },
    {
        "title": "Iron Man 2",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Jon Favreau",
        "year": 2010,
        "length": 124,
        "rating": 7,
        "revenue": 312.06
    },
    {
        "title": "Demolition",
        "genre": "Comedy,Drama",
        "director": "Jean-Marc Vallée",
        "year": 2015,
        "length": 101,
        "rating": 7,
        "revenue": 1.82
    },
    {
        "title": "Pandorum",
        "genre": "Action,Horror,Mystery",
        "director": "Christian Alvart",
        "year": 2009,
        "length": 108,
        "rating": 6.8,
        "revenue": 10.33
    },
    {
        "title": "Olympus Has Fallen",
        "genre": "Action,Thriller",
        "director": "Antoine Fuqua",
        "year": 2013,
        "length": 119,
        "rating": 6.5,
        "revenue": 98.9
    },
    {
        "title": "I Am Number Four",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "D.J. Caruso",
        "year": 2011,
        "length": 109,
        "rating": 6.1,
        "revenue": 55.09
    },
    {
        "title": "Jagten",
        "genre": "Drama",
        "director": "Thomas Vinterberg",
        "year": 2012,
        "length": 115,
        "rating": 8.3,
        "revenue": 0.61
    },
    {
        "title": "The Proposal",
        "genre": "Comedy,Drama,Romance",
        "director": "Anne Fletcher",
        "year": 2009,
        "length": 108,
        "rating": 6.7,
        "revenue": 163.95
    },
    {
        "title": "Get Hard",
        "genre": "Comedy,Crime",
        "director": "Etan Cohen",
        "year": 2015,
        "length": 100,
        "rating": 6,
        "revenue": 90.35
    },
    {
        "title": "Just Go with It",
        "genre": "Comedy,Romance",
        "director": "Dennis Dugan",
        "year": 2011,
        "length": 117,
        "rating": 6.4,
        "revenue": 103.03
    },
    {
        "title": "Revolutionary Road",
        "genre": "Drama,Romance",
        "director": "Sam Mendes",
        "year": 2008,
        "length": 119,
        "rating": 7.3,
        "revenue": 22.88
    },
    {
        "title": "The Town",
        "genre": "Crime,Drama,Thriller",
        "director": "Ben Affleck",
        "year": 2010,
        "length": 125,
        "rating": 7.6,
        "revenue": 92.17
    },
    {
        "title": "The Boy",
        "genre": "Horror,Mystery,Thriller",
        "director": "William Brent Bell",
        "year": 2016,
        "length": 97,
        "rating": 6,
        "revenue": 35.79
    },
    {
        "title": "Denial",
        "genre": "Biography,Drama",
        "director": "Mick Jackson",
        "year": 2016,
        "length": 109,
        "rating": 6.6,
        "revenue": 4.07
    },
    {
        "title": "Predestination",
        "genre": "Drama,Mystery,Sci-Fi",
        "director": "Michael Spierig",
        "year": 2014,
        "length": 97,
        "rating": 7.5,
        "revenue": null
    },
    {
        "title": "Goosebumps",
        "genre": "Adventure,Comedy,Family",
        "director": "Rob Letterman",
        "year": 2015,
        "length": 103,
        "rating": 6.3,
        "revenue": 80.02
    },
    {
        "title": "Sherlock Holmes: A Game of Shadows",
        "genre": "Action,Adventure,Crime",
        "director": "Guy Ritchie",
        "year": 2011,
        "length": 129,
        "rating": 7.5,
        "revenue": 186.83
    },
    {
        "title": "Salt",
        "genre": "Action,Crime,Mystery",
        "director": "Phillip Noyce",
        "year": 2010,
        "length": 100,
        "rating": 6.4,
        "revenue": 118.31
    },
    {
        "title": "Enemy",
        "genre": "Mystery,Thriller",
        "director": "Denis Villeneuve",
        "year": 2013,
        "length": 91,
        "rating": 6.9,
        "revenue": 1.01
    },
    {
        "title": "District 9",
        "genre": "Action,Sci-Fi,Thriller",
        "director": "Neill Blomkamp",
        "year": 2009,
        "length": 112,
        "rating": 8,
        "revenue": 115.65
    },
    {
        "title": "The Other Guys",
        "genre": "Action,Comedy,Crime",
        "director": "Adam McKay",
        "year": 2010,
        "length": 107,
        "rating": 6.7,
        "revenue": 119.22
    },
    {
        "title": "American Gangster",
        "genre": "Biography,Crime,Drama",
        "director": "Ridley Scott",
        "year": 2007,
        "length": 157,
        "rating": 7.8,
        "revenue": 130.13
    },
    {
        "title": "Marie Antoinette",
        "genre": "Biography,Drama,History",
        "director": "Sofia Coppola",
        "year": 2006,
        "length": 123,
        "rating": 6.4,
        "revenue": 15.96
    },
    {
        "title": "2012",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Roland Emmerich",
        "year": 2009,
        "length": 158,
        "rating": 5.8,
        "revenue": 166.11
    },
    {
        "title": "Harry Potter and the Half-Blood Prince",
        "genre": "Adventure,Family,Fantasy",
        "director": "David Yates",
        "year": 2009,
        "length": 153,
        "rating": 7.5,
        "revenue": 301.96
    },
    {
        "title": "Argo",
        "genre": "Biography,Drama,History",
        "director": "Ben Affleck",
        "year": 2012,
        "length": 120,
        "rating": 7.7,
        "revenue": 136.02
    },
    {
        "title": "Eddie the Eagle",
        "genre": "Biography,Comedy,Drama",
        "director": "Dexter Fletcher",
        "year": 2016,
        "length": 106,
        "rating": 7.4,
        "revenue": 15.79
    },
    {
        "title": "The Lives of Others",
        "genre": "Drama,Thriller",
        "director": "Florian Henckel von Donnersmarck",
        "year": 2006,
        "length": 137,
        "rating": 8.5,
        "revenue": 11.28
    },
    {
        "title": "Pet",
        "genre": "Horror,Thriller",
        "director": "Carles Torrens",
        "year": 2016,
        "length": 94,
        "rating": 5.7,
        "revenue": null
    },
    {
        "title": "Paint It Black",
        "genre": "Drama",
        "director": "Amber Tamblyn",
        "year": 2016,
        "length": 96,
        "rating": 8.3,
        "revenue": null
    },
    {
        "title": "Macbeth",
        "genre": "Drama,War",
        "director": "Justin Kurzel",
        "year": 2015,
        "length": 113,
        "rating": 6.7,
        "revenue": null
    },
    {
        "title": "Forgetting Sarah Marshall",
        "genre": "Comedy,Drama,Romance",
        "director": "Nicholas Stoller",
        "year": 2008,
        "length": 111,
        "rating": 7.2,
        "revenue": 62.88
    },
    {
        "title": "The Giver",
        "genre": "Drama,Romance,Sci-Fi",
        "director": "Phillip Noyce",
        "year": 2014,
        "length": 97,
        "rating": 6.5,
        "revenue": 45.09
    },
    {
        "title": "Triple 9",
        "genre": "Action,Crime,Drama",
        "director": "John Hillcoat",
        "year": 2016,
        "length": 115,
        "rating": 6.3,
        "revenue": 12.63
    },
    {
        "title": "Perfetti sconosciuti",
        "genre": "Comedy,Drama",
        "director": "Paolo Genovese",
        "year": 2016,
        "length": 97,
        "rating": 7.7,
        "revenue": null
    },
    {
        "title": "Angry Birds",
        "genre": "Animation,Action,Adventure",
        "director": "Clay Kaytis",
        "year": 2016,
        "length": 97,
        "rating": 6.3,
        "revenue": 107.51
    },
    {
        "title": "Moonrise Kingdom",
        "genre": "Adventure,Comedy,Drama",
        "director": "Wes Anderson",
        "year": 2012,
        "length": 94,
        "rating": 7.8,
        "revenue": 45.51
    },
    {
        "title": "Hairspray",
        "genre": "Comedy,Drama,Family",
        "director": "Adam Shankman",
        "year": 2007,
        "length": 117,
        "rating": 6.7,
        "revenue": 118.82
    },
    {
        "title": "Safe Haven",
        "genre": "Drama,Romance,Thriller",
        "director": "Lasse Hallström",
        "year": 2013,
        "length": 115,
        "rating": 6.7,
        "revenue": 71.35
    },
    {
        "title": "Focus",
        "genre": "Comedy,Crime,Drama",
        "director": "Glenn Ficarra",
        "year": 2015,
        "length": 105,
        "rating": 6.6,
        "revenue": 53.85
    },
    {
        "title": "Ratatouille",
        "genre": "Animation,Comedy,Family",
        "director": "Brad Bird",
        "year": 2007,
        "length": 111,
        "rating": 8,
        "revenue": 206.44
    },
    {
        "title": "Stake Land",
        "genre": "Drama,Horror,Sci-Fi",
        "director": "Jim Mickle",
        "year": 2010,
        "length": 98,
        "rating": 6.5,
        "revenue": 0.02
    },
    {
        "title": "The Book of Eli",
        "genre": "Action,Adventure,Drama",
        "director": "Albert Hughes",
        "year": 2010,
        "length": 118,
        "rating": 6.9,
        "revenue": 94.82
    },
    {
        "title": "Cloverfield",
        "genre": "Action,Horror,Sci-Fi",
        "director": "Matt Reeves",
        "year": 2008,
        "length": 85,
        "rating": 7,
        "revenue": 80.03
    },
    {
        "title": "Point Break",
        "genre": "Action,Crime,Sport",
        "director": "Ericson Core",
        "year": 2015,
        "length": 114,
        "rating": 5.3,
        "revenue": 28.77
    },
    {
        "title": "Under the Skin",
        "genre": "Drama,Horror,Sci-Fi",
        "director": "Jonathan Glazer",
        "year": 2013,
        "length": 108,
        "rating": 6.3,
        "revenue": 2.61
    },
    {
        "title": "I Am Legend",
        "genre": "Drama,Horror,Sci-Fi",
        "director": "Francis Lawrence",
        "year": 2007,
        "length": 101,
        "rating": 7.2,
        "revenue": 256.39
    },
    {
        "title": "Men in Black 3",
        "genre": "Action,Adventure,Comedy",
        "director": "Barry Sonnenfeld",
        "year": 2012,
        "length": 106,
        "rating": 6.8,
        "revenue": 179.02
    },
    {
        "title": "Super 8",
        "genre": "Mystery,Sci-Fi,Thriller",
        "director": "J.J. Abrams",
        "year": 2011,
        "length": 112,
        "rating": 7.1,
        "revenue": 126.98
    },
    {
        "title": "Law Abiding Citizen",
        "genre": "Crime,Drama,Thriller",
        "director": "F. Gary Gray",
        "year": 2009,
        "length": 109,
        "rating": 7.4,
        "revenue": 73.34
    },
    {
        "title": "Up",
        "genre": "Animation,Adventure,Comedy",
        "director": "Pete Docter",
        "year": 2009,
        "length": 96,
        "rating": 8.3,
        "revenue": 292.98
    },
    {
        "title": "Maze Runner: The Scorch Trials",
        "genre": "Action,Sci-Fi,Thriller",
        "director": "Wes Ball",
        "year": 2015,
        "length": 131,
        "rating": 6.3,
        "revenue": 81.69
    },
    {
        "title": "Carol",
        "genre": "Drama,Romance",
        "director": "Todd Haynes",
        "year": 2015,
        "length": 118,
        "rating": 7.2,
        "revenue": 0.25
    },
    {
        "title": "Imperium",
        "genre": "Crime,Drama,Thriller",
        "director": "Daniel Ragussis",
        "year": 2016,
        "length": 109,
        "rating": 6.5,
        "revenue": null
    },
    {
        "title": "Youth",
        "genre": "Comedy,Drama,Music",
        "director": "Paolo Sorrentino",
        "year": 2015,
        "length": 124,
        "rating": 7.3,
        "revenue": 2.7
    },
    {
        "title": "Mr. Nobody",
        "genre": "Drama,Fantasy,Romance",
        "director": "Jaco Van Dormael",
        "year": 2009,
        "length": 141,
        "rating": 7.9,
        "revenue": null
    },
    {
        "title": "City of Tiny Lights",
        "genre": "Crime,Drama,Thriller",
        "director": "Pete Travis",
        "year": 2016,
        "length": 110,
        "rating": 5.7,
        "revenue": null
    },
    {
        "title": "Savages",
        "genre": "Crime,Drama,Thriller",
        "director": "Oliver Stone",
        "year": 2012,
        "length": 131,
        "rating": 6.5,
        "revenue": 47.31
    },
    {
        "title": "(500) Days of Summer",
        "genre": "Comedy,Drama,Romance",
        "director": "Marc Webb",
        "year": 2009,
        "length": 95,
        "rating": 7.7,
        "revenue": 32.39
    },
    {
        "title": "Movie 43",
        "genre": "Comedy,Romance",
        "director": "Elizabeth Banks",
        "year": 2013,
        "length": 94,
        "rating": 4.3,
        "revenue": 8.83
    },
    {
        "title": "Gravity",
        "genre": "Drama,Sci-Fi,Thriller",
        "director": "Alfonso Cuarón",
        "year": 2013,
        "length": 91,
        "rating": 7.8,
        "revenue": 274.08
    },
    {
        "title": "The Boy in the Striped Pyjamas",
        "genre": "Drama,War",
        "director": "Mark Herman",
        "year": 2008,
        "length": 94,
        "rating": 7.8,
        "revenue": 9.03
    },
    {
        "title": "Shooter",
        "genre": "Action,Crime,Drama",
        "director": "Antoine Fuqua",
        "year": 2007,
        "length": 124,
        "rating": 7.2,
        "revenue": 46.98
    },
    {
        "title": "The Happening",
        "genre": "Sci-Fi,Thriller",
        "director": "M. Night Shyamalan",
        "year": 2008,
        "length": 91,
        "rating": 5,
        "revenue": 64.51
    },
    {
        "title": "Bone Tomahawk",
        "genre": "Adventure,Drama,Horror",
        "director": "S. Craig Zahler",
        "year": 2015,
        "length": 132,
        "rating": 7.1,
        "revenue": 66.01
    },
    {
        "title": "Magic Mike XXL",
        "genre": "Comedy,Drama,Music",
        "director": "Gregory Jacobs",
        "year": 2015,
        "length": 115,
        "rating": 5.7,
        "revenue": null
    },
    {
        "title": "Easy A",
        "genre": "Comedy,Drama,Romance",
        "director": "Will Gluck",
        "year": 2010,
        "length": 92,
        "rating": 7.1,
        "revenue": 58.4
    },
    {
        "title": "Exodus: Gods and Kings",
        "genre": "Action,Adventure,Drama",
        "director": "Ridley Scott",
        "year": 2014,
        "length": 150,
        "rating": 6,
        "revenue": 65.01
    },
    {
        "title": "Chappie",
        "genre": "Action,Crime,Drama",
        "director": "Neill Blomkamp",
        "year": 2015,
        "length": 120,
        "rating": 6.9,
        "revenue": 31.57
    },
    {
        "title": "The Hobbit: The Desolation of Smaug",
        "genre": "Adventure,Fantasy",
        "director": "Peter Jackson",
        "year": 2013,
        "length": 161,
        "rating": 7.9,
        "revenue": 258.36
    },
    {
        "title": "Half of a Yellow Sun",
        "genre": "Drama,Romance",
        "director": "Biyi Bandele",
        "year": 2013,
        "length": 111,
        "rating": 6.2,
        "revenue": 0.05
    },
    {
        "title": "Anthropoid",
        "genre": "Biography,History,Thriller",
        "director": "Sean Ellis",
        "year": 2016,
        "length": 120,
        "rating": 7.2,
        "revenue": 2.96
    },
    {
        "title": "The Counselor",
        "genre": "Crime,Drama,Thriller",
        "director": "Ridley Scott",
        "year": 2013,
        "length": 117,
        "rating": 5.3,
        "revenue": 16.97
    },
    {
        "title": "Viking",
        "genre": "Action,Drama,History",
        "director": "Andrey Kravchuk",
        "year": 2016,
        "length": 133,
        "rating": 4.7,
        "revenue": 23.05
    },
    {
        "title": "Whiskey Tango Foxtrot",
        "genre": "Biography,Comedy,Drama",
        "director": "Glenn Ficarra",
        "year": 2016,
        "length": 112,
        "rating": 6.6,
        "revenue": null
    },
    {
        "title": "Trust",
        "genre": "Crime,Drama,Thriller",
        "director": "David Schwimmer",
        "year": 2010,
        "length": 106,
        "rating": 7,
        "revenue": 0.06
    },
    {
        "title": "Birth of the Dragon",
        "genre": "Action,Biography,Drama",
        "director": "George Nolfi",
        "year": 2016,
        "length": 103,
        "rating": 3.9,
        "revenue": 93.05
    },
    {
        "title": "Elysium",
        "genre": "Action,Drama,Sci-Fi",
        "director": "Neill Blomkamp",
        "year": 2013,
        "length": 109,
        "rating": 6.6,
        "revenue": null
    },
    {
        "title": "The Green Inferno",
        "genre": "Adventure,Horror",
        "director": "Eli Roth",
        "year": 2013,
        "length": 100,
        "rating": 5.4,
        "revenue": 7.19
    },
    {
        "title": "Godzilla",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Gareth Edwards",
        "year": 2014,
        "length": 123,
        "rating": 6.4,
        "revenue": 200.66
    },
    {
        "title": "The Bourne Legacy",
        "genre": "Action,Adventure,Mystery",
        "director": "Tony Gilroy",
        "year": 2012,
        "length": 135,
        "rating": 6.7,
        "revenue": 113.17
    },
    {
        "title": "A Good Year",
        "genre": "Comedy,Drama,Romance",
        "director": "Ridley Scott",
        "year": 2006,
        "length": 117,
        "rating": 6.9,
        "revenue": 7.46
    },
    {
        "title": "Friend Request",
        "genre": "Horror,Thriller",
        "director": "Simon Verhoeven",
        "year": 2016,
        "length": 92,
        "rating": 5.4,
        "revenue": 64.03
    },
    {
        "title": "Deja Vu",
        "genre": "Action,Sci-Fi,Thriller",
        "director": "Tony Scott",
        "year": 2006,
        "length": 126,
        "rating": 7,
        "revenue": null
    },
    {
        "title": "Lucy",
        "genre": "Action,Sci-Fi,Thriller",
        "director": "Luc Besson",
        "year": 2014,
        "length": 89,
        "rating": 6.4,
        "revenue": 126.55
    },
    {
        "title": "A Quiet Passion",
        "genre": "Biography,Drama",
        "director": "Terence Davies",
        "year": 2016,
        "length": 125,
        "rating": 7.2,
        "revenue": 1.08
    },
    {
        "title": "Need for Speed",
        "genre": "Action,Crime,Drama",
        "director": "Scott Waugh",
        "year": 2014,
        "length": 132,
        "rating": 6.5,
        "revenue": 43.57
    },
    {
        "title": "Jack Reacher",
        "genre": "Action,Crime,Mystery",
        "director": "Christopher McQuarrie",
        "year": 2012,
        "length": 130,
        "rating": 7,
        "revenue": 58.68
    },
    {
        "title": "The Do-Over",
        "genre": "Action,Adventure,Comedy",
        "director": "Steven Brill",
        "year": 2016,
        "length": 108,
        "rating": 5.7,
        "revenue": 0.54
    },
    {
        "title": "True Crimes",
        "genre": "Crime,Drama,Thriller",
        "director": "Alexandros Avranas",
        "year": 2016,
        "length": 92,
        "rating": 7.3,
        "revenue": null
    },
    {
        "title": "American Pastoral",
        "genre": "Crime,Drama",
        "director": "Ewan McGregor",
        "year": 2016,
        "length": 108,
        "rating": 6.1,
        "revenue": null
    },
    {
        "title": "The Ghost Writer",
        "genre": "Mystery,Thriller",
        "director": "Roman Polanski",
        "year": 2010,
        "length": 128,
        "rating": 7.2,
        "revenue": 15.52
    },
    {
        "title": "Limitless",
        "genre": "Mystery,Sci-Fi,Thriller",
        "director": "Neil Burger",
        "year": 2011,
        "length": 105,
        "rating": 7.4,
        "revenue": 79.24
    },
    {
        "title": "Spectral",
        "genre": "Action,Mystery,Sci-Fi",
        "director": "Nic Mathieu",
        "year": 2016,
        "length": 107,
        "rating": 6.3,
        "revenue": null
    },
    {
        "title": "P.S. I Love You",
        "genre": "Drama,Romance",
        "director": "Richard LaGravenese",
        "year": 2007,
        "length": 126,
        "rating": 7.1,
        "revenue": 53.68
    },
    {
        "title": "Zipper",
        "genre": "Drama,Thriller",
        "director": "Mora Stephens",
        "year": 2015,
        "length": 103,
        "rating": 5.7,
        "revenue": null
    },
    {
        "title": "Midnight Special",
        "genre": "Drama,Mystery,Sci-Fi",
        "director": "Jeff Nichols",
        "year": 2016,
        "length": 112,
        "rating": 6.7,
        "revenue": 3.71
    },
    {
        "title": "Don't Think Twice",
        "genre": "Comedy,Drama",
        "director": "Mike Birbiglia",
        "year": 2016,
        "length": 92,
        "rating": 6.8,
        "revenue": 4.42
    },
    {
        "title": "Alice in Wonderland",
        "genre": "Adventure,Family,Fantasy",
        "director": "Tim Burton",
        "year": 2010,
        "length": 108,
        "rating": 6.5,
        "revenue": 334.19
    },
    {
        "title": "Chuck",
        "genre": "Biography,Drama,Sport",
        "director": "Philippe Falardeau",
        "year": 2016,
        "length": 98,
        "rating": 6.8,
        "revenue": 0.11
    },
    {
        "title": "I, Daniel Blake",
        "genre": "Drama",
        "director": "Ken Loach",
        "year": 2016,
        "length": 100,
        "rating": 7.9,
        "revenue": null
    },
    {
        "title": "The Break-Up",
        "genre": "Comedy,Drama,Romance",
        "director": "Peyton Reed",
        "year": 2006,
        "length": 106,
        "rating": 5.8,
        "revenue": 118.68
    },
    {
        "title": "Loving",
        "genre": "Biography,Drama,Romance",
        "director": "Jeff Nichols",
        "year": 2016,
        "length": 123,
        "rating": 7.1,
        "revenue": 7.7
    },
    {
        "title": "Fantastic Four",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Josh Trank",
        "year": 2015,
        "length": 100,
        "rating": 4.3,
        "revenue": 56.11
    },
    {
        "title": "The Survivalist",
        "genre": "Drama,Sci-Fi,Thriller",
        "director": "Stephen Fingleton",
        "year": 2015,
        "length": 104,
        "rating": 6.3,
        "revenue": null
    },
    {
        "title": "Colonia",
        "genre": "Drama,Romance,Thriller",
        "director": "Florian Gallenberger",
        "year": 2015,
        "length": 106,
        "rating": 7.1,
        "revenue": null
    },
    {
        "title": "The Boy Next Door",
        "genre": "Mystery,Thriller",
        "director": "Rob Cohen",
        "year": 2015,
        "length": 91,
        "rating": 4.6,
        "revenue": 35.39
    },
    {
        "title": "The Gift",
        "genre": "Mystery,Thriller",
        "director": "Joel Edgerton",
        "year": 2015,
        "length": 108,
        "rating": 7.1,
        "revenue": 43.77
    },
    {
        "title": "Dracula Untold",
        "genre": "Action,Drama,Fantasy",
        "director": "Gary Shore",
        "year": 2014,
        "length": 92,
        "rating": 6.3,
        "revenue": 55.94
    },
    {
        "title": "In the Heart of the Sea",
        "genre": "Action,Adventure,Biography",
        "director": "Ron Howard",
        "year": 2015,
        "length": 122,
        "rating": 6.9,
        "revenue": 24.99
    },
    {
        "title": "Idiocracy",
        "genre": "Adventure,Comedy,Sci-Fi",
        "director": "Mike Judge",
        "year": 2006,
        "length": 84,
        "rating": 6.6,
        "revenue": 0.44
    },
    {
        "title": "The Expendables",
        "genre": "Action,Adventure,Thriller",
        "director": "Sylvester Stallone",
        "year": 2010,
        "length": 103,
        "rating": 6.5,
        "revenue": 102.98
    },
    {
        "title": "Evil Dead",
        "genre": "Fantasy,Horror",
        "director": "Fede Alvarez",
        "year": 2013,
        "length": 91,
        "rating": 6.5,
        "revenue": 54.24
    },
    {
        "title": "Sinister",
        "genre": "Horror,Mystery",
        "director": "Scott Derrickson",
        "year": 2012,
        "length": 110,
        "rating": 6.8,
        "revenue": 48.06
    },
    {
        "title": "Wreck-It Ralph",
        "genre": "Animation,Adventure,Comedy",
        "director": "Rich Moore",
        "year": 2012,
        "length": 101,
        "rating": 7.8,
        "revenue": 189.41
    },
    {
        "title": "Snow White and the Huntsman",
        "genre": "Action,Adventure,Drama",
        "director": "Rupert Sanders",
        "year": 2012,
        "length": 127,
        "rating": 6.1,
        "revenue": 155.11
    },
    {
        "title": "Pan",
        "genre": "Adventure,Family,Fantasy",
        "director": "Joe Wright",
        "year": 2015,
        "length": 111,
        "rating": 5.8,
        "revenue": 34.96
    },
    {
        "title": "Transformers: Dark of the Moon",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Michael Bay",
        "year": 2011,
        "length": 154,
        "rating": 6.3,
        "revenue": 352.36
    },
    {
        "title": "Juno",
        "genre": "Comedy,Drama",
        "director": "Jason Reitman",
        "year": 2007,
        "length": 96,
        "rating": 7.5,
        "revenue": 143.49
    },
    {
        "title": "A Hologram for the King",
        "genre": "Comedy,Drama",
        "director": "Tom Tykwer",
        "year": 2016,
        "length": 98,
        "rating": 6.1,
        "revenue": 4.2
    },
    {
        "title": "Money Monster",
        "genre": "Crime,Drama,Thriller",
        "director": "Jodie Foster",
        "year": 2016,
        "length": 98,
        "rating": 6.5,
        "revenue": 41.01
    },
    {
        "title": "The Other Woman",
        "genre": "Comedy,Romance",
        "director": "Nick Cassavetes",
        "year": 2014,
        "length": 109,
        "rating": 6,
        "revenue": 83.91
    },
    {
        "title": "Enchanted",
        "genre": "Animation,Comedy,Family",
        "director": "Kevin Lima",
        "year": 2007,
        "length": 107,
        "rating": 7.1,
        "revenue": 127.71
    },
    {
        "title": "The Intern",
        "genre": "Comedy,Drama",
        "director": "Nancy Meyers",
        "year": 2015,
        "length": 121,
        "rating": 7.1,
        "revenue": 75.27
    },
    {
        "title": "Little Miss Sunshine",
        "genre": "Comedy,Drama",
        "director": "Jonathan Dayton",
        "year": 2006,
        "length": 101,
        "rating": 7.8,
        "revenue": 59.89
    },
    {
        "title": "Bleed for This",
        "genre": "Biography,Drama,Sport",
        "director": "Ben Younger",
        "year": 2016,
        "length": 117,
        "rating": 6.8,
        "revenue": 4.85
    },
    {
        "title": "Clash of the Titans",
        "genre": "Action,Adventure,Fantasy",
        "director": "Louis Leterrier",
        "year": 2010,
        "length": 106,
        "rating": 5.8,
        "revenue": 163.19
    },
    {
        "title": "The Finest Hours",
        "genre": "Action,Drama,History",
        "director": "Craig Gillespie",
        "year": 2016,
        "length": 117,
        "rating": 6.8,
        "revenue": 27.55
    },
    {
        "title": "Tron",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Joseph Kosinski",
        "year": 2010,
        "length": 125,
        "rating": 6.8,
        "revenue": 172.05
    },
    {
        "title": "The Hunger Games: Catching Fire",
        "genre": "Action,Adventure,Mystery",
        "director": "Francis Lawrence",
        "year": 2013,
        "length": 146,
        "rating": 7.6,
        "revenue": 424.65
    },
    {
        "title": "All Good Things",
        "genre": "Crime,Drama,Mystery",
        "director": "Andrew Jarecki",
        "year": 2010,
        "length": 101,
        "rating": 6.3,
        "revenue": 0.58
    },
    {
        "title": "Kickboxer: Vengeance",
        "genre": "Action",
        "director": "John Stockwell",
        "year": 2016,
        "length": 90,
        "rating": 4.9,
        "revenue": 131.56
    },
    {
        "title": "The Last Airbender",
        "genre": "Action,Adventure,Family",
        "director": "M. Night Shyamalan",
        "year": 2010,
        "length": 103,
        "rating": 4.2,
        "revenue": null
    },
    {
        "title": "Sex Tape",
        "genre": "Comedy,Romance",
        "director": "Jake Kasdan",
        "year": 2014,
        "length": 94,
        "rating": 5.1,
        "revenue": 38.54
    },
    {
        "title": "What to Expect When You're Expecting",
        "genre": "Comedy,Drama,Romance",
        "director": "Kirk Jones",
        "year": 2012,
        "length": 110,
        "rating": 5.7,
        "revenue": 41.1
    },
    {
        "title": "Moneyball",
        "genre": "Biography,Drama,Sport",
        "director": "Bennett Miller",
        "year": 2011,
        "length": 133,
        "rating": 7.6,
        "revenue": 75.61
    },
    {
        "title": "Ghost Rider",
        "genre": "Action,Fantasy,Thriller",
        "director": "Mark Steven Johnson",
        "year": 2007,
        "length": 114,
        "rating": 5.2,
        "revenue": 115.8
    },
    {
        "title": "Unbroken",
        "genre": "Biography,Drama,Sport",
        "director": "Angelina Jolie",
        "year": 2014,
        "length": 137,
        "rating": 7.2,
        "revenue": 115.6
    },
    {
        "title": "Immortals",
        "genre": "Action,Drama,Fantasy",
        "director": "Tarsem Singh",
        "year": 2011,
        "length": 110,
        "rating": 6,
        "revenue": 83.5
    },
    {
        "title": "Sunshine",
        "genre": "Adventure,Sci-Fi,Thriller",
        "director": "Danny Boyle",
        "year": 2007,
        "length": 107,
        "rating": 7.3,
        "revenue": 3.68
    },
    {
        "title": "Brave",
        "genre": "Animation,Adventure,Comedy",
        "director": "Mark Andrews",
        "year": 2012,
        "length": 93,
        "rating": 7.2,
        "revenue": 237.28
    },
    {
        "title": "Män som hatar kvinnor",
        "genre": "Drama,Mystery,Thriller",
        "director": "Niels Arden Oplev",
        "year": 2009,
        "length": 152,
        "rating": 7.8,
        "revenue": 10.1
    },
    {
        "title": "Adoration",
        "genre": "Drama,Romance",
        "director": "Anne Fontaine",
        "year": 2013,
        "length": 112,
        "rating": 6.2,
        "revenue": 0.32
    },
    {
        "title": "The Drop",
        "genre": "Crime,Drama,Mystery",
        "director": "Michaël R. Roskam",
        "year": 2014,
        "length": 106,
        "rating": 7.1,
        "revenue": 10.72
    },
    {
        "title": "She's the Man",
        "genre": "Comedy,Romance,Sport",
        "director": "Andy Fickman",
        "year": 2006,
        "length": 105,
        "rating": 6.4,
        "revenue": 2.34
    },
    {
        "title": "Daddy's Home",
        "genre": "Comedy,Family",
        "director": "Sean Anders",
        "year": 2015,
        "length": 96,
        "rating": 6.1,
        "revenue": 150.32
    },
    {
        "title": "Let Me In",
        "genre": "Drama,Horror,Mystery",
        "director": "Matt Reeves",
        "year": 2010,
        "length": 116,
        "rating": 7.2,
        "revenue": 12.13
    },
    {
        "title": "Never Back Down",
        "genre": "Action,Drama,Sport",
        "director": "Jeff Wadlow",
        "year": 2008,
        "length": 110,
        "rating": 6.6,
        "revenue": 24.85
    },
    {
        "title": "Grimsby",
        "genre": "Action,Adventure,Comedy",
        "director": "Louis Leterrier",
        "year": 2016,
        "length": 83,
        "rating": 6.2,
        "revenue": 6.86
    },
    {
        "title": "Moon",
        "genre": "Drama,Mystery,Sci-Fi",
        "director": "Duncan Jones",
        "year": 2009,
        "length": 97,
        "rating": 7.9,
        "revenue": 5.01
    },
    {
        "title": "Megamind",
        "genre": "Animation,Action,Comedy",
        "director": "Tom McGrath",
        "year": 2010,
        "length": 95,
        "rating": 7.3,
        "revenue": 148.34
    },
    {
        "title": "Gangster Squad",
        "genre": "Action,Crime,Drama",
        "director": "Ruben Fleischer",
        "year": 2013,
        "length": 113,
        "rating": 6.7,
        "revenue": 46
    },
    {
        "title": "Blood Father",
        "genre": "Action,Crime,Drama",
        "director": "Jean-François Richet",
        "year": 2016,
        "length": 88,
        "rating": 6.4,
        "revenue": 93.95
    },
    {
        "title": "He's Just Not That Into You",
        "genre": "Comedy,Drama,Romance",
        "director": "Ken Kwapis",
        "year": 2009,
        "length": 129,
        "rating": 6.4,
        "revenue": null
    },
    {
        "title": "Kung Fu Panda 3",
        "genre": "Animation,Action,Adventure",
        "director": "Alessandro Carloni",
        "year": 2016,
        "length": 95,
        "rating": 7.2,
        "revenue": 143.52
    },
    {
        "title": "The Rise of the Krays",
        "genre": "Crime,Drama",
        "director": "Zackary Adler",
        "year": 2015,
        "length": 110,
        "rating": 5.1,
        "revenue": 6.53
    },
    {
        "title": "Handsome Devil",
        "genre": "Drama",
        "director": "John Butler",
        "year": 2016,
        "length": 95,
        "rating": 7.4,
        "revenue": null
    },
    {
        "title": "Winter's Bone",
        "genre": "Drama",
        "director": "Debra Granik",
        "year": 2010,
        "length": 100,
        "rating": 7.2,
        "revenue": null
    },
    {
        "title": "Horrible Bosses",
        "genre": "Comedy,Crime",
        "director": "Seth Gordon",
        "year": 2011,
        "length": 98,
        "rating": 6.9,
        "revenue": 117.53
    },
    {
        "title": "Mommy",
        "genre": "Drama",
        "director": "Xavier Dolan",
        "year": 2014,
        "length": 139,
        "rating": 8.1,
        "revenue": 3.49
    },
    {
        "title": "Hellboy II: The Golden Army",
        "genre": "Action,Adventure,Fantasy",
        "director": "Guillermo del Toro",
        "year": 2008,
        "length": 120,
        "rating": 7,
        "revenue": 75.75
    },
    {
        "title": "Beautiful Creatures",
        "genre": "Drama,Fantasy,Romance",
        "director": "Richard LaGravenese",
        "year": 2013,
        "length": 124,
        "rating": 6.2,
        "revenue": 19.45
    },
    {
        "title": "Toni Erdmann",
        "genre": "Comedy,Drama",
        "director": "Maren Ade",
        "year": 2016,
        "length": 162,
        "rating": 7.6,
        "revenue": 1.48
    },
    {
        "title": "The Lovely Bones",
        "genre": "Drama,Fantasy,Thriller",
        "director": "Peter Jackson",
        "year": 2009,
        "length": 135,
        "rating": 6.7,
        "revenue": 43.98
    },
    {
        "title": "The Assassination of Jesse James by the Coward Robert Ford",
        "genre": "Biography,Crime,Drama",
        "director": "Andrew Dominik",
        "year": 2007,
        "length": 160,
        "rating": 7.5,
        "revenue": 3.9
    },
    {
        "title": "Don Jon",
        "genre": "Comedy,Drama,Romance",
        "director": "Joseph Gordon-Levitt",
        "year": 2013,
        "length": 90,
        "rating": 6.6,
        "revenue": 24.48
    },
    {
        "title": "Bastille Day",
        "genre": "Action,Crime,Drama",
        "director": "James Watkins",
        "year": 2016,
        "length": 92,
        "rating": 6.3,
        "revenue": 0.04
    },
    {
        "title": "2307: Winter's Dream",
        "genre": "Sci-Fi",
        "director": "Joey Curtis",
        "year": 2016,
        "length": 101,
        "rating": 4,
        "revenue": 20.76
    },
    {
        "title": "Free State of Jones",
        "genre": "Action,Biography,Drama",
        "director": "Gary Ross",
        "year": 2016,
        "length": 139,
        "rating": 6.9,
        "revenue": null
    },
    {
        "title": "Mr. Right",
        "genre": "Action,Comedy,Romance",
        "director": "Paco Cabezas",
        "year": 2015,
        "length": 95,
        "rating": 6.3,
        "revenue": 0.03
    },
    {
        "title": "The Secret Life of Walter Mitty",
        "genre": "Adventure,Comedy,Drama",
        "director": "Ben Stiller",
        "year": 2013,
        "length": 114,
        "rating": 7.3,
        "revenue": 58.23
    },
    {
        "title": "Dope",
        "genre": "Comedy,Crime,Drama",
        "director": "Rick Famuyiwa",
        "year": 2015,
        "length": 103,
        "rating": 7.3,
        "revenue": 17.47
    },
    {
        "title": "Underworld Awakening",
        "genre": "Action,Fantasy,Horror",
        "director": "Måns Mårlind",
        "year": 2012,
        "length": 88,
        "rating": 6.4,
        "revenue": 62.32
    },
    {
        "title": "Antichrist",
        "genre": "Drama,Horror",
        "director": "Lars von Trier",
        "year": 2009,
        "length": 108,
        "rating": 6.6,
        "revenue": 0.4
    },
    {
        "title": "Friday the 13th",
        "genre": "Horror",
        "director": "Marcus Nispel",
        "year": 2009,
        "length": 97,
        "rating": 5.6,
        "revenue": 65
    },
    {
        "title": "Taken 3",
        "genre": "Action,Thriller",
        "director": "Olivier Megaton",
        "year": 2014,
        "length": 109,
        "rating": 6,
        "revenue": 89.25
    },
    {
        "title": "Total Recall",
        "genre": "Action,Adventure,Mystery",
        "director": "Len Wiseman",
        "year": 2012,
        "length": 118,
        "rating": 6.3,
        "revenue": 58.88
    },
    {
        "title": "X-Men: The Last Stand",
        "genre": "Action,Adventure,Fantasy",
        "director": "Brett Ratner",
        "year": 2006,
        "length": 104,
        "rating": 6.7,
        "revenue": 234.36
    },
    {
        "title": "The Escort",
        "genre": "Comedy,Drama,Romance",
        "director": "Will Slocombe",
        "year": 2016,
        "length": 88,
        "rating": 6,
        "revenue": null
    },
    {
        "title": "The Whole Truth",
        "genre": "Crime,Drama,Mystery",
        "director": "Courtney Hunt",
        "year": 2016,
        "length": 93,
        "rating": 6.1,
        "revenue": null
    },
    {
        "title": "Night at the Museum: Secret of the Tomb",
        "genre": "Adventure,Comedy,Family",
        "director": "Shawn Levy",
        "year": 2014,
        "length": 98,
        "rating": 6.2,
        "revenue": 113.73
    },
    {
        "title": "Love & Other Drugs",
        "genre": "Comedy,Drama,Romance",
        "director": "Edward Zwick",
        "year": 2010,
        "length": 112,
        "rating": 6.7,
        "revenue": 32.36
    },
    {
        "title": "The Interview",
        "genre": "Comedy",
        "director": "Evan Goldberg",
        "year": 2014,
        "length": 112,
        "rating": 6.6,
        "revenue": 6.11
    },
    {
        "title": "The Host",
        "genre": "Comedy,Drama,Horror",
        "director": "Bong Joon Ho",
        "year": 2006,
        "length": 120,
        "rating": 7,
        "revenue": 2.2
    },
    {
        "title": "Megan Is Missing",
        "genre": "Drama,Horror,Thriller",
        "director": "Michael Goi",
        "year": 2011,
        "length": 85,
        "rating": 4.9,
        "revenue": null
    },
    {
        "title": "WALL·E",
        "genre": "Animation,Adventure,Family",
        "director": "Andrew Stanton",
        "year": 2008,
        "length": 98,
        "rating": 8.4,
        "revenue": 223.81
    },
    {
        "title": "Knocked Up",
        "genre": "Comedy,Romance",
        "director": "Judd Apatow",
        "year": 2007,
        "length": 129,
        "rating": 7,
        "revenue": 148.73
    },
    {
        "title": "Source Code",
        "genre": "Mystery,Romance,Sci-Fi",
        "director": "Duncan Jones",
        "year": 2011,
        "length": 93,
        "rating": 7.5,
        "revenue": 54.7
    },
    {
        "title": "Lawless",
        "genre": "Crime,Drama",
        "director": "John Hillcoat",
        "year": 2012,
        "length": 116,
        "rating": 7.3,
        "revenue": 37.4
    },
    {
        "title": "Unfriended",
        "genre": "Drama,Horror,Mystery",
        "director": "Levan Gabriadze",
        "year": 2014,
        "length": 83,
        "rating": 5.6,
        "revenue": 31.54
    },
    {
        "title": "American Reunion",
        "genre": "Comedy",
        "director": "Jon Hurwitz",
        "year": 2012,
        "length": 113,
        "rating": 6.7,
        "revenue": 56.72
    },
    {
        "title": "The Pursuit of Happyness",
        "genre": "Biography,Drama",
        "director": "Gabriele Muccino",
        "year": 2006,
        "length": 117,
        "rating": 8,
        "revenue": 162.59
    },
    {
        "title": "Relatos salvajes",
        "genre": "Comedy,Drama,Thriller",
        "director": "Damián Szifron",
        "year": 2014,
        "length": 122,
        "rating": 8.1,
        "revenue": 3.08
    },
    {
        "title": "The Ridiculous 6",
        "genre": "Comedy,Western",
        "director": "Frank Coraci",
        "year": 2015,
        "length": 119,
        "rating": 4.8,
        "revenue": null
    },
    {
        "title": "Frantz",
        "genre": "Drama,History,War",
        "director": "François Ozon",
        "year": 2016,
        "length": 113,
        "rating": 7.5,
        "revenue": 0.86
    },
    {
        "title": "Viral",
        "genre": "Drama,Horror,Sci-Fi",
        "director": "Henry Joost",
        "year": 2016,
        "length": 85,
        "rating": 5.5,
        "revenue": null
    },
    {
        "title": "Gran Torino",
        "genre": "Drama",
        "director": "Clint Eastwood",
        "year": 2008,
        "length": 116,
        "rating": 8.2,
        "revenue": 148.09
    },
    {
        "title": "Burnt",
        "genre": "Comedy,Drama",
        "director": "John Wells",
        "year": 2015,
        "length": 101,
        "rating": 6.6,
        "revenue": 13.65
    },
    {
        "title": "Tall Men",
        "genre": "Fantasy,Horror,Thriller",
        "director": "Jonathan Holbrook",
        "year": 2016,
        "length": 133,
        "rating": 3.2,
        "revenue": null
    },
    {
        "title": "Sleeping Beauty",
        "genre": "Drama,Romance",
        "director": "Julia Leigh",
        "year": 2011,
        "length": 101,
        "rating": 5.3,
        "revenue": 0.03
    },
    {
        "title": "Vampire Academy",
        "genre": "Action,Comedy,Fantasy",
        "director": "Mark Waters",
        "year": 2014,
        "length": 104,
        "rating": 5.6,
        "revenue": 7.79
    },
    {
        "title": "Sweeney Todd: The Demon Barber of Fleet Street",
        "genre": "Drama,Horror,Musical",
        "director": "Tim Burton",
        "year": 2007,
        "length": 116,
        "rating": 7.4,
        "revenue": 52.88
    },
    {
        "title": "Solace",
        "genre": "Crime,Drama,Mystery",
        "director": "Afonso Poyart",
        "year": 2015,
        "length": 101,
        "rating": 6.4,
        "revenue": null
    },
    {
        "title": "Insidious",
        "genre": "Horror,Mystery,Thriller",
        "director": "James Wan",
        "year": 2010,
        "length": 103,
        "rating": 6.8,
        "revenue": 53.99
    },
    {
        "title": "Popstar: Never Stop Never Stopping",
        "genre": "Comedy,Music",
        "director": "Akiva Schaffer",
        "year": 2016,
        "length": 87,
        "rating": 6.7,
        "revenue": 9.39
    },
    {
        "title": "The Levelling",
        "genre": "Drama",
        "director": "Hope Dickson Leach",
        "year": 2016,
        "length": 83,
        "rating": 6.4,
        "revenue": null
    },
    {
        "title": "Public Enemies",
        "genre": "Biography,Crime,Drama",
        "director": "Michael Mann",
        "year": 2009,
        "length": 140,
        "rating": 7,
        "revenue": 97.03
    },
    {
        "title": "Boyhood",
        "genre": "Drama",
        "director": "Richard Linklater",
        "year": 2014,
        "length": 165,
        "rating": 7.9,
        "revenue": 25.36
    },
    {
        "title": "Teenage Mutant Ninja Turtles",
        "genre": "Action,Adventure,Comedy",
        "director": "Jonathan Liebesman",
        "year": 2014,
        "length": 101,
        "rating": 5.9,
        "revenue": 190.87
    },
    {
        "title": "Eastern Promises",
        "genre": "Crime,Drama,Mystery",
        "director": "David Cronenberg",
        "year": 2007,
        "length": 100,
        "rating": 7.7,
        "revenue": 17.11
    },
    {
        "title": "The Daughter",
        "genre": "Drama",
        "director": "Simon Stone",
        "year": 2015,
        "length": 96,
        "rating": 6.7,
        "revenue": 0.03
    },
    {
        "title": "Pineapple Express",
        "genre": "Action,Comedy,Crime",
        "director": "David Gordon Green",
        "year": 2008,
        "length": 111,
        "rating": 7,
        "revenue": 87.34
    },
    {
        "title": "The First Time",
        "genre": "Comedy,Drama,Romance",
        "director": "Jon Kasdan",
        "year": 2012,
        "length": 95,
        "rating": 6.9,
        "revenue": 0.02
    },
    {
        "title": "Gone Baby Gone",
        "genre": "Crime,Drama,Mystery",
        "director": "Ben Affleck",
        "year": 2007,
        "length": 114,
        "rating": 7.7,
        "revenue": 20.3
    },
    {
        "title": "The Heat",
        "genre": "Action,Comedy,Crime",
        "director": "Paul Feig",
        "year": 2013,
        "length": 117,
        "rating": 6.6,
        "revenue": 159.58
    },
    {
        "title": "L'avenir",
        "genre": "Drama",
        "director": "Mia Hansen-Løve",
        "year": 2016,
        "length": 102,
        "rating": 7.1,
        "revenue": 0.28
    },
    {
        "title": "Anna Karenina",
        "genre": "Drama,Romance",
        "director": "Joe Wright",
        "year": 2012,
        "length": 129,
        "rating": 6.6,
        "revenue": 12.8
    },
    {
        "title": "Regression",
        "genre": "Crime,Drama,Mystery",
        "director": "Alejandro Amenábar",
        "year": 2015,
        "length": 106,
        "rating": 5.7,
        "revenue": 0.05
    },
    {
        "title": "Ted 2",
        "genre": "Adventure,Comedy,Romance",
        "director": "Seth MacFarlane",
        "year": 2015,
        "length": 115,
        "rating": 6.3,
        "revenue": 81.26
    },
    {
        "title": "Pain & Gain",
        "genre": "Comedy,Crime,Drama",
        "director": "Michael Bay",
        "year": 2013,
        "length": 129,
        "rating": 6.5,
        "revenue": 49.87
    },
    {
        "title": "Blood Diamond",
        "genre": "Adventure,Drama,Thriller",
        "director": "Edward Zwick",
        "year": 2006,
        "length": 143,
        "rating": 8,
        "revenue": 57.37
    },
    {
        "title": "Devil's Knot",
        "genre": "Biography,Crime,Drama",
        "director": "Atom Egoyan",
        "year": 2013,
        "length": 114,
        "rating": 6.1,
        "revenue": null
    },
    {
        "title": "Child 44",
        "genre": "Crime,Drama,Thriller",
        "director": "Daniel Espinosa",
        "year": 2015,
        "length": 137,
        "rating": 6.5,
        "revenue": 1.21
    },
    {
        "title": "The Hurt Locker",
        "genre": "Drama,History,Thriller",
        "director": "Kathryn Bigelow",
        "year": 2008,
        "length": 131,
        "rating": 7.6,
        "revenue": 15.7
    },
    {
        "title": "Green Lantern",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Martin Campbell",
        "year": 2011,
        "length": 114,
        "rating": 5.6,
        "revenue": 116.59
    },
    {
        "title": "War on Everyone",
        "genre": "Action,Comedy",
        "director": "John Michael McDonagh",
        "year": 2016,
        "length": 98,
        "rating": 5.9,
        "revenue": null
    },
    {
        "title": "The Mist",
        "genre": "Horror",
        "director": "Frank Darabont",
        "year": 2007,
        "length": 126,
        "rating": 7.2,
        "revenue": 25.59
    },
    {
        "title": "Escape Plan",
        "genre": "Action,Crime,Mystery",
        "director": "Mikael Håfström",
        "year": 2013,
        "length": 115,
        "rating": 6.7,
        "revenue": 25.12
    },
    {
        "title": "Love, Rosie",
        "genre": "Comedy,Romance",
        "director": "Christian Ditter",
        "year": 2014,
        "length": 102,
        "rating": 7.2,
        "revenue": 0.01
    },
    {
        "title": "The DUFF",
        "genre": "Comedy",
        "director": "Ari Sandel",
        "year": 2015,
        "length": 101,
        "rating": 6.5,
        "revenue": 34.02
    },
    {
        "title": "The Age of Shadows",
        "genre": "Action,Drama,Thriller",
        "director": "Jee-woon Kim",
        "year": 2016,
        "length": 140,
        "rating": 7.2,
        "revenue": 0.54
    },
    {
        "title": "The Hunger Games: Mockingjay - Part 1",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Francis Lawrence",
        "year": 2014,
        "length": 123,
        "rating": 6.7,
        "revenue": 337.1
    },
    {
        "title": "We Need to Talk About Kevin",
        "genre": "Drama,Mystery,Thriller",
        "director": "Lynne Ramsay",
        "year": 2011,
        "length": 112,
        "rating": 7.5,
        "revenue": 1.74
    },
    {
        "title": "Love & Friendship",
        "genre": "Comedy,Drama,Romance",
        "director": "Whit Stillman",
        "year": 2016,
        "length": 90,
        "rating": 6.5,
        "revenue": 14.01
    },
    {
        "title": "The Mortal Instruments: City of Bones",
        "genre": "Action,Fantasy,Horror",
        "director": "Harald Zwart",
        "year": 2013,
        "length": 130,
        "rating": 5.9,
        "revenue": 31.17
    },
    {
        "title": "Seven Pounds",
        "genre": "Drama,Romance",
        "director": "Gabriele Muccino",
        "year": 2008,
        "length": 123,
        "rating": 7.7,
        "revenue": 69.95
    },
    {
        "title": "The King's Speech",
        "genre": "Biography,Drama",
        "director": "Tom Hooper",
        "year": 2010,
        "length": 118,
        "rating": 8,
        "revenue": 138.8
    },
    {
        "title": "Hunger",
        "genre": "Biography,Drama",
        "director": "Steve McQueen",
        "year": 2008,
        "length": 96,
        "rating": 7.6,
        "revenue": 0.15
    },
    {
        "title": "Jumper",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Doug Liman",
        "year": 2008,
        "length": 88,
        "rating": 6.1,
        "revenue": 80.17
    },
    {
        "title": "Toy Story 3",
        "genre": "Animation,Adventure,Comedy",
        "director": "Lee Unkrich",
        "year": 2010,
        "length": 103,
        "rating": 8.3,
        "revenue": 414.98
    },
    {
        "title": "Tinker Tailor Soldier Spy",
        "genre": "Drama,Mystery,Thriller",
        "director": "Tomas Alfredson",
        "year": 2011,
        "length": 122,
        "rating": 7.1,
        "revenue": 24.1
    },
    {
        "title": "Resident Evil: Retribution",
        "genre": "Action,Horror,Sci-Fi",
        "director": "Paul W.S. Anderson",
        "year": 2012,
        "length": 96,
        "rating": 5.4,
        "revenue": 42.35
    },
    {
        "title": "Dear Zindagi",
        "genre": "Drama,Romance",
        "director": "Gauri Shinde",
        "year": 2016,
        "length": 151,
        "rating": 7.8,
        "revenue": 1.4
    },
    {
        "title": "Genius",
        "genre": "Biography,Drama",
        "director": "Michael Grandage",
        "year": 2016,
        "length": 104,
        "rating": 6.5,
        "revenue": 1.36
    },
    {
        "title": "Pompeii",
        "genre": "Action,Adventure,Drama",
        "director": "Paul W.S. Anderson",
        "year": 2014,
        "length": 105,
        "rating": 5.5,
        "revenue": 23.22
    },
    {
        "title": "Life of Pi",
        "genre": "Adventure,Drama,Fantasy",
        "director": "Ang Lee",
        "year": 2012,
        "length": 127,
        "rating": 7.9,
        "revenue": 124.98
    },
    {
        "title": "Hachi: A Dog's Tale",
        "genre": "Drama,Family",
        "director": "Lasse Hallström",
        "year": 2009,
        "length": 93,
        "rating": 8.1,
        "revenue": null
    },
    {
        "title": "10 Years",
        "genre": "Comedy,Drama,Romance",
        "director": "Jamie Linden",
        "year": 2011,
        "length": 100,
        "rating": 6.1,
        "revenue": 0.2
    },
    {
        "title": "I Origins",
        "genre": "Drama,Romance,Sci-Fi",
        "director": "Mike Cahill",
        "year": 2014,
        "length": 106,
        "rating": 7.3,
        "revenue": 0.33
    },
    {
        "title": "Live Free or Die Hard",
        "genre": "Action,Adventure,Thriller",
        "director": "Len Wiseman",
        "year": 2007,
        "length": 128,
        "rating": 7.2,
        "revenue": 134.52
    },
    {
        "title": "The Matchbreaker",
        "genre": "Comedy,Romance",
        "director": "Caleb Vetter",
        "year": 2016,
        "length": 94,
        "rating": 5.5,
        "revenue": null
    },
    {
        "title": "Funny Games",
        "genre": "Crime,Drama,Horror",
        "director": "Michael Haneke",
        "year": 2007,
        "length": 111,
        "rating": 6.5,
        "revenue": 1.29
    },
    {
        "title": "Ted",
        "genre": "Comedy,Fantasy",
        "director": "Seth MacFarlane",
        "year": 2012,
        "length": 106,
        "rating": 7,
        "revenue": 218.63
    },
    {
        "title": "RED",
        "genre": "Action,Comedy,Crime",
        "director": "Robert Schwentke",
        "year": 2010,
        "length": 111,
        "rating": 7.1,
        "revenue": 90.36
    },
    {
        "title": "Australia",
        "genre": "Adventure,Drama,Romance",
        "director": "Baz Luhrmann",
        "year": 2008,
        "length": 165,
        "rating": 6.6,
        "revenue": 49.55
    },
    {
        "title": "Faster",
        "genre": "Action,Crime,Drama",
        "director": "George Tillman Jr.",
        "year": 2010,
        "length": 98,
        "rating": 6.5,
        "revenue": 23.23
    },
    {
        "title": "The Neighbor",
        "genre": "Crime,Horror,Thriller",
        "director": "Marcus Dunstan",
        "year": 2016,
        "length": 87,
        "rating": 5.8,
        "revenue": null
    },
    {
        "title": "The Adjustment Bureau",
        "genre": "Romance,Sci-Fi,Thriller",
        "director": "George Nolfi",
        "year": 2011,
        "length": 106,
        "rating": 7.1,
        "revenue": 62.45
    },
    {
        "title": "The Hollars",
        "genre": "Comedy,Drama,Romance",
        "director": "John Krasinski",
        "year": 2016,
        "length": 88,
        "rating": 6.5,
        "revenue": 1.02
    },
    {
        "title": "The Judge",
        "genre": "Crime,Drama",
        "director": "David Dobkin",
        "year": 2014,
        "length": 141,
        "rating": 7.4,
        "revenue": 47.11
    },
    {
        "title": "Closed Circuit",
        "genre": "Crime,Drama,Mystery",
        "director": "John Crowley",
        "year": 2013,
        "length": 96,
        "rating": 6.2,
        "revenue": 5.73
    },
    {
        "title": "Transformers: Revenge of the Fallen",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Michael Bay",
        "year": 2009,
        "length": 150,
        "rating": 6,
        "revenue": 402.08
    },
    {
        "title": "La tortue rouge",
        "genre": "Animation,Fantasy",
        "director": "Michael Dudok de Wit",
        "year": 2016,
        "length": 80,
        "rating": 7.6,
        "revenue": 0.92
    },
    {
        "title": "The Book of Life",
        "genre": "Animation,Adventure,Comedy",
        "director": "Jorge R. Gutiérrez",
        "year": 2014,
        "length": 95,
        "rating": 7.3,
        "revenue": 50.15
    },
    {
        "title": "Incendies",
        "genre": "Drama,Mystery,War",
        "director": "Denis Villeneuve",
        "year": 2010,
        "length": 131,
        "rating": 8.2,
        "revenue": 6.86
    },
    {
        "title": "The Heartbreak Kid",
        "genre": "Comedy,Romance",
        "director": "Bobby Farrelly",
        "year": 2007,
        "length": 116,
        "rating": 5.8,
        "revenue": 36.77
    },
    {
        "title": "Happy Feet",
        "genre": "Animation,Comedy,Family",
        "director": "George Miller",
        "year": 2006,
        "length": 108,
        "rating": 6.5,
        "revenue": 197.99
    },
    {
        "title": "Entourage",
        "genre": "Comedy",
        "director": "Doug Ellin",
        "year": 2015,
        "length": 104,
        "rating": 6.6,
        "revenue": 32.36
    },
    {
        "title": "The Strangers",
        "genre": "Horror,Mystery,Thriller",
        "director": "Bryan Bertino",
        "year": 2008,
        "length": 86,
        "rating": 6.2,
        "revenue": 52.53
    },
    {
        "title": "Noah",
        "genre": "Action,Adventure,Drama",
        "director": "Darren Aronofsky",
        "year": 2014,
        "length": 138,
        "rating": 5.8,
        "revenue": 101.16
    },
    {
        "title": "Neighbors",
        "genre": "Comedy",
        "director": "Nicholas Stoller",
        "year": 2014,
        "length": 97,
        "rating": 6.4,
        "revenue": 150.06
    },
    {
        "title": "Nymphomaniac: Vol. II",
        "genre": "Drama",
        "director": "Lars von Trier",
        "year": 2013,
        "length": 123,
        "rating": 6.7,
        "revenue": 0.33
    },
    {
        "title": "Wild",
        "genre": "Adventure,Biography,Drama",
        "director": "Jean-Marc Vallée",
        "year": 2014,
        "length": 115,
        "rating": 7.1,
        "revenue": 37.88
    },
    {
        "title": "Grown Ups",
        "genre": "Comedy",
        "director": "Dennis Dugan",
        "year": 2010,
        "length": 102,
        "rating": 6,
        "revenue": 162
    },
    {
        "title": "Blair Witch",
        "genre": "Horror,Thriller",
        "director": "Adam Wingard",
        "year": 2016,
        "length": 89,
        "rating": 5.1,
        "revenue": 20.75
    },
    {
        "title": "The Karate Kid",
        "genre": "Action,Drama,Family",
        "director": "Harald Zwart",
        "year": 2010,
        "length": 140,
        "rating": 6.2,
        "revenue": 176.59
    },
    {
        "title": "Dark Shadows",
        "genre": "Comedy,Fantasy,Horror",
        "director": "Tim Burton",
        "year": 2012,
        "length": 113,
        "rating": 6.2,
        "revenue": 79.71
    },
    {
        "title": "Friends with Benefits",
        "genre": "Comedy,Romance",
        "director": "Will Gluck",
        "year": 2011,
        "length": 109,
        "rating": 6.6,
        "revenue": 55.8
    },
    {
        "title": "The Illusionist",
        "genre": "Drama,Mystery,Romance",
        "director": "Neil Burger",
        "year": 2006,
        "length": 110,
        "rating": 7.6,
        "revenue": 39.83
    },
    {
        "title": "The A-Team",
        "genre": "Action,Adventure,Comedy",
        "director": "Joe Carnahan",
        "year": 2010,
        "length": 117,
        "rating": 6.8,
        "revenue": 77.21
    },
    {
        "title": "The Guest",
        "genre": "Thriller",
        "director": "Adam Wingard",
        "year": 2014,
        "length": 100,
        "rating": 6.7,
        "revenue": 0.32
    },
    {
        "title": "The Internship",
        "genre": "Comedy",
        "director": "Shawn Levy",
        "year": 2013,
        "length": 119,
        "rating": 6.3,
        "revenue": 44.67
    },
    {
        "title": "Paul",
        "genre": "Adventure,Comedy,Sci-Fi",
        "director": "Greg Mottola",
        "year": 2011,
        "length": 104,
        "rating": 7,
        "revenue": 37.37
    },
    {
        "title": "This Beautiful Fantastic",
        "genre": "Comedy,Drama,Fantasy",
        "director": "Simon Aboud",
        "year": 2016,
        "length": 100,
        "rating": 6.9,
        "revenue": null
    },
    {
        "title": "The Da Vinci Code",
        "genre": "Mystery,Thriller",
        "director": "Ron Howard",
        "year": 2006,
        "length": 149,
        "rating": 6.6,
        "revenue": 217.54
    },
    {
        "title": "Mr. Church",
        "genre": "Comedy,Drama",
        "director": "Bruce Beresford",
        "year": 2016,
        "length": 104,
        "rating": 7.7,
        "revenue": 0.69
    },
    {
        "title": "Hugo",
        "genre": "Adventure,Drama,Family",
        "director": "Martin Scorsese",
        "year": 2011,
        "length": 126,
        "rating": 7.5,
        "revenue": 73.82
    },
    {
        "title": "The Blackcoat's Daughter",
        "genre": "Horror,Thriller",
        "director": "Oz Perkins",
        "year": 2015,
        "length": 93,
        "rating": 5.6,
        "revenue": 0.02
    },
    {
        "title": "Body of Lies",
        "genre": "Action,Drama,Romance",
        "director": "Ridley Scott",
        "year": 2008,
        "length": 128,
        "rating": 7.1,
        "revenue": 39.38
    },
    {
        "title": "Knight of Cups",
        "genre": "Drama,Romance",
        "director": "Terrence Malick",
        "year": 2015,
        "length": 118,
        "rating": 5.7,
        "revenue": 0.56
    },
    {
        "title": "The Mummy: Tomb of the Dragon Emperor",
        "genre": "Action,Adventure,Fantasy",
        "director": "Rob Cohen",
        "year": 2008,
        "length": 112,
        "rating": 5.2,
        "revenue": 102.18
    },
    {
        "title": "The Boss",
        "genre": "Comedy",
        "director": "Ben Falcone",
        "year": 2016,
        "length": 99,
        "rating": 5.4,
        "revenue": 63.03
    },
    {
        "title": "Hands of Stone",
        "genre": "Action,Biography,Drama",
        "director": "Jonathan Jakubowicz",
        "year": 2016,
        "length": 111,
        "rating": 6.6,
        "revenue": 4.71
    },
    {
        "title": "El secreto de sus ojos",
        "genre": "Drama,Mystery,Romance",
        "director": "Juan José Campanella",
        "year": 2009,
        "length": 129,
        "rating": 8.2,
        "revenue": 20.17
    },
    {
        "title": "True Grit",
        "genre": "Adventure,Drama,Western",
        "director": "Ethan Coen",
        "year": 2010,
        "length": 110,
        "rating": 7.6,
        "revenue": 171.03
    },
    {
        "title": "We Are Your Friends",
        "genre": "Drama,Music,Romance",
        "director": "Max Joseph",
        "year": 2015,
        "length": 96,
        "rating": 6.2,
        "revenue": 3.59
    },
    {
        "title": "A Million Ways to Die in the West",
        "genre": "Comedy,Romance,Western",
        "director": "Seth MacFarlane",
        "year": 2014,
        "length": 116,
        "rating": 6.1,
        "revenue": 42.62
    },
    {
        "title": "Only for One Night",
        "genre": "Thriller",
        "director": "Chris Stokes",
        "year": 2016,
        "length": 86,
        "rating": 4.6,
        "revenue": null
    },
    {
        "title": "Rules Don't Apply",
        "genre": "Comedy,Drama,Romance",
        "director": "Warren Beatty",
        "year": 2016,
        "length": 127,
        "rating": 5.7,
        "revenue": 3.65
    },
    {
        "title": "Ouija: Origin of Evil",
        "genre": "Horror,Thriller",
        "director": "Mike Flanagan",
        "year": 2016,
        "length": 99,
        "rating": 6.1,
        "revenue": 34.9
    },
    {
        "title": "Percy Jackson: Sea of Monsters",
        "genre": "Adventure,Family,Fantasy",
        "director": "Thor Freudenthal",
        "year": 2013,
        "length": 106,
        "rating": 5.9,
        "revenue": 68.56
    },
    {
        "title": "Fracture",
        "genre": "Crime,Drama,Mystery",
        "director": "Gregory Hoblit",
        "year": 2007,
        "length": 113,
        "rating": 7.2,
        "revenue": 39
    },
    {
        "title": "Oculus",
        "genre": "Horror,Mystery",
        "director": "Mike Flanagan",
        "year": 2013,
        "length": 104,
        "rating": 6.5,
        "revenue": 27.69
    },
    {
        "title": "In Bruges",
        "genre": "Comedy,Crime,Drama",
        "director": "Martin McDonagh",
        "year": 2008,
        "length": 107,
        "rating": 7.9,
        "revenue": 7.76
    },
    {
        "title": "This Means War",
        "genre": "Action,Comedy,Romance",
        "director": "McG",
        "year": 2012,
        "length": 103,
        "rating": 6.3,
        "revenue": 54.76
    },
    {
        "title": "Lída Baarová",
        "genre": "Biography,Drama,History",
        "director": "Filip Renc",
        "year": 2016,
        "length": 106,
        "rating": 5,
        "revenue": null
    },
    {
        "title": "The Road",
        "genre": "Adventure,Drama",
        "director": "John Hillcoat",
        "year": 2009,
        "length": 111,
        "rating": 7.3,
        "revenue": 0.06
    },
    {
        "title": "Lavender",
        "genre": "Drama,Thriller",
        "director": "Ed Gass-Donnelly",
        "year": 2016,
        "length": 92,
        "rating": 5.2,
        "revenue": null
    },
    {
        "title": "Deuces",
        "genre": "Drama",
        "director": "Jamal Hill",
        "year": 2016,
        "length": 87,
        "rating": 6.6,
        "revenue": null
    },
    {
        "title": "Conan the Barbarian",
        "genre": "Action,Adventure,Fantasy",
        "director": "Marcus Nispel",
        "year": 2011,
        "length": 113,
        "rating": 5.2,
        "revenue": 21.27
    },
    {
        "title": "The Fighter",
        "genre": "Action,Biography,Drama",
        "director": "David O. Russell",
        "year": 2010,
        "length": 116,
        "rating": 7.8,
        "revenue": 93.57
    },
    {
        "title": "August Rush",
        "genre": "Drama,Music",
        "director": "Kirsten Sheridan",
        "year": 2007,
        "length": 114,
        "rating": 7.5,
        "revenue": 31.66
    },
    {
        "title": "Chef",
        "genre": "Comedy,Drama",
        "director": "Jon Favreau",
        "year": 2014,
        "length": 114,
        "rating": 7.3,
        "revenue": 31.24
    },
    {
        "title": "Eye in the Sky",
        "genre": "Drama,Thriller,War",
        "director": "Gavin Hood",
        "year": 2015,
        "length": 102,
        "rating": 7.3,
        "revenue": 18.7
    },
    {
        "title": "Eagle Eye",
        "genre": "Action,Mystery,Thriller",
        "director": "D.J. Caruso",
        "year": 2008,
        "length": 118,
        "rating": 6.6,
        "revenue": 101.11
    },
    {
        "title": "The Purge",
        "genre": "Horror,Sci-Fi,Thriller",
        "director": "James DeMonaco",
        "year": 2013,
        "length": 85,
        "rating": 5.7,
        "revenue": 64.42
    },
    {
        "title": "PK",
        "genre": "Comedy,Drama,Romance",
        "director": "Rajkumar Hirani",
        "year": 2014,
        "length": 153,
        "rating": 8.2,
        "revenue": 10.57
    },
    {
        "title": "Ender's Game",
        "genre": "Action,Sci-Fi",
        "director": "Gavin Hood",
        "year": 2013,
        "length": 114,
        "rating": 6.7,
        "revenue": 61.66
    },
    {
        "title": "Indiana Jones and the Kingdom of the Crystal Skull",
        "genre": "Action,Adventure,Fantasy",
        "director": "Steven Spielberg",
        "year": 2008,
        "length": 122,
        "rating": 6.2,
        "revenue": 317.01
    },
    {
        "title": "Paper Towns",
        "genre": "Drama,Mystery,Romance",
        "director": "Jake Schreier",
        "year": 2015,
        "length": 109,
        "rating": 6.3,
        "revenue": 31.99
    },
    {
        "title": "High-Rise",
        "genre": "Drama",
        "director": "Ben Wheatley",
        "year": 2015,
        "length": 119,
        "rating": 5.7,
        "revenue": 0.34
    },
    {
        "title": "Quantum of Solace",
        "genre": "Action,Adventure,Thriller",
        "director": "Marc Forster",
        "year": 2008,
        "length": 106,
        "rating": 6.6,
        "revenue": 168.37
    },
    {
        "title": "The Assignment",
        "genre": "Action,Crime,Thriller",
        "director": "Walter Hill",
        "year": 2016,
        "length": 95,
        "rating": 4.5,
        "revenue": null
    },
    {
        "title": "How to Train Your Dragon",
        "genre": "Animation,Action,Adventure",
        "director": "Dean DeBlois",
        "year": 2010,
        "length": 98,
        "rating": 8.1,
        "revenue": 217.39
    },
    {
        "title": "Lady in the Water",
        "genre": "Drama,Fantasy,Mystery",
        "director": "M. Night Shyamalan",
        "year": 2006,
        "length": 110,
        "rating": 5.6,
        "revenue": 42.27
    },
    {
        "title": "The Fountain",
        "genre": "Drama,Sci-Fi",
        "director": "Darren Aronofsky",
        "year": 2006,
        "length": 96,
        "rating": 7.3,
        "revenue": 10.14
    },
    {
        "title": "Cars 2",
        "genre": "Animation,Adventure,Comedy",
        "director": "John Lasseter",
        "year": 2011,
        "length": 106,
        "rating": 6.2,
        "revenue": 191.45
    },
    {
        "title": "31",
        "genre": "Horror,Thriller",
        "director": "Rob Zombie",
        "year": 2016,
        "length": 102,
        "rating": 5.1,
        "revenue": 0.78
    },
    {
        "title": "Final Girl",
        "genre": "Action,Thriller",
        "director": "Tyler Shields",
        "year": 2015,
        "length": 90,
        "rating": 4.7,
        "revenue": null
    },
    {
        "title": "Chalk It Up",
        "genre": "Comedy",
        "director": "Hisonni Johnson",
        "year": 2016,
        "length": 90,
        "rating": 4.8,
        "revenue": null
    },
    {
        "title": "The Man Who Knew Infinity",
        "genre": "Biography,Drama",
        "director": "Matt Brown",
        "year": 2015,
        "length": 108,
        "rating": 7.2,
        "revenue": 3.86
    },
    {
        "title": "Unknown",
        "genre": "Action,Mystery,Thriller",
        "director": "Jaume Collet-Serra",
        "year": 2011,
        "length": 113,
        "rating": 6.9,
        "revenue": 61.09
    },
    {
        "title": "Self/less",
        "genre": "Action,Mystery,Sci-Fi",
        "director": "Tarsem Singh",
        "year": 2015,
        "length": 117,
        "rating": 6.5,
        "revenue": 12.28
    },
    {
        "title": "Mr. Brooks",
        "genre": "Crime,Drama,Thriller",
        "director": "Bruce A. Evans",
        "year": 2007,
        "length": 120,
        "rating": 7.3,
        "revenue": 28.48
    },
    {
        "title": "Tramps",
        "genre": "Comedy,Romance",
        "director": "Adam Leon",
        "year": 2016,
        "length": 82,
        "rating": 6.5,
        "revenue": null
    },
    {
        "title": "Before We Go",
        "genre": "Comedy,Drama,Romance",
        "director": "Chris Evans",
        "year": 2014,
        "length": 95,
        "rating": 6.9,
        "revenue": 0.04
    },
    {
        "title": "Captain Phillips",
        "genre": "Biography,Drama,Thriller",
        "director": "Paul Greengrass",
        "year": 2013,
        "length": 134,
        "rating": 7.8,
        "revenue": 107.1
    },
    {
        "title": "The Secret Scripture",
        "genre": "Drama",
        "director": "Jim Sheridan",
        "year": 2016,
        "length": 108,
        "rating": 6.8,
        "revenue": null
    },
    {
        "title": "Max Steel",
        "genre": "Action,Adventure,Family",
        "director": "Stewart Hendler",
        "year": 2016,
        "length": 92,
        "rating": 4.6,
        "revenue": 3.77
    },
    {
        "title": "Hotel Transylvania 2",
        "genre": "Animation,Comedy,Family",
        "director": "Genndy Tartakovsky",
        "year": 2015,
        "length": 89,
        "rating": 6.7,
        "revenue": 169.69
    },
    {
        "title": "Hancock",
        "genre": "Action,Crime,Drama",
        "director": "Peter Berg",
        "year": 2008,
        "length": 92,
        "rating": 6.4,
        "revenue": 227.95
    },
    {
        "title": "Sisters",
        "genre": "Comedy",
        "director": "Jason Moore",
        "year": 2015,
        "length": 118,
        "rating": 6,
        "revenue": 87.03
    },
    {
        "title": "The Family",
        "genre": "Comedy,Crime,Thriller",
        "director": "Luc Besson",
        "year": 2013,
        "length": 111,
        "rating": 6.3,
        "revenue": 36.92
    },
    {
        "title": "Zack and Miri Make a Porno",
        "genre": "Comedy,Romance",
        "director": "Kevin Smith",
        "year": 2008,
        "length": 101,
        "rating": 6.6,
        "revenue": 31.45
    },
    {
        "title": "Ma vie de Courgette",
        "genre": "Animation,Comedy,Drama",
        "director": "Claude Barras",
        "year": 2016,
        "length": 66,
        "rating": 7.8,
        "revenue": 0.29
    },
    {
        "title": "Man on a Ledge",
        "genre": "Action,Crime,Thriller",
        "director": "Asger Leth",
        "year": 2012,
        "length": 102,
        "rating": 6.6,
        "revenue": 18.6
    },
    {
        "title": "No Strings Attached",
        "genre": "Comedy,Romance",
        "director": "Ivan Reitman",
        "year": 2011,
        "length": 108,
        "rating": 6.2,
        "revenue": 70.63
    },
    {
        "title": "Rescue Dawn",
        "genre": "Adventure,Biography,Drama",
        "director": "Werner Herzog",
        "year": 2006,
        "length": 120,
        "rating": 7.3,
        "revenue": 5.48
    },
    {
        "title": "Despicable Me 2",
        "genre": "Animation,Adventure,Comedy",
        "director": "Pierre Coffin",
        "year": 2013,
        "length": 98,
        "rating": 7.4,
        "revenue": 368.05
    },
    {
        "title": "A Walk Among the Tombstones",
        "genre": "Crime,Drama,Mystery",
        "director": "Scott Frank",
        "year": 2014,
        "length": 114,
        "rating": 6.5,
        "revenue": 25.98
    },
    {
        "title": "The World's End",
        "genre": "Action,Comedy,Sci-Fi",
        "director": "Edgar Wright",
        "year": 2013,
        "length": 109,
        "rating": 7,
        "revenue": 26
    },
    {
        "title": "Yoga Hosers",
        "genre": "Comedy,Fantasy,Horror",
        "director": "Kevin Smith",
        "year": 2016,
        "length": 88,
        "rating": 4.3,
        "revenue": null
    },
    {
        "title": "Seven Psychopaths",
        "genre": "Comedy,Crime",
        "director": "Martin McDonagh",
        "year": 2012,
        "length": 110,
        "rating": 7.2,
        "revenue": 14.99
    },
    {
        "title": "Beowulf",
        "genre": "Animation,Action,Adventure",
        "director": "Robert Zemeckis",
        "year": 2007,
        "length": 115,
        "rating": 6.2,
        "revenue": 82.16
    },
    {
        "title": "Jack Ryan: Shadow Recruit",
        "genre": "Action,Drama,Thriller",
        "director": "Kenneth Branagh",
        "year": 2014,
        "length": 105,
        "rating": 6.2,
        "revenue": 50.55
    },
    {
        "title": "1408",
        "genre": "Fantasy,Horror",
        "director": "Mikael Håfström",
        "year": 2007,
        "length": 104,
        "rating": 6.8,
        "revenue": 71.98
    },
    {
        "title": "The Gambler",
        "genre": "Crime,Drama,Thriller",
        "director": "Rupert Wyatt",
        "year": 2014,
        "length": 111,
        "rating": 6,
        "revenue": 33.63
    },
    {
        "title": "Prince of Persia: The Sands of Time",
        "genre": "Action,Adventure,Fantasy",
        "director": "Mike Newell",
        "year": 2010,
        "length": 116,
        "rating": 6.6,
        "revenue": 90.76
    },
    {
        "title": "The Spectacular Now",
        "genre": "Comedy,Drama,Romance",
        "director": "James Ponsoldt",
        "year": 2013,
        "length": 95,
        "rating": 7.1,
        "revenue": 6.85
    },
    {
        "title": "A United Kingdom",
        "genre": "Biography,Drama,Romance",
        "director": "Amma Asante",
        "year": 2016,
        "length": 111,
        "rating": 6.8,
        "revenue": 3.9
    },
    {
        "title": "USS Indianapolis: Men of Courage",
        "genre": "Action,Drama,History",
        "director": "Mario Van Peebles",
        "year": 2016,
        "length": 128,
        "rating": 5.2,
        "revenue": null
    },
    {
        "title": "Turbo Kid",
        "genre": "Action,Adventure,Comedy",
        "director": "François Simard",
        "year": 2015,
        "length": 93,
        "rating": 6.7,
        "revenue": 0.05
    },
    {
        "title": "Mama",
        "genre": "Horror,Thriller",
        "director": "Andrés Muschietti",
        "year": 2013,
        "length": 100,
        "rating": 6.2,
        "revenue": 71.59
    },
    {
        "title": "Orphan",
        "genre": "Horror,Mystery,Thriller",
        "director": "Jaume Collet-Serra",
        "year": 2009,
        "length": 123,
        "rating": 7,
        "revenue": 41.57
    },
    {
        "title": "To Rome with Love",
        "genre": "Comedy,Romance",
        "director": "Woody Allen",
        "year": 2012,
        "length": 112,
        "rating": 6.3,
        "revenue": 16.68
    },
    {
        "title": "Fantastic Mr. Fox",
        "genre": "Animation,Adventure,Comedy",
        "director": "Wes Anderson",
        "year": 2009,
        "length": 87,
        "rating": 7.8,
        "revenue": 21
    },
    {
        "title": "Inside Man",
        "genre": "Crime,Drama,Mystery",
        "director": "Spike Lee",
        "year": 2006,
        "length": 129,
        "rating": 7.6,
        "revenue": 88.5
    },
    {
        "title": "I.T.",
        "genre": "Crime,Drama,Mystery",
        "director": "John Moore",
        "year": 2016,
        "length": 95,
        "rating": 5.4,
        "revenue": null
    },
    {
        "title": "127 Hours",
        "genre": "Adventure,Biography,Drama",
        "director": "Danny Boyle",
        "year": 2010,
        "length": 94,
        "rating": 7.6,
        "revenue": 18.33
    },
    {
        "title": "Annabelle",
        "genre": "Horror,Mystery,Thriller",
        "director": "John R. Leonetti",
        "year": 2014,
        "length": 99,
        "rating": 5.4,
        "revenue": 84.26
    },
    {
        "title": "Wolves at the Door",
        "genre": "Horror,Thriller",
        "director": "John R. Leonetti",
        "year": 2016,
        "length": 73,
        "rating": 4.6,
        "revenue": null
    },
    {
        "title": "Suite Française",
        "genre": "Drama,Romance,War",
        "director": "Saul Dibb",
        "year": 2014,
        "length": 107,
        "rating": 6.9,
        "revenue": null
    },
    {
        "title": "The Imaginarium of Doctor Parnassus",
        "genre": "Adventure,Fantasy,Mystery",
        "director": "Terry Gilliam",
        "year": 2009,
        "length": 123,
        "rating": 6.8,
        "revenue": 7.69
    },
    {
        "title": "G.I. Joe: The Rise of Cobra",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Stephen Sommers",
        "year": 2009,
        "length": 118,
        "rating": 5.8,
        "revenue": 150.17
    },
    {
        "title": "Christine",
        "genre": "Biography,Drama",
        "director": "Antonio Campos",
        "year": 2016,
        "length": 119,
        "rating": 7,
        "revenue": 0.3
    },
    {
        "title": "Man Down",
        "genre": "Drama,Thriller",
        "director": "Dito Montiel",
        "year": 2015,
        "length": 90,
        "rating": 5.8,
        "revenue": null
    },
    {
        "title": "Crawlspace",
        "genre": "Horror,Thriller",
        "director": "Phil Claydon",
        "year": 2016,
        "length": 88,
        "rating": 5.3,
        "revenue": null
    },
    {
        "title": "Shut In",
        "genre": "Drama,Horror,Thriller",
        "director": "Farren Blackburn",
        "year": 2016,
        "length": 91,
        "rating": 4.6,
        "revenue": 6.88
    },
    {
        "title": "The Warriors Gate",
        "genre": "Action,Adventure,Fantasy",
        "director": "Matthias Hoene",
        "year": 2016,
        "length": 108,
        "rating": 5.3,
        "revenue": null
    },
    {
        "title": "Grindhouse",
        "genre": "Action,Horror,Thriller",
        "director": "Robert Rodriguez",
        "year": 2007,
        "length": 191,
        "rating": 7.6,
        "revenue": 25.03
    },
    {
        "title": "Disaster Movie",
        "genre": "Comedy",
        "director": "Jason Friedberg",
        "year": 2008,
        "length": 87,
        "rating": 1.9,
        "revenue": 14.17
    },
    {
        "title": "Rocky Balboa",
        "genre": "Drama,Sport",
        "director": "Sylvester Stallone",
        "year": 2006,
        "length": 102,
        "rating": 7.2,
        "revenue": 70.27
    },
    {
        "title": "Diary of a Wimpy Kid: Dog Days",
        "genre": "Comedy,Family",
        "director": "David Bowers",
        "year": 2012,
        "length": 94,
        "rating": 6.4,
        "revenue": 49
    },
    {
        "title": "Jane Eyre",
        "genre": "Drama,Romance",
        "director": "Cary Joji Fukunaga",
        "year": 2011,
        "length": 120,
        "rating": 7.4,
        "revenue": 11.23
    },
    {
        "title": "Fool's Gold",
        "genre": "Action,Adventure,Comedy",
        "director": "Andy Tennant",
        "year": 2008,
        "length": 112,
        "rating": 5.7,
        "revenue": 70.22
    },
    {
        "title": "The Dictator",
        "genre": "Comedy",
        "director": "Larry Charles",
        "year": 2012,
        "length": 83,
        "rating": 6.4,
        "revenue": 59.62
    },
    {
        "title": "The Loft",
        "genre": "Mystery,Romance,Thriller",
        "director": "Erik Van Looy",
        "year": 2014,
        "length": 108,
        "rating": 6.3,
        "revenue": 5.98
    },
    {
        "title": "Bacalaureat",
        "genre": "Crime,Drama",
        "director": "Cristian Mungiu",
        "year": 2016,
        "length": 128,
        "rating": 7.5,
        "revenue": 0.13
    },
    {
        "title": "You Don't Mess with the Zohan",
        "genre": "Action,Comedy",
        "director": "Dennis Dugan",
        "year": 2008,
        "length": 113,
        "rating": 5.5,
        "revenue": 100.02
    },
    {
        "title": "Exposed",
        "genre": "Crime,Drama,Mystery",
        "director": "Gee Malik Linton",
        "year": 2016,
        "length": 102,
        "rating": 4.2,
        "revenue": null
    },
    {
        "title": "Maudie",
        "genre": "Biography,Drama,Romance",
        "director": "Aisling Walsh",
        "year": 2016,
        "length": 115,
        "rating": 7.8,
        "revenue": null
    },
    {
        "title": "Horrible Bosses 2",
        "genre": "Comedy,Crime",
        "director": "Sean Anders",
        "year": 2014,
        "length": 108,
        "rating": 6.3,
        "revenue": 54.41
    },
    {
        "title": "A Bigger Splash",
        "genre": "Drama,Thriller",
        "director": "Luca Guadagnino",
        "year": 2015,
        "length": 125,
        "rating": 6.4,
        "revenue": 1.98
    },
    {
        "title": "Melancholia",
        "genre": "Drama",
        "director": "Lars von Trier",
        "year": 2011,
        "length": 135,
        "rating": 7.1,
        "revenue": 3.03
    },
    {
        "title": "The Princess and the Frog",
        "genre": "Animation,Adventure,Comedy",
        "director": "Ron Clements",
        "year": 2009,
        "length": 97,
        "rating": 7.1,
        "revenue": 104.37
    },
    {
        "title": "Unstoppable",
        "genre": "Action,Thriller",
        "director": "Tony Scott",
        "year": 2010,
        "length": 98,
        "rating": 6.8,
        "revenue": 81.56
    },
    {
        "title": "Flight",
        "genre": "Drama,Thriller",
        "director": "Robert Zemeckis",
        "year": 2012,
        "length": 138,
        "rating": 7.3,
        "revenue": 93.75
    },
    {
        "title": "Home",
        "genre": "Animation,Adventure,Comedy",
        "director": "Tim Johnson",
        "year": 2015,
        "length": 94,
        "rating": 6.7,
        "revenue": 177.34
    },
    {
        "title": "La migliore offerta",
        "genre": "Crime,Drama,Mystery",
        "director": "Giuseppe Tornatore",
        "year": 2013,
        "length": 131,
        "rating": 7.8,
        "revenue": 0.09
    },
    {
        "title": "Mean Dreams",
        "genre": "Thriller",
        "director": "Nathan Morlando",
        "year": 2016,
        "length": 108,
        "rating": 6.3,
        "revenue": null
    },
    {
        "title": "42",
        "genre": "Biography,Drama,Sport",
        "director": "Brian Helgeland",
        "year": 2013,
        "length": 128,
        "rating": 7.5,
        "revenue": 95
    },
    {
        "title": "21",
        "genre": "Crime,Drama,Thriller",
        "director": "Robert Luketic",
        "year": 2008,
        "length": 123,
        "rating": 6.8,
        "revenue": 81.16
    },
    {
        "title": "Begin Again",
        "genre": "Drama,Music",
        "director": "John Carney",
        "year": 2013,
        "length": 104,
        "rating": 7.4,
        "revenue": 16.17
    },
    {
        "title": "Out of the Furnace",
        "genre": "Crime,Drama,Thriller",
        "director": "Scott Cooper",
        "year": 2013,
        "length": 116,
        "rating": 6.8,
        "revenue": 11.33
    },
    {
        "title": "Vicky Cristina Barcelona",
        "genre": "Drama,Romance",
        "director": "Woody Allen",
        "year": 2008,
        "length": 96,
        "rating": 7.1,
        "revenue": 23.21
    },
    {
        "title": "Kung Fu Panda",
        "genre": "Animation,Action,Adventure",
        "director": "Mark Osborne",
        "year": 2008,
        "length": 92,
        "rating": 7.6,
        "revenue": 215.4
    },
    {
        "title": "Barbershop: The Next Cut",
        "genre": "Comedy,Drama",
        "director": "Malcolm D. Lee",
        "year": 2016,
        "length": 111,
        "rating": 5.9,
        "revenue": 54.01
    },
    {
        "title": "Terminator Salvation",
        "genre": "Action,Adventure,Drama",
        "director": "McG",
        "year": 2009,
        "length": 115,
        "rating": 6.6,
        "revenue": 125.32
    },
    {
        "title": "Freedom Writers",
        "genre": "Biography,Crime,Drama",
        "director": "Richard LaGravenese",
        "year": 2007,
        "length": 123,
        "rating": 7.5,
        "revenue": 36.58
    },
    {
        "title": "The Hills Have Eyes",
        "genre": "Horror",
        "director": "Alexandre Aja",
        "year": 2006,
        "length": 107,
        "rating": 6.4,
        "revenue": 41.78
    },
    {
        "title": "Changeling",
        "genre": "Biography,Drama,Mystery",
        "director": "Clint Eastwood",
        "year": 2008,
        "length": 141,
        "rating": 7.8,
        "revenue": 35.71
    },
    {
        "title": "Remember Me",
        "genre": "Drama,Romance",
        "director": "Allen Coulter",
        "year": 2010,
        "length": 113,
        "rating": 7.2,
        "revenue": 19.06
    },
    {
        "title": "Koe no katachi",
        "genre": "Animation,Drama,Romance",
        "director": "Naoko Yamada",
        "year": 2016,
        "length": 129,
        "rating": 8.4,
        "revenue": null
    },
    {
        "title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
        "genre": "Comedy,Family",
        "director": "Miguel Arteta",
        "year": 2014,
        "length": 81,
        "rating": 6.2,
        "revenue": 66.95
    },
    {
        "title": "Locke",
        "genre": "Drama",
        "director": "Steven Knight",
        "year": 2013,
        "length": 85,
        "rating": 7.1,
        "revenue": 1.36
    },
    {
        "title": "The 9th Life of Louis Drax",
        "genre": "Mystery,Thriller",
        "director": "Alexandre Aja",
        "year": 2016,
        "length": 108,
        "rating": 6.3,
        "revenue": null
    },
    {
        "title": "Horns",
        "genre": "Drama,Fantasy,Horror",
        "director": "Alexandre Aja",
        "year": 2013,
        "length": 120,
        "rating": 6.5,
        "revenue": 0.16
    },
    {
        "title": "Indignation",
        "genre": "Drama,Romance",
        "director": "James Schamus",
        "year": 2016,
        "length": 110,
        "rating": 6.9,
        "revenue": 3.4
    },
    {
        "title": "The Stanford Prison Experiment",
        "genre": "Biography,Drama,History",
        "director": "Kyle Patrick Alvarez",
        "year": 2015,
        "length": 122,
        "rating": 6.9,
        "revenue": 0.64
    },
    {
        "title": "Diary of a Wimpy Kid: Rodrick Rules",
        "genre": "Comedy,Family",
        "director": "David Bowers",
        "year": 2011,
        "length": 99,
        "rating": 6.6,
        "revenue": 52.69
    },
    {
        "title": "Mission: Impossible III",
        "genre": "Action,Adventure,Thriller",
        "director": "J.J. Abrams",
        "year": 2006,
        "length": 126,
        "rating": 6.9,
        "revenue": 133.38
    },
    {
        "title": "En man som heter Ove",
        "genre": "Comedy,Drama",
        "director": "Hannes Holm",
        "year": 2015,
        "length": 116,
        "rating": 7.7,
        "revenue": 3.36
    },
    {
        "title": "Dragonball Evolution",
        "genre": "Action,Adventure,Fantasy",
        "director": "James Wong",
        "year": 2009,
        "length": 85,
        "rating": 2.7,
        "revenue": 9.35
    },
    {
        "title": "Red Dawn",
        "genre": "Action,Thriller",
        "director": "Dan Bradley",
        "year": 2012,
        "length": 93,
        "rating": 5.4,
        "revenue": 44.8
    },
    {
        "title": "One Day",
        "genre": "Drama,Romance",
        "director": "Lone Scherfig",
        "year": 2011,
        "length": 107,
        "rating": 7,
        "revenue": 13.77
    },
    {
        "title": "Life as We Know It",
        "genre": "Comedy,Drama,Romance",
        "director": "Greg Berlanti",
        "year": 2010,
        "length": 114,
        "rating": 6.6,
        "revenue": 53.36
    },
    {
        "title": "28 Weeks Later",
        "genre": "Drama,Horror,Sci-Fi",
        "director": "Juan Carlos Fresnadillo",
        "year": 2007,
        "length": 100,
        "rating": 7,
        "revenue": 28.64
    },
    {
        "title": "Warm Bodies",
        "genre": "Comedy,Horror,Romance",
        "director": "Jonathan Levine",
        "year": 2013,
        "length": 98,
        "rating": 6.9,
        "revenue": 66.36
    },
    {
        "title": "Blue Jasmine",
        "genre": "Drama",
        "director": "Woody Allen",
        "year": 2013,
        "length": 98,
        "rating": 7.3,
        "revenue": 33.4
    },
    {
        "title": "G.I. Joe: Retaliation",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Jon M. Chu",
        "year": 2013,
        "length": 110,
        "rating": 5.8,
        "revenue": 122.51
    },
    {
        "title": "Wrath of the Titans",
        "genre": "Action,Adventure,Fantasy",
        "director": "Jonathan Liebesman",
        "year": 2012,
        "length": 99,
        "rating": 5.8,
        "revenue": 83.64
    },
    {
        "title": "Shin Gojira",
        "genre": "Action,Adventure,Drama",
        "director": "Hideaki Anno",
        "year": 2016,
        "length": 120,
        "rating": 6.9,
        "revenue": 1.91
    },
    {
        "title": "Saving Mr. Banks",
        "genre": "Biography,Comedy,Drama",
        "director": "John Lee Hancock",
        "year": 2013,
        "length": 125,
        "rating": 7.5,
        "revenue": 83.3
    },
    {
        "title": "Transcendence",
        "genre": "Drama,Mystery,Romance",
        "director": "Wally Pfister",
        "year": 2014,
        "length": 119,
        "rating": 6.3,
        "revenue": 23.01
    },
    {
        "title": "Rio",
        "genre": "Animation,Adventure,Comedy",
        "director": "Carlos Saldanha",
        "year": 2011,
        "length": 96,
        "rating": 6.9,
        "revenue": 143.62
    },
    {
        "title": "Equals",
        "genre": "Drama,Romance,Sci-Fi",
        "director": "Drake Doremus",
        "year": 2015,
        "length": 101,
        "rating": 6.1,
        "revenue": 0.03
    },
    {
        "title": "Babel",
        "genre": "Drama",
        "director": "Alejandro González Iñárritu",
        "year": 2006,
        "length": 143,
        "rating": 7.5,
        "revenue": 34.3
    },
    {
        "title": "The Tree of Life",
        "genre": "Drama,Fantasy",
        "director": "Terrence Malick",
        "year": 2011,
        "length": 139,
        "rating": 6.8,
        "revenue": 13.3
    },
    {
        "title": "The Lucky One",
        "genre": "Drama,Romance",
        "director": "Scott Hicks",
        "year": 2012,
        "length": 101,
        "rating": 6.5,
        "revenue": 60.44
    },
    {
        "title": "Piranha 3D",
        "genre": "Comedy,Horror,Thriller",
        "director": "Alexandre Aja",
        "year": 2010,
        "length": 88,
        "rating": 5.5,
        "revenue": 25
    },
    {
        "title": "50/50",
        "genre": "Comedy,Drama,Romance",
        "director": "Jonathan Levine",
        "year": 2011,
        "length": 100,
        "rating": 7.7,
        "revenue": 34.96
    },
    {
        "title": "The Intent",
        "genre": "Crime,Drama",
        "director": "Femi Oyeniran",
        "year": 2016,
        "length": 104,
        "rating": 3.5,
        "revenue": null
    },
    {
        "title": "This Is 40",
        "genre": "Comedy,Romance",
        "director": "Judd Apatow",
        "year": 2012,
        "length": 134,
        "rating": 6.2,
        "revenue": 67.52
    },
    {
        "title": "Real Steel",
        "genre": "Action,Drama,Family",
        "director": "Shawn Levy",
        "year": 2011,
        "length": 127,
        "rating": 7.1,
        "revenue": 85.46
    },
    {
        "title": "Sex and the City",
        "genre": "Comedy,Drama,Romance",
        "director": "Michael Patrick King",
        "year": 2008,
        "length": 145,
        "rating": 5.5,
        "revenue": 152.64
    },
    {
        "title": "Rambo",
        "genre": "Action,Thriller,War",
        "director": "Sylvester Stallone",
        "year": 2008,
        "length": 92,
        "rating": 7.1,
        "revenue": 42.72
    },
    {
        "title": "Planet Terror",
        "genre": "Action,Comedy,Horror",
        "director": "Robert Rodriguez",
        "year": 2007,
        "length": 105,
        "rating": 7.1,
        "revenue": null
    },
    {
        "title": "Concussion",
        "genre": "Biography,Drama,Sport",
        "director": "Peter Landesman",
        "year": 2015,
        "length": 123,
        "rating": 7.1,
        "revenue": 34.53
    },
    {
        "title": "The Fall",
        "genre": "Adventure,Comedy,Drama",
        "director": "Tarsem Singh",
        "year": 2006,
        "length": 117,
        "rating": 7.9,
        "revenue": 2.28
    },
    {
        "title": "The Ugly Truth",
        "genre": "Comedy,Romance",
        "director": "Robert Luketic",
        "year": 2009,
        "length": 96,
        "rating": 6.5,
        "revenue": 88.92
    },
    {
        "title": "Bride Wars",
        "genre": "Comedy,Romance",
        "director": "Gary Winick",
        "year": 2009,
        "length": 89,
        "rating": 5.5,
        "revenue": 58.72
    },
    {
        "title": "Sleeping with Other People",
        "genre": "Comedy,Drama,Romance",
        "director": "Leslye Headland",
        "year": 2015,
        "length": 101,
        "rating": 6.5,
        "revenue": 0.81
    },
    {
        "title": "Snakes on a Plane",
        "genre": "Action,Adventure,Crime",
        "director": "David R. Ellis",
        "year": 2006,
        "length": 105,
        "rating": 5.6,
        "revenue": 34.01
    },
    {
        "title": "What If",
        "genre": "Comedy,Romance",
        "director": "Michael Dowse",
        "year": 2013,
        "length": 98,
        "rating": 6.8,
        "revenue": 3.45
    },
    {
        "title": "How to Train Your Dragon 2",
        "genre": "Animation,Action,Adventure",
        "director": "Dean DeBlois",
        "year": 2014,
        "length": 102,
        "rating": 7.9,
        "revenue": 177
    },
    {
        "title": "RoboCop",
        "genre": "Action,Crime,Sci-Fi",
        "director": "José Padilha",
        "year": 2014,
        "length": 117,
        "rating": 6.2,
        "revenue": 58.61
    },
    {
        "title": "In Dubious Battle",
        "genre": "Drama",
        "director": "James Franco",
        "year": 2016,
        "length": 110,
        "rating": 6.2,
        "revenue": null
    },
    {
        "title": "Hello, My Name Is Doris",
        "genre": "Comedy,Drama,Romance",
        "director": "Michael Showalter",
        "year": 2015,
        "length": 95,
        "rating": 6.7,
        "revenue": 14.44
    },
    {
        "title": "Ocean's Thirteen",
        "genre": "Crime,Thriller",
        "director": "Steven Soderbergh",
        "year": 2007,
        "length": 122,
        "rating": 6.9,
        "revenue": 117.14
    },
    {
        "title": "Slither",
        "genre": "Comedy,Horror,Sci-Fi",
        "director": "James Gunn",
        "year": 2006,
        "length": 95,
        "rating": 6.5,
        "revenue": 7.77
    },
    {
        "title": "Contagion",
        "genre": "Drama,Thriller",
        "director": "Steven Soderbergh",
        "year": 2011,
        "length": 106,
        "rating": 6.6,
        "revenue": 75.64
    },
    {
        "title": "Il racconto dei racconti - Tale of Tales",
        "genre": "Drama,Fantasy,Horror",
        "director": "Matteo Garrone",
        "year": 2015,
        "length": 133,
        "rating": 6.4,
        "revenue": 0.08
    },
    {
        "title": "I Am the Pretty Thing That Lives in the House",
        "genre": "Thriller",
        "director": "Oz Perkins",
        "year": 2016,
        "length": 87,
        "rating": 4.7,
        "revenue": null
    },
    {
        "title": "Bridge to Terabithia",
        "genre": "Adventure,Drama,Family",
        "director": "Gabor Csupo",
        "year": 2007,
        "length": 96,
        "rating": 7.2,
        "revenue": 82.23
    },
    {
        "title": "Coherence",
        "genre": "Mystery,Sci-Fi,Thriller",
        "director": "James Ward Byrkit",
        "year": 2013,
        "length": 89,
        "rating": 7.2,
        "revenue": 0.07
    },
    {
        "title": "Notorious",
        "genre": "Biography,Crime,Drama",
        "director": "George Tillman Jr.",
        "year": 2009,
        "length": 122,
        "rating": 6.7,
        "revenue": 36.84
    },
    {
        "title": "Goksung",
        "genre": "Drama,Fantasy,Horror",
        "director": "Hong-jin Na",
        "year": 2016,
        "length": 156,
        "rating": 7.5,
        "revenue": 0.79
    },
    {
        "title": "The Expendables 2",
        "genre": "Action,Adventure,Thriller",
        "director": "Simon West",
        "year": 2012,
        "length": 103,
        "rating": 6.6,
        "revenue": 85.02
    },
    {
        "title": "The Girl Next Door",
        "genre": "Crime,Drama,Horror",
        "director": "Gregory Wilson",
        "year": 2007,
        "length": 91,
        "rating": 6.7,
        "revenue": null
    },
    {
        "title": "Perfume: The Story of a Murderer",
        "genre": "Crime,Drama,Fantasy",
        "director": "Tom Tykwer",
        "year": 2006,
        "length": 147,
        "rating": 7.5,
        "revenue": 2.21
    },
    {
        "title": "The Golden Compass",
        "genre": "Adventure,Family,Fantasy",
        "director": "Chris Weitz",
        "year": 2007,
        "length": 113,
        "rating": 6.1,
        "revenue": 70.08
    },
    {
        "title": "Centurion",
        "genre": "Action,Adventure,Drama",
        "director": "Neil Marshall",
        "year": 2010,
        "length": 97,
        "rating": 6.4,
        "revenue": 0.12
    },
    {
        "title": "Scouts Guide to the Zombie Apocalypse",
        "genre": "Action,Comedy,Horror",
        "director": "Christopher Landon",
        "year": 2015,
        "length": 93,
        "rating": 6.3,
        "revenue": 3.64
    },
    {
        "title": "17 Again",
        "genre": "Comedy,Drama,Family",
        "director": "Burr Steers",
        "year": 2009,
        "length": 102,
        "rating": 6.4,
        "revenue": 64.15
    },
    {
        "title": "No Escape",
        "genre": "Action,Thriller",
        "director": "John Erick Dowdle",
        "year": 2015,
        "length": 103,
        "rating": 6.8,
        "revenue": 27.29
    },
    {
        "title": "Superman Returns",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "Bryan Singer",
        "year": 2006,
        "length": 154,
        "rating": 6.1,
        "revenue": 200.07
    },
    {
        "title": "The Twilight Saga: Breaking Dawn - Part 1",
        "genre": "Adventure,Drama,Fantasy",
        "director": "Bill Condon",
        "year": 2011,
        "length": 117,
        "rating": 4.9,
        "revenue": 281.28
    },
    {
        "title": "Precious",
        "genre": "Drama",
        "director": "Lee Daniels",
        "year": 2009,
        "length": 110,
        "rating": 7.3,
        "revenue": 47.54
    },
    {
        "title": "The Sea of Trees",
        "genre": "Drama",
        "director": "Gus Van Sant",
        "year": 2015,
        "length": 110,
        "rating": 5.9,
        "revenue": 0.02
    },
    {
        "title": "Good Kids",
        "genre": "Comedy",
        "director": "Chris McCoy",
        "year": 2016,
        "length": 86,
        "rating": 6.1,
        "revenue": null
    },
    {
        "title": "The Master",
        "genre": "Drama",
        "director": "Paul Thomas Anderson",
        "year": 2012,
        "length": 144,
        "rating": 7.1,
        "revenue": 16.38
    },
    {
        "title": "Footloose",
        "genre": "Comedy,Drama,Music",
        "director": "Craig Brewer",
        "year": 2011,
        "length": 113,
        "rating": 5.9,
        "revenue": 51.78
    },
    {
        "title": "If I Stay",
        "genre": "Drama,Fantasy,Music",
        "director": "R.J. Cutler",
        "year": 2014,
        "length": 107,
        "rating": 6.8,
        "revenue": 50.46
    },
    {
        "title": "The Ticket",
        "genre": "Drama",
        "director": "Ido Fluk",
        "year": 2016,
        "length": 97,
        "rating": 5.4,
        "revenue": null
    },
    {
        "title": "Detour",
        "genre": "Thriller",
        "director": "Christopher Smith",
        "year": 2016,
        "length": 97,
        "rating": 6.3,
        "revenue": null
    },
    {
        "title": "The Love Witch",
        "genre": "Comedy,Horror",
        "director": "Anna Biller",
        "year": 2016,
        "length": 120,
        "rating": 6.2,
        "revenue": 0.22
    },
    {
        "title": "Talladega Nights: The Ballad of Ricky Bobby",
        "genre": "Action,Comedy,Sport",
        "director": "Adam McKay",
        "year": 2006,
        "length": 108,
        "rating": 6.6,
        "revenue": 148.21
    },
    {
        "title": "The Human Centipede (First Sequence)",
        "genre": "Horror",
        "director": "Tom Six",
        "year": 2009,
        "length": 92,
        "rating": 4.4,
        "revenue": 0.18
    },
    {
        "title": "Super",
        "genre": "Comedy,Drama",
        "director": "James Gunn",
        "year": 2010,
        "length": 96,
        "rating": 6.8,
        "revenue": 0.32
    },
    {
        "title": "The Siege of Jadotville",
        "genre": "Action,Drama,Thriller",
        "director": "Richie Smyth",
        "year": 2016,
        "length": 108,
        "rating": 7.3,
        "revenue": null
    },
    {
        "title": "Up in the Air",
        "genre": "Drama,Romance",
        "director": "Jason Reitman",
        "year": 2009,
        "length": 109,
        "rating": 7.4,
        "revenue": 83.81
    },
    {
        "title": "The Midnight Meat Train",
        "genre": "Horror,Mystery",
        "director": "Ryûhei Kitamura",
        "year": 2008,
        "length": 98,
        "rating": 6.1,
        "revenue": 0.07
    },
    {
        "title": "The Twilight Saga: Eclipse",
        "genre": "Adventure,Drama,Fantasy",
        "director": "David Slade",
        "year": 2010,
        "length": 124,
        "rating": 4.9,
        "revenue": 300.52
    },
    {
        "title": "Transpecos",
        "genre": "Thriller",
        "director": "Greg Kwedar",
        "year": 2016,
        "length": 86,
        "rating": 5.8,
        "revenue": null
    },
    {
        "title": "What's Your Number?",
        "genre": "Comedy,Romance",
        "director": "Mark Mylod",
        "year": 2011,
        "length": 106,
        "rating": 6.1,
        "revenue": 13.99
    },
    {
        "title": "Riddick",
        "genre": "Action,Sci-Fi,Thriller",
        "director": "David Twohy",
        "year": 2013,
        "length": 119,
        "rating": 6.4,
        "revenue": 42
    },
    {
        "title": "Triangle",
        "genre": "Fantasy,Mystery,Thriller",
        "director": "Christopher Smith",
        "year": 2009,
        "length": 99,
        "rating": 6.9,
        "revenue": null
    },
    {
        "title": "The Butler",
        "genre": "Biography,Drama",
        "director": "Lee Daniels",
        "year": 2013,
        "length": 132,
        "rating": 7.2,
        "revenue": 116.63
    },
    {
        "title": "King Cobra",
        "genre": "Crime,Drama",
        "director": "Justin Kelly",
        "year": 2016,
        "length": 91,
        "rating": 5.6,
        "revenue": 0.03
    },
    {
        "title": "After Earth",
        "genre": "Action,Adventure,Sci-Fi",
        "director": "M. Night Shyamalan",
        "year": 2013,
        "length": 100,
        "rating": 4.9,
        "revenue": 60.52
    },
    {
        "title": "Kicks",
        "genre": "Adventure",
        "director": "Justin Tipping",
        "year": 2016,
        "length": 80,
        "rating": 6.1,
        "revenue": 0.15
    },
    {
        "title": "Me and Earl and the Dying Girl",
        "genre": "Comedy,Drama",
        "director": "Alfonso Gomez-Rejon",
        "year": 2015,
        "length": 105,
        "rating": 7.8,
        "revenue": 6.74
    },
    {
        "title": "The Descendants",
        "genre": "Comedy,Drama",
        "director": "Alexander Payne",
        "year": 2011,
        "length": 115,
        "rating": 7.3,
        "revenue": 82.62
    },
    {
        "title": "Sex and the City 2",
        "genre": "Comedy,Drama,Romance",
        "director": "Michael Patrick King",
        "year": 2010,
        "length": 146,
        "rating": 4.3,
        "revenue": 95.33
    },
    {
        "title": "The Kings of Summer",
        "genre": "Adventure,Comedy,Drama",
        "director": "Jordan Vogt-Roberts",
        "year": 2013,
        "length": 95,
        "rating": 7.2,
        "revenue": 1.29
    },
    {
        "title": "Death Race",
        "genre": "Action,Sci-Fi,Thriller",
        "director": "Paul W.S. Anderson",
        "year": 2008,
        "length": 105,
        "rating": 6.4,
        "revenue": 36.06
    },
    {
        "title": "That Awkward Moment",
        "genre": "Comedy,Romance",
        "director": "Tom Gormican",
        "year": 2014,
        "length": 94,
        "rating": 6.2,
        "revenue": 26.05
    },
    {
        "title": "Legion",
        "genre": "Action,Fantasy,Horror",
        "director": "Scott Stewart",
        "year": 2010,
        "length": 100,
        "rating": 5.2,
        "revenue": 40.17
    },
    {
        "title": "End of Watch",
        "genre": "Crime,Drama,Thriller",
        "director": "David Ayer",
        "year": 2012,
        "length": 109,
        "rating": 7.7,
        "revenue": 40.98
    },
    {
        "title": "3 Days to Kill",
        "genre": "Action,Drama,Thriller",
        "director": "McG",
        "year": 2014,
        "length": 117,
        "rating": 6.2,
        "revenue": 30.69
    },
    {
        "title": "Lucky Number Slevin",
        "genre": "Crime,Drama,Mystery",
        "director": "Paul McGuigan",
        "year": 2006,
        "length": 110,
        "rating": 7.8,
        "revenue": 22.49
    },
    {
        "title": "Trance",
        "genre": "Crime,Drama,Mystery",
        "director": "Danny Boyle",
        "year": 2013,
        "length": 101,
        "rating": 7,
        "revenue": 2.32
    },
    {
        "title": "Into the Forest",
        "genre": "Drama,Sci-Fi,Thriller",
        "director": "Patricia Rozema",
        "year": 2015,
        "length": 101,
        "rating": 5.9,
        "revenue": 0.01
    },
    {
        "title": "The Other Boleyn Girl",
        "genre": "Biography,Drama,History",
        "director": "Justin Chadwick",
        "year": 2008,
        "length": 115,
        "rating": 6.7,
        "revenue": 26.81
    },
    {
        "title": "I Spit on Your Grave",
        "genre": "Crime,Horror,Thriller",
        "director": "Steven R. Monroe",
        "year": 2010,
        "length": 108,
        "rating": 6.3,
        "revenue": 0.09
    },
    {
        "title": "Custody",
        "genre": "Drama",
        "director": "James Lapine",
        "year": 2016,
        "length": 104,
        "rating": 6.9,
        "revenue": null
    },
    {
        "title": "Inland Empire",
        "genre": "Drama,Mystery,Thriller",
        "director": "David Lynch",
        "year": 2006,
        "length": 180,
        "rating": 7,
        "revenue": null
    },
    {
        "title": "L'odyssée",
        "genre": "Adventure,Biography",
        "director": "Jérôme Salle",
        "year": 2016,
        "length": 122,
        "rating": 6.7,
        "revenue": null
    },
    {
        "title": "The Walk",
        "genre": "Adventure,Biography,Crime",
        "director": "Robert Zemeckis",
        "year": 2015,
        "length": 123,
        "rating": 7.3,
        "revenue": 10.14
    },
    {
        "title": "Wrecker",
        "genre": "Action,Horror,Thriller",
        "director": "Micheal Bafaro",
        "year": 2015,
        "length": 83,
        "rating": 3.5,
        "revenue": null
    },
    {
        "title": "The Lone Ranger",
        "genre": "Action,Adventure,Western",
        "director": "Gore Verbinski",
        "year": 2013,
        "length": 150,
        "rating": 6.5,
        "revenue": 89.29
    },
    {
        "title": "Texas Chainsaw 3D",
        "genre": "Horror,Thriller",
        "director": "John Luessenhop",
        "year": 2013,
        "length": 92,
        "rating": 4.8,
        "revenue": 34.33
    },
    {
        "title": "Disturbia",
        "genre": "Drama,Mystery,Thriller",
        "director": "D.J. Caruso",
        "year": 2007,
        "length": 105,
        "rating": 6.9,
        "revenue": 80.05
    },
    {
        "title": "Rock of Ages",
        "genre": "Comedy,Drama,Musical",
        "director": "Adam Shankman",
        "year": 2012,
        "length": 123,
        "rating": 5.9,
        "revenue": 38.51
    },
    {
        "title": "Scream 4",
        "genre": "Horror,Mystery",
        "director": "Wes Craven",
        "year": 2011,
        "length": 111,
        "rating": 6.2,
        "revenue": 38.18
    },
    {
        "title": "Queen of Katwe",
        "genre": "Biography,Drama,Sport",
        "director": "Mira Nair",
        "year": 2016,
        "length": 124,
        "rating": 7.4,
        "revenue": 8.81
    },
    {
        "title": "My Big Fat Greek Wedding 2",
        "genre": "Comedy,Family,Romance",
        "director": "Kirk Jones",
        "year": 2016,
        "length": 94,
        "rating": 6,
        "revenue": 59.57
    },
    {
        "title": "Dark Places",
        "genre": "Drama,Mystery,Thriller",
        "director": "Gilles Paquet-Brenner",
        "year": 2015,
        "length": 113,
        "rating": 6.2,
        "revenue": null
    },
    {
        "title": "Amateur Night",
        "genre": "Comedy",
        "director": "Lisa Addario",
        "year": 2016,
        "length": 92,
        "rating": 5,
        "revenue": null
    },
    {
        "title": "It's Only the End of the World",
        "genre": "Drama",
        "director": "Xavier Dolan",
        "year": 2016,
        "length": 97,
        "rating": 7,
        "revenue": null
    },
    {
        "title": "The Skin I Live In",
        "genre": "Drama,Thriller",
        "director": "Pedro Almodóvar",
        "year": 2011,
        "length": 120,
        "rating": 7.6,
        "revenue": 3.19
    },
    {
        "title": "Miracles from Heaven",
        "genre": "Biography,Drama,Family",
        "director": "Patricia Riggen",
        "year": 2016,
        "length": 109,
        "rating": 7,
        "revenue": 61.69
    },
    {
        "title": "Annie",
        "genre": "Comedy,Drama,Family",
        "director": "Will Gluck",
        "year": 2014,
        "length": 118,
        "rating": 5.3,
        "revenue": 85.91
    },
    {
        "title": "Across the Universe",
        "genre": "Drama,Fantasy,Musical",
        "director": "Julie Taymor",
        "year": 2007,
        "length": 133,
        "rating": 7.4,
        "revenue": 24.34
    },
    {
        "title": "Let's Be Cops",
        "genre": "Comedy",
        "director": "Luke Greenfield",
        "year": 2014,
        "length": 104,
        "rating": 6.5,
        "revenue": 82.39
    },
    {
        "title": "Max",
        "genre": "Adventure,Family",
        "director": "Boaz Yakin",
        "year": 2015,
        "length": 111,
        "rating": 6.8,
        "revenue": 42.65
    },
    {
        "title": "Your Highness",
        "genre": "Adventure,Comedy,Fantasy",
        "director": "David Gordon Green",
        "year": 2011,
        "length": 102,
        "rating": 5.6,
        "revenue": 21.56
    },
    {
        "title": "Final Destination 5",
        "genre": "Horror,Thriller",
        "director": "Steven Quale",
        "year": 2011,
        "length": 92,
        "rating": 5.9,
        "revenue": 42.58
    },
    {
        "title": "Endless Love",
        "genre": "Drama,Romance",
        "director": "Shana Feste",
        "year": 2014,
        "length": 104,
        "rating": 6.3,
        "revenue": 23.39
    },
    {
        "title": "Martyrs",
        "genre": "Horror",
        "director": "Pascal Laugier",
        "year": 2008,
        "length": 99,
        "rating": 7.1,
        "revenue": null
    },
    {
        "title": "Selma",
        "genre": "Biography,Drama,History",
        "director": "Ava DuVernay",
        "year": 2014,
        "length": 128,
        "rating": 7.5,
        "revenue": 52.07
    },
    {
        "title": "Underworld: Rise of the Lycans",
        "genre": "Action,Adventure,Fantasy",
        "director": "Patrick Tatopoulos",
        "year": 2009,
        "length": 92,
        "rating": 6.6,
        "revenue": 45.8
    },
    {
        "title": "Taare Zameen Par",
        "genre": "Drama,Family,Music",
        "director": "Aamir Khan",
        "year": 2007,
        "length": 165,
        "rating": 8.5,
        "revenue": 1.2
    },
    {
        "title": "Take Me Home Tonight",
        "genre": "Comedy,Drama,Romance",
        "director": "Michael Dowse",
        "year": 2011,
        "length": 97,
        "rating": 6.3,
        "revenue": 6.92
    },
    {
        "title": "Resident Evil: Afterlife",
        "genre": "Action,Adventure,Horror",
        "director": "Paul W.S. Anderson",
        "year": 2010,
        "length": 97,
        "rating": 5.9,
        "revenue": 60.13
    },
    {
        "title": "Project X",
        "genre": "Comedy",
        "director": "Nima Nourizadeh",
        "year": 2012,
        "length": 88,
        "rating": 6.7,
        "revenue": 54.72
    },
    {
        "title": "Secret in Their Eyes",
        "genre": "Crime,Drama,Mystery",
        "director": "Billy Ray",
        "year": 2015,
        "length": 111,
        "rating": 6.2,
        "revenue": null
    },
    {
        "title": "Hostel: Part II",
        "genre": "Horror",
        "director": "Eli Roth",
        "year": 2007,
        "length": 94,
        "rating": 5.5,
        "revenue": 17.54
    },
    {
        "title": "Step Up 2: The Streets",
        "genre": "Drama,Music,Romance",
        "director": "Jon M. Chu",
        "year": 2008,
        "length": 98,
        "rating": 6.2,
        "revenue": 58.01
    },
    {
        "title": "Search Party",
        "genre": "Adventure,Comedy",
        "director": "Scot Armstrong",
        "year": 2014,
        "length": 93,
        "rating": 5.6,
        "revenue": null
    },
    {
        "title": "Nine Lives",
        "genre": "Comedy,Family,Fantasy",
        "director": "Barry Sonnenfeld",
        "year": 2016,
        "length": 87,
        "rating": 5.3,
        "revenue": 19.64
    }
];