import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, SubmitBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { contacts } = this.props;
    e.preventDefault();
    contacts.find(contact => contact.name === this.state.name)
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.changeState(e);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const inputId = nanoid();
    return (
      <Form action="" onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="inputId">Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          id={inputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <FormLabel htmlFor="inputId">Number</FormLabel>
        <FormInput
          type="tel"
          name="number"
          id={inputId}
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  changeState: PropTypes.func.isRequired,
};
