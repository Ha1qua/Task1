import logo from "./logo.svg";
import "./App.css";
import Formschema from "./Task/Formschema";
import Footer from "./Task/Footer";
import Question from "./Task/Question";
import React, { useState } from "react";

function App() {
  const form_schema = {
    diagnosticquestion_set: [
      {
        id: 258,
        answer_to_question: [
          {
            id: 278,
            text: "YES",
            next_question: null,
          },
          {
            id: 279,
            short_name: "n",
            text: "NO",
            next_question: null, // refers to the ID of question 3.
          },
        ],
        short_name: "head-hurts",
        text: "Does your head hurt?",
        custom_answer_placeholder: "placeholder here",
        custom_answer_type: "choice",
        diagnostic_form: 44,
        clinic: 1,
        next_question: null,
      }, //0th index of key
      {
        id: 259,
        answer_to_question: [],
        short_name: "head-hurts",
        text: "Do you have any fever?",
        custom_answer_placeholder: "placeholder here",
        custom_answer_type: "text",
        diagnostic_form: 44,
        clinic: 1,
        next_question: null,
      },

      {
        id: 260,
        answer_to_question: [
          {
            id: 278,
            text: "YES",
            next_question: null,
          },
          {
            id: 279,
            short_name: "n",
            text: "NO",
            next_question: null,
          },
        ],
        short_name: "head-hurts",
        text: "Do you have temperature?",
        custom_answer_placeholder: null,
        custom_answer_type: "multi",
        next_question: null,
      },
      {
        id: 261,
        answer_to_question: [],
        short_name: "head-hurts",
        text: "Do you have fatigue?",
        custom_answer_placeholder: null,
        custom_answer_type: "text",
        next_question: null,
      },
      {
        id: 262,
        answer_to_question: [],
        short_name: "head-hurts",
        text: "Describe your problem?",
        custom_answer_placeholder: null,
        custom_answer_type: "text",
        next_question: null,
      },
    ], //1st key end
  }; //end of object

  const firstQuestion = form_schema.diagnosticquestion_set[0];

  return (
    <>
      <h3>Form Editor</h3>
      <div>
        {form_schema.diagnosticquestion_set.map((question) => (
          <Question title={question.text} />
        ))}
      </div>
    </>
  );
}

export default App;
