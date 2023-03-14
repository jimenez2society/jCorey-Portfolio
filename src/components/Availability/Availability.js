import React from "react";
import "./Availability.css";
import AvailabilityForm from "./AvailabilityForm/AvailabilityForm";
import AvailabilityOptions from "./AvailabilityOptions/AvailabilityOptions";
import AvailabilityType from "./AvailabilityType/AvailabilityType";

function Availability() {
  return (
    <section id="availability" className="Availability main-container">
      <p className="section__title">Availability</p>
      {/* AvailabilityOptions IS A COMPONENT TO CONTAIN availability status' */}
      <AvailabilityOptions>
        <AvailabilityType title="Happily Employed" active={true} />
        <AvailabilityType title="On The Market" active={false} />
        <AvailabilityType title="Self-employed" active={false} />
      </AvailabilityOptions>
      {/* displays a message under the availability status' */}
      <blockquote className="Availability__content">
        <p>
          I am always open to connect with new people and employers.
          Unfortunately, I am currently unavailable for hire right now for I am
          happily employed. Think you can change my mind? You can still shoot me
          an email down below!
        </p>
      </blockquote>
      {/* displays the availability form component */}
      <AvailabilityForm />
    </section>
  );
}

export default Availability;
