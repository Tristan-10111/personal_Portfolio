import React from "react";
import Lottie from "lottie-react";
import ContactAnimation from "../assets/lottieFiles/Work frome Home Mailing F 2.json";
import { ContactForm } from "../Components";

const Contact = () => {
  return (
    <>
      <section className={" w-full parralaxDemoDivContact bg-techBg "}>
        <div className="flex ">
          <div
            className=" text-base text-white w-1/2 mx-32 my-32"
            // data-aos="fade-down"
          >
            <form>
              <div className="flex flex-col">
                <input
                  type="email"
                  className=" my-3 p-3 rounded-lg form-input w-96"
                  placeholder="Email"
                  data-aos="fade-left"
                />
                <input
                  type="text"
                  className="my-3 p-3 rounded-lg w-96"
                  placeholder="Name"
                  data-aos="fade-right"
                />
                <textarea
                  cols="10"
                  rows="5"
                  className="my-3 rounded-lg w-96"
                  placeholder="Write your message..."
                  data-aos="fade-left"
                ></textarea>
              </div>
              <button
                type="submit"
                className="focus:outline-none mt-5 contactBtn px-4 py-2 text-white rounded-md font-bold w-96"
                data-aos="fade-right"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className=" w-1/2 -my-6" data-aos="fade-down-left">
            <Lottie animationData={ContactAnimation} loop={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
