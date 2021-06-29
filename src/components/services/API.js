import axios from 'axios'

let axiosInstance = axios.create({
   baseURL:'https://jsonplaceholder.typicode.com'})

const getUsers = () => axiosInstance.get('/users');
const getUserId = (id) => axiosInstance.get('/users' + id);

const getPosts = () => axiosInstance.get('/posts');
const getPostId = (id) => axiosInstance.get('/posts' + id);

const getComments = () => axiosInstance.get('/comments');
const getCommentId = (id) => axiosInstance.get('/comments' + id);

export {getUsers,getUserId,getPosts,getPostId,getComments,getCommentId}