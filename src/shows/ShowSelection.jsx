import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  selectedShow,
  setSelectedShow,
}) {
  return (
    <nav className="shows">
      {/* no extra wrappers needed; CSS is looking for .show items */}
      {shows.map((show) => (
        <span
          key={show.name}
          className={`show ${
            selectedShow?.name === show.name ? "selected" : ""
          }`}
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </span>
      ))}
    </nav>
  );
}
