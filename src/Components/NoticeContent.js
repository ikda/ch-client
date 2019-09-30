import React from 'react';
import styled from "styled-components";

const Layout = styled.div`
  &:hover {
    opacity: 0.5;
  }
  height: 100px;
	padding: 8px 16px;
	display: flex;
	border-bottom: 1px solid rgba(0,0,0,.0975);
`;

const ImgWrap = styled.div`
  height: 80px;
	width: 80px;
	margin-right: 40px;
`;

const ImgWrap1 = styled.div`
  height: 80px;
	width: 80px;
`;

const Canvas = styled.div`
	position: absolute;
	top: -5;
	left: -5;
	height: 80px;
	width: 80px;
`;

const Img = styled.div`
	top: -5;
	left: -5;
	border: 1px solid rgba(0,0,0,.0975);
  border-radius: 50%;
  bottom: 0;
	content: '';
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
`;

const Main = styled.div`
	height: 64px;
	font-size: 14px;
`;

const ID = styled.div`
	height: 14px;
`;

const Article = styled.div`
	height: 56px;
	margin-top: 8px;
	padding-right: 20px;
`;

const NoticeContent = () => (
  <Layout>
    <ImgWrap>
      <ImgWrap1 class="" role="button" tabindex="0">
        <Canvas class="" width="108px" height="108px">
          <a class="" href="/adidas/">
            <Img alt="adidas님의 프로필 사진" class="" src="/" />
          </a>
        </Canvas>
      </ImgWrap1>
    </ImgWrap>

    <Main class="">
      <ID class="" id="">
        <div class="">
          <a title="adidas" href="/adidas/">
            <div class=" ">
              <div class="">
                <div class="">adidas</div>
              </div>
            </div>
          </a>
        </div>
      </ID>
      <Article class="" id="">
        <span>2020년 6월 19일 상암월드컵경기장</span>
        <span>전국 아마추어대회 개최</span>
      </Article>
    </Main>
  </Layout>


);

export default NoticeContent;
