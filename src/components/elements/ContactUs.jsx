// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     // <form ref={form} onSubmit={sendEmail}>
//     //   <label>Name</label>
//     //   <input type="text" name="user_name" />
//     //   <label>Email</label>
//     //   <input type="email" name="user_email" />
//     //   <label>Message</label>
//     //   <textarea name="message" />
//     //   <input type="submit" value="Send" />
//     // </form>

// <div className="max-w-md mx-auto">
//   <form ref={form} onSubmit={sendEmail}>
//     <div className="mb-4">
//       <label className="block mb-2 dark:text-gray-300" htmlFor="user_name">Name</label>
//       <input type="text" name="user_name" id="user_name" className="border rounded-md px-3 py-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
//     </div>
//     <div className="mb-4">
//       <label className="block mb-2 dark:text-gray-300" htmlFor="user_email">Email</label>
//       <input type="email" name="user_email" id="user_email" className="border rounded-md px-3 py-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
//     </div>
//     <div className="mb-4">
//       <label className="block mb-2 dark:text-gray-300" htmlFor="message">Message</label>
//       <textarea name="message" id="message" className="border rounded-md px-3 py-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"></textarea>
//     </div>
//     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
//   </form>
// </div>

//   );
// };


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_xngpiqx', 'template_dnfoscc', e.target, 'YOUR_USER_ID')
    //   .then((result) => {
    //     console.log(result.text);
    //     setFeedback('Your message has been sent successfully!');
    //     setSubmitted(true);
    //   }, (error) => {
    //     console.log(error.text);
    //     setFeedback('Oops! Something went wrong. Please try again later.');
    //     setSubmitted(true);
    //   });

    emailjs
      .sendForm('service_xngpiqx', 'template_dnfoscc', form.current, {
        publicKey: 'E3C-M8PfPddwrM58F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300" htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" className="border rounded-md px-3 py-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300" htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" className="border rounded-md px-3 py-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300" htmlFor="message">Message</label>
          <textarea name="message" id="message" className="border rounded-md px-3 py-2 w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
      </form>
      {submitted && (
        <p className={`mt-4 ${feedback.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
