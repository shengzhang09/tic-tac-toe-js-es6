import {Component} from '../framework/component.js'

export class SquareComponent extends Component {
  constructor(parent, containerDOM){
    super(parent, containerDOM);
  }

  init() {
    console.log('Initializing Square component...');
  }

  render(){
    console.log('Rendering Square component...');
    let html = `
      <button class="square">
        ${this.attrs.value.value}
      </button>
      `;
    return html;
  }

  addEvents(){
    this.addEvent('square', (target)=>{
      target.addEventListener('click', (ev)=>{
        return this.parent.parent.handleClick(ev,this.attrs.index.value);
      });
    });
  }
}
