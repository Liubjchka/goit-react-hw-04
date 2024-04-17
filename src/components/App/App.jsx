// import { useEffect, useState } from "react";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBar/SearchBar";
import "./App.css";

const App = () => {
  return <div></div>;
};

export default App;

// const App = () => {
//   const [contacts, setContacts] = useState(data, () => {
//     return JSON.parse(localStorage.getItem("contacts")) || [];
//   });
//   const [filter, setFilter] = useState("");

//   const getFilter = (value) => {
//     setFilter(value);
//   };

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const addContact = (contact) => {
//     setContacts((prevContacts) => [...prevContacts, contact]);
//   };

//   const deleteContact = (id) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== id)
//     );
//   };

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm addContact={addContact} />
//       <SearchBox filter={filter} getFilter={getFilter} />
//       <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
//     </div>
//   );
// };

// export default App;
