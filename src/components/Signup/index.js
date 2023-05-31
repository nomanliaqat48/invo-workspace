import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Header from "../Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as Yup from "yup";

function Signup() {
  const FormInput = ({ label, type, placeholder, value, onChange, onBlur }) => {
    return (
      <Form.Group className="mb-3 mt-4">
        <Form.Label className="d-flex text-center h6">{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
      </Form.Group>
    );
  };

  return (
    <section>
      <Header title="Create your account" content="Signup your account" />
      <Container>
        <Row>
          <Col md={12}>
            <Card className="px-3">
              <Formik
                initialValues={{
                  email: "",
                  username: "",
                  password: "",
                  cpassword: "",
                }}
                validationSchema={Yup.object({
                  username: Yup.string()
                    .required("This field is required."),
                  
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("This field is required."),
                  password: Yup.string()
                    .min(8)
                    .required("This field is required.")
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                    ),
                    cpassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Passwords must match")
                    .required("This field is required."),
                })}
                onSubmit={(values) => {}}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  } = props;
                  return (
                    <Form onSubmit={handleSubmit}>
                      <FormInput
                        label={"Email address"}
                        type={"email"}
                        placeholder={"Email address"}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {touched.email && errors.email && (
                          <div className="text-danger font-small-2 text-start h6">
                            {errors.email}
                          </div>
                        )}
                      <FormInput
                        label={"Username"}
                        type={"text"}
                        placeholder={"Username"}
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {touched.username && errors.username && (
                          <div className="text-danger font-small-2 text-start h6">
                            {errors.username}
                          </div>
                        )}
                      <FormInput
                        label={"Password"}
                        type={"password"}
                        placeholder={"Password"}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {touched.password && errors.password && (
                          <div className="text-danger font-small-2 text-start h6">
                            {errors.password}
                          </div>
                        )}
                      <FormInput
                        label={"Confirm Password"}
                        type={"password"}
                        placeholder={"Confirm Password"}
                        value={values.cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       {touched.cpassword && errors.cpassword && (
                          <div className="text-danger font-small-2 text-start h6">
                            {errors.cpassword}
                          </div>
                        )}
                      <Row>
                        <Col
                          md={12}
                          className="text-start mt-3 mb-4"
                        >
                          <Button
                          type="submit"
                            style={{
                              backgroundColor: "#11375F",
                              borderColor: "#11375F",
                            }}
                          >
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  );
                }}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Signup;
