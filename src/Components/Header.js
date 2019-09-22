import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";

const Layout = styled.div`
	width: 100%;
	height: 52px;
	@media ${device.mobile} {
    position: sticky;
    top: 0;
  }
`;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	padding: 14px 26px;
	width: 100%;
	height: 52px;
	background: ${props => props.theme.navbgcolor};
	font-size: 20px;
	font-weight: 550;
  @media ${device.mobile} {
    width: 100%;
`;

const LogoSection = styled.div`
  width: 100px;
	height: 36px;
`;

const LogoBox = styled.div`
  display: flex;
`;

const BtnSection = styled.div`
  display: flex;
	float: right;
	flex: 1 0 0%;
  justify-content: flex-end;
`;

const Another = styled.div`
	width: 24px;
	height: 24px;
	margin-left: 20px;
`;

const Header = () => (
  <Layout>
    <Wrap>
			<LogoSection>
				<a class="" href="#">
					<LogoBox>
						<span aria-label="clubleague">ㅇ</span>
						<div>|</div>
						<div>
							<span aria-label="clubleague">ClubLeague</span>
						</div>
					</LogoBox>
				</a>
			</LogoSection>
			<BtnSection>
				<div>search</div>
				<Another><a href="#me">Pro</a></Another>
			</BtnSection>
    </Wrap>
  </Layout>
);

export default Header;
