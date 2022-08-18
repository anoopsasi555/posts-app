import axios from 'axios'

const publicURL = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getPosts = () => publicURL.get('posts')
export const createPost = (newPostData) => publicURL.post('posts', newPostData)
export const deletePost = (id) => publicURL.delete(`posts/delete/:${id}`)
export const updatePost = (id, updateData) => publicURL.patch(`posts/${id}`, updateData)