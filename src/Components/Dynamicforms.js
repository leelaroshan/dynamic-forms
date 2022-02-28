import React,{useState} from 'react'

export default function Dynamicforms() {

  const [formFields, setFormFields] = useState([{ name: '', age: '' }])
  
  const handleChange = (index, event) => {
    let data = [...formFields]
      data[index][event.target.name] = event.target.value;
    setFormFields(data)
  }

  const addFields = () => {
     let object = {
       name: '',
       age: '',
     };

    setFormFields([...formFields, object])
}

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data)
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }


  return (
    <div className="form-container">
      <h4> DynamicForms </h4>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="enter a name"
                value={form.name}
                onChange={(event) => handleChange(index, event)}
              />
              <input
                name="age"
                placeholder="age"
                value={form.age}
                onChange={(event) => handleChange(index, event)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
        <button onClick={addFields}>Add More</button>
        <br></br>
        <button onClick={submit}>submit</button>
      </form>
    </div>
  );
}
