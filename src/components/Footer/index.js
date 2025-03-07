import FormElement from "./Form";
import Image from "next/image";
import Phone from "../../icons/call.svg";
import Message from "../../icons/message.svg";
import Location from "../../icons/location.svg";
import { Wrapper, Logo, Main, Column, Column1, ColumnHead, InfoWrapper, Text, Links, CustomLink } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Logo>Logo Here</Logo>
      <Main>
        <Column1>
          <ColumnHead>Reach us</ColumnHead>
          <InfoWrapper>
            <Image src={Phone} alt="phone" width={24} height={24} />
            <Text>+1012 3456 789</Text>
          </InfoWrapper>
          <InfoWrapper>
            <Image src={Message} alt="email" width={24} height={24} />
            <Text>demo@gmail.com</Text>
          </InfoWrapper>
          <InfoWrapper>
            <Image src={Location} alt="location" width={24} height={24} />
            <Text>132 Dartmouth Street Boston, Massachusetts 02156 United States</Text>
          </InfoWrapper>
        </Column1>
        <Column>
          <ColumnHead>Company</ColumnHead>
          <CustomLink href="/about">About</CustomLink>
          <CustomLink href="/contact">Contact</CustomLink>
          <CustomLink href="/blogs">Blogs</CustomLink>
        </Column>
        <Links>
          <Column>
            <ColumnHead>Legal</ColumnHead>
            <CustomLink href="/privacy-policy">Privacy Policy</CustomLink>
            <CustomLink href="/terms-and-service">Terms & Services</CustomLink>
            <CustomLink href="/terms-of-use">Terms of Use</CustomLink>
            <CustomLink href="/refund-policy">Refund Policy</CustomLink>
          </Column>
          <Column>
            <ColumnHead>Quick Links</ColumnHead>
            <CustomLink href="/techlabz-keybox">Techlabz Keybox</CustomLink>
            <CustomLink href="/downloads">Downloads</CustomLink>
            <CustomLink href="/forum">Forum</CustomLink>
          </Column>
        </Links>
        <FormElement />
      </Main>
    </Wrapper>
  );
}

export default Footer;