import React, { useState, useEffect, Fragment } from 'react';
import firebase from 'firebase';

export default function FirestoreDocument(props) {
  var [loading, doc] = useFetchFirestoreDocument(firebase.firestore(), props.path);
  return (
    <Fragment>
      { 
        props.render(loading, doc) 
      }
    </Fragment>
  );
}

function useFetchFirestoreDocument(firestore, fullpath) {
  const [loading, setLoading] = useState(true);

  const [doc, setDoc] = useState(null);

  var path = fullpath.substring(0, fullpath.lastIndexOf('/'));
  var id = fullpath.substring(fullpath.lastIndexOf('/') + 1);

  useEffect(() => {
    firestore
      .collection(path)
      .doc(id)
      .get()
      .then((queryDocumentSnapshot) => {
        if (queryDocumentSnapshot.exists) {
          setDoc({
            id: queryDocumentSnapshot.id,
            ...queryDocumentSnapshot.data()
          });
        }
        setLoading(false);
      });
  }, [firestore, path, id]);

  return [loading, doc];
}