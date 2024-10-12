import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(
      "https://server-pbas-pia.onrender.com/api/users"
    );
    setData(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        {data.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </div>
    </>
  );
}

export default App;
