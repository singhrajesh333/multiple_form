import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import data from '../data/mock_data.json';
import "./List.css"



const List = (props) => {
    const value = data.items;
    const[input,setInput] = useState(value)
    
    const deleteHandler = (index) =>{
        setInput((oldvalues) =>{
        return oldvalues.filter((ovalues,id) =>{
        return id !== index ;
        })
        })
        }

    return (
        
        <div>
        <div className='navigation'>
           <Link className='btn3' to = '/Write'>write</Link>
            <Link className='btn4'>your articles</Link>
            <Link className='btn5' to = '/' >log out</Link>
        </div>
  <div  className="containers">
        <table className="styled-table">
 <thead>
<tr>
<th>images</th>
<th >title</th>
<th >Date</th>
<th>description</th>
</tr>
</thead>


{
    input.map((val,index)=>{
        return(
           
            <tbody className="user" key={index}>
    <tr>
 
    <td>
    <a href={val.link} target="blank">
    <img src={val.thumbnail} width="100" height="100" alt='image'/>
    </a>
    
    </td>
    <td>{val.title}</td>
    <td>{val.pubDate} </td>
    <td>{val.description}</td>
    <Link className='btn1' to = {`/Edit/${index}`}>Edit</Link>
    <Link className='btn2' onClick = {() => deleteHandler(index)}>delete</Link>
    </tr>
     </tbody>
        )

    })
  
}
</table>
</div>
        </div>
      

    )
}

export default List


