import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import {
  Button,
  TextField,
  Typography,
  CircularProgress,
  Box,
  Container,
  Card,
  CardContent,
  CardHeader,
  CardActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import {
  deleteNoteAction,
  updateNoteAction,
} from "../../redux/actions/notesActions";
import ErrorMessage from "../../components/error";
function SingleNote() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
      navigate("/mynote");
    }
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(updateNoteAction(id, title, content, category));
    resetHandler();
    navigate("/mynote");
  };

  return (
    <MainScreen title="Edit Note">
      <Container maxWidth="md">
        <Card>
          <CardHeader title="Edit your Note" />
          <CardContent>
            {loadingDelete && <CircularProgress />}
            {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage severity="error">{errorDelete}</ErrorMessage>
            )}
            <Box component="form" onSubmit={updateHandler} sx={{ mt: 2 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
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
                  Update Note
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteHandler(id)}
                >
                  Delete Note
                </Button>
              </CardActions>
            </Box>
          </CardContent>
          <Card
            sx={{ mt: 2, p: 2, textAlign: "center", color: "text.secondary" }}
          >
            <Typography variant="body2">
              Updated on - {date.substring(0, 10)}
            </Typography>
          </Card>
        </Card>
      </Container>
    </MainScreen>
  );
}

export default SingleNote;
