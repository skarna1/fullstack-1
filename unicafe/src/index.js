
import React from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ name, value }) => (
    <p>{name} {value}</p>
)

const Statistics = ({ hyva, neutraali, huono }) => {
    const summa = hyva + neutraali + huono
    const keskiarvo = Math.round(100 * (hyva - huono) / summa) / 100
    const positiivisia = Math.round(100 * (100 * hyva) / summa) / 100
    return (
        <div>
            <h3>Statistiikka</h3>
            <Statistic name="hyvä" value={hyva} />
            <Statistic name="neutraali" value={neutraali}/>
            <Statistic name="huono" value={huono}/>
            <Statistic name="keskiarvo" value={keskiarvo}/>
            <Statistic name="positiivisia" value={positiivisia} />
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
                    <Button handleClick={this.klikHyva} text="hyvä" />
                    <Button handleClick={this.klikNeutraali} text="neutraali" />
                    <Button handleClick={this.klikHuono} text="huono" />
                    <Statistics hyva={this.state.hyva}
                        neutraali={this.state.neutraali}
                        huono={this.state.huono} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

