import useFetch from '../hooks/useFetch';
import { URL_SERVER } from '../constants';

function Goals() {

  const { data: goals, error, isPending } = useFetch("http://localhost:6060/api/goals");

  

  return (
    <div>
      <h2>Goals</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>goals loading...</div> }      <div>
      
      { goals && goals.map((goal) => {
        <p key={goal.id}> goal text: {goal.text}</p>
      })}
      </div>

    </div>
  )

}

export default Goals;