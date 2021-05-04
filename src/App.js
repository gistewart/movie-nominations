import React from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("movies").get();
      setMovies(data.docs.map((doc) => doc.data()));
      console.log(movies);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.title}>
          {movie.title} {movie.year}
        </li>
      ))}
    </ul>
  );
}

export default App;
