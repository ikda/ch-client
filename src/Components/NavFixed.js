import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";

const Layout = styled.div`
	width: 100%;
	height: 76px;
	@media ${device.mobile} {
		position: fixed;
		bottom: 0;
  }
`;

const Wrap = styled.div`
	display: flex;
	align-items: center;
	padding: 20px 26px;
	width: 100%;
	height: 75px;
	background: ${props => props.theme.navbgcolor};
	border-bottom: 1px solid ${props => props.theme.bordercolor};
  @media ${device.mobile} {
    width: 100%;
`;

const Home = styled.div`
	width: 24px;
	height: 24px;
`;

const Another = styled.div`
	width: 24px;
	height: 24px;
	margin-left: 70px;
`;

const NavFixed = () => (
  <Layout>
    <Wrap>
			<Home><a href="#">Home</a></Home>
			<Another><a href="#feed">Feed</a></Another>
		  <Another><a href="#notice">Notice</a></Another>
			<Another><a href="#rank">Rank</a></Another>
    </Wrap>
  </Layout>
);

export default NavFixed;
