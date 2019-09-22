import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";

const Layout = styled.div`
	width: 100%;
	height: 76px;
	@media ${device.mobile} {
    position: sticky;
    top: 0;
  }
`;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 76px;
	background: ${props => props.theme.navbgcolor};
	font-size: 20px;
	font-weight: 550;
  @media ${device.mobile} {
    width: 100%;
`;

const Max = styled.div`
	max-width: 1010px;
	height: 76px;
  padding: 20px 26px;
  display: flex;


  width: 100%;
`;

const LogoSection = styled.div`
  width: 378px;
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

const Home = styled.div`
	width: 24px;
	height: 24px;
`;

const Another = styled.div`
	width: 24px;
	height: 24px;
	margin-left: 30px;
`;

const Header = () => (
  <Layout>
    <Wrap>
      <Max>
        <LogoSection>
          <a class="" href="/">
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
          <Home><a href="#">홈</a></Home>
    			<Another><a href="#feed">피드</a></Another>
    		  <Another><a href="#notice">알림</a></Another>
    			<Another><a href="#rank">랭크</a></Another>
          <Another><a href="#me">Profile</a></Another>
        </BtnSection>
      </Max>
    </Wrap>
  </Layout>
);

export default Header;
