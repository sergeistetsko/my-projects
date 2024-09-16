import React from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post.jsx'

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' likesCount='0'/>
        <Post message='It my first post' likesCount='23'/>
      </div>
    </div>
  )
}
