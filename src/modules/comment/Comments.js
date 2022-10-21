import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./api";
import { useSelector, useDispatch } from "react-redux";
import {
  createComment,
  getCommentsById,
  getCommentsByProduct,
  updateComment,
  deleteComment,
} from "../../app/features/commentSlice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Comments = ({ currentUserId }) => {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.auth);
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const { comments } = useSelector((state) => state.comment);

  // console.log(productDetail)
  const rootComments = Array.isArray(backendComments)
    ? backendComments?.filter(
        (backendComment) => backendComment.parentId === null
      )
    : [];
  const getReplies = (commentId) =>
    backendComments
      ?.filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addCmt = (text, parentId) => {
    createCommentApi(
      text,
      parentId,
      productDetail._id,
      userInfo.user._id,
      userInfo.user.name,
      userInfo.user.profilePicture
    ).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      dispatch(createComment({ comment, toast }));
      setActiveComment(null);
      console.log(comment);
    });
  };

  const updateCmt = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments?.map((backendComment) => {
        if (backendComment._id === commentId) {
          const updatedCommentData = { ...backendComment, body: text };
          console.log(updatedCommentData);
          const cmtId = updatedCommentData.id;
          dispatch(getCommentsById(cmtId));
          dispatch(updateComment({ commentId, updatedCommentData, toast }));
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  const deleteCmt = (commentId) => {
    Swal.fire({
      title: "",
      text: "Are you sure you want to remove comment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCommentApi().then(() => {
          const updatedBackendComments = backendComments.filter(
            (backendComment) => backendComment.id !== commentId
          );
          const cmtId = commentId;
          console.log(cmtId);
          dispatch(deleteComment({ cmtId, toast }));
          setBackendComments(updatedBackendComments);
        });
        Swal.fire("Deleted!", "Your comment has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    dispatch(getCommentsByProduct(productDetail[0]?.id));
  }, [backendComments]);

  useEffect(() => {
    setBackendComments(comments);
  }, [comments]);

  return (
    <div className="flex w-full bg-white">
      <div className="comments flex flex-col w-full pt-6 pb-8 px-6 mt-1 mb-6 overflow-hidden mx-44 bg-white rounded">
        <h3 className="comments-title text-[20px] mb-2">
          Đánh Giá - Nhận Xét Từ Khách Hàng
        </h3>
        {/* <div className="comment-form-title text-[22px]">Write comment</div> */}
        <CommentForm submitLabel="Write" handleSubmit={addCmt} />
        <div className="comments-container mt-4">
          {rootComments?.map((rootComment) => (
            <div className="border-b-[1px] border-dashed border-[#dcdcdc]" key={rootComment._id}>
              <Comment
                comment={rootComment}
                replies={getReplies(rootComment._id)}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addCmt}
                deleteComment={deleteCmt}
                updateComment={updateCmt}
                currentUserId={currentUserId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
