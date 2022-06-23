import React, { Component } from 'react'

export default class UsersList extends Component {
  render() {
    return (
    <div>
        <ul>
            {this.props.users.map((user) => {   
            return <li key={user.id}><p>{user.name}</p></li>
            })}
        </ul>   
    </div>
    )
  }
}
