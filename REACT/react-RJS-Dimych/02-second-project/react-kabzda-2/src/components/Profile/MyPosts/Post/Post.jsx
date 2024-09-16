import React from 'react'
import classes from './Post.module.css'

export const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://nztcdn.com/avatar/m/1705309009/8023042.webp"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>Like </span>
        {props.likesCount}
      </div>
    </div>
  )
}