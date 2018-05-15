import {Component} from '../framework/component.js'
import {SquareComponent} from '../square/square.component.js';

export class BoardComponent extends Component{
  constructor(parent, containerDOM){
    super(parent, containerDOM);
  }

  init() {
    console.log('Initializing Board component...');
  }

  refreshChildren(){
    this.refreshChild('Square');
  }

  buildChildren(){
    //pass arrow function as the parameter of buildChild function
    this.buildChild('Square', (containerDOM)=>{
      return new SquareComponent(this, containerDOM);
    });
  }

  renderSquare(i){
    let value= this.attrs.squares.value.split(',')[i];
    let html = `
      <Square value='${value}' index='${i}'></Square>
    `;
    return html;
  }

  render(){
    console.log('Rendering board component...');
    let html = `
      <div>
        <div class="board-row">
          ${this.renderSquare(0)}
          ${this.renderSquare(1)}
          ${this.renderSquare(2)}
        </div>
        <div class="board-row">
          ${this.renderSquare(3)}
          ${this.renderSquare(4)}
          ${this.renderSquare(5)}
        </div>
        <div class="board-row">
          ${this.renderSquare(6)}
          ${this.renderSquare(7)}
          ${this.renderSquare(8)}
        </div>
      </div>
      `;
    return html;
  }
}
