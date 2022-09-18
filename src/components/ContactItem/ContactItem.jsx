import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onBtnDelete }) => {
  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => onBtnDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onBtnDelete: PropTypes.func.isRequired,
};
