// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";

// import { validateEmail } from "../../utils/helpers";

// function Contact() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log("Submit Form", formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage("Your email is invalid.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log("Handle Form", formState);
//     }
//   };

//   return (
//     <Container>
//       <div className="justify-content-center">
//         <h1 data-testid="h1tag">Contact me</h1>
//         <form id="contact-form" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               name="name"
//               defaultValue={name}
//               onBlur={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email address:</label>
//             <input
//               type="email"
//               name="email"
//               defaultValue={email}
//               onBlur={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="message">Message:</label>
//             <textarea
//               name="message"
//               rows="5"
//               defaultValue={message}
//               onBlur={handleChange}
//             />
//           </div>
//           {errorMessage && (
//             <div>
//               <p className="error-text">{errorMessage}</p>
//             </div>
//           )}
//           <button data-testid="button" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </Container>
//   );
// }

// export default Contact;
import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
  return (
    <div>
      <h2>Contact</h2>

      <Form>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onSubmit={handleSubmit}
        >
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onSubmit={handleSubmit}
        >
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onSubmit={handleSubmit}
        >
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter message"
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
