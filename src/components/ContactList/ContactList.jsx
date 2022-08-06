import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteBtnHandler }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          deleteBtnHandler={deleteBtnHandler}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteBtnHandler: PropTypes.func.isRequired,
};

export default ContactList;
