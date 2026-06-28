import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import { contact } from "../../data/contact";
import "./Contact.scss";

function Contact() {
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    if (!copyStatus) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setCopyStatus("");
    }, 2400);

    return () => window.clearTimeout(timeoutId);
  }, [copyStatus]);

  const copyEmail = async () => {
    if (!navigator.clipboard) {
      setCopyStatus("Copy unavailable");
      return;
    }

    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Copy unavailable");
    }
  };

  return (
    <Section className="contact" id="contact" ariaLabelledby="contact-heading">
      <div className="contact__panel">
        <div className="contact__content">
          <p className="contact__eyebrow">Contact</p>
          <h2 id="contact-heading">Let&apos;s Build Something Practical</h2>
          <p>
            I am open to React frontend opportunities in Hyderabad and Remote
            roles, and I am also open to selected freelance frontend work.
          </p>
        </div>

        <div className="contact__details" aria-label="Contact details">
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Location preference</dt>
              <dd>{contact.locationPreference}</dd>
            </div>
          </dl>

          <button
            className="contact__copy"
            type="button"
            onClick={copyEmail}
            aria-describedby="copy-email-status"
          >
            Copy Email
          </button>
          {copyStatus && (
            <p
              className="contact__copy-status"
              id="copy-email-status"
              aria-live="polite"
            >
              {copyStatus}
            </p>
          )}
        </div>

        <div className="contact__actions" aria-label="Contact actions">
          <a
            className="contact__button contact__button--primary"
            href={`mailto:${contact.email}`}
          >
            Email Me
          </a>
          {contact.links.map((link) => (
            <a
              className="contact__button"
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
          <a
            className="contact__button contact__button--resume"
            href={contact.resumeUrl}
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
