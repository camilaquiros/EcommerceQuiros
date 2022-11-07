import { useState, createContext } from 'react';


export const FormData = createContext({
    fullname:"",
    email: "",
    phone:""
})

export const FormCheckout = ({formData}) => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert([JSON.stringify(inputs)]);
      formData({...inputs})
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Nombre completo:
        <input 
          type="text" 
          name="fullname" 
          value={inputs.fullname || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Email:
          <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Telefono:
          <input 
            type="number" 
            name="phone" 
            value={inputs.phone || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
}