import React from "react";
import "./AvailabilityForm.css";
import Input from "./Input/Input";
function AvailabilityForm() {
  return (
    // render email, company name, and message inputs
    <form className="AvailabilityForm">
      <Input name="email" type="email" placeholder="Enter your email" />
      <Input
        name="companyName"
        type="text"
        placeholder="Enter your company name"
      />
      <Input
        type="textarea"
        name="message"
        placeholder="Your message here . . ."
      />
      <button className="AvailabilityForm-btn">Send</button>
    </form>
  );
}

export default AvailabilityForm;
