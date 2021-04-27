import React from 'react'
import { IComment, IPost, IUser } from '../interfaces/interfaces'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = () =>
  fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then((data: IPost[]) => data)

export const fetchPostById = (id: string) =>
  fetch(`${API_URL}/posts/${id}`)
    .then(response => response.json())
    .then((data: IPost) => data)

export const fetchComments = (postId: string) =>
  fetch(`${API_URL}/posts/${postId}/comments`)
    .then(response => response.json())
    .then((data: IComment[]) => data)

export const fetchUsers = () =>
  fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then((data: IUser[]) => data)
