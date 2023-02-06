import { React, useEffect } from 'react';
import { InputName } from './Input/InputName';
import { Title } from './NameBlock/NameBlock';
import { Wrap } from './DefaultStylse.styled';
import { InputFind } from './Input/InputFind';
import { useSelector, useDispatch } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const contact = useSelector(state => state.contacts.contacts);
   const isLoading = useSelector(state => state.contacts.isLoading);
     const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log('contact in app', contact);

  const cangeArreyContacts = () => {
    if (filter.length > 0) {
      return contact.filter(cont =>
        cont.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contact;
    }
  };

  return (
    <>
      <Title text="Phonebook" />
      <Wrap>
        <InputName />
      </Wrap>
      <Title text="Contscts" />
      <InputFind />
      <Contacts contact={cangeArreyContacts()} />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </>
  );
};
