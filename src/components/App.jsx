import { useDispatch, useSelector } from 'react-redux/es/exports';
import {
  useGetAllContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} from 'redux/contactsApi';
import Section from './Section';
import ContactList from './ContactList';
import Phonebook from './Phonebook';
import Filter from './Filter';
import Loader from './Loader';
import s from './App.module.css';
import capitalize from 'utils/capitalize';
import actions from 'redux/actions';

const App = () => {
  const { data: contacts, isFetching: isFetchingContact } =
    useGetAllContactsQuery();
  const [postContact, { isLoading: isLoadingPostContact }] =
    usePostContactMutation();
  const [excContact, { isLoading: isLoadingDeleteContact }] =
    useDeleteContactMutation();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

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
      alert(
        `${capitalize(
          newContact.name
        )}is already in contacts.`
      );
      return;
    }
    postContact(newContact);
  };

  const handleFilterInput = event => {
    dispatch(actions.changeFilter({ filter: event.target.value }));
    dispatch(actions.saveFilter());
  };

  const filterContacts = contacts => {
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = targetId => {
    excContact(targetId);
  };

  const handleDeleteContactBtnClick = event => {
    deleteContact(event.target.dataset.id);
  };

  return (
    <div className={s.container}>
      <div className={s.app}>
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
          {(isFetchingContact ||
            isLoadingPostContact ||
            isLoadingDeleteContact) && <Loader />}
        </Section>
      </div>
    </div>
  );
};

export default App;
