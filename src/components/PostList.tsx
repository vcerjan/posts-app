import React, { useCallback, useEffect, useState } from 'react'

import { Post } from './Post'
import styles from '../styles/common.module.css'
import { IPost, IUser } from '../interfaces/interfaces'
import { fetchPosts, fetchUsers } from '../services/api'
import { componentGesture } from '../services/utility'
import { promises } from 'node:fs'



export const PostList: React.FC<{ gesture: string }> = ({ gesture }) => {
  componentGesture(gesture, PostList.name)

  // const [posts, setPosts] = useState<IPost[]>([])
  // const [users, setUsers] = useState<IUser[]>([])
  
  const [[users, posts], setState] = useState<[IUser[], IPost[]]>([[], []])
  const [filterTerm, setFilterTerm] = useState<string>('')


  useEffect(() => {
    console.log('CDM')
    // fetchUsers().then(setUsers)
    // fetchPosts().then(setPosts)
    Promise.all([
      fetchUsers(),
      fetchPosts(),
    ]).then(setState)
    return () => console.log('CWU')
  }, [])

  const findUserById = (id: number) =>
    users.find((u: IUser) => u.id === id)?.username

  const filterPosts = (data: IPost[]) =>
    data.filter(p => p.title.toLowerCase().indexOf(filterTerm) > -1)

  return (
    <div className={styles.listWrapper}>
      <h2>Posts list:</h2>
      <div className={styles.searchFilterContainer}>
        <input type="text" placeholder="Filter posts..." onChange={(e) => setFilterTerm(e.currentTarget.value)} />
      </div>
      {filterPosts(posts).map(post =>
        <Post key={post.id} post={post} userName={findUserById(post.userId)} />
      )}
    </div>
  )
}
