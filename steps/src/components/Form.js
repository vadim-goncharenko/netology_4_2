import React, { useState } from 'react';

function Form(props) {
    const { addStep } = props
    const [form, setForm] = useState({
      id: null,
      date: '',
      distance: 0
    })

    const submitStep = evt => {
      evt.preventDefault()
      addStep(form)
      setForm(() => ({
        id: null,
        date: '',
        distance: 0
      }))
    }

    const changeStep = (evt) => {
      setForm(prevForm => ({...prevForm, [evt.target.name]: evt.target.value}))
    }

    return  (
      <>
        <form onSubmit={submitStep}>
          <input type="date" name="date" value={form.date} onChange={changeStep} />
          <input type="number" name="distance" value={form.distance} onChange={changeStep} />
          <input type="submit" value="ОК" />
        </form>
      </>
    )
}


export default Form;