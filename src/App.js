import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App-content">
      <div className="App">
        <Heading />
        <TouristInfoCards />
        <Bookings />
        <Footer
          info={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789"
          ]}
        />
      </div>
    </div>
  );
};

export default App;
