 const apiConfig = {
     baseurl: 'https://api.themoviedb.org/3',
     apiKey: '7016d32482574ef061e741d5bc131dee',
     originalImage: (imgPath) => 'https://image.tmdb.org/t/p/original/'+imgPath,
     w500Image: (imgPath) => 'https://image.tmdb.org/t/p/w500/' +imgPath,
 }

 export default apiConfig;