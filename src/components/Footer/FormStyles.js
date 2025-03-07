import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const Form = styled.form`
  border-radius: 0.5rem;;
  background: #131313;
  width: 15.2rem;
  height: 9.2rem;
  margin-top: 0.95rem;
  padding: 0.7rem 0.65rem 1.05rem 0.7rem;

  @media(max-width: 650px) {
    margin-left: auto;
    margin-right: auto;
    width: 16rem;
    margin-top: 1.3rem;
    height: 8.75rem;
    padding-top: 0.8rem;
  }
`;

export const Head = styled.h1`
  color: white;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3rem;
  margin-bottom: 1.45rem;
  text-align: start;
  letter-spacing: 0.1px;

  @media(max-width: 650px) {
    font-size: 0.8rem;
    margin-bottom: 1.1rem;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.2rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 0.95rem;
`;

export const Input = styled(Field)`
  border: none;
  width: 8.6rem;
  height: 1.95rem;
  background-color: #1E1E1E;
  color: #616161;
  font-family: 'Poppins-Regular';
  font-size: 0.55rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 0.5rem;;
`;

export const Button = styled.button`
  border: none;
  background-color: black;
  width: 5.25rem;
  height: 1.95rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins-Medium';
  font-size: 0.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Error = styled(ErrorMessage)`
  text-align: start;
  color: red;
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 0.45rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  position: absolute;
  bottom: ${({ bottom }) => bottom ? bottom : "-1rem"};
`;

export const Description = styled.p`
  font-family: 'Manrope-Regular', sans-serif;
  color: white;
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.5;
  text-align: start;
  letter-spacing: 0.0.8rem;

  @media(max-width: 650px) {
    width: 12.3rem;
  }
`;

export const TopFieldsWrapper = styled.div`
  position: relative;
`;
