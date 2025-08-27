import React from "react";

function Contact() {
  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control"></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
