import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
export const TourContext = React.createContext();
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    console.log(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <TourContext.Provider value={{ removeTour }}>
      <main>
        <div className="title">
          {tours.length >= 1 ? (
            <div>
              <h2>Our Tours</h2>
              <div className="underline"></div>
            </div>
          ) : (
            <div>
              <h2>No Tours Left</h2>
              <button className="btn" onClick={fetchTours}>
                Refresh
              </button>
            </div>
          )}
        </div>
        <Tours tours={tours} />
      </main>
    </TourContext.Provider>
  );
}

export default App;
