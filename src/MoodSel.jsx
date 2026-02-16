import recipe from './recipe.json';
import { NavLink } from "react-router-dom";
function MoodSel(){
    return<>
    <div className="container">
        <h2 > "How are you Feeling today ?"
             </h2>
        <div className="card-1">
            <img className="emoji1" src="/src/happyEmoji.png.png"></img>
            <br /><br />
           <NavLink to="/b"><button>Happy</button></NavLink> 
        </div> 

         <div className="card-2">
            <img className="emoji2" src="/src/sadEmoji.png.png"></img>
            <NavLink to="/c"><button>Sad</button></NavLink>
        </div>

        <div className="card-3">
            <img className="emoji3" src="/src/tiredEmoji.png.png"></img>
             <NavLink to="/d"><button>tired</button></NavLink>
        </div>

        <div className="card-4">
            <img className="emoji4" src="/src/energeticEmoji.png.png"></img>
            <NavLink to="/e"><button>Energetic</button></NavLink>
        </div>  
        <h2 className='H2'>“Select your mood and get recipe suggestions instantly”</h2>
    </div>

    </>
}
export default MoodSel;