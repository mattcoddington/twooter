import React from 'react'

import styled, { css } from 'react-emotion'

const AvatarContainer = styled('div')`
  text-align: center;
`

const avatarStyle = css`
  border-radius: 50%;
  border: 5px solid #fff;
`

const Avatar = (props) => {

  const avatarSize = string => {
    switch (string) {
      case "extra-small":
        return "50px"
      case "small":
         return "100px"
     default:
       return "200px"
    }
  }

  return (
    <AvatarContainer>
      <img src='images/costanza-profile-pic.jpg' width={avatarSize(props.size)} className={css`${avatarStyle}`} alt={props.altText} />
    </AvatarContainer>
  )
}

export default Avatar;
