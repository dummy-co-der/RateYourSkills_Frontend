import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Question() {
  const [question, setQuestion] = useState([]);
  const fetchQuestion = async () => {
    const { ques } = await axios.get("http://localhost:5000/question/");
    setQuestion(ques);
    console.log(question);
  };

  useEffect(() => {
    fetchQuestion();
  });

  return (
    <>
      <div>Rate Your Skills</div>
    </>
  );
}
