import css from "./Contact.module.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ id, name, number, deletedContact }) => {
  return (
    <li className={css.item}>
      <div className={css.text}>
        <p>
          <BsFillPersonFill className={css.icons} />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={css.icons} />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          deletedContact(id);
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
