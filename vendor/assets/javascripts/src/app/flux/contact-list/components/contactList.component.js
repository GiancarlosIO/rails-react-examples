import React from 'react';
import Contact from './contact.component';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {contacts} = this.props;
    let contactList = contacts.map( (contact) => {
      return (
        <Contact key={contact.id} contact={contact} />
      )
    });
    return (
      <div className="row center-xs">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="box">
            <table className="full-width">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th colSpan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contactList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.array.isRequired
}
