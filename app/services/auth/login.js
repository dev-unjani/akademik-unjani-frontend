import axios from 'axios';

const base_url = 'http://localhost:5000';

const api = () => {
  return axios.create({
    baseUrl: base_url
  })
}

const Get = (path) => {
  const promise = new Promise((resolve, reject)=> {
    api().get(`${path}`)
         .then((result)=> {
            resolve(result.data);
         },(err) => {
           reject(err);
      });
  });

  return promise;
}

const getData = () => Get('/api/v1/movie_reviews');

const API = {
  getData
}

export default API;