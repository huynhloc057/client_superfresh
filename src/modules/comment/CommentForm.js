import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea h-[80px] mb-2 mt-2 border-[1px] border-solid border-[#ccc] py-[10px] px-[10px] rounded-[12px] w-full outline-none leading-5 resize-none overflow-hidden focus:border-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="comment-form-button text-4 py-2 px-4 bg-[#0b74e5] rounded-[8px] text-white enabled:hover:cursor-pointer enabled:hover:bg-[#0b74e5] disabled:hover:opacity-[0.7] cursor-default"
        disabled={isTextareaDisabled}
      >
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button text-4 py-2 px-4 bg-[#0b74e5] rounded-[8px] text-white enabled:hover:cursor-pointer enabled:hover:bg-[#0b74e5] disabled:hover:opacity-[0.7] cursor-default comment-form-cancel-button ml-[10px]"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
