import axios from 'axios';

export const getImage = async (query, page) => {
  const key = 'vehYxdMi_tp5gAbzlC5PRD591lqQ63NBA0gfKSP1PQA';
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: key,
      query: query.split('/')[1],
      page,
      per_page: 20,
    },
  });
  return response.data;
};
