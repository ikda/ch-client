import React from 'react';
import styled from "styled-components";

const Layout = styled.div`
  height: 342px;
	display: block;
	border-bottom: 1px solid rgba(0,0,0,.0975);
`;

const Header = styled.div`
  height: 60px;
  width: 100%;
	padding: 16px;
	display: flex;
`;

const ImgWrap = styled.div`
  height: 32px;
	width: 32px;
`;



const Imgbox = styled.div`
	border: 1px solid rgba(0,0,0,.0975);
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const HeaderArticle = styled.div`
  width: 100%;
  height: 33px;
  margin-left: 12px;
`;

const ID = styled.span`
  width: 100%;
  height: 18px;
  font-weight: 600;
`;

const AreaAndTime = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
`;

const Time = styled.span`
  margin-left: 20px;
`;

const Main = styled.div`
  height: 212px;
  width: 100%;
	padding: 16px;
	display: flex;
  background: pink;
`;

const Footer = styled.div`
  height: 70px;
  width: 100%;
	padding: 0 16px;
	display: block;
`;

const ImgBtnSection = styled.div`
  height: 40px;
  width: 100%;
	display: flex;
`;

const ImgBtnSpan = styled.div`
  height: 40px;
  width: 40px;
`;

//height : auto; ??
const ReplySection = styled.div`
  height: 12px;
  width: 100%;
  margin-bottom: 4px;
  font-size: 8px;
`;

const HitsSeciton = styled.div`
  height: 18px;
  width: 100%;
  margin-bottom: 4px;
  font-size: 10px;
`;

const FeedContent = () => (
  <Layout>
    <Header>
      <ImgWrap role="button" tabindex="0">

        <Imgbox role="link" tabindex="0">
          <img alt="wwlee님의 프로필 사진" src="/" width="100%" height="100%" />
        </Imgbox>
      </ImgWrap>
      <HeaderArticle>
        <ID>
          <h2>
            <a class="" title="fcarsnal" href="/fcarsnal/">FC Arsnal</a>
          </h2>
        </ID>
        <AreaAndTime class="">
          <div>
            <span class="">London, UK</span>
          </div>
          <Time class="">
            <span>2/15/19, 5:02 AM</span>
          </Time>
        </AreaAndTime>
      </HeaderArticle>
    </Header>

    <Main>

    </Main>

    <Footer>
      <ImgBtnSection class="">
        <ImgBtnSpan class="_15y0l">
          <button class="" height="40px" width="40px">
            <span class="" aria-label="댓글 달기">댓</span>
          </button>
        </ImgBtnSpan>
        <ImgBtnSpan class="">
          <button class="" height="40px" width="40px">
            <span class="" aria-label="게시물 공유">공</span>
          </button>
        </ImgBtnSpan>
      </ImgBtnSection>

      <ReplySection>
        <div class="" type="button">

          <span class="EizgU">댓글보기</span>
        </div>
      </ReplySection>

      <HitsSeciton>
        <div class="">
          <span class="">hits <span>200</span> 개</span>
        </div>
      </HitsSeciton>
    </Footer>
  </Layout>
);

export default FeedContent;
