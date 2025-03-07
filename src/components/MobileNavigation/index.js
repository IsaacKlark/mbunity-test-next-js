import Image from 'next/image';
import CloseIcon from '../../icons/close.svg';
import ArrowDownIcon from '../../icons/arrow_down.svg';
import AvatarIcon from '../../icons/avatar2.svg';
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
          <Image src={AvatarIcon} alt="Avatar" width={20} height={20} />
        </ImageLink>
        <ImageLink href="/profile">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_688)">
              <path d="M0 1.03987C0 0.89829 0.0561921 0.762509 0.156215 0.662397C0.256237 0.562285 0.391897 0.506042 0.53335 0.506042H2.1334C2.25237 0.506075 2.36791 0.54592 2.46166 0.61924C2.5554 0.69256 2.62196 0.795146 2.65075 0.910683L3.08276 2.64135H15.4671C15.5455 2.64142 15.6228 2.65876 15.6937 2.69212C15.7645 2.72548 15.8272 2.77405 15.8772 2.83439C15.9272 2.89472 15.9633 2.96533 15.9829 3.04121C16.0026 3.11708 16.0053 3.19636 15.9909 3.2734L14.3908 11.8146C14.368 11.937 14.3031 12.0474 14.2075 12.127C14.1118 12.2065 13.9914 12.2501 13.8671 12.2502H4.2668C4.14246 12.2501 4.02206 12.2065 3.92643 12.127C3.83079 12.0474 3.76593 11.937 3.74305 11.8146L2.14407 3.28942L1.71739 1.5737H0.53335C0.391897 1.5737 0.256237 1.51745 0.156215 1.41734C0.0561921 1.31723 0 1.18145 0 1.03987ZM3.3089 3.70901L4.70948 11.1826H13.4244L14.825 3.70901H3.3089ZM5.3335 12.2502C4.76769 12.2502 4.22505 12.4752 3.82496 12.8757C3.42487 13.2761 3.2001 13.8192 3.2001 14.3855C3.2001 14.9519 3.42487 15.495 3.82496 15.8954C4.22505 16.2959 4.76769 16.5209 5.3335 16.5209C5.89931 16.5209 6.44195 16.2959 6.84204 15.8954C7.24213 15.495 7.4669 14.9519 7.4669 14.3855C7.4669 13.8192 7.24213 13.2761 6.84204 12.8757C6.44195 12.4752 5.89931 12.2502 5.3335 12.2502ZM12.8004 12.2502C12.2346 12.2502 11.6919 12.4752 11.2919 12.8757C10.8918 13.2761 10.667 13.8192 10.667 14.3855C10.667 14.9519 10.8918 15.495 11.2919 15.8954C11.6919 16.2959 12.2346 16.5209 12.8004 16.5209C13.3662 16.5209 13.9088 16.2959 14.3089 15.8954C14.709 15.495 14.9338 14.9519 14.9338 14.3855C14.9338 13.8192 14.709 13.2761 14.3089 12.8757C13.9088 12.4752 13.3662 12.2502 12.8004 12.2502ZM5.3335 13.3179C5.6164 13.3179 5.88772 13.4304 6.08777 13.6306C6.28781 13.8308 6.4002 14.1024 6.4002 14.3855C6.4002 14.6687 6.28781 14.9403 6.08777 15.1405C5.88772 15.3407 5.6164 15.4532 5.3335 15.4532C5.05059 15.4532 4.77927 15.3407 4.57923 15.1405C4.37918 14.9403 4.2668 14.6687 4.2668 14.3855C4.2668 14.1024 4.37918 13.8308 4.57923 13.6306C4.77927 13.4304 5.05059 13.3179 5.3335 13.3179ZM12.8004 13.3179C13.0833 13.3179 13.3546 13.4304 13.5547 13.6306C13.7547 13.8308 13.8671 14.1024 13.8671 14.3855C13.8671 14.6687 13.7547 14.9403 13.5547 15.1405C13.3546 15.3407 13.0833 15.4532 12.8004 15.4532C12.5175 15.4532 12.2462 15.3407 12.0461 15.1405C11.8461 14.9403 11.7337 14.6687 11.7337 14.3855C11.7337 14.1024 11.8461 13.8308 12.0461 13.6306C12.2462 13.4304 12.5175 13.3179 12.8004 13.3179Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_688">
                <rect width="18" height="18.581" fill="white" transform="translate(0 0.121826)" />
              </clipPath>
            </defs>
          </svg>

        </ImageLink>
      </ImageLinksWrapper>
    </Wrapper>
  );
};

export default MobileNavigation;