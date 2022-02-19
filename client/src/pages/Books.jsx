import useFetch from '../hooks/useFetch';
import { URL_SERVER } from '../constants';

export default function Books() {
  
  const { data: books, isPending, error } = useFetch(`${URL_SERVER}/api/books`);

  return (
    <div>
      <h2>goals</h2>
      {isPending && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {books &&
          books.map(({ _id, title, author }) => (
            <li key={_id}>{title} <small>{author}</small></li>
          ))}
      </ul>
    </div>
  );
}