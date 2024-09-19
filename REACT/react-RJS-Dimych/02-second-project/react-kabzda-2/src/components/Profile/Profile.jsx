import React from 'react'
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts.jsx'
import { ProfileInfo } from './ProfileInfo/ProfileInfo.jsx'

export const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData}/>
    </div>
  )
}
