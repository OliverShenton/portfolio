import SplitScreen from "./SplitScreen";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import Form from "./Form";
import Quote from "./Quote";

export default function Contact() {
  return (
    <div>
      <div className="text-center">
        <Quote
          text={"Alone, we can do so little; together we can do so much."}
          author={"Helen Keller"}
          mb="mb-8 medium:mb-16"
        />
      </div>
      <SplitScreen
        left={
          <div className="flex flex-col gap-8 large:mx-[20%] mb-8 large:mb-0">
            <h2 className="text-center medium:text-left text-2xl medium:text-3xl large:4xl">
              Contact Information
            </h2>
            <div className="flex items-center gap-4">
              <div className="bg-[#1c1c1c] p-3 rounded-[50%] text-white">
                <FaMapLocationDot className="text-base medium:text-lg" />
              </div>
              <p className="text-sm medium:text-base">Sandbach, Cheshire, CW11</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#1c1c1c] p-3 rounded-[50%] text-white">
                <FaPhone className="text-base medium:text-lg" />
              </div>
              <p className="text-sm medium:text-base">(+44) 7473826533</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#1c1c1c] p-3 rounded-[50%] text-white">
                <MdEmail className="text-base medium:text-lg" />
              </div>
              <p className="text-sm medium:text-base">olivermshenton@outlook.com</p>
            </div>
          </div>
        }
        right={<Form />}
      />
    </div>
  );
}
