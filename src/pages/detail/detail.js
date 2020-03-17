import React from 'react';
import FirestoreDocument from '../../components/firestore-document';

export default function Detail(props) {
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
            <div>
              {user.first_name} {user.last_name}
            </div>
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