import React, { useRef, useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { notify } from "@/libs/notify";
import { Toaster } from "react-hot-toast";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
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
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading">
            Have a project in mind? Let&apos;s discuss how we can bring your idea to life
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-sm">
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
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
