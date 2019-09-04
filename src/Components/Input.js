import styled from "styled-components";

const Input = styled.input`
  padding: ${props => props.intheme.padding};
  margin: 0;
  height: ${props => props.intheme.height};
  width: ${props => props.intheme.width};
  color: #262626;
  background: #F8F8FF;
  box-sizing: ${props => props.intheme.boxsizing};
  border: ${props => props.intheme.border};
  border-bottom: ${props => props.intheme.bdbottom};
  border-radius: ${props => props.intheme.bdradius};
  font-size: ${props => props.intheme.fontsize};
  background-image: ${props => props.intheme.bgimage};
  background-position: ${props => props.intheme.bgposition};
  background-repeat: ${props => props.intheme.bgrepeat};
`;

// when you use backgroundimage
// background-image ex)-> url('searchicon.png');
// background-position  ex)-> 10px 10px;
// background-repeat  ex)-> no-repeat;

Input.defaultProps = {
  intheme: {
    padding: "0 10px",
    height: "4em",
    width: "auto",
    boxsizing: "border-box",
    border: "none",
    bdbottom: "1px solid black",
    bdradius: "none",
    fontsize: "16px",
    bgimage: "none",
    bgposition: "none",
    bgrepeat: "none"
  }
}

export default Input;
