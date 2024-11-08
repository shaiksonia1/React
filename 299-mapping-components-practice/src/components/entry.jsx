import React from "react";

function Entry(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={props.label || "Emoji"}>
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.description}</dd>
      </div>
    </dl>
  );
}

export default Entry;
