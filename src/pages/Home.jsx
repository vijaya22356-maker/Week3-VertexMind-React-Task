import { useState } from "react";
import Card from "../components/Card";

function Home() {
    const [likes, setLikes] = useState(0);
  return (
    <div>
      <h1>Home Page</h1>

      <Card 
        title="React Development"
        description="Building modern React applications."
      />

      <Card 
        title="Frontend Design"
        description="Creating responsive user interfaces."
      />
      <button onClick={() => setLikes(likes + 1)}>
        Like {likes}
      </button>

    </div>
  );
}

export default Home;