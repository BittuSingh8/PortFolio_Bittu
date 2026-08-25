import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");

    try {
      const response = await emailjs.sendForm(
        "service_gf9sy5l",
        "template_teorn7f",
        formRef.current,
        {
          publicKey: "bLNttzp7IHbwmmmWj",
        }
      );

      console.log("Email sent:", response);

      setStatus("Message sent successfully! ?");

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("Message could not be sent. Please try again. ?");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-heading">
        <p>Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>

          <p>
            Have a project idea, job opportunity, or simply want
            to connect? Send me a message and I'll get back to you.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <span>Available through contact form</span>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <span>India</span>
          </div>
        </div>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="btn primary-btn"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className="form-status"
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
