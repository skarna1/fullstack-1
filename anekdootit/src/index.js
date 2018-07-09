import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ anecdotes, selected, votes }) => (
    <div>
        {anecdotes[selected]}
        <p>has {votes[selected]} votes</p>
    </div>
)

const MaxVotes = ({ anecdotes, votes }) => {
    const maxvalue = votes.reduce((max, p) => p > max ? p : max, 0);
    const maxitem = votes.indexOf(maxvalue)
    return (
        <div>
            <h3>anecdote with most votes:</h3>
            <Anecdote anecdotes={anecdotes} selected={maxitem}
                votes={votes} />
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: this.props.anecdotes.map(x => 0)
        }
    }

    next = () => {
        const number = Math.floor(Math.random() * anecdotes.length);
        this.setState({ selected: number })
    }

    vote = () => {
        const votes_copy = [...this.state.votes]
        votes_copy[this.state.selected] += 1
        this.setState({ votes: votes_copy })
    }

    render() {
        return (
            <div>
                <Anecdote anecdotes={this.props.anecdotes}
                    selected={this.state.selected}
                    votes={this.state.votes} />
                <div>
                    <button onClick={this.vote}>vote</button>
                    <button onClick={this.next}>next anecdote</button>
                </div>
                <MaxVotes anecdotes={this.props.anecdotes}
                    votes={this.state.votes} />
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)