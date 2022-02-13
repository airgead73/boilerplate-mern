import useSecureFetch from '../hooks/useSecureFetch';
import { SERVER_URL } from '../constants';

function Goals() {

  const { data: goals, error, isPending } = useSecureFetch(`${SERVER_URL}/api/goals`);

  return (
    <div>
      <h2>Goals</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>goals loading...</div> }
      { goals && goals.map((goal) => (
        <p key={goal.id}>{goal.text}</p>
      ))}
      
    </div>
  )

}

export default Goals;