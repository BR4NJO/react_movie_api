import { useState, useEffect } from "react";

const Comments = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/comments?movieId=${movieId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
    }, [movieId]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const commentData = {
      movieId,
      text: newComment,
    };

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, data]);
        setNewComment("");
      });
  };

  return (
    <div className="comments">
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Ajoutez un commentaire sur ce film..."
      />
      <button onClick={handleAddComment}>Envoyer</button>
    </div>
  );
};

export default Comments;
