import React from 'react'
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://avatars.mds.yandex.net/i?id=7ae9c21b37cfaa843176c002d49aa742d56bd108-10115282-images-thumbs&n=13"
          alt="logo"
        ></img>
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  )
}
