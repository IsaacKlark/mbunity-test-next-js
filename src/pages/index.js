import Contacts from "@/components/Pages/Contacts";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import styled from "styled-components";

const Container = styled.div`
  background-color: #FBFBFB;
`;

export default function Home() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <Container>
      <Navigation setDisplayMobileNav={setDisplayMobileNav} />
      <MobileNavigation display={displayMobileNav} setDisplayMobileNav={setDisplayMobileNav} />
      <Contacts />
    </Container>
  );
}
