import React from 'react';

const Person = (props) => (
  <li class="list-group-item"><span class="left">{props.user.last_name} {props.user.first_name}</span> <span class="right">{props.user.phone}</span></li>
)

export default Person;

