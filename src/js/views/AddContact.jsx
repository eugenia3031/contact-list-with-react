import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

let initalValue = {
  full_name: "",
  email: "",
  phone: "",
  address: "",
  agenda_slug: "erivero",
};
export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [inputContacts, setInputContacts] = useState(initalValue);

  const params = useParams();

  //otra forma de usar, destructurado:
  //const {id} =useParams()

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setInputContacts({ ...inputContacts, [name]: value });
  };
  const handleSave = () => {
    if (params.id == "none") {
      actions.addNewContact(inputContacts);
      setInputContacts(initalValue)
    } else {
      actions.updateContact(params.id, inputContacts);
      setInputContacts(initalValue)
    }
  
    ;
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Add a new contact</h1>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full name
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Fullname"
              onChange={handleInputs}
              name="full_name"
              value={inputContacts.full_name}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={handleInputs}
              name="email"
              value={inputContacts.email}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter phone"
              onChange={handleInputs}
              name="phone"
              value={inputContacts.phone}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter address"
              onChange={handleInputs}
              name="address"
              value={inputContacts.address}
            />
          </div>
        </div>

        <br />
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary mb-2"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <Link to="/">get back to contacts</Link>
      </div>
    </>
  );
};