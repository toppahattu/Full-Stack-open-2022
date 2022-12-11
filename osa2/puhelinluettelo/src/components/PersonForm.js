const PersonForm = ({handleSubmit, handleNameChange, valueName, handleNumberChange, valueNumber}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
              name: <input onChange={handleNameChange} value={valueName}/>
            </div>
            <div>
              number: <input onChange={handleNumberChange} value={valueNumber} />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
        </form>
    );
}

export default PersonForm;