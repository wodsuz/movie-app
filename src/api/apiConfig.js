import React, { Component } from 'react';
const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`
console.log("API", API_KEY)

 const apiConfig = {
     baseurl: 'https://api.themoviedb.org/3',
     apiKey: API_KEY,
     originalImage: (imgPath) => 'https://image.tmdb.org/t/p/original/'+imgPath,
     w500Image: (imgPath) => 'https://image.tmdb.org/t/p/w500/' +imgPath,
 }

 export default apiConfig;