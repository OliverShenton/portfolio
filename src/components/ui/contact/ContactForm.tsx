"use client";

import { useForm } from "@formspree/react";
import FormInput from "./FormInput";
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xgvejvvy");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Success state
  if (state.succeeded) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-8 p-8 border rounded text-center bg-[var(--card-background)] border-neutral-800 w-full shadow-sm shadow-black  md:p-12 z-10">
        <p>Thank you for the message. I usually respond within 24 hours.</p>
        <button
          onClick={() => {
            reset();
            setname("");
            setEmail("");
            setPhone("");
            setMessage("");
          }}
          className="px-5 py-3 rounded bg-green-500 hover:bg-green-700 text-white cursor-pointer">
          Reset
        </button>
      </div>
    );
  }

  // Failed state
  if (state.errors) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-8 p-8 border rounded text-center bg-[var(--card-background)] border-neutral-800 w-full shadow-sm shadow-black  md:p-12 z-10">
        <p>Your message failed to send. Let&apos;s try again.</p>
        <button
          onClick={reset}
          className="px-5 py-3 rounded bg-red-500 hover:bg-red-700 text-white cursor-pointer">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
      <FormInput
        id="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="First Name *"
        icon={<IoMdPerson size={20} />}
        required
      />
      <FormInput
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address *"
        icon={<MdEmail size={20} />}
        autoComplete="email"
        required
      />
      <FormInput
        id="phone"
        value={phone}
        type="tel"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        icon={<FaPhoneAlt size={20} />}
        autoComplete="tel"
      />
      <textarea
        id={message}
        name={message}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="max-h-35 min-h-35 md:max-h-50 md:min-h-50 p-4 border border-neutral-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        placeholder="You Message..."
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg hover:bg-gradient-to-br hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all cursor-pointer px-6 py-3 rounded-xl font-medium w-1/2 mx-auto">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
