import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";
import propTypes from "prop-types";

const Layout = styled.div`

	@media ${device.mobile} {
    width: 100%;
		height: 75px;
  }
`;

const Wrap = styled.div`
	display: none;
	@media ${device.mobile} {
    width: 100%;
		display: flex;
		align-items: center;
		padding: 20px 26px;
		height: 75px;
		background: ${props => props.theme.navbgcolor};
		border-bottom: 1px solid ${props => props.theme.bordercolor};
		font-size: 30px;
		font-weight: 550;
  }
`;

const Prev = styled.div`
	@media ${device.mobile} {
		padding: 0 32px 0 0;
	}
`;

const MobileToolbar = ({text}) => (
  <Layout>
    <Wrap>
      <Prev className="prev">
        <a href="/">X</a>
      </Prev>
      <span>{text}</span>
    </Wrap>
  </Layout>
);

MobileToolbar.propTypes = {
    text: propTypes.string.isRequired
};

export default MobileToolbar;
