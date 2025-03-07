import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  width: 24.55rem;
  height: 32.35rem;
  flex-shrink: 0;
  background-color: black;
  padding: 2rem 2rem 1.8rem;
  position: relative;
  border-radius: 0.5rem;;
  overflow: hidden;

  @media(max-width: 650px) {
    width: 15.5rem;
    height: 19.85rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.3rem;
    padding: 0.8rem 2rem 1.8rem;
  }
`;

export const Head = styled.h2`
  color: white;
  font-family: "Poppins-Medium", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0.3rem;
  text-align: start;
  letter-spacing: 0.0.75rem;

  @media(max-width: 650px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const TextMiddle = styled.p`
  color: white;
  font-family: "Poppins-Regular", sans-serif;
  color: #C9C9C9;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5.55rem;
  text-align: start;

  @media(max-width: 650px) {
    font-size: 0.55rem;
    text-align: center;
    margin-bottom: 0.65rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  column-gap: 1.25rem;
  margin-bottom: 2.5rem;
  align-items: center;
  
  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media(max-width: 650px) {
    flex-direction: column;
    row-gap: 0.45rem;
    margin-bottom: 0.75rem;
    align-items: center;
  }
`;

export const Text = styled.p`
  color: white;
  color: #FFF;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Poppins-Regular", sans-serif;
  max-width: 14.9rem;
  text-align: start;

  @media(max-width: 650px) {
    flex-direction: column;
    font-size: 0.6rem;
    text-align: center;
  }
`;

export const CirclesImage = styled(Image)`
  height: 10.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10.4rem;

  @media(max-width: 650px) {
    display: none;
  }
`;

export const Ellipse1Img = styled(Image)`
  height: 5.05rem;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 4.05rem;

  @media(min-width: 650px) {
    display: none;
  }
`;

export const Ellipse2Img = styled(Image)`
  height: 2.7rem;
  position: absolute;
  bottom: 2.6rem;
  right: 1.3rem;
  width: 2.7rem;

  @media(min-width: 650px) {
    display: none;
  }
`;

export const BottomWrapper = styled.div`
  bottom: 0;
  left: 0;
  display: flex;
  column-gap: 1.2rem;
  margin-top: 7.95rem;

  @media(max-width: 650px) {
    margin-top: 2.9rem;
    justify-content: center;
  }
`;

export const Link = styled.a`
  svg {
    width: 1.5rem;
    height: 1.5rem;

    circle {
      fill: #1B1B1B;
    }

    path {
      fill: white;
    }
  }

  &:hover {
    cursor: pointer;

    svg circle {
      fill: white;
    }

    svg path {
      fill: black;
    }
  }
`;

export const Img = styled(Image)`
  @media(max-width: 650px) {
    margin-right: 0.5rem;;
  }
`;