import { useState} from 'react';

export const FormCheckout = ({formData}) => {

    const [inputs, setInputs] = useState({});

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      formData({...inputs});
      setButtonDisabled(true);
    }
  
    return (
      <form onSubmit={handleSubmit} className='formCheckout'>
        <label>Nombre completo:
        <input 
          required
          type="text" 
          name="fullname" 
          value={inputs.fullname || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Email:
          <input 
            required
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Telefono:
          <input 
            required
            type="number" 
            name="phone" 
            value={inputs.phone || ""} 
            onChange={handleChange}
          />
          </label>
          <button type="submit" className='buttonSubmit' disabled={buttonDisabled}>{buttonDisabled?'Datos guardados':'Confirmar datos'}</button>
      </form>
    )
}

