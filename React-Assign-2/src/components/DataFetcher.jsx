import { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 
  console.log("refreshed")

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher