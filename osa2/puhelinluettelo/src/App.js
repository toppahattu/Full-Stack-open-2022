import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Results from './components/Results';
import Notification from './components/Notification';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        setPersons(data);
      })
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.some(p => p.name === newName)) {
      let person = persons.find(p => p.name === newName);
      if (person.number === newNumber) {
        window.alert(`${newName} is already added to phonebook with this number`);
        setNewName('');
        setNewNumber('');
        setNewFilter('');
        return;
      }
      else {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
          let changedPerson = {...person, number: newNumber};
          personService
            .update(changedPerson.id, changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(p => p.id !== changedPerson.id ? p : returnedPerson))
              setNewName('');
              setNewNumber('');
              setNewFilter('');
              setErrorMessage({message: `Updated ${returnedPerson.name}`, color: 'Green'});
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000);
            })
          return;
        }
      }
    }
    const newId = personService.createId(persons, persons.length);
    const uusi = {name: newName, number: newNumber, id: newId};   
    personService
      .create(uusi)
      .then(data => {
        setPersons(persons.concat(data));
        setNewName('');
        setNewNumber('');
        setNewFilter('');
        setErrorMessage({message: `Added ${uusi.name}`, color: 'Green'});
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
      })
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id));
        setErrorMessage({message: `Deleted ${person.name}`, color: 'Green'});
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
      })
      .catch(e => {
        setErrorMessage({message: `Information of ${person.name} has already been removed from server`, color: 'Red'});
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        setPersons(persons.filter(p => p.id !== id));
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Filter handleChange={handleFilterChange} value={newFilter} />
      <h3>add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleNameChange={handleNameChange} valueName={newName} handleNumberChange={handleNumberChange} valueNumber={newNumber} />
      <h3>Numbers</h3>
      <Results persons={persons} query={newFilter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App