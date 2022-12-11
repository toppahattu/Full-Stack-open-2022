const Header = ({name}) => <h2>{name}</h2>;

const Part = ({part}) => {
    return (
      <p>{part.name} {part.exercises}</p>
    );
}

const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => 
            <Part key={part.id} part={part} />
        )}
      </div>
    );
};

const Course = ({course}) => {
    const exercises = course.parts.map(part => part.exercises);
    const sum = exercises.reduce((total, curr) => {return total+curr}, 0);
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <strong>total of {sum} exercises</strong>
        </div>
    );
};

export default Course;