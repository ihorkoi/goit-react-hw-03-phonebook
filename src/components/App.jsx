import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = contact => {
    const alreadyIn = this.state.contacts.find(
      existingContact =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (alreadyIn) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };
  removeContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };
  handleFilterState = evt => {
    this.setState({ filter: evt.target.value });
  };
  filteredContacts = ({ contacts, filter }) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>

        {this.state.contacts.length === 0 ? (
          <p>You don`t have any contact yet</p>
        ) : (
          <>
            <h2>Contacts</h2>

            <Filter onChange={this.handleFilterState}></Filter>
            <ContactsList
              props={this.filteredContacts(this.state)}
              removeContact={this.removeContact}
            />
          </>
        )}
      </div>
    );
  }
}
