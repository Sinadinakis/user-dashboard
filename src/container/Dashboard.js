import React, { useState } from "react";

// Components
import TableHeader from "../components/Table/TableHeader/TableHeader";
import Table from "../components/Table/Table";

import "./Dashboard.css";

const UserDashboard = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const handleButton = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <div className="container container--table">
      <TableHeader
        toggleButton={toggleButton}
        handleButton={() => handleButton}
      />
      <Table toggleButton={toggleButton} />
    </div>
  );
};

export default UserDashboard;
