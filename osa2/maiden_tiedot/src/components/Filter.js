const Filter = ({handleChange, value}) => {
    return (
        <div>
            find countries <input onChange={handleChange} value={value}/>
        </div>
    );
}

export default Filter;