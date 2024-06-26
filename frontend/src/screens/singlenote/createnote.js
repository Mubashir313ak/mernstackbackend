import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import MainScreen from "../../components/MainScreen";
import {
  Container,
  TextField,
  Button,
  CircularProgress,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { createNoteAction } from "../../redux/actions/notesActions";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, note } = noteCreate;

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(createNoteAction(title, content, category));
    resetHandler();
    navigate("/mynote"); // Use navigate for navigation
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Note">
      <Container maxWidth="md">
        <Card>
          <CardHeader title="Create a new Note" />
          <CardContent>
            <Box component="form" onSubmit={submitHandler} sx={{ mt: 2 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                rows={4}
                id="content"
                label="Content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                sx={{ mb: 2 }}
              />
              {content && (
                <Card sx={{ mb: 2 }}>
                  <CardHeader title="Note Preview" />
                  <CardContent>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </CardContent>
                </Card>
              )}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="category"
                label="Category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ mb: 2 }}
              />
              {loading && <CircularProgress size={50} />}
              <CardActions>
                <Button type="submit" variant="contained" color="primary">
                  Create Note
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={resetHandler}
                >
                  Reset Fields
                </Button>
              </CardActions>
            </Box>
          </CardContent>
          <Card
            sx={{ mt: 2, p: 2, textAlign: "center", color: "text.secondary" }}
          >
            <Typography variant="body2">
              Creating on - {new Date().toLocaleDateString()}
            </Typography>
          </Card>
        </Card>
      </Container>
    </MainScreen>
  );
}

export default CreateNote;
