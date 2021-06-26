import axios from "axios";

let axiosInstance = axios.create(
    {baseURL: 'https://jsonplaceholder.typicode.com/'}
)

const getUsers = () => axiosInstance.get('users/')
const getUser = (id) => axiosInstance.get('users/' + id)
const getPostsId= (id) => axiosInstance.get('users/' + id + '/posts')


export {getUsers, getUser, getPostsId}