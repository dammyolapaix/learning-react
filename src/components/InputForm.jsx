// // import React, { useState } from "react";

// // const InputForm = () => {
// //   const [values, setValues] = useState({
// //     SVC: "",
// //     Rank: "",
// //     Name: "",
// //     Email: "",
// //     Age: "",
// //     Trade: "",
// //   });

// //   const inputs = [
// //     {
// //       id: 1,
// //       name: "SVCN",
// //       type: "number",
// //       placeholder: "SVCN",
// //       label: "SVC",
// //     },
// //     {
// //       id: 2,
// //       name: "Rank",
// //       type: "text",
// //       placeholder: "Rank",
// //       label: "Rank",
// //     },
// //     {
// //       id: 3,
// //       name: "Email",
// //       type: "email",
// //       placeholder: "Email",
// //       label: "Email",
// //     },
// //     {
// //       id: 4,
// //       name: "Age",
// //       type: "number",
// //       placeholder: "Age",
// //       label: "Age",
// //     },
// //     {
// //       id: 5,
// //       name: "Trade",
// //       type: "text",
// //       placeholder: "text",
// //       label: "Trade",
// //     },
// //   ];

// //   const handleSubmit = (e) => {
// //     // Prevent the browser from reloading the page
// //     e.preventDefault();
// //     console.log(values);
// //   };

// //   const onChange = (e) => {
// //     setValues({ ...values, [e.target.name]: e.target.value });
// //   };

// import React, { useState, forwardRef, useImperativeHandle } from "react";

// const InputForm = forwardRef((props, ref) => {
//   const [values, setValues] = useState({
//     SVCN: "",
//     Rank: "",
//     Name: "",
//     Email: "",
//     Age: "",
//     Trade: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(values);
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   // Expose a function to trigger form submission from the parent component
//   useImperativeHandle(ref, () => ({
//     submitForm() {
//       handleSubmit({ preventDefault: () => {} }); // Simulate form submission
//     },
//   }));

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {inputs.map((input) => ( // Corrected map function syntax
//           <div key={input.id}>
//             <label htmlFor={input.name}>{input.label}</label> {/* Corrected closing tag */}
//             <input
//               type={input.type}
//               placeholder={input.placeholder}
//               name={input.name}
//               onChange={onChange}
//             />
//           </div>
//         ))}
//         <div className="">
//           <button type="submit">Submit form</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default InputForm;

import React, { useState, forwardRef, useImperativeHandle } from "react";

const InputForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    SVCN: "",
    Rank: "",
    Email: "",
    Age: "",
    Trade: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Expose a function to trigger form submission from the parent component
  useImperativeHandle(ref, () => ({
    submitForm() {
      handleSubmit({ preventDefault: () => {} }); // Simulate form submission
    },
  }));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="SVCN">SVCN</label>
          <input
            type="text"
            name="SVCN"
            value={formData.SVCN}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Rank">Rank</label>
          <input
            type="text"
            name="Rank"
            value={formData.Rank}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Age">Age</label>
          <input
            type="text"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Trade">Trade</label>
          <input
            type="text"
            name="Trade"
            value={formData.Trade}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login as Adjutant</button>
      </form>
    </div>
  );
});

export default InputForm;

    
