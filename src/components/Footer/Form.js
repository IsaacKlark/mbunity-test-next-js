import * as Yup from 'yup';
import { Formik, } from "formik";
import { Form, Head, TopFieldsWrapper, FieldsWrapper, Input, Button, Error, Description } from "./FormStyles";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is incorrect')
    .required('Required'),
});

const FormElement = () => {
  const initialValues = {
    email: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (<Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <Head>Join Our Newsletter</Head>
        <TopFieldsWrapper>
          <FieldsWrapper>
            <Input type="email" id="email" name="email" placeholder="Your email address" />
            <Button type="submit" disabled={isSubmitting}>Subscribe</Button>
          </FieldsWrapper>
          <Error name="email" component="div" className="error" />
        </TopFieldsWrapper>
        <Description>*  Will send you weekly updates for your better tool management.</Description>
      </Form>
    )}
  </Formik>)
}

export default FormElement;