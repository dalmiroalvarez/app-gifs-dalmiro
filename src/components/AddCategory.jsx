import { useState } from "react"

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      if( inputValue.trim().length <= 1) return;

      setCategories( categories => [ inputValue, ...categories ]);
      setInputValue('')
    }

  return (
    <form onSubmit={ (e) => handleSubmit(e)}>
    <input 
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={ (e) => setInputValue(e.target.value) }
    />
    </form>  
  )
}

export default AddCategory