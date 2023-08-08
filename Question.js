// import React from "react";
import React, { useState } from "react";
import Footer from "./Footer";

const Headerf = (props) => {
  const [text, setText] = useState(props.title);
  const [textValue1, setTextValue1] = useState("head-hurts");
  const [editMode, setEditMode] = useState(false);
  //for drop down list
  const [selectedOption, setSelectedOption] = useState("");
  const [renderedElement, setRenderedElement] = useState(null); // Define the state variables
  const [renderedElement2, setRenderedElement2] = useState(null);
  //dropdown function
  const handleOptionChange = (event) => {
    const valueofselection = event.target.value;
    if (
      valueofselection === "option1" ||
      valueofselection === "option3" ||
      valueofselection === "option4"
    ) {
      setRenderedElement(<Footer title="Yes" />);
      setRenderedElement2(<Footer title="No" />);
    }

    setSelectedOption(valueofselection); // Update the selected option state
  };

  const [selectedOption2, setSelectedOption2] = useState("");
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  //edit function
  const EditClick = () => {
    setEditMode(true);
  };

  // Function to handle changes in the text area
  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  const handleChange = (event) => {
    setTextValue1(event.target.value);
  };

  // save function
  const SaveClick = () => {
    setEditMode(false);
  };

  // const handleInputChange2 = (event) => {
  //   setText2(event.target.value);
  // };

  return (
    <div>
      <hr />
      {editMode ? (
        <div>
          <textarea
            value={text}
            onChange={handleTextAreaChange}
            //disabled={!editMode}
          />
          <textarea value={textValue1} onChange={handleChange} />
          {/* for type choice  */}
          <div>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="option1">Answer Type</option>
              <option value="option2">Text</option>
              <option value="option3">Multi</option>
              <option value="option4">Choice</option>
            </select>
          </div>
          {/* for questions  */}
          <div>
            <select value={selectedOption2} onChange={handleOptionChange2}>
              <option value="">--choose noext question--</option>
              <option value="option1">Do you have any fever?</option>
              <option value="option2">Do you have temperature?</option>
              <option value="option3">Do you have fatigue?</option>
              <option value="option3">Describe your problem?</option>
            </select>
          </div>
          <button onClick={SaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <button onClick={EditClick}> Edit </button>
          <p>{text}</p>
        </div>
      )}
      <div>{renderedElement}</div>
      <div>{renderedElement2}</div>
    </div>
  );
};

export default Headerf;
