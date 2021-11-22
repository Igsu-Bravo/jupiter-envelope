import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Button from 'components/Button';

interface IValues {
  songName: string;
  description: string;
  isDone: boolean;
  location: string;
}

const SongForm = (): React.ReactElement => {
  const formInitialValues: IValues = {
    songName: '',
    description: '',
    isDone: false,
    location: '',
  };

  const songFormValidationSchema = Yup.object().shape({
    songName: Yup.string().required(),
    description: Yup.string().required(),
    isDone: Yup.bool().required(),
    location: Yup.string().required(),
  });

  const handleSubmit = (
    values: IValues,
    { setSubmitting }: FormikHelpers<IValues>
  ) => {
    setTimeout(() => {
      console.log('SUBMIT', values);
      setSubmitting(false);
    }, 500);
  };

  const getBorderColor = (
    e: string | undefined,
    t: boolean | undefined
  ): string => (e && t ? 'border-red' : 'border-accentMain');

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validationSchema={songFormValidationSchema}
    >
      {({ errors, touched, isValid }) => (
        <Form className="grid justify-items-left">
          <label htmlFor="songName">Song name:</label>
          <Field
            className={`${getBorderColor(
              errors.songName,
              touched.songName
            )} border-4 rounded-lg p-3 my-5`}
            id="songName"
            name="songName"
            placeholder="Lorem ipsum"
          />

          <label htmlFor="description">Description:</label>
          <Field
            className={`${getBorderColor(
              errors.description,
              touched.description
            )} border-4 rounded-lg p-3 my-5`}
            id="description"
            component="textarea"
            name="description"
            placeholder="Dolor sit amet"
          />

          <label htmlFor="isDone">
            Done?
            <Field
              className="my-5 mx-3 justify-self-start"
              type="checkbox"
              id="isDone"
              name="isDone"
            />
          </label>

          <label htmlFor="location">Location:</label>
          <Field
            className={`${getBorderColor(
              errors.location,
              touched.location
            )} border-4 rounded-lg p-3 my-5`}
            id="location"
            name="location"
            placeholder="/por/a/qui"
          />

          <div className="flex-shrink-0 m-1">
            <Button type="submit" disabled={!isValid}>
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SongForm;
