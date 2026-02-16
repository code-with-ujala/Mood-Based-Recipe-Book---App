/*--------- Happpy recipes    ---------*/

import recipe from './recipe.json'
import { NavLink } from 'react-router-dom'
function Deserts(){
   return (
    <>
      <div className="blank-page">
          <h2> Let's Cook something that matches your smile..</h2>
        <div className="page1">
         
          {recipe.x
            .filter((item) => item.mood === "happy")
            .map((item) => (
              <div className="card" key={item.id}>
                <img src={item.img} className="i1" alt={item.name} />
                <h3>{item.name}</h3>
                <h2>{item.time}</h2>
              <NavLink to="/f" 
              state= {{id: item.id,
                      name : item.name,
                      img :item.img,
                      details:item.details,
                      publisher:item.publisher,
                      URL:item.url}}>
                <button>Details</button>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
 export default Deserts;