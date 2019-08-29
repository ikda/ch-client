import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import {device} from "../Styles/Devices";

const Layout = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
	background: ${props => props.theme.webpagebgcolor};
`;

const Profile1A = styled.div`
	margin: 100px 520px;
	@media ${device.mobile} {
    margin-top: 10px;
  }
`;

const btntheme = {
	padding: "5px 20px",
	fontcolor: "#3897f0",
	bgcolor: "#f8f8ff"
};

class Test extends React.Component {
	render() {
		return (
			<>
				<Layout>

			  	<Profile1A class="">
			  		<Button btntheme={btntheme} href="me/edit">Edit Profile</Button>
			  	</Profile1A>

				</Layout>
			</>
		);
	}
}

export default Test;
