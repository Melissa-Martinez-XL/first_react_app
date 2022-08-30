import './App.css';
import { useState } from 'react';

import { Buttons } from './buttons/Buttons'; 
import { Card } from './card/Card';      
import { UserInput } from './userInput/UserInput';

// Código cambiado

const statuses = ['procesar', 'procesando', 'finalizado'];
const colors = ['red', 'blue', 'yellow'];

const App = () => {

  // Estado Inicial

  const [currentStatus, setCurrentStatus] = useState(statuses[0]);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  // Cambiar estado

  function handleClick(nextStatus) {
    
    const nextColorIndex = statuses.indexOf(nextStatus);
    const nextColor = colors[nextColorIndex];

    setCurrentStatus(nextStatus); // Inidcar cual es el siguiente status y color
    setCurrentColor(nextColor); 
  }

  // Retorno - Revisar

  return (
    <div className="container">
      <Card status={currentStatus} color={currentColor} />
      <Buttons status={currentStatus} statuses={statuses} onClick={handleClick} /> 
      <UserInput changeStatus={handleClick} status={statuses} />
    </div>
  );
}

// Código original

/*
class App extends Component {
  constructor(params) {
    super(params);  
    this.state = {
      currentStatus: statuses[0], 
      currentColor: colors[0],
    };

    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick(nextStatus) {  
    const nextColorIndex = statuses.indexOf(nextStatus);  
    const nextColor = colors[nextColorIndex];             
    this.setState({ currentStatus: nextStatus, currentColor: nextColor }); 
  }

  render() {  
    return (  
      <>
        <Card status={this.state.currentStatus} color={this.state.currentColor} />  
        <Buttons status={this.state.currentStatus} statuses={statuses} onClick={this.handleClick}  />
        <UserInput changeStatus={this.handleClick} status={statuses}/>
      </>
    );
  }
}
*/

export default App; 
