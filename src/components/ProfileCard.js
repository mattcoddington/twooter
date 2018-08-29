import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'emotion'

import Card from './Card'
import Avatar from './Avatar'

import Button from '@material-ui/core/Button';

const containerStyle = css`
  min-width: 260px;

  @media (max-width: 800px) {
    min-width: 200px;
  }

  @media (max-width: 600px) {
    display: none;
  }

`
const nameContainer = css`
  text-align: center;
`
const name = css`
  line-height: 0px;
`
const handle = css`
  font-size: .75em;
`
const statsContainer = css`
  display: flex;
  justify-content: space-around;
`

const followContainer = css`
  display: flex;
  justify-content: space-around;
`

const ProfileCard = (props) => (
  <div className={css`${containerStyle}`}>
    <Card isProfileCard={true}>
      <Avatar size='small' altText='George Costanza'/>

      <div className={css`${nameContainer}`}>
        <h4 className={css`${name}`}>George Costanza</h4>
        <p className={css`${handle}`}>@boscogeorge</p>
      </div>

      <hr />

    <div className={css`${statsContainer}`}>
      <div className={css`${handle}`}><strong>Twoots:</strong><br />156</div>
      <div className={css`${handle}`}><strong>Following:</strong><br />156</div>
      <div className={css`${handle}`}><strong>Followers:</strong><br />156</div>
    </div><br />

  <div className={css`${followContainer}`}>
      <Button variant="outlined" size='small'>Follow @boscogeorge</Button>
    </div>

    </Card>
  </div>
)

export default ProfileCard
