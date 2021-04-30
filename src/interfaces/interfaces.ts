import React from "react";

export interface IPost {
  id: number
  userId: number
  body: string
  title: string
}

export interface IComment {
  id: number
  postId: number
  body: string
  name: string
  email: string
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: number
      lng: number
    }
  }
}

export interface ICommentProps {
  comment: IComment
  gesture?: string
}

export interface IPostProps {
  post: IPost
  userName?: string
  hasLink?: boolean
  hasBody?: boolean
  gesture?: string
}

export interface IUserProps {
  user: IUser
}
