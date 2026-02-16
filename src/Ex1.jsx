import { useLocation } from "react-router-dom";
function Ex1(){
     let p = useLocation();
    let id =p.state.id;
    let name = p.state.name;
    let img = p.state.img;
    let details = p.state.details;
    let publisher = p.state.publisher;
    let URL = p.state.URL;
    return<>
   <div className="outer-div">
 { /* left content*/}
<img  className="I" src={img} alt={name}/>

  
  {/* right content*/ }
  <div className="content-box" >
    <h2>{name}</h2>
 
    {/*publisher webpage */}
  <a href={publisher} 
   target="_blank" rel="noopener noreferrer">
    <button className="blue">Publisher Webpage</button>
    </a>

    {/*recipe url */}
    <a href={URL} 
   target="_blank" rel="noopener noreferrer">
    <button className="green">Recipe URL</button>
    </a>
 
  {/* tableee....*/ }
  <table border={2} 
  className="ingredient-table">
    <tbody>
      {details.map((item, index)=> 
   (
     <tr key={index}>
        <td>{item}</td>
     </tr>      
      )
      )}
    </tbody>
  </table>

  

   </div>
 </div>
    </>
}

export default Ex1;
