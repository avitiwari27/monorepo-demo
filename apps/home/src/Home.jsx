import React, { useState } from "react";
import Details from "details/Details";

const Home = (props) => {
  const [viewDetails, setViewDetails] = useState(false);

  const onClick = () => {
    setViewDetails(!viewDetails);
  };
  return (
    <div>
      <div>
        This is the main section. Click the button bellow to view the details.
      </div>
      <button onClick={() => onClick()}>Details</button>
      {viewDetails && <Details />}
    </div>
  );
};

export default Home;
