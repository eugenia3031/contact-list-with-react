import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Modal from "../component/Modal.jsx";
import { Context } from "../store/appContext.js";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  const { contacts } = store;
;
  const [show, setShow] = useState(false); //Show the modal when clicked, set to false when finished.

  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end p-5">
        <Link to="/AddContact/none">
          <button className="btn btn-success" type="button">
            {" "}
            Add new contact
          </button>
        </Link>
      </div>

      <div className="container ">
        <ul className=" list-group list-group-flush">
          
          {contacts.map((item, index) => {
            return (
              <li className="card mb-3" key={index}>
                <div className="row g-0">
                  <div className="col-2 p-5">
                    <img
                      src="rigo-baby.jpg"
                      className="img-fluid rounded-circle"
                      alt="Contact"
                    />
                  </div>
                  <div className="col-8 m-2">
                    <div className="card-body text-secondary">
                      <h4 className="card-title">{item.full_name}</h4>
                      <p className="card-text">
                        <i className="fa-solid fa-location-dot"></i>{" "}
                        {item.address}
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary ">
                          <i className="fa-solid fa-phone"></i> {item.phone}
                        </small>
                      </p>
                      <span className="card-text">
                        <small className="text-body-secondary">
                          <i className="fa-sharp fa-solid fa-envelope"></i>{" "}
                          {item.email}
                        </small>
                      </span>
                    </div>
                  </div>
                  <div className="col-1 text-end ">
                    <Link to={`/AddContact/${item.id}`}>
                      <i className="fa-solid fa-pencil p-4"></i>
                    </Link>

                    
                      <i className="fa-solid fa-trash-can" onClick= {()=> actions.deleteContact(item.id)}></i>
                    
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};