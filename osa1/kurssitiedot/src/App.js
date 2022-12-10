const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  );
}

const Content = (props) => {
  const parts = props.parts.map(part => 
    <Part key={part.name} part={part} />
  );
  return (
    <div>
      {parts}
    </div>
  );
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  );
}

const Total = (props) => {
  let exercises = props.parts.map(part => part.exercises);
  let sum = exercises.reduce((total, curr) => {return total+curr}, 0);
  return (
    <p>Number of exercises {sum}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }  

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App