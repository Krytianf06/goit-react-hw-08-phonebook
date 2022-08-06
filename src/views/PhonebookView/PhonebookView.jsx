import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';

import contactSelectors from 'redux/contacts/contacts-selectors';
import contactOperations from 'redux/contacts/contacts-operations';
import filterSelectors from 'redux/filter/filterSelectors';
import filterActions from 'redux/filter/filterActions';

import capitalize from 'utils/capitalize';
import s from './PhonebookView.module.css';

const PhoneBookView = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.contacts);
  const isFetching = useSelector(contactSelectors.isFetching);
  const filter = useSelector(filterSelectors.filter);

  useEffect(() => {
    dispatch(contactOperations.getAllContacts());
  }, [dispatch]);

  const doesAlreadyExist = newContact => {
    for (const { name } of contacts) {
      if (name === newContact.name) {
        return name;
      }
    }
    return false;
  };

  const addContact = newContact => {
    if (doesAlreadyExist(newContact)) {
      toast.error(
        `${capitalize(
          newContact.name
        )}'s contact already exists. Please, next time be more attentive to what you are trying to add`
      );
      return;
    }
    dispatch(contactOperations.makeNewContact(newContact));
  };

  const handleFilterInput = event => {
    dispatch(filterActions.changeFilter(event.target.value));
  };

  const filterContacts = contacts => {
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = targetId => {
    dispatch(contactOperations.deleteContact(targetId));
  };

  const handleDeleteContactBtnClick = event => {
    deleteContact(event.target.dataset.id);
  };

  return (
    <main className={s.view}>
      <div className={s.wrapper}>
        <Section title="Phonebook">
          <Phonebook addContact={addContact} />
        </Section>
        <Section title="Contacts">
          {contacts && (
            <Filter name={filter} inputHandler={handleFilterInput} />
          )}
          {contacts && (
            <ContactList
              contacts={filterContacts(contacts)}
              deleteBtnHandler={handleDeleteContactBtnClick}
            />
          )}
          {isFetching && <Loader />}
        </Section>
      </div>
    </main>
  );
};

export default PhoneBookView;
