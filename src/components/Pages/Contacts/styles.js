import styled from "styled-components";

export const Head = styled.h1`
  font-family: 'Poppins-Bold', sans-serif;
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  text-align: center;

  @media(max-width: 650px) {
    font-size: 1.2rem;
  }
`;

export const Text = styled.p`
  color: #717171;
  text-align: center;
  font-family: 'Poppins-Medium',sans-serif;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.45rem;

  @media(max-width: 650px) {
    font-size: 0.7rem;
    width: 9.5rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Main = styled.div`
  display: flex;
  margin: 2.5rem auto;
  padding: 0.5rem;;
  justify-content: center;
  column-gap: 0.5rem;

  @media(max-width: 650px) {
    flex-direction: column;
    margin: 0.75rem auto 5.15rem;
  }
`;