import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { IPost, IPostProps } from '../interfaces/interfaces'
import styles from '../styles/common.module.css'
import { componentGesture } from '../services/utility'

export const Post: React.FC<IPostProps> = ({ post, userName, hasLink = true, hasBody = false }) => {
	componentGesture(Post.name)

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.postCol}>
					<p className={styles.title}>{post.title}</p>
					<p className={styles.username}>
						<strong>By: {userName || 'Anonymous'}</strong>
					</p>
				</div>
				{hasLink &&
					<div className={styles.linkCol}>
						<Link
							to={{
								pathname: `/post/${post.id}`,
								state: { userName: userName }
							}}
						>
							<p className={styles.chevron} />
						</Link>
					</div>
				}
			</div>
			{hasBody &&
				<div className={classNames(styles.wrapper, styles.postBody)}>
					<p className={styles.postBodyText}>Post body:</p>
					<p className={styles.postBodyText}>{post.body}</p>
				</div>
			}
		</>
	)
}
