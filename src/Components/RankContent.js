import React from 'react';
import styled from "styled-components";

const Layout = styled.div`
  height: 684px;
	display: block;
`;

const Table = styled.div`
  width: 100%;
`;

const ThNum = styled.div`
  height: 40px;
  width: 45px;
  border-bottom: 1px solid ${props => props.theme.bordercolor};
`;

const TheadInner = styled.div`
  height: 40px;
  width: 80px;
  padding: 8px 0;
  font-size: 12px;
  font-weight: 550;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.bordercolor};
`;

const TableInner = styled.div`
  height: 32px;
  padding: 8px 0;
  font-size: 12px;
  text-align: center;
`;

const RankContent = () => (
  <Layout>
    <div>Club Rank</div>

    <Table summary="club_rank">
      <thead>
        <tr>
          <th>
            <ThNum>Rank</ThNum>
          </th>
          <th>
            <TheadInner>Club</TheadInner>
          </th>
          <th>
            <TheadInner>경기수</TheadInner>
          </th>
          <th>
            <TheadInner>승률</TheadInner>
          </th>
          <th>
            <TheadInner>Win</TheadInner>
          </th>
          <th>
            <TheadInner>Lose</TheadInner>
          </th>
          <th>
            <TheadInner>득점</TheadInner>
          </th>
          <th>
            <TheadInner>실점</TheadInner>
          </th>
          <th>
            <TheadInner>득실차</TheadInner>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="num">
            <TableInner>1</TableInner>
          </td>
          <td>
            <TableInner>FC club</TableInner>
          </td>
          <td>
            <TableInner>600</TableInner>
          </td>
          <td>
            <TableInner>승률</TableInner>
          </td>
          <td>
            <TableInner>200</TableInner>
          </td>
          <td>
            <TableInner>100</TableInner>
          </td>
          <td>
            <TableInner>300</TableInner>
          </td>
          <td>
            <TableInner>50</TableInner>
          </td>
          <td>
            <TableInner>250</TableInner>
          </td>
        </tr>
      </tbody>
    </Table>
  </Layout>
);

export default RankContent;
