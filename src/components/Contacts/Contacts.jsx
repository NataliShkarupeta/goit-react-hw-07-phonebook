import { Item } from './Contacts.styled';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { onDeleteContactAction } from 'redux/contactSlice';
import { deleteContacts } from 'redux/operations';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  if (!contact) {
    return null;
  }

  return contact.map(({ name, number, id }) => {
    return (
      <Item key={id}>
        {name} :{number}{' '}
        <Button text="Delete" onClicked={() => dispatch(deleteContacts(id))} />
      </Item>
    );
  });
};

Contacts.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
