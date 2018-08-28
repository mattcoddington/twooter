import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'emotion'

const cardStyle = css`
  margin: 20px 20px 0 20px;
  background-color: #EEF3FF;
  width: 220px;
`

const Card = (props) => (
  <div>
    <Card className={css`${cardStyle}`}>test</Card>
  </div>
)

export default Card
