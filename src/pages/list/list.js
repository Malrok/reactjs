import React from 'react';
import { Link } from '@reach/router'
import './list.css';
import UserThumbnail from '../../components/user-thumbnail/user-thumbnail';
import FirestoreCollection from '../../components/firestore-collection';

export default function List() {
  return (
    <FirestoreCollection
      path="users"
      render={(isLoading, data) => {
        return isLoading ? (
          <p>Loading</p>
        ) : (
          <div className="user">
            <h1>Users</h1>
            <ul>
              {data.map(user => (
                <Link to={`detail/${user.id}`}>
                  <UserThumbnail key={user.id} user={user}/>
                </Link>
              ))}
            </ul>
          </div>
        );
      }}
    />
  );
}
