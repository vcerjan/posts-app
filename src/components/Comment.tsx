import React from 'react'

import { ICommentProps } from '../interfaces/interfaces'
import { componentGesture } from '../services/utility'
import styles from '../styles/common.module.css'

const getCommenterName = (email: string) =>
  email.substring(0, email.indexOf('@'))

export const Comment: React.FC<ICommentProps> = ({ comment, gesture = '' }) => {
  componentGesture(gesture, Comment.name)
  
  return (
    <div className={styles.wrapper}>
     <div className={styles.postCol}>
       <p className={styles.commenterName}>
        Comment by: {getCommenterName(comment.email)}
      </p>
      <p className={styles.commentBody}>
        {comment.body}
      </p>
     </div>
    </div>
  )
} 