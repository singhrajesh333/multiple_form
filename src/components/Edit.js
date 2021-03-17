import React,{useEffect, useState} from 'react';
import data from '../data/mock_data.json';
import {useParams} from 'react-router-dom';


const Edit = (props) => {
    const {id} = useParams();
    
    const [datas, setDatas] = useState({
        ids:10,
        title: "",
        description: "",
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        pubDate:''
      });
     
console.log(datas)
      
    const dataHandler = (e) => {
        setDatas({ ...datas, [e.target.name]: e.target.value});
        
      };
     
      const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setDatas({...datas,profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const submitHandler =(e) =>{
    e.preventDefault()
       data.items.unshift(datas);
      
      props.history.push({
        pathname : '/List'
      })
    }
    useEffect(() =>{
        loadUser();
    },[])

    const loadUser = () =>{
      return(
         setDatas(data.items[id]) 
      )
    }
    // const deleteHandler = (id) =>{
    //     setStoreData((oldvalues) =>{
    //     return oldvalues.filter((olvalues,index) =>{
    //     return index !==id
    //     })
    //         })
    //         }
    
    return (
        <div className='container'>
        <form className="form" onSubmit={submitHandler}>
        <div className="form-control">
      <label>title</label>
      <input type="text" name="title" value={datas.title} onChange={dataHandler} />
      <br />

      <label>description</label>
      <input type="text" name="description" value={datas.description} onChange={dataHandler} />
      <br />
      <label>Date</label>
      <input type="number" name="pubDate"  value={datas.pubDate} onChange={dataHandler} />
      <br />
      <div className="page">
				<div >
					<h1 className="heading">Add your Image</h1>
					<div className="img-holder">
						<img src={datas.profileImg} alt="" id="img" className="img" style={{height:'100px',width:'100px'}} />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>
				</div>
			</div>
            <button type='submit'>click</button>
            </div>
            </form>
    </div>
  );
            

}

export default Edit
