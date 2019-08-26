import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ProfileRank from "./ProfileRank";

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
		background-color: #f8f8ff;
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
				<Profile />
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
				<ProfileRank />
			</Article53>
		</HomeLayout>
	</>
);
