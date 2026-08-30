import loadingGif from "../assets/loading.gif";
import "../styles/loading.css";

export default function Loading() {
  return (
    <>
      <img
        src={loadingGif}
        height={100}
        width={100}
        alt="Loading"
        className="loading-bike"
      />
      <span className="loading-text">Loading</span>
    </>
  );
}
