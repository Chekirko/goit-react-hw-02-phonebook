import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    this.setState({ name: e.target.value });
  };

  handleAddContact = e => {
    e.preventDefault();
    const form = e.target;
    this.setState(prevState => {
      const newName = { id: nanoid(), name: form.elements.name.value };
      return { contacts: [newName, ...prevState.contacts], name: '' };
    });
  };

  render() {
    const inputId = nanoid();
    const { contacts, name } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form action="" onSubmit={this.handleAddContact}>
          <label htmlFor="inputId">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleSubmit}
            id={inputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name }) => {
            return (
              <li key={id}>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
