import styles from "./postcard.modules.css";
import { useDispatch, useSelector } from "react-redux";
import dot from "../../Assets/dot.png";
import person from "../../Assets/me.png";
import comment from "../../Assets/comment.png";
import save from "../../Assets/save.png";
import messages from "../../Assets/messages.png";
import notification from "../../Assets/notification.png";
import { useState,useEffect } from "react";
import { fetchPosts } from "../../Redux/Slices/post";
import { addComment } from "../../Redux/Slices/comment";

export const PostCard = () => {
  const posts = useSelector((state) => state.posts.data);
   const comments = useSelector((state) => state.comment.data);
  const [newComment, setNewComment] = useState("");
   const [likes, setLikes] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

 const handleAddComment = (postId) => {
   if (newComment.trim() !== "") {
     // Dispatch an action to add a comment to the post
     dispatch(addComment({ postId, comment: { text: newComment } }));
     // Clear the input field after adding the comment
     setNewComment("");
   }
 };

  const handleToggleLike = (postId) => {
    // Update local state for likes
    if (likes.includes(postId)) {
      setLikes(likes.filter((id) => id !== postId));
    } else {
      setLikes([...likes, postId]);
    }
  };

  return (
    <>
      {posts?.map((post) => (
        <div className="postContainer" style={{ width: "70%", margin: "auto" }}>
          <div className="postRow">
            <div className="commonRow">
              <div className="postProfile"></div>
              <div>
                <div>
                  <span className="postName">User</span>
                  <span className="postDay">. 1d</span>
                </div>
                <span className="PostDesc">Beast Inside Beats • Vibes</span>
              </div>
            </div>
            <img src={dot} height="20px" />
          </div>
          <div>
            <div className="image">
              <img
                src={post.image}
                height="400px"
                style={{ padding: "20px 0px 20px 100px" }}
              />
            </div>
            <div className="postRow">
              <div className="activity">
                <img
                  src={notification}
                  height="30px"
                  onClick={() => handleToggleLike(post.id)}
                />
                <img src={comment} height="37px" />
                <img src={messages} height="25px" />
              </div>
              <img src={save} height="30px" />
            </div>
            <div className="commonRow">
              <div className="liked">
                <div className="likedProfile"></div>
                <div className="likedProfile1"></div>
              </div>
              <span className="likeCount">
                {likes.filter((id) => id === post.id).length} likes
              </span>
            </div>
            <div>
              <div>
                <span className="postName">User</span>
                <span className="postDay"> Hiccups ...more</span>
              </div>
              <div>
                {comments
                  .find((comment) => comment.postId === post.id)
                  ?.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="comment"
                      style={{ padding: "5px 0px 0px", color: "#D0d0d0d0" }}
                    >
                      {comment.text}
                    </div>
                  ))}
                <div className="postRow">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    style={{ marginTop: "5px", border: "0px" }}
                  />
                  <button
                    onClick={() => handleAddComment(post.id)}
                    style={{
                      border: "0px",
                      backgroundColor: "transparent",
                    }}
                  >
                    Add Comment
                  </button>
                </div>
                <div className="commentBorder"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
