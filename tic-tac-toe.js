import React, { Component } from 'react'
import {gameBlock} from './api'
import {calculateWinner} from './checkWin'

class TicTac extends Component {

constructor (props) {
    super(props)
    this.state = {
        gameBlock,
        current: 0
    }
}

addCymeriad = (index) => {

    let gameBlock = this.state.gameBlock
    let current = this.state.current

    if (calculateWinner(gameBlock) === 'X' ) return
    if (calculateWinner(gameBlock) === '0' ) return

    if (gameBlock[index] === 'X') return
    if (gameBlock[index] === '0') return



    if (current % 2 === 0) {
        gameBlock[index] = 'X'
    } else {
        gameBlock[index] = '0'
    }

    this.setState({gameBlock: gameBlock, current: this.state.current + 1})
    calculateWinner(gameBlock)
}

nextPlayer = () => {
    if (this.state.current % 2 === 0) {
        return 'X'
    } else {
        return '0'
    }
}

startGame = () => {

    let gameBlock = this.state.gameBlock

    for (let i = 0; i < gameBlock.length; i++) {
        gameBlock[i] = ''
        this.setState({gameBlock: this.state.gameBlock, current: 0})
    }
}


render() {
    const gameBlockList = this.state.gameBlock.map((item, index) => {
        return <div onClick={this.addCymeriad.bind(null, index)} key={index} className='game__block'>{item}</div>
    })

    const winner = calculateWinner(gameBlock)

    const player = this.nextPlayer()

  return (
    <div>
        <div className="game">
            {gameBlockList}
            <p className='win'>Победитель: {winner}</p>
            <input onClick={this.startGame} value='Начать заново' type="button" className="start__game"/>
        </div>
        <div className="nextPlayer">
            Следующий игрок: {player}
        </div>
    </div>
  );
}
}

export default TicTac;
  return null;
};

export default App;
