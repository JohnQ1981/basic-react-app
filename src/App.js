import './App.css';
import JQ ,{ dt } from './JQ';
 

function App() {
  let message ='Hello there!';
  var mt= Math.random();
  if(mt>0.5){
    message = 'Bye There';
  }
  console.log(mt);
  const date = new Date();
  const time = date.toLocaleTimeString();
  const inputType ='number';
  const minValue= 5
  return (
    <div className="App">
      {message}
      <hr/>
      it is {time}
      <hr/>
      we can also {new Date().toLocaleTimeString()}
      <div> <input type="number"></input></div>
      <div> <input style={{boder: '3px solid' ,color:'blue'}} type={inputType} min={minValue} max={12}></input></div>
      <div><textarea autoFocus={true}></textarea></div>
      <div><hr/><JQ/></div>
      <div>{dt}</div>
    </div>
  );
}

export default App;
