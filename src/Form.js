import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

const Form = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  // const [clicked, setClicked] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/tts")
      .then((response) => {
        setResponse(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onChange = (events) => {
    setText(events.target.value);
    // console.log(text);
  };

  const submitClicked = async (e) => {  
    // setClicked(true);
    // e.preventDefault();
    // console.log(text);

    try {
      const response = await fetch("http://localhost:3001/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        // console.log("Text sent successfully");
      } else {
        // console.error("Failed to send text");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <input type="text" placeholder="Enter the text" onChange={onChange} />
        <button type="submit" onClick={submitClicked}>
          Convert
        </button>
      </form>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="">Arabic</Dropdown.Item>
          <Dropdown.Item href="">Australian English</Dropdown.Item>
          <Dropdown.Item href="">Brazilian Portuguese</Dropdown.Item>
          <Dropdown.Item href="">British English</Dropdown.Item>
          <Dropdown.Item href="">Canadian French</Dropdown.Item>
          <Dropdown.Item href="">Castilian Spanish</Dropdown.Item>
          <Dropdown.Item href="">Chinese Mandarin</Dropdown.Item>
          <Dropdown.Item href="">Danish</Dropdown.Item>
          <Dropdown.Item href="">Dutch</Dropdown.Item>
          <Dropdown.Item href="">French</Dropdown.Item>
          <Dropdown.Item href="">German</Dropdown.Item>
          <Dropdown.Item href="">Icelandic</Dropdown.Item>
          <Dropdown.Item href="">Indian English</Dropdown.Item>
          <Dropdown.Item href="">Italian</Dropdown.Item>
          <Dropdown.Item href="">Japanese</Dropdown.Item>
          <Dropdown.Item href="">Korean</Dropdown.Item>
          <Dropdown.Item href="">Mexican</Dropdown.Item>
          <Dropdown.Item href="">Norwegian</Dropdown.Item>
          <Dropdown.Item href="">Polish</Dropdown.Item>
          <Dropdown.Item href="">French</Dropdown.Item>
          <Dropdown.Item href="">French</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      {response ? <audio src={response} controls></audio> : <p>loading</p>}
    </>
  );
};

export default Form;
