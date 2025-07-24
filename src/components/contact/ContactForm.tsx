"use client";

import { useForm } from "@formspree/react";
import FormInput from "./FormInput";
import { useState } from "react";

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xgvejvvy");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  // Success state
  if (state.succeeded) {
    return (
      <div className="h-full flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-4 p-8 border rounded text-center">
          <p>Thank you for the message :)</p>
          <p>I usually respond within 24 hours</p>
          <button
            onClick={() => {
              reset();
              setFirstName("");
              setLastName("");
              setEmail("");
              setPhone("");
              setBusiness("");
              setMessage("");
            }}
            className="px-5 py-3 rounded bg-green-500 hover:bg-green-700 text-white cursor-pointer">
            Reset
          </button>
        </div>
      </div>
    );
  }

  // Failed state
  if (state.errors) {
    return (
      <div className="h-full flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-4 p-8 border rounded text-center">
          <p>Your message failed to send :(</p>
          <button
            onClick={reset}
            className="px-5 py-3 rounded bg-red-500 hover:bg-red-700 text-white cursor-pointer">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      <div className="flex space-x-6">
        <FormInput
          id="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <FormInput
          id="name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </div>
      <FormInput
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <FormInput
        id="phone"
        value={phone}
        type="tel"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
      />
      <FormInput
        id="business"
        value={business}
        onChange={(e) => setBusiness(e.target.value)}
        placeholder="Business Name"
      />
      <textarea
        id={message}
        name={message}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-4 h-25 max-h-25 min-h-25"
        placeholder="You Message..."
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg hover:bg-gradient-to-br hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all cursor-pointer px-6 py-3 rounded-xl font-medium">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
