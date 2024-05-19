import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
//o import MainScreen from "./MainScreen";
import notes from "../components/data/notes";
// import ReactMarkdown from "react-markdown";

const MyNotes = () => {
  const [mynotes, setmynotes] = useState([]);
  const fetchNotes = async () => {
    try {
      const response = await axios.get("/api/notes");
      setmynotes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <>
      <Link to="/createnote" style={{ textDecoration: "none" }}>
        <Button
          style={{ marginLeft: 10, marginBottom: 6 }}
          variant="contained"
          color="primary"
          size="large"
        >
          Create new Note
        </Button>
      </Link>

      {notes?.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <AccordionSummary>
              <Typography variant="h6">{note.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" gutterBottom>
                <Badge variant="success">Category - {note.category}</Badge>
              </Typography>
              {/* <Typography variant="body2">
                <ReactMarkdown>{note.content}</ReactMarkdown>
              </Typography> */}
              <Typography variant="body2">
                Created on {note.createdAt}
              </Typography>
              <div>
                <Button
                  href={`/note/${note._id}`}
                  variant="outlined"
                  color="primary"
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  // onClick={() => deleteHandler(note._id)}
                  style={{ marginLeft: 10 }}
                >
                  Delete
                </Button>
              </div>
            </AccordionDetails>
          </Card>
        </Accordion>
      ))}
    </>
  );
};

export default MyNotes;
