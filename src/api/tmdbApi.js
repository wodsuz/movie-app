import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    latest: 'popular'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdApi = {
    getMoviesList: (type, params) => {
         const url= 'movie/' + movieType[type];
        // const url= 'https://api.themoviedb.org/3/movie/27205/recommendations?';
        // const url= 'https://api.themoviedb.org/3/keyword/33722t/movies'; // true crime
        // const url= 'https://api.themoviedb.org/3/keyword/21747/movies'; // polish
        // https://www.themoviedb.org/keyword/4565/movie - dsytopia, https://www.themoviedb.org/keyword/34117-cult-film/movie
        // const url = "https://api.themoviedb.org/3/discover/movie?"
        
        return axiosClient.get(url,params);
    },
    getTvList: (type, params) => {
        const url= 'tv/' + tvType[type];
        return axiosClient.get(url,params);
    },
    getVideos: (cate, id) => {
        const url=  category[cate] + '/' + id + '/videos'
        return axiosClient.get(url,{params: {}});
    },
    search: (cate, params) => {
        const url=  'search/' + category[cate];
        return axiosClient.get(url,params);
    },
    detail: (cate, id, params) => {
        const url= category[cate] + '/' +id
        return axiosClient.get(url,params);
    },
    credits: (cate, id) => {
        const url= category[cate] + '/' +id+ '/credits'
        return axiosClient.get(url,{params: {}});
    },
    similar: (cate, id) => {
        const url= category[cate] + '/' +id+ '/similar'
        return axiosClient.get(url,{params: {}});
    },
}

export default tmdApi;