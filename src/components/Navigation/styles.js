import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  display: flex;
  padding: 2rem 5rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.65rem;

  @media(max-width: 650px) {
    padding: 1.4rem 1rem 0.5rem;;
  }
`;

export const Logo = styled.p`
  font-family: 'Inter-Bold', sans-serif;
  color: #000;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: normal;

  @media(max-width: 650px) {
    font-size: 0.9rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.8rem;
  width: max-content;

  @media(max-width: 650px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
 display: flex;
  align-items: center;
  column-gap: 2.35rem;
  width: max-content;
  margin-right: 3.05rem;

  @media(max-width: 650px) {
    display: none;
  }
`;

export const ImageLink = styled(Link)`
  width: 1.55rem;
  height: 1.5769rem;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #000;
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 0.9rem;
    height: 0.9rem;
  }
`

export const TextLink = styled(Link)`
  font-family: 'Roboto-Regular', sans-serif;
  color: #1F1F1F;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;

  &.active {
    font-family: 'Roboto-Bold', sans-serif;
    font-weight: 600;
    color: #000;
  }
`;

export const TextButton = styled.button`
  font-family: 'Roboto-Regular', sans-serif;
  color: #1F1F1F;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: normal;
  width: max-content;
  display: flex;
  align-items: center;
  column-gap: 0.35rem;
  margin-right: -0.25rem;
  border: 0;
  background-color: transparent;
  border: none;

  img {
    width: 0.6rem;
    height: 0.6rem;
  }
`;

export const MenuButton = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  background-color: transparent;
  border: none;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media(min-width: 650px) {
    display: none;
  }
`;