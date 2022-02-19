import useFetch from '../hooks/useFetch';
import { URL_SERVER } from '../constants';

export default function Goals() {
  
  const { data: goals, isPending, error } = useFetch(`${URL_SERVER}/api/goals`);

  return (
    <div>
      <h2>goals</h2>
      {isPending && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {goals &&
          goals.map(({ _id, text }) => (
            <li key={_id}>
              <h3>{text}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}