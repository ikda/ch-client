import React from "react";
import styled from "styled-components";
import LogInput from "../../Components/LogInput";
import LogButton from "../../Components/LogButton";


const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    border-radius: 0px;
    width: 100%;
    max-width: 250px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0px;

`;

const Link = styled.span`
    color: ${props => props.theme.blueColor};
    cursor: pointer;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        width: 100%;
        input {
            width: 100%;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
        button {
            margin-top: 7px;
        }
    }
`;

export default ({
    action,
    setAction,
    username,
    firstName,
    lastName,
    email,
    secret,
    onSubmit

}) => {
    return (
        <Wrapper>
            <Form>
                {action === "logIn" && (
                <form onSubmit={onSubmit}>
                    <LogInput placeholder={"Email"} {...email} type="email"/>
                    <LogButton text={"Log In"} />
                </form>
            )}
            {action === "signUp" && (
                <form onSubmit={onSubmit}>
                    <LogInput placeholder={"Username"} {...username} />
                    <LogInput placeholder={"First name"} {...firstName}/>
                    <LogInput placeholder={"Last name"} {...lastName}/>
                    <LogInput placeholder={"Email"} {...email} type="email"/>
                    <LogButton text={"Sign up"} />
                </form>
            )}
            {action === "confirm" && (
                <form onSubmit={onSubmit}>
                    <LogInput placeholder="Paste your secret" required {...secret} />
                    <LogButton text={"Confirm"} />
                </form>
            )}
            </Form>
            {action !== "confirm" && (
            <StateChanger>
                {action === "logIn" ? (
                    <>
                    Don't have an account?{" "}
                    <Link onClick={() => setAction("signUp")}>Sign up</Link>
                    </>
                )  :  (
                    <>
                    Have an account?{" "}
                    <Link onClick={() => setAction("logIn")}>Log in</Link>
                    </>
                )
                }
            </StateChanger>)}

        </Wrapper>
    );
}
