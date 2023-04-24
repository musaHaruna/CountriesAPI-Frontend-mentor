import axios from 'axios';

export const getAll = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  return res.data;
};

export const getBorder = async (code) => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/alpha?codes=${code}`
  );
  // console.log(res.data[0].name.common);
  return res.data[0].name.common;
};
