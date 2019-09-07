import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";

const RankLayout = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
	background: ${props => props.theme.webpagebgcolor};
`;

const RankWrap = styled.div`
	height: 440px;
	width: 628px;
	margin: 0 auto;
	padding: 0;
	background: ${props => props.theme.articlebgcolor};
	@media ${device.mobile} {
    width: 414px;
  }
`;

const Title = styled.div`
	padding: 20px 40px;
	font-size: 20px;
	font-weight: 550;
`;

const Article = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
	padding: 0;
	width: 627px;
	@media ${device.mobile} {
    width: 414px;
  }
`;

const ItemsTitle = styled.div`
	padding: 0 40px 30px;
	font-size: 18px;
	font-weight: 550;
`;

const RankFlex = styled.div`
	display: flex;
	grid-template-columns: repeat(2, auto);
`;

const Table1 = styled.div`
	padding: 0 60px;
	width: 207px;
	@media ${device.mobile} {
    width: 138px;
  }
`;

const Table2 = styled.div`
	padding: 0 100px;
	width: 420px;
	@media ${device.mobile} {
    width: 276px;
  }
`;

const Content1 = styled.div`
	padding: 0 16px 16px 0;
	font-size: 15px;
	font-weight: 600;
`;

const Content2 = styled.div`
	padding: 0 16px 16px 0;
	font-size: 15px;
`;

class ProfileRank extends React.Component {
  render () {
    return (
      <>
        <RankLayout>
					<RankWrap>
						<Title>Rank</Title>
						<Article>
							<div class="">
						 		<ItemsTitle>Football Rank</ItemsTitle>
								<RankFlex>
									<Table1>
										<tr>
											<td>
												<Content1>Global</Content1>
											</td>
											<td>
												<Content1>1</Content1>
											</td>
										</tr>
										<tr>
											<td>
												<Content1>National</Content1>
											</td>
											<td>
												<Content1>1</Content1>
											</td>
										</tr>
										<tr>
											<td>
												<Content1>Region</Content1>
											</td>
											<td>
												<Content1>1</Content1>
											</td>
										</tr>
									</Table1>
									<Table2>
										<tr>
											<td>
												<Content2>Games</Content2>
											</td>
											<td>
												<Content2>500</Content2>
											</td>
										</tr>
										<tr>
											<td>
												<Content2>Win</Content2>
											</td>
											<td>
												<Content2>300</Content2>
											</td>
										</tr>
										<tr>
											<td>
												<Content2>Lose</Content2>
											</td>
											<td>
												<Content2>200</Content2>
											</td>
										</tr>
										<tr>
											<td>
												<Content2>Goal</Content2>
											</td>
											<td>
												<Content2>700</Content2>
											</td>
										</tr>
										<tr>
											<td>
												<Content2>Assist</Content2>
											</td>
											<td>
												<Content2>300</Content2>
											</td>
										</tr>
									</Table2>
								</RankFlex>
							</div>
						</Article>
					</RankWrap>
				</RankLayout>
    	</>
    );
  }
}

export default ProfileRank;
