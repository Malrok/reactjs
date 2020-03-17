import React, { Fragment } from 'react';
import './user-thumbnail.css';

export default function UserThumbnail(props) {
  return (
    <Fragment>
      <li key={props.user.id}>
        <img src={props.user.picture} alt="User" className="user__picture"/>
        {props.user.first_name} - {props.user.last_name}
      </li>
    </Fragment>
  );
}