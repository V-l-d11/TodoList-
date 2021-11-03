import React ,{useContext} from 'react'
import Context from '../context'
import PropTypes from 'prop-types'
const styles={
    li:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadisu: '4px',
    marginBottom:'.5rem',
    },
    input:{
        marginRight: '1rem',
    }
}
 function TodoItem(props){
     const {removeTodo} = useContext(Context)
     let classes= []
     if(props.todo.complited){
         classes.push('done')
     }
     console.log(props.todo)
    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" 
                checked={props.todo.complited}
                style={styles.input} onChange={()=>props.onChange(props.todo.id)}/>
                {props.index +1}
                &nbsp;
                {props.todo.title}
            </span>
            <button className='rm' onClick={()=> removeTodo(props.todo.id)}>&times;</button>
            </li>
    )
}

TodoItem.propTypes={
    todo: PropTypes.object.isRequired ,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem