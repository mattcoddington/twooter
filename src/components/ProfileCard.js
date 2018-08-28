import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'emotion'

import Card from './Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const cardStyle = css`
  width: 250px;
`

const ProfileCard = (props) => (
  <div className={css`${cardStyle}`}>
    <Card>Profile</Card>
  </div>
)

export default ProfileCard
