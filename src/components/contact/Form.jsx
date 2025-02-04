import Button from "../general/Button";
import FormItem from "./FormItem";

export default function Form() {
  return (
    <div className="rounded-lg py-4 px-12">
      <h2 className="text-sm small:text-lg medium:text-2xl font-bold text-[#333] dark:text-[#e3e3e3] mb-4 text-center">
        Contact Form
      </h2>
      <form
        className="flex flex-col gap-4"
        action="https://formspree.io/f/xgvejvvy"
        method="POST"
        target="_blank">
        <div className="flex flex-col medium:flex-row items-center justify-between gap-4">
          <FormItem text="First Name" example="e.g. John" name="First Name" required />
          <FormItem text="Last Name" example="e.g. Doe" name="Second Name" required />
        </div>
        <FormItem text="Company Name" example="e.g. ABC Corporation" name="Company" />
        <FormItem text="Email" example="e.g. you@example.com" type="email" name="Email" required />
        <FormItem text="Phone" example="e.g. +44 123 456 789" type="phone" name="Phone Number" />
        <textarea
          placeholder="e.g. Write your message here..."
          name="message"
          className="resize-none my-2 h-40 rounded-lg px-4 py-3 bg-white text-gray-700 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-[10px] small:text-[12px] medium:text-[14px] large:text-[16px] xlarge:text-[18px]"></textarea>
        <Button text="Submit Message" type="submit" variant="secondary" />
      </form>
    </div>
  );
}
