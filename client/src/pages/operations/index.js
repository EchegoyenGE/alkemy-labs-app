import React from 'react'
import OperationForm from '../../components/OperationForm'
import OperationsList from '../../components/OperationsList'
import EditForm from '../../components/EditForm'

import { Container, Grid } from '@material-ui/core'

const Operations = ({
    handleSubmit,
    showMessage,
    operations,
    handleEdit,
    edit,
    handleSubmitEdit,
    currentOp,
    handleConceptChange,
    handleAmountChange,
    handleDateChange,
    handleCancelEdit
}) => {

    return (
      <Container>
        <Grid container spacing={4}>
          <Grid item xs>
            <h2>Operations</h2>
            <OperationForm handleSubmit={handleSubmit} showMessage={showMessage}/>
          </Grid>
          <Grid item xs>            
            <OperationsList operations={operations} handleEdit={handleEdit} />
          </Grid>
          <Grid item xs>
            {
              edit
              ? <EditForm
                handleSubmitEdit={handleSubmitEdit}
                currentOp={currentOp}
                handleConceptChange={handleConceptChange}
                handleAmountChange={handleAmountChange}
                handleDateChange={handleDateChange}
                handleCancelEdit={handleCancelEdit}
              />
                : null                        
            }
          </Grid>
        </Grid>
        </Container>
    )
}

export default Operations