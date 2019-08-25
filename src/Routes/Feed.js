import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";


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

//Profile part
const Profile = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
`;

const ProfileToolbar = styled.div`
	display: flex;
	grid-template-columns: repeat(2, auto);
	padding: 10px 20px;
	width: 100%;
	height: 45px;
  background: #f0f8ff;
	border-bottom: 1px solid rgba(0,0,0,.0975);
	font-size: 20px;
	font-weight: 600;
`;

const ProfileToolbarCon = styled.div`
	padding: 0 32px 0 0;
`;

const ProfileArticle = styled.div`
	display: flex;
	grid-template-columns: repeat(2, 1fr);
	padding: 50px 20px 0;
`;

const ProfileItems = styled.div`
	grid-template-columns: repeat(2, 1fr);
	flex-shrink: 1;
  min-width: 0;
`;

const ProfileImg = styled.div`
	margin-right: 30px;
`;

const ProfileImgItems  = styled.div`
	&:hover {
		opacity: 0.5;
	}
	background-color: red;
	border-radius: 50%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
	height: 100%;
	width: 100%;
`;

const ProfileContent1 = styled.div`
  display: flex;
	margin-bottom: 20px;
	padding: 0;
	font-size: 28px;
	font-weight: 300;
`;

const ProfileContent1_a = styled.div`
	margin-left: 20px;
`;

const ProfileContent2_ul = styled.div`
	display: block;
`;

const ProfileContent2_li = styled.div`
	font-size: 16px;
	margin-bottom: 15px;
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

const RankTitle = styled.div`
	padding: 20px 20px;
	width: 100%;
	font-size: 20px;
	font-weight: 550;
`;

const RankArticle = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
	padding: 10px 20px 0;
`;

const RankItems = styled.div`
	margin-bottom: 20px;
	font-size: 18px;
	font-weight: 500;
`;

const RankFlex = styled.div`
	display: flex;
	grid-template-columns: repeat(2, auto);
`;

const RankTable = styled.div`
	border-collapse: collapse;
	width: 100%;
`;

const RankItemsContent = styled.div`
	padding: 0 16px 16px 0;
	font-size: 15px;
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
						<ProfileToolbarCon className="profiletoolbarprev"><a href="/">X</a></ProfileToolbarCon>
						<span>Profile</span>
					</ProfileToolbar>
					<ProfileArticle>

						<ProfileImg>
							<ProfileImgItems class="">
								<button class="IalUJ " title="enter_profile_change">
									<img alt="enter_profile_change" class="be6sR" src="aaaa.png" />
								</button>
								<div>
									<form enctype="multipart/form-data" method="POST" role="presentation">
										<input accept="image/jpeg,image/png" class="tb_sK" type="file" />
									</form>
								</div>
							</ProfileImgItems>
						</ProfileImg>
						<ProfileItems>
							<ProfileContent1 class="nZSzR">
								<h1 class="">wwlee0405</h1>
								<ProfileContent1_a class="thEYr " href="/">
									<Button text={"Edit Profile"} />
								</ProfileContent1_a>
							</ProfileContent1>
							<ProfileContent2_ul class="">
								<ProfileContent2_li class="">
									<span class="">
									Johan Cruyff
									</span>
								</ProfileContent2_li>
								<ProfileContent2_li class="">
									<span class="">
									Seoul
									</span>
								</ProfileContent2_li>
								<ProfileContent2_li class="">
									<span class="">
									FW
									</span>
								</ProfileContent2_li>
								<ProfileContent2_li class="">
									<span class="">
									FC Clubhouse
									</span>
								</ProfileContent2_li>
							</ProfileContent2_ul>
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
					<RankTitle>Rank</RankTitle>
					<RankArticle>
						<div class="">
					 		<RankItems>Football Rank</RankItems>
							<RankFlex>
								<RankTable>
									<tr>
										<td>
											<RankItemsContent>Global</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>1</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>National</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>1</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Region</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>1</RankItemsContent>
										</td>
									</tr>
								</RankTable>
								<RankTable>
									<tr>
										<td>
											<RankItemsContent>Games</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>500</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Win</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>300</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Lose</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>200</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Goal</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>700</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Assist</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>300</RankItemsContent>
										</td>
									</tr>
								</RankTable>
							</RankFlex>
						</div>
					</RankArticle>
				</MyRank>
			</Article53>
		</HomeLayout>
	</>
);
