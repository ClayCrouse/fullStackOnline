import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch] = useState('')

  const handleTextChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addInfo = (event) => {
    event.preventDefault()
    if(!persons.some(person => person.name === newName))
    {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
  }

  const nameToShow = persons.filter(person => person.name.includes(search))

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          filter to show: <input value={search} onChange={handleSearch} />
        </div>
        <div>
          name: <input value={newName} onChange={handleTextChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {nameToShow.map((elem, i) => <li key={i}>{elem.name}   {elem.number}</li>)}
      </ul>
    </div>
  )
}

export default App
