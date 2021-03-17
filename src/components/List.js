import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import data from '../data/mock_data.json';



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
        <div className='navigation' style={{display:'flex',justifyContent:'space-around'}}>
           <Link to = '/Write'>write</Link>
            <p>your articles</p>
            <Link to = '/' >log out</Link>
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
    <Link to = {`/Edit/${index}`}>Edit</Link>
    <button onClick = {() => deleteHandler(index)}>delete</button>
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


