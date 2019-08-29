import React from "react";
import styled from "styled-components";
import ProfileRank from "./ProfileRank";
import {device} from "../Styles/Devices";

const Layout = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
	background: ${props => props.theme.webpagebgcolor};
`;

const Nav = styled.div`
	width: 1351px;
	height: 75px;
	@media ${device.mobile} {
    width: 414px;
  }
`;

const NavWrap1 = styled.div`
	display: flex;
	align-items: center;
	padding: 20px 26px;
	width: 1351px;
	height: 75px;
	background: ${props => props.theme.navbgcolor};
	border-bottom: 1px solid ${props => props.theme.bordercolor};
	font-size: 30px;
	font-weight: 550;
	@media ${device.mobile} {
    width: 414px;
  }
`;

const Prev = styled.div`
	padding: 0 32px 0 0;

`;

const Main = styled.div`

	width: 628px;
	margin: 0 auto;
	padding: 50px 20px;
	background: ${props => props.theme.articlebgcolor};
	@media ${device.mobile} {
		width: 414px;
		margin: 0;
		padding: 30px 20px;
	}
`;

const Article = styled.div`
	display: flex;
	grid-template-columns: repeat(2, auto);
`;

const ProfileImg = styled.div`
	width: auto;
	height: 180px;
	margin-right: 30px;
	@media ${device.mobile} {
		width: auto;
		height: 120px;
		margin: 0 50px 0 10px;
	}
`;

const ImgWrap1 = styled.div`
	width: 180px;
	height: 180px;
	margin: 0px 30px;
	@media ${device.mobile} {
		width: 120px;
		height: 120px;
		margin: 0;
	}
`;

const ImgItems = styled.div`
	&:hover {
		opacity: 0.5;
	}
	background-color: blue;
	border-radius: 50%;
	margin: 0;
	overflow: hidden;
	position: relative;
	height: 180px;
	width: 180px;
	@media ${device.mobile} {
		width: 120px;
		height: 120px;
	}
`;

const ProfileItems = styled.div`
	grid-template-columns: repeat(2, 1fr);
	min-width: 0;
`;

const Profile1 = styled.div`
	display: flex;
	margin-bottom: 20px;
	padding: 0;
	@media ${device.mobile} {
    display: block;
  }
`;

const ID = styled.div`
	font-size: 28px;
	font-weight: 300;
`;

const Profile1A = styled.div`
	margin-left: 20px;
	@media ${device.mobile} {
    margin: 10px 0 0;
  }
`;

const Unlist = styled.div`
	display: block;
`;

const List = styled.div`
	font-size: 16px;
	margin-bottom: 15px;
`;

const EPButton = styled.button`
  font-size: 15px;
  margin: 0px;
  border-radius: 5px;
  padding: 5px 10px;
  color: ${props => props.theme.darkGreyColor};
	fontcolor: ${props => props.theme.darkGreyColor};
  border: 1px solid ${props => props.theme.darkGreyColor};
  background: ${props => props.theme.articlebgcolor};
	@media ${device.mobile} {
    padding: 5px 40px;
  }
`;

class Profile extends React.Component {
	render() {
		return (
			<>
				<Layout>
					<Nav>
						<NavWrap1>
							<Prev className="prev">
								<a href="/">X</a>
							</Prev>
							<span>Profile</span>
						</NavWrap1>
					</Nav>
					<Main>
						<Article>

							<ProfileImg>
								<ImgWrap1>
									<ImgItems class="">
										<button class="" title="enter_profile_change" width="180px" height="180px">
											<img
												alt="enter_profile_change"
												class=""
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
													class=""
													type="file"
												/>
											</form>
										</div>
									</ImgItems>
								</ImgWrap1>
							</ProfileImg>

							<ProfileItems>
								<Profile1 class="">
									<ID class="">wwlee0405</ID>
									<Profile1A class="">
										<EPButton href="me/edit">Edit Profile</EPButton>
									</Profile1A>
								</Profile1>
								<Unlist class="">
									<List class="">
										<span class="">Johan Cruyff</span>
									</List>
									<List class="">
										<span class="">Seoul</span>
									</List>
									<List class="">
										<span class="">FW</span>
									</List>
									<List class="">
										<span class="">FC Clubhouse</span>
									</List>
								</Unlist>
							</ProfileItems>
						</Article>
					</Main>
				</Layout>
				{/* 구분을 위한 임시 hr */}
				<hr></hr>
				<ProfileRank />
			</>
		);
	}
}

export default Profile;
