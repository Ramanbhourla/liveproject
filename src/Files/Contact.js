import React, { useRef, useState } from "react";
import { FcCallback } from "react-icons/fc";
import { BsGeoAltFill, BsFillEnvelopeOpenFill } from "react-icons/bs";
import {
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiInvisionFill,
  RiSnapchatFill,
  RiTwitterFill,
} from "react-icons/ri";

const Contact = () => {
  const [name, getName] = useState();
  const [mail, getmail] = useState();

  const getUser = (e) => {
    getName(e.target.value);
  };
  const getEmail = (e) => {
    getmail(e.target.value);
  };

  const submit = () => {
    if (name) {
      return alert(`Thanks for submission ${name} ${mail} 🙂`);
    } else {
      alert(`Please fill the given detail`);
    }
  };

  return (
    <div className="container">
    <div className="about">
      <h1 className="contact"> Our Contact Information </h1>
      <h6>
        Nullam quam lorem, tristique non vestibulum nec, consectetur in risus.
        Aliquam a quam vel leo gravida gravida eu porttitor dui.
      </h6>
      <div className="address" >
        <div className="block1">
          <BsGeoAltFill className="icons1" />
          <br />
          Address: 1458 TemplateAccess, 26 Nassau Blvd, Garden City, NY
          Location (516) 916-4020
        </div>

        <div className="block2">
          <FcCallback className="icons1" /> <br />
          Telephone: +123-1234-5678
          <br />
          FAX: +458-4578
          <br />
          Others: +301 -0125 -01258 <br />
        </div>

       <div className="block4"><BsFillEnvelopeOpenFill/><br/> E-mail: mail@yoursitename.com <br />
        © Copyright MyWebSite.
        <br />
        Design by Dream Web Templates</div> 

        <div className="block3">
          <form>
            <div className="form-row align-items-center">
              <div className="col-10">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inlineFormInput"
                  placeholder="username"
                  onChange={getUser}
                />
              </div>
              <div className="col-10">
                <label className="sr-only" htmlFor="inlineFormInputGroup">
                  Username
                </label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="mail"
                    onChange={getEmail}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label className="form-check-label" htmlFor="autoSizingCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-10">
                <button
                  type="submit"
                  className="btn btn-primary mb-2"
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="icons">
        <span className="icon" title="Facebook">
          <RiFacebookBoxLine />
        </span>
        <span className="icon" title="watsapp">
          <RiWhatsappLine />
        </span>
        <span className="icon" title="linkdin">
          <RiInvisionFill />
        </span>
        <span className="icon" title="snapchat">
          <RiSnapchatFill />
        </span>
        <span className="icon" title="twitter">
          <RiTwitterFill />
        </span>
      </div>
    </div>
    </div>
  );
};

export default Contact;
