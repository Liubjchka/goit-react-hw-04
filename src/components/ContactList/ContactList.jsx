import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deletedContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
