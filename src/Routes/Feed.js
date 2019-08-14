import React, {Component} from 'react';
import styled from "styled-components";

//grid template will be change..
const HomeLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 650px 1fr;
  grid-template-rows: auto 300px auto;
`;

const ClubhouseHome = styled.div`
  display: felx;
  grid-column: 1;
  grid-row: 1;
  background-color: #f5f5ff;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: 40px 150px;
`;





const Profile = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: #362234;
`;

const Photo = styled.div`
  grid-column: span 2;
  grid-row: 2;
  background-color: yellow;
`;

const MySchedule = styled.div`
  grid-column: 1;
  grid-row: 3;
`;

const MyRank = styled.div`
  grid-column: 2;
  grid-row: 3;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
    border-radius: 0px;
    width: 100%;
    max-width: 250px;
`

export default () => (
  <HomeLayout>
    <ClubhouseHome>
      <div className="clubhousehome-title">Clubhouse</div>
      <ul className="clubhousehome-title-items">
        <li><a href="/">+new clubhouse</a></li>
      </ul>
      <Box></Box>
      <ul className="clubhousehome-article-items">
        <li><a href="/">1</a></li>
        <li><a href="/">2</a></li>
      </ul>
    </ClubhouseHome>
    <Profile>Profile</Profile>
    <Photo>Photo</Photo>
    <MySchedule>My Schedule</MySchedule>
    <MyRank>My Rank</MyRank>
  </HomeLayout>
);
