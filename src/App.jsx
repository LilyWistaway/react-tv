import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";
import "./index.css";

/**
 * React TV is a web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={shows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>

      <main className="layout">
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
