
import React from 'react'
import ReactDOM from 'react-dom'


const Statistiikka = ({ hyva, neutraali, huono }) => {
    return (
        <div>
            <h3>Statistiikka</h3>
            <p>hyvä {hyva}</p>
            <p>neutraali {neutraali}</p>
            <p>huono {huono}</p>
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1
        })
    }

    klikNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }

    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Anna palautetta</h3>
                    <Button handleClick={this.klikHyva} text="hyvä"/>
                    <Button handleClick={this.klikNeutraali} text="neutraali" />
                    <Button handleClick={this.klikHuono} text="huono"/>
                    <Statistiikka hyva={this.state.hyva}
                        neutraali={this.state.neutraali}
                        huono={this.state.huono} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

