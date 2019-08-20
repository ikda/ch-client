import React, {Component} from 'react';
import styled from "styled-components";
import HomeLayout from "../Components/Layout/HomeLayout";
import ClubhouseHome from "../Components/Layout/ClubhouseHome";
import Profile from "../Components/Layout/Profile";
import Photo from "../Components/Layout/Photo";
import MySchedule from "../Components/Layout/MySchedule";
import MyRank from "../Components/Layout/MyRank";

const ChTittle = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const Spacer = styled.div`
  grid-column: 2;
  grid-row: 1;
  flex: 1;
`;

const ChTittleItems = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

const ChArticleItems = styled.div`
  grid-column: 1;
  grid-row: 2;
`;

const ChArticleItems2 = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

export default () => (
  <HomeLayout>
    <ClubhouseHome>
      <ChTittle className="clubhousehome-title">Clubhouse</ChTittle>
      <Spacer></Spacer>
      <ChTittleItems className="clubhousehome-title-items">
        <a href="/">+new clubhouse</a>
      </ChTittleItems>
      <ChArticleItems className="clubhousehome-article-items">
        <a href="/">1</a>
      </ChArticleItems>
      <ChArticleItems2>
        <a href="/">2</a>
      </ChArticleItems2>
    </ClubhouseHome>
    <Profile>Profile</Profile>
    <Photo>Photo</Photo>
    <MySchedule>My Schedule</MySchedule>
    <MyRank>My Rank</MyRank>
  </HomeLayout>
);

//미디어 쿼리 참조...
@media (min-width:768px) {
  .profile,
  .photo,
  .myrank {
    display: none;
  }
}
