
import React from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ name, value }) => (
    <tr>
        <td>{name}</td><td>{value}</td>
    </tr>
)

const Statistics = ({ hyva, neutraali, huono }) => {
    const summa = hyva + neutraali + huono

    if (summa === 0) {
        return (
            <div>
                <h3>Statistiikka</h3>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    }
    const keskiarvo = Math.round(100 * (hyva - huono) / summa) / 100
    const positiivisia = Math.round(100 * (100 * hyva) / summa) / 100
    return (
        <div>
            <h3>Statistiikka</h3>
            <table>
                <tbody>
                    <Statistic name="hyvä" value={hyva} />
                    <Statistic name="neutraali" value={neutraali} />
                    <Statistic name="huono" value={huono} />
                    <Statistic name="keskiarvo" value={keskiarvo} />
                    <Statistic name="positiivisia" value={positiivisia + " %"} />
                </tbody>
            </table>
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

    klik = (name) => () => {
        this.setState({
            [name]: this.state[name] + 1
        })
    }


    render() {
        return (
            <div>
                <div>
                    <h3>Anna palautetta</h3>
                    <Button handleClick={this.klik('hyva')} text="hyvä" />
                    <Button handleClick={this.klik('neutraali')} text="neutraali" />
                    <Button handleClick={this.klik('huono')} text="huono" />
                    <Statistics hyva={this.state.hyva}
                        neutraali={this.state.neutraali}
                        huono={this.state.huono} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

