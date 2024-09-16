import React from 'react'
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts.jsx'

export const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://avatars.mds.yandex.net/i?id=7ae9c21b37cfaa843176c002d49aa742d56bd108-10115282-images-thumbs&n=13"
          alt="logo"
        ></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}