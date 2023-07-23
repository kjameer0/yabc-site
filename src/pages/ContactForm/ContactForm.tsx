import { useState, useEffect } from 'react';
//components
import StyledContactForm from './StyledContactForm';
import HeroImage from 'components/HeroImage';
//images
import { AdmissionsHero } from 'assets/images/Hero-Images';

const COUNSELOR_FORM_ENDPOINT =
  'https://public.herotofu.com/v1/1bd822b0-27fe-11ee-adc8-15d0255d3cef';
const SITE_ADMIN_FORM_ENDPOINT =
  'https://public.herotofu.com/v1/50bf2530-2846-11ee-8058-515da3888232';
export function useContactForm(ENDPOINT: string) {
  const [status, setStatus] = useState<string>();
  const handleFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const injectedData: Record<string, string | number> = {
      // Here you can specify anything you need to inject dynamically, outside the form. For example:
      // DYNAMIC_DATA_EXAMPLE: 123,
    };

    const inputs = Array.from(form.elements) as HTMLFormElement[];
    const data = inputs
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {} as Record<string, string>
      );
    Object.assign(data, injectedData);

    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot submission, so bypass it to validate via captcha challenge old-school style
        if (response.status === 422) {
          // Append dynamically generated keys back to the form
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = injectedData[key].toString();
            form.appendChild(el);
          });
          // Let's submit the form again and spammer/bot will be redirected to another page automatically
          // Submitting via javascript will bypass calling this function again
          form.setAttribute('target', '_blank');
          form.submit();
          throw new Error('Please finish the captcha challenge');
        }
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  return { status, handleFormSubmit };
}
export default function ContactForm({ version }: { version: 'counselor' | 'admin' }) {
  const { status, handleFormSubmit } = useContactForm(
    version === 'counselor' ? COUNSELOR_FORM_ENDPOINT : SITE_ADMIN_FORM_ENDPOINT
  );

  if (status) {
    return (
      <div className="md:w-96 md:max-w-full w-full mx-auto">
        <div className="sm:rounded-md p-6 border border-gray-300">
          <div className="major-heading">Thank you!</div>
          <div className="sub-heading">{status}</div>
        </div>
      </div>
    );
  }

  return (
    <StyledContactForm>
      <HeroImage text={[]} color="white" imgLink={AdmissionsHero} id="counselor-contact-hero" />
      <h1 className="major-heading">
        {version === 'counselor' ? 'COUNSELOR' : 'SITE ADMINISTRATOR'} CONTACT FORM
      </h1>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />
      <form
        action={version === 'counselor' ? COUNSELOR_FORM_ENDPOINT : SITE_ADMIN_FORM_ENDPOINT}
        method="POST"
        onSubmit={handleFormSubmit}
        acceptCharset="UTF-8"
      >
        <fieldset>
          <label className="form-label" htmlFor="Name">
            <span className="form-label-text">Name*</span>
            <input className="input-field" required type="text" name="Name" placeholder="Name" />
          </label>
          <label className="form-label" htmlFor="Email">
            <span className="form-label-text">Email*</span>
            <input required name="Email" placeholder="Email" className="input-field" />
          </label>
          <label className="form-label" htmlFor="Phone">
            <span className="form-label-text">Phone:</span>
            <input className="input-field" name="Phone" placeholder="Phone(optional)" />
          </label>
          <label className="form-label" htmlFor="Message">
            <span className="form-label-text form-textarea-label">Message*</span>
            <textarea name="Message" required placeholder="Send a message" />
          </label>
          <p className="para-content">PLEASE ALLOW AT LEAST 24 HOURS FOR A RESPONSE.</p>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </fieldset>
      </form>
    </StyledContactForm>
  );
}
