import React from 'react'

const Home = ({ operations, handleCancelEdit }) => {

    const total = operations && operations.reduce((ac, it) => (it.income) ? ac + it.amount : ac - it.amount, 0)

    handleCancelEdit()
  
    return (
        <div>
          <h2>Home</h2>
          <h3>
            Total: {total}
          </h3>
          <div>
            <ul>
              {
                operations && operations
                  .filter((it, idx) => idx > operations.length - 11)
                  .map(op => <li key={op.idOperation}>{op.concept} {op.amount}</li>)
              }
            </ul>
          </div>
        </div>
    )
}

export default Home