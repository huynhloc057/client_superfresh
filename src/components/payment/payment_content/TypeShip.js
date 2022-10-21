import clsx from "clsx";

function TypeShip({ data }) {
  return (
    <li className={clsx("mt-1")}>
      <div className={clsx("flex", "items-center")}>
        <input
          className={clsx("w-4", "h-4", "mr-2")}
          id={`${data.index}-method`}
          type={"radio"}
        />
        <label
          className={clsx("h-8", "flex", "flex-col")}
          htmlFor={`${data.index}-method`}
        >
          <div className={clsx("flex", "items-center", "py-[0.125rem]")}>
            <img
              className="mr-1"
              src={data.src}
              alt=""
              width="48"
              heigth="14"
            />
            <span className={clsx("text-sm", "text-[#38383d]", "font-medium")}>
              {data.content}
            </span>
          </div>
          <span className={clsx("text-xs", "text-[#808089]")}>
            Có {data.quantity} sản phẩm hỗ trợ hình thức này
          </span>
        </label>
      </div>
    </li>
  );
}

export default TypeShip;
