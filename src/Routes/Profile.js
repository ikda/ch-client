import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import ProfileRank from "./ProfileRank";

const ProfileLayout = styled.div`
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
	border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
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

const ProfileImgItems = styled.div`
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

class Profile extends React.Component {
	render() {
		return (
			<>
				<ProfileLayout>
					<ProfileToolbar>
						<ProfileToolbarCon className="profiletoolbarprev">
							<a href="/">X</a>
						</ProfileToolbarCon>
						<span>Profile</span>
					</ProfileToolbar>
					<ProfileArticle>
						<ProfileImg>
							<ProfileImgItems class="">
								<button class="IalUJ " title="enter_profile_change">
									<img
										alt="enter_profile_change"
										class="be6sR"
										src="aaaa.png"
									/>
								</button>
								<div>
									<form
										enctype="multipart/form-data"
										method="POST"
										role="presentation"
									>
										<input
											accept="image/jpeg,image/png"
											class="tb_sK"
											type="file"
										/>
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
									<span class="">Johan Cruyff</span>
								</ProfileContent2_li>
								<ProfileContent2_li class="">
									<span class="">Seoul</span>
								</ProfileContent2_li>
								<ProfileContent2_li class="">
									<span class="">FW</span>
								</ProfileContent2_li>
								<ProfileContent2_li class="">
									<span class="">FC Clubhouse</span>
								</ProfileContent2_li>
							</ProfileContent2_ul>
						</ProfileItems>
					</ProfileArticle>
				</ProfileLayout>
				{/* 구분을 위한 임시 hr */}
				<hr></hr>
				<ProfileRank />
			</>
		);
	}
}

export default Profile;
