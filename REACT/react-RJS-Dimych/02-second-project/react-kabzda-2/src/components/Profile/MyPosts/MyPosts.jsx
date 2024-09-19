import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post.jsx'

export const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12},
    { id: 2, message: 'It my first post', likesCount: 11},
    { id: 3, message: 'Hi, how are you?', likesCount: 12},
    { id: 4, message: 'Hi, how are you?', likesCount: 12},
    { id: 5, message: 'Hi, how are you?', likesCount: 12},
    { id: 6, message: 'Hi, how are you?', likesCount: 12},
  ]

  let postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}
