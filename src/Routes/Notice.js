import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";
import Header from "../Components/Header";
import NavFixed from "../Components/NavFixed";
import NoticeArticle from "../Components/NoticeArticle";

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

class Notice extends React.Component {
  render () {
    return (
      <>
        <Layout>
					<Header />
          <NavFixed />
					
					<Main>

						<NoticeArticle />
						<NoticeArticle />
						<NoticeArticle />
						<NoticeArticle />
						<NoticeArticle />


					</Main>
				</Layout>
    	</>
    );
  }
}

export default Notice;
