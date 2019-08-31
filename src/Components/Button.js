import styled from "styled-components";

const Button = styled.button`
  font-size: 15px;
  margin: 0px;
  border-radius: 5px;

  padding: ${props => props.btntheme.padding};
  color: ${props => props.btntheme.fontcolor};
  border: 1px solid ${props => props.btntheme.bordercolor};
  background: ${props => props.btntheme.bgcolor};
`;

Button.defaultProps = {
  btntheme: {
    padding: "5px 10px",
    fontcolor: "#ffffff",
    bordercolor: "#3897f0",
    bgcolor: "#3897f0"
  }
}

export default Button;
