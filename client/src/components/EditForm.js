import React from 'react'

import { TextField, Grid, Button } from '@material-ui/core'

const EditForm = ({
  handleSubmitEdit,
  currentOp,
  handleConceptChange,
  handleAmountChange,
  handleDateChange,
  handleCancelEdit
}) => {

    return (
        <div>
        <h3>Edit Page</h3>
          <form onSubmit={handleSubmitEdit} className='edit-form'>
            <Grid container className='edit-form-container'>
              <Grid item xs>
                <TextField id="outlined-basic" label="Concept" variant="outlined" type='text' value={currentOp.concept} placeholder='concept' onChange={handleConceptChange}/>
              </Grid>
              <br/>
              <Grid item xs>
                <TextField id="outlined-basic" label="Amount" variant="outlined" type='number' value={currentOp.amount} placeholder='amount' onChange={handleAmountChange}/>
            </Grid>
            <br/>
              <Grid item xs>
                <TextField id="outlined-basic" label="Date" variant="outlined" type='date' value={currentOp.date} placeholder='date' onChange={handleDateChange} />
            </Grid>
            <br/>
              <Grid>
                <Button color='primary' type='submit'>Save changes</Button>
            </Grid>
            <br/>
              <Grid>
                <Button color='secondary' onClick={handleCancelEdit}>cancel</Button>
              </Grid>
            </Grid>
          </form>
        </div>
    )
}

export default EditForm
