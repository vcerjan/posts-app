import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

import { IComment, IPost, IUser } from '../interfaces/interfaces'
import { fetchComments, fetchPostById } from '../services/api';
import { componentGesture } from '../services/utility';
import { Comment } from './Comment';
import { Post } from './Post';

export const PostWithComments: React.FC = () => {
  componentGesture(PostWithComments.name)

  const [post, setPost] = useState<IPost>()
  const [comments, setComments] = useState<IComment[]>([])
  const params = useParams<{ id: string }>()
  const { state } = useLocation<{ userName: string}>()

  useEffect(() => {
    console.log('CDM')
    fetchPostById(params.id).then(setPost)
    fetchComments(params.id).then(setComments)
    return () => console.log('CWU')
  }, [])

	return (
    <div>
      <h4>POST WITH COMMENTS</h4>
      {post &&
        <Post post={post} userName={state.userName} hasLink={false} hasBody={true} />
      }
      <div className="commentsListBox">
        <p>Comments section:</p>
        {comments.map(comment =>
          <Comment key={comment.id} comment={comment} />
        )}
      </div>
    </div>
	)
}
