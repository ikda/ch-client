import React from "react";
import styled from "styled-components";

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
				<div className="bgtest">clubhouse list</div>
				<div>profile</div>
			</Article53>
			<div>사진</div>
			<Article53>
				<div>schedule</div>
				<div>rank</div>
			</Article53>
		</HomeLayout>
	</>
);
