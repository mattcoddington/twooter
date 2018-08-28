import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'emotion'

import Card from './Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const cardStyle = css`
  margin: 20px 20px 0 20px;
  background-color: #EEF3FF;
  width: 220px;
`

const ProfileCard = (props) => (
  <div>
    <Card className={css`${cardStyle}`}>test</Card>
  </div>
)

export default ProfileCard
