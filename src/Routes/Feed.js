import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";
import FeedArticle from "../Components/FeedArticle";
import WebToolbar from "../Components/WebToolbar";

const Layout = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
	background: ${props => props.theme.webpagebgcolor};
`;

//width: 935px;
const Main = styled.div`
	width: 628px;
	margin: 0 auto;
	background: ${props => props.theme.articlebgcolor};
	@media ${device.mobile} {
		width: 100%;
		margin: 0;
	}
`;

class FeedFeed extends React.Component {
  render () {
    return (
      <>
        <Layout>
					<WebToolbar />

					<Main>

            <FeedArticle />
            <FeedArticle />
            <FeedArticle />
						<FeedArticle />

					</Main>
				</Layout>
    	</>
    );
  }
}

export default FeedFeed;
