const TMDB_KEY = "e7a2ad8e2fd17e1bceb1ae69e19b2c8a";
const TMDB_BASE = "https://api.themoviedb.org/3"
const TMDB_LANGUAGE = "pt-BR"
const TMDB_LANGUAGE_KEY = `language=${TMDB_LANGUAGE}&api_key=${TMDB_KEY}`


const basicFetch = async (endpoint: string) => {
    const req = await fetch(`${TMDB_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${TMDB_LANGUAGE_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados Para Você',
                items: await basicFetch(`/trending/all/week?${TMDB_LANGUAGE_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${TMDB_LANGUAGE_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&${TMDB_LANGUAGE_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&${TMDB_LANGUAGE_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&${TMDB_LANGUAGE_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&${TMDB_LANGUAGE_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&${TMDB_LANGUAGE_KEY}`)
            },
        ]
    },

    getMovieInfo: async (id: Number, type: String) => {
        let info = {};

        if(id) {
            switch(type) {
                case 'movie':
                info = await basicFetch(`/movie/${id}?${TMDB_LANGUAGE_KEY}`);
                break;
                case 'tv': 
                info = await basicFetch(`/tv/${id}?${TMDB_LANGUAGE_KEY}`);
                break;
            }
        }

        return info;
    }
}