import React from "react";
import styled from "styled-components";

//full layout part: 05~39
const HomeLayout = styled.div`
	display: grid;
	grid-auto-rows: 200px;
	grid-template-rows: repeat(auto-fit, 1fr);
	background-color: grey;
`;

const Header = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const ProfileLogo = styled.div`
	display: flex;
	justify-content: right;
	background-color: skyblue;
`;

const Nav = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	background-color: pink;
	& > div:nth-child(odd) {
		background-color: orange;
	}
`;

const Article53 = styled.div`
	display: grid;
	grid-template-columns: 5fr 3fr;
	background-color: green;
	& > div:last-child {
		background-color: red;
	}
`;

//Clubhouselist part: 42~
const ClubhouseList = styled.div`
	display: block;
	grid-template-rows: repeat(2, auto);
`;

const ChListToolbar = styled.div`
	display: flex;
	grid-template-rows: repeat(2, auto);
	padding: 10px;
	margin-left: 10px;
	margin-bottom: 15px;
	font-size: 20px;
`;

const ChListArticle = styled.div`
	display: flex;
	grid-auto-columns: auto;
	padding: 15px;
`;

const ChListToolbarItems = styled.div`
	text-align: right;
`;

//Profile part
const Profile = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
`;

const ProfileToolbar = styled.div`
	display: flex;
	grid-template-columns: repeat(2, auto);
	padding: 10px;
	margin-bottom: 15px;
	font-size: 20px;
	text-align: left;
`;

const ProfileArticle = styled.div`
	display: flex;
	grid-template-columns: repeat(2, auto);
`;

const ProfileItems = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 10px;
	font-size: 15px;
	text-align: left;
`;

//Schedule part
const Schedule = styled.div`
	display: block;
	grid-template-rows: repeat(2, auto);
`;

const ScheduleToolbar = styled.div`
	padding: 10px;
	margin-left: 10px;
	margin-bottom: 15px;
	font-size: 20px;
	text-align: left;
`;

//MyRank part
const MyRank = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
`;

const RankArticle = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
`;

const RankProvision = styled.div`
	display: flex;
	grid-template-columns: repeat(2, auto);
`;

const RankItems = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
`;

export default () => (
	<>
		<HomeLayout>
			<Header>
				<div>Clubhouse</div>
				<ProfileLogo>
					<div>Profile Logo</div>
				</ProfileLogo>
			</Header>
			<Nav>
				<div className="first">홈</div>
				<div className="first">피드</div>
				<div className="first">알람</div>
				<div className="first">랭킹</div>
			</Nav>
			<Article53>
				<ClubhouseList>
					<ChListToolbar>
						<div className="chlisttitle">Clubhouse list</div>
						<ChListToolbarItems>
							<div className="chlistadd"><a href="/">+</a></div>
						</ChListToolbarItems>
					</ChListToolbar>

					<ChListArticle>
					 	<div className="chlistarticle"><a href="/">my club 1st box</a></div>
						<div className="chlistarticle"><a href="/">my club 2nd box</a></div>
						<div className="chlistarticle"><a href="/">my club 3rd box</a></div>
		      </ChListArticle>
				</ClubhouseList>
				<Profile>
					<ProfileToolbar>
						<div className="profiletoolbarprev"><a href="/">X</a></div>
						<div>Profile</div>
					</ProfileToolbar>
					<ProfileArticle>
						<div>이미지</div>
						<ProfileItems>
							<div>NAME</div>
							<div>name</div>
							<div>AREA</div>
							<div>area</div>
							<div>POSITION</div>
							<div>position</div>
							<div>Main CLUBHOUSE</div>
							<div>main CLUBHOUSE</div>
						</ProfileItems>
					</ProfileArticle>
				</Profile>

			</Article53>
			<div>사진</div>
			<Article53>
				<Schedule>
					<ScheduleToolbar>
						<div>My Schedule</div>
					</ScheduleToolbar>
					<div>
						<div>message1</div>
						<div>message2</div>
					</div>
				</Schedule>
				<MyRank>
					<div>rank</div>
					<RankArticle>
						<div>Football Rank</div>
						<RankProvision>
							<div>글로벌/국가/지역 순위</div>
							<RankItems>
								<div>1</div>
								<div>2</div>
								<div>3</div>
								<div>4</div>
								<div>5</div>
								<div>6</div>
							</RankItems>
						</RankProvision>
					</RankArticle>
				</MyRank>
			</Article53>
		</HomeLayout>
	</>
);

//branch test
