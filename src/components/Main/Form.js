import { Formik } from 'formik';
import * as Yup from "yup";
import { useState } from "react";
import Tick from "../../icons/tick.svg";
import Plane from "../../icons/plane.svg";
import {
  Wrapper, FieldWrapper, FieldsWrapper, Text, CustomField, Error, Radio,
  RadioHead, RadioLabel, RadioText, Button, ButtonWrapper, RadioWrapper, EmptyRadio,
  PlaneImage
} from './formStyles';
import Image from "next/image";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  message: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Email is incorrect')
    .required('Required'),
  phone: Yup.string()
    .matches(/^(\+)[0-9\s]{14,18}$/, 'incorrect format')
    .required('Required'),
});

const radioVars = [0, 1, 2, 3, 4];

const FormFull = () => {
  const [selectedRadio, setSelectedRadio] = useState(radioVars[0]);
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting, values }) => (
      <Wrapper>
        <FieldsWrapper>
          <FieldWrapper htmlFor="firstName" >
            <Text filled={!!values.firstName}>First Name</Text>
            <CustomField type="text" id="firstName" name="firstName" placeholder="First Name" />
            <Error name="firstName" component="div" className="error" />
          </FieldWrapper>

          <FieldWrapper htmlFor="lastName">
            <Text filled={!!values.lastName}>Last Name</Text>
            <CustomField type="text" id="lastName" name="lastName" placeholder="Last Name" />
            <Error name="lastName" component="div" className="error" />
          </FieldWrapper>
        </FieldsWrapper>

        <FieldsWrapper>
          <FieldWrapper htmlFor="email">
            <Text filled={!!values.email}>Email</Text>
            <CustomField type="email" id="email" name="email" placeholder="Email" />
            <Error name="email" component="div" className="error" />
          </FieldWrapper>

          <FieldWrapper htmlFor="phone">
            <Text filled={!!values.phone}>Phone Number</Text>
            <CustomField type="text" id="phone" name="phone" placeholder="Phone Number" />
            <Error name="phone" component="div" className="error" />
          </FieldWrapper>
        </FieldsWrapper>
        <RadioHead>
          Select Subject?
        </RadioHead>

        <RadioWrapper>
          <RadioLabel htmlFor="option1">
            {selectedRadio === radioVars[0] ? <Image src={Tick} alt="selected" /> : <EmptyRadio />}
            <RadioText>General Inquiry</RadioText>
            <Radio type="radio"
              name="options"
              value="option1"
              id="option1"
              checked={selectedRadio === radioVars[0]}
              onChange={() => { setSelectedRadio(radioVars[0]) }}
            />
          </RadioLabel>
          <RadioLabel htmlFor="option2">
            {selectedRadio === radioVars[1] ? <Image src={Tick} alt="selected" /> : <EmptyRadio />}
            <RadioText>General Inquiry</RadioText>
            <Radio type="radio"
              name="options"
              value="option2"
              id="option2"
              checked={selectedRadio === radioVars[1]}
              onChange={() => { setSelectedRadio(radioVars[1]) }}
            />
          </RadioLabel>
          <RadioLabel htmlFor="option3">
            {selectedRadio === radioVars[2] ? <Image src={Tick} alt="selected" /> : <EmptyRadio />}
            <RadioText>General Inquiry</RadioText>
            <Radio type="radio"
              name="options"
              value="option3"
              id="option3"
              checked={selectedRadio === radioVars[2]}
              onChange={() => { setSelectedRadio(radioVars[2]) }}
            />
          </RadioLabel>
          <RadioLabel htmlFor="option4">
            {selectedRadio === radioVars[3] ? <Image src={Tick} alt="selected" /> : <EmptyRadio />}
            <RadioText>General Inquiry</RadioText>
            <Radio type="radio"
              name="options"
              value="option4"
              id="option4"
              checked={selectedRadio === radioVars[3]}
              onChange={() => { setSelectedRadio(radioVars[3]) }}
            />
          </RadioLabel>
        </RadioWrapper>
        <FieldWrapper htmlFor="message">
          <Text filled={!!values.message}>Message</Text>
          <CustomField type="text" id="message" name="message" placeholder="Write your message.." />
          <Error name="message" component="div" className="error" bottom="-1.5rem" />
        </FieldWrapper>
        <ButtonWrapper>
          <Button type="submit" disabled={isSubmitting}>Send Message</Button>
        </ButtonWrapper>
        <PlaneImage src={Plane} alt="" />
      </Wrapper>)}
  </Formik>
}

export default FormFull;