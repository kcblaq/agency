import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { notify } from "@/libs/notify";
import { Toaster } from "react-hot-toast";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// const Contact: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = (formData: FormData): FormErrors => {
//     let errors: FormErrors = {};
//     if (!formData.get("name")) errors.name = "Name is required";
//     if (!formData.get("email")) {
//       errors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email") as string)) {
//       errors.email = "Invalid email format";
//     }
//     if (!formData.get("subject")) errors.subject = "Subject is required";
//     if (!formData.get("message")) errors.message = "Message is required";
//     return errors;
//   };

//   const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
//   const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
//   const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(formRef.current!);
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setIsSubmitting(false);
//       return;
//     }
//     setErrors({});

//     const emailParams = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       subject: formData.get("subject"),
//       message: formData.get("message"),
//     };

//     try {
//       const res = await emailjs.send(serviceID, templateID, emailParams, userID);
//       if (res.status === 200) {
//         notify({
//           message: "Message sent successfully!",
//           type: "success",
//         });
//         formRef.current?.reset();
//       } else {
//         notify({
//           message: "Failed to send message. Please try again later.",
//           type: "error",
//         });
//         setErrors({ message: "Failed to send message. Please try again later." });
//       }
//     } catch (error) {
//       notify({
//         message: "An error occurred. Please try again.",
//         type: "error",
//       });
//       setErrors({ message: "An error occurred. Please try again." });
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <section id="contact" className="py-20 lg:py-32 relative">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="section-heading">Get in Touch</h2>
//           <p className="section-subheading">
//             Have a project in mind? Let&apos;s discuss how we can bring your idea to life
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           <div className="bg-white p-8 rounded-lg shadow-sm">
//             <form ref={formRef} onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-gray-700 mb-2">Your Name</label>
//                   <input name="name" type="text" className="w-full p-3 border rounded-md" placeholder="John Doe" />
//                   {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2">Your Email</label>
//                   <input name="email" type="email" className="w-full p-3 border rounded-md" placeholder="johndoe@example.com" />
//                   {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Subject</label>
//                 <input name="subject" type="text" className="w-full p-3 border rounded-md" placeholder="Project Inquiry" />
//                 {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 mb-2">Your Message</label>
//                 <textarea name="message" rows={5} className="w-full p-3 border rounded-md" placeholder="Tell us about your project..."></textarea>
//                 {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//               </div>
//               <button type="submit" className="btn-primary w-full disabled:bg-gray-400" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Toaster />
//     </section>
//   );
// };

// export default Contact;



import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (formData: FormData): FormErrors => {
    let errors: FormErrors = {};
    if (!formData.get("name")) errors.name = "Name is required";
    if (!formData.get("email")) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email") as string)) {
      errors.email = "Invalid email format";
    }
    if (!formData.get("subject")) errors.subject = "Subject is required";
    if (!formData.get("message")) errors.message = "Message is required";
    return errors;
  };

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current!);
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
    setErrors({});

    const emailParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await emailjs.send(serviceID, templateID, emailParams, userID);
      if (res.status === 200) {
        notify({
          message: "Message sent successfully!",
          type: "success",
        });
        formRef.current?.reset();
      } else {
        notify({
          message: "Failed to send message. Please try again later.",
          type: "error",
        });
        setErrors({ message: "Failed to send message. Please try again later." });
      }
    } catch (error) {
      notify({
        message: "An error occurred. Please try again.",
        type: "error",
      });
      setErrors({ message: "An error occurred. Please try again." });
    }

    setIsSubmitting(false);
  };


  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      {/* Background Gradient Elements */}
      <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-agency-red/10 filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-agency-red/5 filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading">
            Have a project in mind? Let&apos;s discuss how we can bring your idea to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-sm reveal">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input name="name" type="text" className="w-full p-3 border rounded-md" placeholder="John Doe" />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Email</label>
                  <input name="email" type="email" className="w-full p-3 border rounded-md" placeholder="johndoe@example.com" />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Subject</label>
                <input name="subject" type="text" className="w-full p-3 border rounded-md" placeholder="Project Inquiry" />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea name="message" rows={5} className="w-full p-3 border rounded-md" placeholder="Tell us about your project..."></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary w-full disabled:bg-gray-400" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="lg:pl-6 reveal">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-agency-red/10 p-3 rounded-md">
                  <MapPin className="text-agency-red" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our Location</h4>
                  <p className="text-gray-600">58 Bola Street, Yaba, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-agency-red/10 p-3 rounded-md">
                  <Mail className="text-agency-red" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a href="mailto:info@kcblaq.com" className="text-gray-600 hover:underline">
                    info@kcblaq.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-agency-red/10 p-3 rounded-md">
                  <Phone className="text-agency-red" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-600">+234 8086 384 043</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://web.facebook.com/kcblaqdigital/" target="_blank" className="bg-agency-black text-white p-3 rounded-full hover:bg-agency-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>

                <a href="https://x.com/kcblaqdigital" target="_blank" className="bg-agency-black text-white p-3 rounded-full hover:bg-agency-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                {/* <a href="#" className="bg-agency-black text-white p-3 rounded-full hover:bg-agency-red transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;