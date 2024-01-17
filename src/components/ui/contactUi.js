"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "./Heading";
import * as Yup from "yup";
import { useFormik } from "formik";
export default function ContactUi() {
  const [time, setTime] = useState("");
  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);

  // const {toast}=useToast()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .min(3, "Name must be more 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log("cliked on button");
      try {
        // Replace 'your-formspree-endpoint' with your actual Formspree endpoint
        const response = await fetch("https://formspree.io/f/meqbpbgz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // You can handle the success response here if needed
          // toast({
          //   title: "SUCCESS!",
          //   description: "Message had successfuly send!"
          // })
          resetForm();
         
          
        } else {
          // Handle any errors that occur during form submission
          console.error(
            "Form submission failed",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        // Handle any other errors that may occur
        console.error("Form submission error", error);
      }
    },
  });

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",

      // markers: true,
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [contactSection]);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <main
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <section
        ref={contactSection}
        className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"
      >
        <div className="col-span-4">
          <h3
            ref={heading}
            className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0"
          >
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>
          <p
            ref={body}
            className="mt-4 max-w-md 2xl:max-w-2xl text-body-2 2xl:text-4xl text-accent-100 translate-y-10 opacity-0"
          >
            I am currently available for freelance work. Feel free to share your
            projects.
          </p>
          <form
            autoComplete="off"
            // eslint-disable-next-line react/no-unknown-property
            className="mt-10 font-grotesk"
            onSubmit={formik.handleSubmit}
          >
            <input type="hidden"  
            
                  id="name"
                  name="name"  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}/>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=""
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />

                <label
                  htmlFor="name"
                  className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-500"
                      : "text-secondary-600"
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Your name"}
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <label
                  htmlFor="email"
                  className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75  ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-500"
                      : "text-secondary-600"
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Your email"}
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                ></textarea>
                <label
                  htmlFor="message"
                  
                  className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ${
                    formik.touched.message && formik.errors.message
                      ? "text-red-500"
                      : "text-secondary-600"
                  } `}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                >
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
            >
              <span className="relative">
                <span className="absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
                <span className="group-hover:text-accent-400">
                  Send Message
                </span>
              </span>
            </button>
          </form>
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold">
              Contact Details
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:7ohrabkhan@gmail.com"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>7ohrabkhan@gmail.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold">
              My Digital Spaces
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https:instagram.com/iamsohrabkhan"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="simple-icons:instagram" color="#666" />
                <div className="relative">
                  <span>Instagram</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://github.com/Iamsohrabkhan/"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:github" color="#666" />
                <div className="relative">
                  <span>Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/iamsohrabkhan/"
                className="group group flex w-fit items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:linkedin" color="#666" />
                <div className="relative">
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Pakistan <br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
