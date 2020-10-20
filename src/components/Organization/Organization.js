import React from "react";
import { withRouter } from "react-router";

import { tableHeaders } from "../Table/TableColumns/TableColumns";

// Components
import Card from "../UI/Card/Card";
const Organization = ({ match, location }) => {
  console.log(location);
  return (
    <Card>
      <h1>Organization Id: {match.params?.id}</h1>
      <div
        style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
      >
        <p>{`${tableHeaders[0]} : ${location.state.name}`}</p>
        <p>{`${tableHeaders[1]} : ${location.state.share_value}`}</p>
        <p>{`${tableHeaders[2]} : ${location.state.shareholders.length}`}</p>
        <hr />
        <p>
          email:{" "}
          <a href={`mailto:${location.state.email}`}>{location.state.email}</a>
        </p>
        <p>{`Registered city : ${location.state.registered_city}`}</p>
      </div>
    </Card>
  );
};

export default withRouter(Organization);
