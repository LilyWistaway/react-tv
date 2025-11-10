import { useEffect, useState } from "react";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    setSelectedEpisode(null);
  }, [show]);

  if (!show) {
    return (
      <section className="show-details">
        <h2>Show Details</h2>
        <p>Select a show to browse episodes.</p>
      </section>
    );
  }

  return (
    <section className="show-details">
      <h2>{show.name}</h2>
      <p>{show.genre}</p>

      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </section>
  );
}
