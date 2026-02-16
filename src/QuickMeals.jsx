/*--------- Happpy recipes    ---------*/

import recipe from './recipe.json'
import { NavLink } from 'react-router-dom'

function QuickMeals(){
   return (
    <>
      <div className="blank-page">
        <div className="page1">
          {recipe.x
            .filter((item) => item.mood === "tired")
            .map((item) => (
              <div className="card" key={item.id}>
                <img src={item.img} className="i1" alt={item.name} />
                <h3>{item.name}</h3>
                <h2>{item.time}</h2>
                <h2>{item.publisher}</h2>
                  <h2>{item.URL}</h2>
                <button>Details</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
 export default QuickMeals;