import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Filter = ({ filter, onChange }) => {
  const inputId = nanoid();
  return (
    <>
      <label htmlFor="inputId">Find contacts by name</label>
      <input
        type="text"
        id={inputId}
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
