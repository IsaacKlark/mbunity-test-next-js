import Image from 'next/image';
import CloseIcon from '../../icons/close.svg';
import ArrowDownIcon from '../../icons/arrow_down.svg';
import AvatarIcon from '../../icons/avatarMobile.svg';
import ShopIcon from '../../icons/shop.svg';
import {
  Wrapper, TopBlock, Logo, CloseButton, TextButton, TextLink, TextWrapper, ImageLink,
  ImageLinksWrapper
} from './styles';

const MobileNavigation = ({ display, setDisplayMobileNav }) => {
  return (
    <Wrapper display={display}>
      <TopBlock>
        <Logo>Logo Here</Logo>
        <CloseButton type="button" onClick={() => setDisplayMobileNav(false)}>
          <Image src={CloseIcon} alt="close" width={24} height={24} />
        </CloseButton>
      </TopBlock>
      <TextWrapper>
        <TextLink href="/home">Home</TextLink>
        <TextButton>
          Features
          <Image src={ArrowDownIcon} alt="Arrow down" width={12} height={12} />
        </TextButton>
        <TextLink href="/blog">Blog</TextLink>
        <TextLink href="/shop">Shop</TextLink>
        <TextLink href="/about">About</TextLink>
        <TextLink href="/contacts">Contact</TextLink>
      </TextWrapper>
      <ImageLinksWrapper>
        <ImageLink href="/profile">
          <Image src={AvatarIcon} alt="Avatar" width={40} height={40} />
        </ImageLink>
        <ImageLink href="/profile">
          <Image src={ShopIcon} alt="Shop" width={40} height={40} />
        </ImageLink>
      </ImageLinksWrapper>
    </Wrapper>
  );
};

export default MobileNavigation;