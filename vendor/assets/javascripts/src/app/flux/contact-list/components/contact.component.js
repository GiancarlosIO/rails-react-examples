import React from 'react';
import AppActions from '../actions/app.action';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEdit = () => {
    let {contact} = this.props;
  }

  handleDelete = () => {
    let {contact} = this.props;
    AppActions.deleteContact(contact.id);
  }

  render() {
    let {contact} = this.props;
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.phone_number}</td>
        <td>{contact.email}</td>
        <td>
          <button
            onClick={this.handleEdit}
            className="button button--min button--grey">
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={this.handleDelete}
            className="button button--min button--grey">
            Delete
          </button>
        </td>
      </tr>
    )
  }

}

Contact.propTypes = {
  contact: React.PropTypes.object.isRequired
}
