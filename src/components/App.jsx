import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddContact = e => {
    e.preventDefault();
    const form = e.target;
    this.setState(prevState => {
      const newName = {
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      };
      return {
        contacts: [newName, ...prevState.contacts],
        name: '',
        number: '',
      };
    });
  };

  render() {
    const inputId = nanoid();
    const { contacts, name, number, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <form action="" onSubmit={this.handleAddContact}>
          <label htmlFor="inputId">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={inputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor="inputId">Number</label>
          <input
            type="tel"
            name="number"
            id={inputId}
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="inputId">Find contacts by name</label>
        <input
          type="text"
          id="inputId"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        ></input>
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>
                  {name} : {number}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
