import PropTypes from 'prop-types';

export const SearchForm = ({ handleSubmit }) => {
  const submitForm = event => {
    event.preventDefault();
    let { value } = event.target.elements.searchQuery;
    handleSubmit(value.toLowerCase().trim());
    event.target.elements.searchQuery.value = '';
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" name="searchQuery" />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
