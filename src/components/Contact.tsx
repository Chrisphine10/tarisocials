import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-600">
            Ready to elevate your social media presence? Contact us today to discuss your goals and how we can help you achieve them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Visit Us</h4>
                  <p className="text-gray-600">Ramco Courts, Mombasa Road, Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email Us</h4>
                  <p className="text-gray-600">info@tarisocials.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+254 700 123 456</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Office Hours</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="mt-10">
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7617194270465!2d36.832623774013726!3d-1.3186396986688464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b0052049d9%3A0xf850755952ae9c4c!2sRamco%20court%2C%20Mombasa%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1747810288403!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
                <p className="text-gray-600">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="+254 700 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Paid Advertising">Paid Advertising</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="Analytics & Reporting">Analytics & Reporting</option>
                    <option value="Social Media Strategy">Social Media Strategy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
