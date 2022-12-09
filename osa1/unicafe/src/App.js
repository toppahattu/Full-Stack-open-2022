import { useState } from 'react'

const Header = ({ header }) => <h1>{header}</h1>

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.name}
    </button>
  );
}

const Statistics = ({good,neutral,bad}) => {
  let total = good + neutral + bad;
  if (total === 0) {
    return (
      <p><strong>No feedback given</strong></p>
    );
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={(good-bad)/total} />
        <StatisticLine text="positive" value={(good/total)*100} />
      </tbody>
    </table>
  );
}

const StatisticLine = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td> 
        <td>{value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  );
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={"give feedback"} />
      <Button handleClick={() => setGood(good + 1)} name="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
      <Button handleClick={() => setBad(bad + 1)} name="bad" />
      <Header header={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App