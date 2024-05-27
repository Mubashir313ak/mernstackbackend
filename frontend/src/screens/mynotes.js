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
//o import MainScreen from "./MainScreen";
import { listNotes } from "../redux/actions/notesActions";
import { useDispatch, useSelector } from "react-redux";
// import ReactMarkdown from "react-markdown";

const MyNotes = () => {
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notesList);
  const { notes } = notesList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      window.location.href = "/";
    }
  }, [dispatch, userInfo]);
  return (
    <>
      <Link to="/create-note" style={{ textDecoration: "none" }}>
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
