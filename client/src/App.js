import React, { useEffect, useState } from 'react'
import { Switch, Link, Route, Redirect, useHistory } from 'react-router-dom'

//material-UI
import { Container, AppBar, Toolbar, Button, IconButton } from '@material-ui/core'

//pages
import Home from './pages/home/index'
import Operations from './pages/operations'
import Login from './pages/login/index'

import Notification from './components/Notification'

//services
import userService from './services/users'
import operationService from './services/operations'

function App() {
    //states
  const [user, setUser] = useState(null)
  const [operations, setOperations] = useState()
  const [edit, setEdit] = useState(false)
  const [currentOp, setCurrentOp] = useState(null)
  const [message, setMessage] = useState({})

  //hooks
  const history = useHistory() 

  useEffect(() => {
    const userJSON = window.localStorage.getItem('alkemyAppUser')
    if (userJSON) {
      const userData = JSON.parse(userJSON)
      setUser(userData)
      operationService.setToken(userData.token)
      operationService.getAll().then(response => {
        if (response.error === undefined) {
          setOperations(response)
          history.push('/')
        } else {
          handleLogOut()
          history.push('/login')
        }
      })
    }
  }, [])

  const handleSubmitOperation = async (newOp) => {    
    const newData = await operationService.create(newOp)
    setOperations([...operations, newData])
    showMessage('operation saved', true)
  }

  const handleEdit = (op) => {
    setEdit(true)
    setCurrentOp(op)    
  }

  const handleConceptChange = ({target}) => {
    setCurrentOp({
      ...currentOp,
      concept: target.value
    })
  }

  const handleAmountChange = ({ target }) => {
    setCurrentOp({
      ...currentOp,
      amount: target.value
    })
  }

  const handleDateChange = ({ target }) => {
    setCurrentOp({
      ...currentOp,
      date: target.value
    })
  }

  const showMessage = (message, type) => {
    setMessage({
      text: message,
      type
    })
    setTimeout(() => {
      setMessage({})
    }, 2000)
  }

  const handleSubmitEdit = async (e) => {
    e.preventDefault()
    const editedOp = await operationService.edit(currentOp).then(response => response.editedOp)
    setOperations(operations.map(op => op.idOperation === editedOp.idOperation ? editedOp : op))
    setCurrentOp('')
    setEdit(false)
    showMessage('operation edited', true)
  }

  const handleLoginUser = (credentials) => {
    userService
      .login(credentials)
      .then(data => {
        operationService.setToken(data.token)
        operationService.getAll().then(response => setOperations(response))
        setUser(data)
        showMessage('successful logged in', true)
        window.localStorage.setItem('alkemyAppUser', JSON.stringify(data))
        history.push('/')
      })
      .catch((error) => {
        showMessage(error.message, false)
      })
  }

  const handleLogOut = () => {
    setUser(null)
    window.localStorage.clear()
  }

  const handleCancelEdit = () => {
    setEdit(false)
  }

  return (
      <>
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge='start'color='inherit' aria-label='menu'>
          </IconButton>
          <Button color='inherit'>
            <Link to='/'>Home</Link>
          </Button>
          <Button color='inherit'>
            <Link to='/operations'>  Operations  </Link>
          </Button>
          <Button color='inherit'>
            {
              user
                ? <Button onClick={handleLogOut}>logout</Button>
                : <Link to='/login'>  Login  </Link>
            }
          </Button>
        </Toolbar>
      </AppBar>
    <Container className='app-container'>
        <div>
            <h1>MyWallet</h1>
        </div>
      <div>
        {
          (message === {})
            ? null 
            : <Notification message={message}/>
        }
      </div>
      <div>
        <Switch>
          <Route path='/operations'>
            {
              user
              ? <Operations
                  handleSubmit={handleSubmitOperation}
                  showMessage={showMessage}
                  operations={operations}
                  handleEdit={handleEdit}
                  edit={edit}
                  handleSubmitEdit={handleSubmitEdit}
                  currentOp={currentOp}
                  handleConceptChange={handleConceptChange}
                  handleAmountChange={handleAmountChange}
                  handleDateChange={handleDateChange}
                  handleCancelEdit={handleCancelEdit}
                />
                : <Redirect to="/login" />
            }              
          </Route>
          <Route path='/login'>
            {
              user
                ? <Redirect to="/" />
                : <Login handleLoginUser={handleLoginUser} />
            }
          </Route>
          <Route path='/'>
            {
              user
                ? <Home operations={operations} handleCancelEdit={handleCancelEdit}/>
                : <Redirect to="/login" />
            }
            
          </Route>
        </Switch>
        </div>
        <footer>
            MyWallet, made by Gastón Echegoyen
        </footer>
      </Container>
      </>
  );
}

export default App;
