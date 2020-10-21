import React from "react"
import PageInfo from "../components/PageInfo/PageInfo"
import styled from "styled-components"
import Button from "../components/Button/Button"
import { Formik } from "formik"
import axios from "axios"

const pageData = {
  title: "contact",
  paragraph:
    "While artists work from real to the abstract, architects must work from the abstract to the real. ",
}

const StyledInput = styled.input`
  display: block;
  border: 2px solid black;
  background: none;
  font-family: "Montserrat", sans serif;
  font-size: 20px;
  height: ${({ as }) => (as ? `200px` : `auto`)};
  width: ${({ as }) => (as ? `500px` : `300px`)};
  margin-bottom: ${({ as }) => as && "40px"};
`
const StyledLabel = styled.label`
margin 30px 0 10px;
display:block;
font-size: 14px;
font-weight:bold;
font-family:"Montserrat", sans serif;

`
const ContactPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />

    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(
            "http://localhost:5001/hatta-website-8fcec/us-central1/sendEmail",
            values
          )
          .then(res => {
            console.log(res)
            setSubmitting(false)
          })
          .catch(err => {
            console.log(err)
            setSubmitting(false)
          })
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <StyledLabel htmlFor="email">E-mail</StyledLabel>
          <StyledInput
            type="e-mail"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <StyledLabel>Message</StyledLabel>
          <StyledInput
            as="textarea"
            type="text"
            name="message"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <Button disable={isSubmitting} onClick={handleSubmit}>
            Send Message
          </Button>
        </form>
      )}
    </Formik>
  </>
)

export default ContactPage
