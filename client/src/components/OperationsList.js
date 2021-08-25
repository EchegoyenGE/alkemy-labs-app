import React, { useState } from 'react'

import { TableContainer, Paper, Table, TableBody, TableCell, TableRow } from '@material-ui/core'

const OperationsList = ({ operations, handleEdit }) => {
  const [showList, setShowList] = useState('all')

  const operationsToShow = showList === 'in'
  ? operations.filter(op => op.income === true)
  : (showList === 'ex')
    ? operations.filter(op => op.income === false)
    : operations

    const style = (type) => {
      return {color: (type) ? 'green' : 'red'}
    }
  
    return (
        <div>
        <h2>Operations list</h2>
          <div>
            <button onClick={() => setShowList('all')}>All</button>
            <button onClick={() => setShowList('in')}>Incomes</button>
            <button onClick={() => setShowList('ex')}>Expenditures</button>
          </div>
          <TableContainer component={Paper}>
            <Table >
              <TableBody>
                {
                  operationsToShow.map(op =>
                    <TableRow key={op.idOperation} style={style(op.income)}>
                      <TableCell>{op.concept}</TableCell>
                      <TableCell>{op.income ? 'income' : 'expenditure'}</TableCell>
                      <TableCell><span>{op.amount}</span></TableCell>
                      <TableCell><button onClick={() => handleEdit(op)}>edit</button></TableCell>
                    </TableRow>
                  )
                }
              </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default OperationsList