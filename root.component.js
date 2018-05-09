import {Component} from './framework/component.js';
import {GameComponent} from './game/game.component.js';

export class RootComponent extends Component {
  constructor(parent, containerDOM) {
    super(parent, containerDOM);
  }

  init(){

  }
  
  refreshChildren(){
    this.refreshChild('Game');
  }

  buildChildren(){
    this.buildChild('Game', (containerDOM)=>{
      return new GameComponent(this, containerDOM);
    });
  }
}
