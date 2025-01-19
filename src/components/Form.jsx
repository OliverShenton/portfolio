export default function Form({ title, type, name }) {
  const divClass = "flex items-center justify-between gap-4";
  const inputClass =
    "bg-[#4f5c87] py-2 px-3 rounded-md w-1/2 focus:outline-none focus:ring focus:ring-indigo-500";

  return (
    <form
      className="flex flex-col text-white gap-4"
      action="https://formspree.io/f/xgvejvvy"
      method="POST"
      target="_blank">
      <div className={divClass}>
        <input
          placeholder={"First Name"}
          type={"text"}
          name={"firstname"}
          className={inputClass}
          required
        />
        <input
          placeholder={"Last Name"}
          type={"text"}
          name={"lastname"}
          className={inputClass}
          required
        />
      </div>
      <div className={divClass}>
        <input placeholder={"Email"} type={"text"} name={"email"} className={inputClass} required />
        <input placeholder={"Phone"} type={"text"} name={"phone"} className={inputClass} required />
      </div>
      <textarea
        placeholder="Message"
        name="message"
        className="bg-[#4f5c87] py-2 px-3 rounded-md resize-none h-40 focus:outline-none focus:ring focus:ring-indigo-500"
      />
      <div className="text-right">
        <button className="rounded-md bg-orange-500 hover:bg-orange-600 px-5 py-2">Submit</button>
      </div>
    </form>
  );
}
