import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, PageTitle, ContactsTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = e => {
    const form = e.target;
    this.setState(prevState => {
      const newName = {
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      };
      return {
        contacts: [newName, ...prevState.contacts],
      };
    });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm
          contacts={contacts}
          changeState={this.handleAddContact}
        ></ContactForm>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} onChange={this.handleFilter}></Filter>

        <ContactList
          contacts={visibleContacts}
          onBtnDelete={this.handleDeleteContact}
        ></ContactList>
      </Container>
    );
  }
}
