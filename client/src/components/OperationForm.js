import React, { useState } from 'react'
import { useField } from '../hooks/useField'

import { Grid, TextField, FormControl, Radio, FormLabel, RadioGroup, FormControlLabel, Button } from '@material-ui/core'

const OperationForm = ({ handleSubmit, showMessage }) => {
  
  const [income, setIncome] = useState(false)
  
  const concept = useField('text')
  const amount = useField('number')
  const date = useField('date')
  const category = useField('text')

  const handleCreateOperation = (e) => {
    e.preventDefault()

    if (!concept.value || !amount.value || !income || !category.value) {
      return showMessage('Please complete all inputs', false)
    }

    const newOp = {
      idUser: 1,
      concept: concept.value,
      amount: Number(amount.value),
      date: date.value || new Date(),
      income: income === 'true' ? true : false,
      category: category.value
    }

    handleSubmit(newOp)
    
    concept.clearValue()
    amount.clearValue()
    date.clearValue()
    category.clearValue()
  }

    return (
      <form onSubmit={handleCreateOperation}>
        <Grid container className='operations-form'>
          <Grid item xs>
            <TextField {...concept} placeholder='concept' />
          </Grid>
          <br />
          <Grid item xs>
            <TextField {...amount} placeholder='amount' />
          </Grid>
          <br />
          <Grid item xs>
            <TextField {...date} placeholder='date' />
          </Grid>
          <br />
          <Grid item xs>
            <FormControl component="fieldset">
              <FormLabel component="legend">Operation type</FormLabel>
              <RadioGroup row aria-label="operation"
                name="position"
                value={income}
                onChange={({ target }) => setIncome(target.value)}
                className='radio-group'>
                  <FormControlLabel value='true' control={<Radio />} label='Income' />
                  <FormControlLabel value='false' control={<Radio />} label='Expenditure' />                 
              </RadioGroup>
            </FormControl>
          </Grid>
          <br />
          <Grid item xs>
            <TextField {...category} placeholder='category'/>
          </Grid>
          <br />
          <Grid item xs>
            <Button color='primary' type='submit'>Save</Button>
          </Grid>
        </Grid>
          {/* <div onChange={({target}) => setIncome(target.value)}>
            <input type='radio' name='type' value={true}/>Income
            <input type='radio' name='type' value={false}/> Expenditures
          </div> */}          
        </form>
    )
}

export default OperationForm