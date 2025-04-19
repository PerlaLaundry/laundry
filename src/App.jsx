import machine from './assets/machine.png';
import favico from '../favico.png';


const App = () => {
  return (
    <div className="homepage">
      <div className='logo'>
        <img className="machine" src={machine} alt="Machine" />
        <img className="favico rotating" src={favico} alt="Machine" />
      </div>
      <h1>Hamarosan jövünk</h1>
    </div>
  )
}

export default App;
