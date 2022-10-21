import React from "react";

const DeleteItem = ({onRemove, item}) => {
  return (
    <div className="w-[50px] text-right box-border list-none">
      <button
        className="product-delete inline-block cursor-pointer relative box-border text-right list-none"
        type="button"
        onClick={() => onRemove(item.id)}
      >
        <img
          className="w-[17px] h-[17px] max-w-full border-none box-border cursor-pointer"
          src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
          alt="deleted"
        />
      </button>
    </div>
  );
};

export default DeleteItem;
