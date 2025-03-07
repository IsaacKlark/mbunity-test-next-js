import Avatar from "../../icons/avatar.svg";
import Shop from "../../icons/shop.svg";
import ArrowDown from "../../icons/arrow_down.svg";
import {
  Nav, Logo, Wrapper, TextWrapper, TextLink, TextButton, ImagesWrapper, ImageLink,
  MenuButton
} from "./styles";
import MenuIcon from "../../icons/mobile_menu.svg";
import Image from "next/image";

const Navigation = ({ setDisplayMobileNav }) => {
  return (
    <Nav>
      <Logo>Logo Here</Logo>
      <Wrapper>
        <TextWrapper>
          <TextLink href="/home">
            Home
          </TextLink>
          <TextButton>
            Features
            <Image src={ArrowDown} alt="open" />
          </TextButton>
          <TextLink href="/blog">
            Blog
          </TextLink>
          <TextLink href="/shop">
            Shop
          </TextLink>
          <TextLink href="/about">
            About
          </TextLink>
          <TextLink href="/contacts">
            Contact
          </TextLink>
        </TextWrapper>
        <ImagesWrapper>
          <ImageLink href="/profile"><Image src={Avatar} alt="profile" /></ImageLink>
          <ImageLink href="/profile"><Image src={Shop} alt="shop" /></ImageLink>
        </ImagesWrapper>
        <MenuButton type="button" onClick={() => setDisplayMobileNav(true)}><Image src={MenuIcon} alt="menu" /></MenuButton>
      </Wrapper>
    </Nav>)
}

export default Navigation;