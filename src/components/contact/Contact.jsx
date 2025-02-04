import SplitScreen from "../general/SplitScreen";
import Form from "./Form";
import contactImg from "../../assets/contact-image.jpg";

export default function Contact() {
  return (
    <div className="border-[1px] large:border-0">
      <SplitScreen
        left={<Form />}
        right={<img src={contactImg} alt="Team collaboration" className="object-cover shadow-xl" />}
        rightVisible="hidden large:flex"
      />
    </div>
  );
}
