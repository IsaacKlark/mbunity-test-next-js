import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.section`
  position: absolute;
  background-color: black;
  width: 100%;
  transition: all 1s;
  height: 23.8rem;
  top: ${({ display }) => display ? "0" : "-23.8rem"};
  left: 0;
  z-index: 2;
  padding: 1.4rem 1rem 1.5rem;

  @media(min-width: 650px) {
    display: none;
  }
`;

export const TopBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2.6rem;
`;

export const Logo = styled.p`
  font-family: 'Inter-Bold', sans-serif;
  color: white;
  font-size: 0.9rem;
  font-weight: 800;
  line-height: normal;
  margin-top: 0.05rem;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 1.475rem;
  width: max-content;
  margin-right: 3.05rem;
  padding-left: 0.15rem;
  margin-bottom: 3rem;
`;

export const TextLink = styled(Link)`
  font-family: 'Roboto-Regular', sans-serif;
  color: white;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const TextButton = styled.button`
  font-family: 'Roboto-Regular', sans-serif;
  color: white;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: normal;
  width: max-content;
  display: flex;
  align-items: center;
  column-gap: 0.35rem;
  margin-right: -0.25rem;
  background-color: transparent;

  svg {
    width: 0.6rem;
    height: 0.6rem;

    path {
      fill: white;
    }
  }
`;

export const ImageLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 1.8rem;
`;

export const ImageLink = styled(Link)`
  width: 1.55rem;
  height: 1.5769rem;
  flex-shrink: 0;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  svg {
    width: 0.9rem;
    height: 0.9rem;

    path {
      fill: white;
    };
  };
`