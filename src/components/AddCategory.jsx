import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');

    //Input
    const onInputChange = ({target}) =>{ 
        setInputValue(target.value);
    }

    //Submit form
    const onSubmit = (event) =>{
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;

    //setCategories(categories =>[inputValue, ...categories]);
    // aunque no hemos enviado el parametro categories el hook useState nos devuleve simpre el el state actual, por eso funciona
    setInputValue('');
    onNewCategory( inputValue.trim());
   
    }


  return (
    <form onSubmit={onSubmit}>
    <input 
    type="text"
    placeholder="Bucar gifts"
    value={inputValue}
    onChange={onInputChange}
    //onChange={ (event)=>onInputChange(event)}
    />
    </form>
   
  )
}


