import { NavLink } from "react-router-dom";
function HomePage(){
    return<>
    <div className="outer-box">
        <h1>Mood <br/>
            <div className="r1">Recipe </div>
            <div className="b1"> Book</div>
       </h1>
      
      <h3> Let's Cook according to your mood...</h3>
        <NavLink to="/a">
             <button>Start</button>
        </NavLink>
        <img   src="/src/home1page.png.png" className="img1"></img>
        
    </div>
    </>
}
export default HomePage;