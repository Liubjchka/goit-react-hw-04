import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useId } from "react";

import css from "./ContactForm.module.css";

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be more than 3 characters")
    .max(50, "Must be less than 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Must be more than 3 characters")
    .max(50, "Must be less than 50 characters")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values, actions) => {
        addContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
          <Field
            className={css.input}
            id={nameId}
            type="text"
            name="name"
            // placeholder="enter your name"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </label>

        <label className={css.label} htmlFor={numberId}>
          Number
          <Field
            className={css.input}
            id={numberId}
            type="tel"
            name="number"
            // placeholder="enter your number"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </label>

        <button className={css.mainBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
