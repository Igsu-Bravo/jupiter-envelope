import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';

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

  const handleSubmit = (
    values: IValues,
    { setSubmitting }: FormikHelpers<IValues>
  ) => {
    setTimeout(() => {
      console.log('SUBMIT', values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik initialValues={formInitialValues} onSubmit={handleSubmit}>
      <Form className="grid justify-items-left">
        <label htmlFor="songName">Song name:</label>
        <Field
          className="border-accentMain border-4 rounded-full p-3 my-5"
          id="songName"
          name="songName"
          placeholder="Cancioncilla"
        />

        <label htmlFor="description">Description:</label>
        <Field
          className="border-accentMain border-4 rounded-full p-3 my-5"
          id="description"
          name="description"
          placeholder="Muy wena"
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
          className="border-accentMain border-4 rounded-full p-3 my-5"
          id="location"
          name="location"
          placeholder="/por/a/qui"
        />

        <div className="flex-shrink-0 m-1">
          <button
            className="bg-accentMain rounded px-5 py-1 text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SongForm;
