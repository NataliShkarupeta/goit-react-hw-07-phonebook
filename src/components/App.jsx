import { React, useEffect } from 'react';
import { InputName } from './Input/InputName';
import { Title } from './NameBlock/NameBlock';
import { Wrap } from './DefaultStylse.styled';
import { InputFind } from './Input/InputFind';
import { useSelector, useDispatch } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { fetchContacts } from 'redux/operations';
import {
  selectorIsLoading,
  selectorError,
  selectorFilterArreyContacts,
  selectorContact,
} from 'redux/selector';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const contact = useSelector(selectorContact);
  const error = useSelector(selectorError);
  const cangeArreyContacts = useSelector(selectorFilterArreyContacts);
// console.log(contact);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title text="Phonebook" />
      <Wrap>
        <InputName />
      </Wrap>
      <Title text="Contscts" />
      <InputFind />
      {contact.length !== 0 && <Contacts contact={cangeArreyContacts} />}
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </>
  );
};
