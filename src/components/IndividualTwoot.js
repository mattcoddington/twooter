import React from 'react'

import Card from './Card'
import Avatar from './Avatar'

import { css } from 'react-emotion'

const twootContainer = css`
  display: flex;
  align-items: center;
`
const metaLine = css`
  font-size: .75em;
  margin-bottom: 10px;
`
const twootBody = css`
  margin-left: 10px;
`

const IndividualTwoot = (props) => {
  return (
    <Card>

      <div className={css`${metaLine}`}><strong>George Costanza</strong> @boscogeorge - {props.twootDate}</div>

      <div className={css`${twootContainer}`}>

        <Avatar size='extra-small' />
        <div className={css`${twootBody}`}>
          {props.twootContent}
        </div>

      </div>
    </Card>
  )
}

export default IndividualTwoot;
