import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";

const Layout = styled.div`
	width: 1351px;
	height: 75px;
	@media ${device.mobile} {
    display: none;
  }
`;

const Wrap = styled.div`
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
    display: none;
  }
`;

const Nav = () => (
  <Layout>
    <Wrap>
      <span>Nav</span>
    </Wrap>
  </Layout>
);

export default Nav;
