import { Head, Main, Text } from "./styles";
import Info from "../../Main/Info";
import FormFull from "../../Main/Form";
import Footer from "../../Footer";
import styled from "styled-components";

const Container = styled.section`
  background-color: blue;
`;
const Contacts = () => {

  return <>
    <section>
      <Head>Contact Us</Head>
      <Text>Any question or remarks? Just write us a message!</Text>
      <Main>
        <Info />
        <FormFull />
      </Main>
    </section>
    <Footer />
  </>
}

export default Contacts;
