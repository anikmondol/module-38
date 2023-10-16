
import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singers from './Singers';
import BookStore from './BookStore';

function App() {

  const actors = ["Sakib", 'Raj', 'Jasim', 'Ruble']

  const singers = [
    {id: 1, name: 'anik', age: 22},
    {id: 2, name: 'apu', age: 28},
    {id: 3, name: 'joy', age: 32}
  ]


  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 110},
    {id: 4, name: 'Biology', price: 150}
  ]


  return (
    <>
      <h2>Vite + React</h2>
      <BookStore books={books}></BookStore>

      {/* {
        singers.map((singer,id) => <Singers key={id} singer={singer}></Singers>)
      }


     <Actor name={"Bappa Ray"}></Actor>
     {
      actors.map((actor,idx) => <Actor key={idx} actor={actor}></Actor>)
     } */}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name='Laptop' price='41'></Device>
      <Device name='Mobile' price='11'></Device>
      <Device name='watch' price='71'></Device>
      <Person></Person>
      <Student grade='4' score='99'></Student>
      <Student grade={8} score='85'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props);
  return (
    <div className='Device'>
      <h2>This device: {props.name}</h2>
      <h2>price: {props.price}</h2>
    </div>
  )
}



function Person() {
  const age = 25;
  const person = { name: 'anik', age: 22 }
  return <h3>i {person.name} a person: {age}</h3>
}

function Student({grade = 1, score = 0}) {
  // console.log(props);
  return (
    <div className='Student'>
      <h2>This is a student</h2>
      <h4>Class: {grade}</h4>
      <p>Score: {score}</p>
    </div>
  )
}


function Developer() {
  const style = {
    border: '2px solid blue',
    padding: '20px',
    margin: '20px',
    borderRadius: '15px',
  }
  return (
    <div style={style}>
      <h4>Devo Devo</h4>
      <p>Coding: </p>
    </div>
  )
}

export default App
