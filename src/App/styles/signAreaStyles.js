import styled from "styled-components";
import vars from "../../theme/variables";
import { Col } from "./bodyStyles";

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;

    background-color: ${vars.light};
    border-radius: 0.5rem;
    width: 20rem;
    height: auto;
    padding: 0;
`;

export const SignInForm = styled(Col)`
    padding: 0.5rem;
    align-items: center;
`;

export const Input = styled.input`
    width: 15rem;
    height: 1.5rem;
    margin: 0.5rem;
    &:focus-visible {
        outline: gold auto 0.1rem;
    }
`;
export const Password = styled(Input)`
`;
export const Button = styled(Input)`
    border-radius: 0.3rem;
    padding: 0.5rem;
    width: 10rem;
    height: fit-content;
    color: #1877f2;
    font-family: inherit;
    background-color: #F2DB64;
    border: 0;
    font-weight: 500;
    cursor: pointer;
`;

export const Switch = styled.div`
    border-radius: 0.3rem;
    background-color: #42B72A;
    color: white;
    padding: 0.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
`;