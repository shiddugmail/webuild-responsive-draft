import React from "react";
import "./Group86.css";

function Group86(props) {
  const { group85 } = props;

  return (
    <div className="group-86">
      <div className="white">
        <img
          className="vector"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg"
        />
      </div>
      <img className="group-85" src={group85} />
    </div>
  );
}

export default Group86;
