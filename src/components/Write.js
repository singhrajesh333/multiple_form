import React,{useState} from 'react';
import data from '../data/mock_data.json';


const Write = (props) => {
    const [datas, setDatas] = useState({
        id:10,
        title: "",
        description: "",
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        pubDate:''
      });
     

      
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
    const submitHandler =() =>{
    
       data.items.unshift(datas);
      
      props.history.push({
        pathname : '/List'
      })
    }
    // const deleteHandler = (id) =>{
    //     setStoreData((oldvalues) =>{
    //     return oldvalues.filter((olvalues,index) =>{
    //     return index !==id
    //     })
    //         })
    //         }
    console.log(datas)
    return (
        <div>
      <label>title</label>
      <input type="text" name="title" onChange={dataHandler} />
      <br />

      <label>description</label>
      <input type="text" name="description" onChange={dataHandler} />
      <br />
      <label>Date</label>
      <input type="number" name="pubDate" onChange={dataHandler} />
      <br />
      <div className="page">
				<div className="container">
					<h1 className="heading">Add your Image</h1>
					<div className="img-holder">
						<img src={datas.profileImg} alt="" id="img" className="img" />
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
            <button onClick={submitHandler}>click</button>
 
    </div>
  );
            

}

export default Write
