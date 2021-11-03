import React , {useState} from 'react'
import PropTypes from 'prop-types'
import './Addrodo.css'

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)
    return {
        bind:{
            value, 
            onChange: event=> setValue(event.target.value)
        },
        clear: ()=> setValue(''),
        value: ()=> value
       
    }
}

function AddTodo({onCreate}){
    const input =useInputValue('')
    
    function submitHandler(event){
    event.preventDefault()
    if(input.value().trim()){
        onCreate(input.value())
        input.clear()
       
    }
    }
 return(
     <form style={{marginBottom: '1rem'}} onSubmit={submitHandler} >
      <input  className='input' {...input.bind} />
      <button className='btn-1' type='submit'>Add Todo</button>
     </form>
 )
}


AddTodo.propTypes={
    onCreate: PropTypes.func.isRequired
}
export default AddTodo