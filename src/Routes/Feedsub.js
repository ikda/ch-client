import React, {Component} from 'react';
import styled from 'styled-components';
import './Profile.js';


const Logo = styled.div`
  border: 5px solid red;
  grid-column: 1 / span 8;
  font-size: 2.5em;
  padding: 10px;
`

const MyClubhouse = styled.div`
  border: 5px solid green;
  grid-column: 1 / span 5;
  grid-row: 2;
  text-indent: 10px;
`

const Profile = styled.div`
  border: 5px solid yellow;
  grid-column: 6 / span 3;
  grid-row: 2;
  text-indent: 10px;
`

const Photo = styled.div`
  border: 5px solid blue;
  grid-column: 1 / span 8;
  grid-row: 3;
`

const MySchedule = styled.div`
  border: 5px solid green;
  grid-column: 1 / span 5;
  grid-row: 4;
  text-indent: 10px;
`

const MyRank = styled.div`
  border: 5px solid yellow;
  grid-column: 6 / span 3;
  grid-row: 4;
  text-indent: 10px;
`

const FeedLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 0 150px;
`

class Feed extends Component {
  render() {
    return (
      <FeedLayout>
        <Logo>
          <h1>CLUB HOUSE</h1>
        </Logo>
        <MyClubhouse>
          <h1>My Clubhouse</h1>

        </MyClubhouse>
        <Profile>
          <span class="prev">
            X
          </span>
          <h2><a href="./Profile.js">Profile</a></h2>
          <div>이미지</div>
          <span>
            NAME
          </span>
          <span>
            AREA
          </span>
          <div>
            POSITION
          </div>
          <div>
            CLUBHOUSE
          </div>
        </Profile>
        <Photo>
          Photo
        </Photo>
        <MySchedule>
          <h1>MySchedule</h1>
        </MySchedule>
        <MyRank>
          <h1>MyRank</h1>
        </MyRank>
      </FeedLayout>
    );
  }
}
export default Feed;
