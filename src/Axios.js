import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [posts, setPosts] = useState([]);
  const [joke, setJoke] = useState({
    question: "",
    answer: "",
  });

  const handlePost = () => {
    // console.log("handle post data");

    axios
      .get("http://localhost:3002/posts")
      .then((response) => {
        // console.log(response?.data);
        setPosts(response?.data);
      })
      .catch((error) => {
        console.log(error.message);
        setPosts([]);
      });
  };

  const handleJoke = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        const {setup, punchline} = response?.data;
        setJoke({
          question: setup,
          answer: punchline,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    console.log("Hello welcome to useEffects");
    handleJoke();

    setTimeout(() => {
      //   handlePost();
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Welcome to Axios File</h2>
      <h5>
        Here we are going to fetch some of the data from API's using Axios......
      </h5>

      <h3>Total Count of Posts - {posts.length}</h3>
      <button className="btn btn-primary" onClick={handlePost}>
        Fetch Posts
      </button>

      <h3> Joke Question : {joke?.question}</h3>
      <h3> Faltuk Answer : {joke?.answer}</h3>
      <button className="btn btn-primary" onClick={handleJoke}>
        Next Joke
      </button>
    </div>
  );
};

export default Axios;
