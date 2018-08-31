import React from 'react'

import styled, { css } from 'react-emotion'

import Card from './Card'
import Avatar from './Avatar'

import Button from '@material-ui/core/Button';

const ProfileCardContainer = styled('div')`
  min-width: 280px;

  @media (max-width: 800px) {
    min-width: 230px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`
const FollowContainer = styled('div')`
  display: flex;
  justify-content: space-around;
`
const NameContainer = styled('div')`
  text-align: center;
  h4 {
    line-height: 0px;
  }
  p {
    font-size: .75em;
    margin-top: -5px;
  }
`
const StatsContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  margin: 15px 0 15px 0;
`
const StatsItem = styled('div')`
  font-size: .75em;
`

const ProfileCard = (props) => (
  <ProfileCardContainer>
    <Card isProfileCard={true}>
      <Avatar size='small' altText='George Costanza'/>

      <NameContainer>
        <h4>George Costanza</h4>
        <p>@georgeluvsbosco</p>
      </NameContainer>

      <hr />

    <StatsContainer>
      <StatsItem><strong>Twoots:</strong><br />1.3M</StatsItem>
      <StatsItem><strong>Followers:</strong><br />525k</StatsItem>
      <StatsItem><strong>Following:</strong><br />1.8k</StatsItem>
    </StatsContainer>

    <FollowContainer>
      <Button variant="outlined" size='small'>Follow @georgeluvsbosco</Button>
    </FollowContainer>

    </Card>
  </ProfileCardContainer>
)

export default ProfileCard
