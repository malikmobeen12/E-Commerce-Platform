// src/pages/Checkout.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const initialValues = {
    name: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="name" className="block">
              Name
            </label>
            <Field name="name" type="text" className="border p-2 w-full" />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block">
              Address
            </label>
            <Field name="address" type="text" className="border p-2 w-full" />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label htmlFor="city" className="block">
              City
            </label>
            <Field name="city" type="text" className="border p-2 w-full" />
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label htmlFor="country" className="block">
              Country
            </label>
            <Field name="country" type="text" className="border p-2 w-full" />
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label htmlFor="postalCode" className="block">
              Postal Code
            </label>
            <Field
              name="postalCode"
              type="text"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="postalCode"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Checkout;
