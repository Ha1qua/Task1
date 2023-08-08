// import React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
const Footer = (props) => {
  // const {  prop2, prop3 } = props;

  const [text, setText] = useState(props.title);
  const [editMode, setEditMode] = useState(false);
  //edit function
  const EditClick = () => {
    setEditMode(true);
  };

  // Function to handle changes in the text area
  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  // save function
  const SaveClick = () => {
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <button onClick={SaveClick}>Save</button>
          <textarea
            value={text}
            onChange={handleTextAreaChange}
            // disabled={!editMode}
          />
        </div>
      ) : (
        <div>
          <p>
            <button onClick={EditClick}>Edit</button>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
