import React, { useState } from 'react';

import Form from './components/Form'
import List from './components/List'
import { nanoid } from 'nanoid';
import StepModel from './models/StepModel'
function App() {
  const [steps, setSteps] = useState([])

  const addStep = (step) => {
    let stepDate = steps.find((item) => {
      let date1 = new Date(item.date)
      let date2 = new Date(step.date)
      return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDay() === date2.getDay()
    })
    if (stepDate) {
      let newSteps = steps.map((item) => {
        if (item.id == stepDate.id) {
          item.distance = Number(item.distance) + Number(step.distance)
        }
        return item
      })
      setSteps(() => [...newSteps])
    } else {
      setSteps(prevSteps => [...prevSteps, new StepModel(nanoid(), step.date, step.distance)].sort((a, b) => new Date(b.date) - new Date(a.date)))
    }
    
  }

  const delStep = (id) => {
    setSteps(prevSteps => prevSteps.filter((item) => item.id != id))  
  }

  return (
    <div className="App">
      <Form addStep={addStep} />
      <List steps={steps} delStep={delStep} />
    </div>
  );
}

export default App;
