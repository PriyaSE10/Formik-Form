import React from "react";
import { useFormik } from "formik";
import { SchemaForm } from "./SchemaForm";

function FormikForm() {
  const FormikFormValues = {
    name: "",
    email: "",
    age: "",
    pass: "",
  };

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: FormikFormValues,
      validationSchema: SchemaForm,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
      <h1>Formik Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
        />
        <br />
        {errors.name && touched.name ? (
          <span style={{ color: "red" }}>{errors.name}</span>
        ) : null}

        <br />
        <br />
        <label>Email : </label>
        <input
          type="text"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        <br />

        {errors.email && touched.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}
        <br />
        <br />
        <label>Age : </label>
        <input
          type="text"
          name="age"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.age}
        />
        <br />

        {errors.age && touched.age ? (
          <span style={{ color: "red" }}>{errors.age}</span>
        ) : null}
        <br />
        <br />

        <label>password : </label>
        <input
          type="password"
          name="pass"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.pass}
        />
        <br />

        {errors.pass && touched.pass ? (
          <span style={{ color: "red" }}>{errors.pass}</span>
        ) : null}

        <br />
        <br />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
}
export default FormikForm;
