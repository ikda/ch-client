import React from "react";
import styled from "styled-components";

const RankLayout = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
`;




const Title = styled.div`
	padding: 20px 20px;
	width: 100%;
	font-size: 20px;
	font-weight: 550;
`;

const Article = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
	padding: 10px 20px 0;
`;

const RankItems = styled.div`
	margin-bottom: 20px;
	font-size: 18px;
	font-weight: 500;
`;

const RankFlex = styled.div`
	display: flex;
	grid-template-columns: repeat(2, auto);
`;

const Rank_Table = styled.div`
	border-collapse: collapse;
	width: 100%;
`;

const RankItemsContent = styled.div`
	padding: 0 16px 16px 0;
	font-size: 15px;
`;

class ProfileRank extends React.Component {
  render () {
    return (
      <>
        <RankLayout>
					<Title>Rank</Title>
					<Article>
						<div class="">
					 		<RankItems>Football Rank</RankItems>
							<RankFlex>
								<Rank_Table>
									<tr>
										<td>
											<RankItemsContent>Global</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>1</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>National</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>1</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Region</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>1</RankItemsContent>
										</td>
									</tr>
								</Rank_Table>
								<Rank_Table>
									<tr>
										<td>
											<RankItemsContent>Games</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>500</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Win</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>300</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Lose</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>200</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Goal</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>700</RankItemsContent>
										</td>
									</tr>
									<tr>
										<td>
											<RankItemsContent>Assist</RankItemsContent>
										</td>
										<td>
											<RankItemsContent>300</RankItemsContent>
										</td>
									</tr>
								</Rank_Table>
							</RankFlex>
						</div>
					</Article>
				</RankLayout>
    	</>
    );
  }
}

export default ProfileRank;
