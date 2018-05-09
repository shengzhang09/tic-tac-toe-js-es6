import {Component} from '../framework/component.js';
import {BoardComponent} from '../board/board.component.js';

export class GameComponent extends Component {
  constructor(parent, containerDOM) {
    super(parent, containerDOM);
    this.state = {
      history: [{
        squares: Array(9).fill(''),
      }],
      stepNumber: 0,
      xIsNext: true,
      test: true
    };
  }

  handleClick(ev, i) {
    console.log('Handling click event...');
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(ev,step) {
    console.log('Jumping to ', step);
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  addEvents(){
    this.addEvent('btnMove', (target)=>{
      target.addEventListener('click', (ev)=>{
        return this.jumpTo(ev, target.attributes.key.value);
      });
    });
  }

  init(){

  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      let moveHtml = `
        <li>
          <button class='btnMove' key='${move}'>${desc}</button>
        </li>
      `
      return moveHtml;
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    let html = `
      <div class="game">
        <div class="game-board">
          <Board squares=${current.squares}></Board>
        </div>
        <div class="game-info">
          <div>${status}</div>
          <ol>${moves.join('')}</ol>
        </div>
      </div>
    `;
    return html;
  }

  refreshChildren(){
    this.refreshChild('Board');
  }

  buildChildren(){
    this.buildChild('Board', (containerDOM)=>{
      return new BoardComponent(this, containerDOM);
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}
