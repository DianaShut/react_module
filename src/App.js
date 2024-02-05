import './App.css';
import {characters} from "./components/RickyandMorty/Characters";
import {Character} from "./components/RickyandMorty/Character";
import {simsons} from "./components/Simsons/Simsons";
import {Simson} from "./components/Simsons/Simson";

const App = () => {
  return (
      <div>
      <div>
          {characters.map(character=>
              <Character character={character}
                         key={character.id}/>)}
      </div>
      <br/>
          <div>
              {simsons.map(simson =>
              <Simson simson={simson}
                  key={simson.id}/>)}
          </div>
     </div>
  );
};

export {App};
