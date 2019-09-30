import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";
import Header from "../Components/Header";
import NavFixed from "../Components/NavFixed";

import RankContent from "../Components/RankContent";

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

const First = styled.div`
	width: 100%;
  height: 60px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	background-color: ${props => props.theme.articlebgcolor};
	@media ${device.mobile} {
		margin: 0;
	}
`;

const FirstBox = styled.div`
	padding: 20px 0;
	font-size: 15px;
	font-weight: 550;
	text-align: center;
`;

const Second = styled.div`
	width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
	display: grid;
	grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${props => props.theme.articlebgcolor};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 52px;
	@media ${device.mobile} {
		margin: 0;
	}
`;

const SecondBox = styled.div`
	padding: 20px;
	font-size: 20px;
	font-weight: 550;
	text-align: center;
`;

const SecondTest = styled.div`
	padding: 20px;
	font-size: 20px;
	font-weight: 550;
	text-align: center;
	background-color: ${props => props.theme.navbgcolor};
`;

class Rank extends React.Component {
  render () {
    return (
      <>
        <Layout>
					<Header />
          <NavFixed />

					<Main>

            <First>
              <FirstBox>축구</FirstBox>
              <FirstBox>농구</FirstBox>
              <FirstBox>야구</FirstBox>
              <FirstBox>미식축구</FirstBox>
            </First>

            <Second>
              <SecondTest><a herf="#global rank">Global</a></SecondTest>

              <SecondBox><a herf="#national rank">National</a></SecondBox>
              <SecondBox><a herf="#Region rank">Province</a></SecondBox>
            </Second>

            <RankContent />


					</Main>
				</Layout>
    	</>
    );
  }
}

export default Rank;
