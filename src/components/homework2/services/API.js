import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

const getPosts = () => axiosInstance.get('posts/')
const getPost = (id) => axiosInstance.get('posts/' + id)

export {getPosts, getPost,}












