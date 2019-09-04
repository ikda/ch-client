import React from "react";
import styled from "styled-components";
import {device} from "../Styles/Devices";
import Input from "../Components/Input";

const Layout = styled.div`
	display: block;
	grid-template-columns: repeat(2, auto);
	background: ${props => props.theme.webpagebgcolor};
`;

const Nav = styled.div`
	width: 1351px;
	height: 75px;
	@media ${device.mobile} {
    display: none;
  }
`;

const NavWrap1 = styled.div`
	display: flex;
	align-items: center;
	padding: 20px 26px;
	width: 1351px;
	height: 75px;
	background: ${props => props.theme.navbgcolor};
	border-bottom: 1px solid ${props => props.theme.bordercolor};
	font-size: 30px;
	font-weight: 550;
	@media ${device.mobile} {
    display: none;
  }
`;

const MobileHeader = styled.div`

	@media ${device.mobile} {
    width: 414px;
		height: 75px;
  }
`;

const HeaderWrap = styled.div`
	display: none;
	@media ${device.mobile} {
    width: 414px;
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

const Main = styled.div`
	height: 740px;
	width: 628px;
	margin: 0 auto;
	padding: 0;
	background: ${props => props.theme.articlebgcolor};
	@media ${device.mobile} {
    width: 414px;
  }
`;

const Wrap1 = styled.div`
	padding: 40px 0 0;
  display: block;
`;

const ImgWrap = styled.div`
	padding: 0 244px 60px;
	@media ${device.mobile} {
    padding: 0 137px 60px;
  }
`;

const Img = styled.div`
  &:hover {
    opacity: 0.5;
  }
  height: 10em;
	width: 10em;
  overflow: hidden;
	background-color: blue;
	border-radius: 50%;
`;

const Form = styled.div`
	padding: 16px 0 0;
  display: block;
`;

const Items = styled.div`
	margin: 0 0 16px;
  display: flex;
	@media ${device.mobile} {
    display: block;
  }
`;

const Aside = styled.div`
	margin: 6px 0 0;
  padding: 0 32px;
	width: 194px;
	color: ${props => props.theme.darkGreyColor};
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
	text-align: right;
	@media ${device.mobile} {
    width: auto;
		text-align: left;
  }
`;

const InputWrap = styled.div`
	padding: 0 60px 0 0;
	width: 100%;
	@media ${device.mobile} {
    padding: 0 22px;
  }
`;

const intheme = {
	padding: "0 10px",
	height: "2em",
	width: "100%",
	boxsizing: "border-box",
	border: "none",
	bdbottom: "1px solid #999",
	bdradius: "none",
	fontsize: "16px"
};

class EditPrfile extends React.Component {
  render () {
    return (
      <>
        <Layout>
          <Nav>
            <NavWrap1>
              <span>Nav</span>
            </NavWrap1>
          </Nav>
					<MobileHeader>
						<HeaderWrap>
							<Prev className="prev">
								<a href="/">X</a>
							</Prev>
							<span>Edit Profile</span>
						</HeaderWrap>
					</MobileHeader>
					<Main>
            <Wrap1 class="">
              <ImgWrap class="">
                <Img class="">
                  <button class="" title="프로필 사진 바꾸기">
										<img alt="프로필 사진 바꾸기" class="" src="" />
									</button>
                  <div>
                    <form enctype="multipart/form-data" method="POST" role="presentation">
                      <input accept="image/jpeg,image/png" class="" type="file" />
                    </form>
                  </div>
                </Img>

              </ImgWrap>
            </Wrap1>
            <Form>
							<Items>
								<Aside class="">
									<label for="pepName">Name</label>
								</Aside>
								<InputWrap class="">
									<Input
										intheme={intheme}
										class=""
										aria-required="false"
										id="pepName"
										type="text"
										placeholder="Name"
										value="이원욱"
									/>
								</InputWrap>
							</Items>
							<Items>
								<Aside class="">
									<label for="pepUsername">Username</label>
								</Aside>
								<InputWrap class="">
									<Input
										intheme={intheme}
										class=""
										aria-required="false"
										id="pepUsername"
										type="text"
										placeholder="Name"
										value="wwlee0405"
									/>
								</InputWrap>
							</Items>
							<Items>
								<Aside class="">
									<label for="pepArea">Area</label>
								</Aside>
								<InputWrap class="">
									<Input
										intheme={intheme}
										class=""
										aria-required="false"
										id="pepArea"
										type="text"
										placeholder="Area"
										value="Seoul"
									/>
								</InputWrap>
							</Items>
							<Items>
								<Aside class="">
									<label for="pepPosition">Position</label>
								</Aside>
								<InputWrap class="">
									<Input
										intheme={intheme}
										class=""
										aria-required="false"
										id="pepPosition"
										type="text"
										placeholder="Position"

									/>
								</InputWrap>
							</Items>
							<Items>
								<Aside class="">
									<label for="pepMainclub">Main Club</label>
								</Aside>
								<InputWrap class="">
									<Input
										intheme={intheme}
										class=""
										aria-required="false"
										id="pepMainclub"
										type="text"
										placeholder="Position"
										value="FC클럽하우스"
									/>
								</InputWrap>
							</Items>
            </Form>
					</Main>
				</Layout>
    	</>
    );
  }
}

export default EditPrfile;
