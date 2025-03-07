
import styled from "styled-components";
import { Form, Field, ErrorMessage } from 'formik';
import Image from "next/image";

export const Wrapper = styled(Form)`
  max-width: 31.75rem;
  padding-right: 2rem;
  padding-left: 2rem;
  width: 100%;
  padding-top: 0.3rem;
  position: relative;
  background-color: white;

  @media(max-width: 650px) {
    padding-right: 0;
    width: 13.9rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  column-gap: 1.95rem;
  margin-top: 2.1rem;
  position: relative;

  @media(max-width: 650px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.15rem;
    row-gap: 0.95rem;
  }
`;

export const CustomField = styled(Field)`
  border: none;
  width: 100%;
  color: #000;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  height: 1.75rem;
  border-bottom: 1px solid #8D8D8D;
  padding-bottom: 0.3rem;

  &::placeholder {
    color: #8D8D8D;
  };

  &:hover {
    border-color: black;
    cursor: pointer;
  }
`;

export const FieldWrapper = styled.label`
  width: 100%;
  position: relative;

  &:hover {
    p {
      color: black;
    }
  }

  @media(max-width: 650px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Text = styled.p`
  text-align: start;
  color: ${({ filled }) => filled ? "black" : "#8D8D8D"};
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 0.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
`;

export const Error = styled(ErrorMessage)`
  text-align: start;
  color: red;
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 0.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  position: absolute;
  bottom: ${({ bottom }) => bottom ? bottom : "-1rem"};
`;

export const RadioHead = styled.h2`
  color: #000;
  margin-top: 2.25rem;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  margin-bottom: 0.6rem;
  text-align: start;

  @media(max-width: 650px) {
    margin-top: 1.3rem;
    margin-bottom: 0.45rem;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  column-gap: 1.05rem;
  margin-bottom: 2.4rem;

  @media(max-width: 650px) {
    flex-wrap: wrap;
    row-gap: 0.75rem;
    margin-bottom: 1.4rem;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;;
  position: relative;

  img {
    width: 0.65rem;
    height: 0.65rem;
    margin-top: 0.2rem;
  }
`;

export const EmptyRadio = styled.div`
  width: 0.65rem;
  height: 0.65rem;
  margin-top: 0.2rem;
`;

export const RadioText = styled.p`
  color: #000;
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 0.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;

  @media(max-width: 650px) {
    white-space: nowrap;
  }
`;

export const Radio = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Button = styled.button`
  width: 10.7rem;
  height: 2.7rem;
  background-color: black;
  color: white;
  text-align: center;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2.25rem;
  border-radius: 5px;
  box-shadow: 0px 0px 0.7rem 0px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media(max-width: 650px) {
    margin-top: 1.2rem;
    width: 13.9rem;
    height: 1.9rem;
    font-size: 0.65rem;
  }
`;

export const PlaneImage = styled(Image)`
  position: absolute;
  bottom: -2.5rem;
  right: 6.15rem;
  width: 13.35rem;
  height: 11rem;

  @media(max-width: 650px) {
    bottom: -4.4rem;
    right: 6.15rem;
    width: 6.05rem;
    height: 5.25rem;
  }
`;
