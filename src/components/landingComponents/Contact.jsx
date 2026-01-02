import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "wanderwise@journey.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+977 9817320748",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Biratnagar, Traffic Chowk",
      description: "Come say hello at our office",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need help planning your journey? We're here to
            help you every step of the way.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Contact Form */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form Section */}
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
                      placeholder="wanderwise@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="9817320748"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none`}
                    placeholder="Tell us about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 sm:p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Whether you have questions about our services, need assistance
                  with your journey, or just want to share feedback, we're all
                  ears. Our dedicated team is committed to providing you with
                  the best support possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Quick Response</h4>
                      <p className="text-blue-100 text-sm">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Support</h4>
                      <p className="text-blue-100 text-sm">
                        Our team of travel experts is here to help
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Personalized Solutions
                      </h4>
                      <p className="text-blue-100 text-sm">
                        Custom answers tailored to your needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white border-opacity-20">
                <p className="text-sm text-blue-100">
                  Available Monday - Friday, 8:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Looking for quick answers?{" "}
            <a
              href="#"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Visit our FAQ page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
