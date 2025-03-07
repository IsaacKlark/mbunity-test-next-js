import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: black;
  padding: 4rem 4rem 2.15rem;

  @media(max-width: 650px) {
    padding: 0.9rem 1rem 1.75rem;
  }
`;

export const Logo = styled.div`
  width: 100%;
  padding-bottom: 2.25rem;
  color: white;
  font-family: "Inter-Bold", sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border-bottom: 1px solid white;
  
  @media(max-width: 650px) {
    padding-left: 1.4rem;
    padding-bottom: 1.1rem;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media(max-width: 970px) {
    flex-wrap: wrap;
  }
`;

export const ColumnHead = styled.p`
  margin-top: 1.5rem;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3rem;
  color: white;
  margin-bottom: 1rem;
  text-align: start;

  @media(max-width: 650px) {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }
`;

export const Column1 = styled.div`
  padding-left: 1rem;
  margin-right: 0.2rem;

  @media(max-width: 650px) {
    padding-left: 0px;
    margin-right: 0px;
  }
`;

export const Column = styled.div`
  padding-left: 1rem;
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  margin-right: 2.05rem;

  @media(max-width: 650px) {
    padding-left: 0px;
    margin-right: 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  column-gap: 1.25rem;
  margin-bottom: 1.2rem;
  align-items: center;

  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media(max-width: 650px) {
    flex-direction: column;
    row-gap: 0.45rem;
    margin-bottom: 0.8rem;

    img {
      position: relative;
      left: -0.15rem;
    }
  }
`;

export const Text = styled.p`
  font-family: 'Poppins-Regular', sans-serif;
  color: white;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  max-width: 15.45rem;

  @media(max-width: 650px) {
    font-size: 0.6rem;
    max-width: 8.15rem;
  }
`

export const CustomLink = styled(Link)`
  font-family: 'Poppins-Regular', sans-serif;
  color: white;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  text-decoration: none;
  white-space: nowrap;
  margin-bottom: 1.2rem;

  @media(max-width: 650px) {
    font-size: 0.6rem;
    margin-top: 0.3rem;
    margin-bottom: 0.7rem;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2.75rem;

  @media(max-width: 650px) {
    margin-right: 0;
    justify-content: space-between;
    width: 100%;
    margin-top: -0.8rem;
  }
`;