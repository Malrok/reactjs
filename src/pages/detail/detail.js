import React, { useState } from 'react';
import FirestoreDocument from '../../components/firestore-document';
import User from '../../models/user';
import './detail.css';
import { Field, Form, Formik } from 'formik';
import firebase from 'firebase';
import * as Yup from 'yup';

export default function Detail(props) {
  // TODO : gérer la création
  var path = "users/" + props.userId;
  return (
    <FirestoreDocument
      path={path}
      render={(isLoading, user) => {
        if (isLoading) {
          return (<p>Loading...</p>);
        }
        if (user) {
          return (
            <UserForm user={user} />
          );
        } else {
          return (
            <p>user not found</p>
          );
        }
      }}
    />
  );
}

function UserForm(props) {
  // const [valid, setValid] = useState(false);

  const handleSubmit = (values, actions) => {
    var id = values.id;
    var user = { ...values };
    delete user.id;
    if (id === '') {
      firebase.firestore().collection('users').add({ ...user })
        .then(() => console.log('added'))
        .catch(err => console.error(err));
    } else {
      firebase.firestore().collection('users').doc(id).update({ ...user })
        .then(() => console.log('updated'))
        .catch(err => console.error(err));
    }
  }

  return (
    <Formik
      initialValues={{ ...(props.user ? User.fromJson(props.user) : new User()) }}
      validationSchema={
        Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          description: Yup.string()
        })
      }
      onSubmit={handleSubmit}>
      { props =>
        <Form className="userForm">
          <label htmlFor="firstName">Prénom</label>
          <Field className="userForm__input" name="firstName" />
          {props.errors.firstName && <div>{props.errors.firstName}</div>}
          <label htmlFor="lastName">Nom</label>
          <Field className="userForm__input" name="lastName" />
          {props.errors.lastName && <div>{props.errors.lastName}</div>}
          <label htmlFor="email">Email</label>
          <Field className="userForm__input" name="email" />
          {props.errors.email && <div>{props.errors.email}</div>}
          <label htmlFor="description">Description</label>
          <Field className="userForm__input" name="description" />
          {props.errors.description && <div>{props.errors.description}</div>}
          <button className="userForm__button" type="submit" disabled={!props.isValid}>Valider</button>
        </Form>
      }
    </Formik>
  );
}