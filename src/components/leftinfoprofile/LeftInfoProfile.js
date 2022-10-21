import { useSelector } from "react-redux";

export default function LeftInfoProfile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="p-4 bg-white basis-3/5" style={{ height: "600px" }}>
      <div className="text-lg">Thông tin cá nhân</div>

      {/* Nickname-Name Section */}
      <div className="flex">
        <div className="flex-col">
          <img
            className="mx-auto my-4 h-28 w-28"
            style={{ borderRadius: "50%" }}
            src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"
            alt=""
          ></img>
          <button className="px-2 text-white bg-blue-500 border rounded-lg w-fit h-9">
            Thay đổi avatar
          </button>
        </div>
        <div className="flex-col mt-4 mb-4 basis-3/4 ">
          <div className="flex justify-between mt-1 ml-3">
            <label className="p-2">Họ &amp; tên</label>
            <input
              className="p-2 mr-3 border-2 rounded-md border-slate-200 focus:border-blue-300"
              type="text"
              name=""
              id="name"
              placeholder="Thêm họ tên"
              maxLength={128}
              value={user?.name}
            />
          </div>

          <div className="flex justify-between ml-3 mt-9">
            <label className="p-2">Nickname</label>
            <input
              className="p-2 mr-3 border-2 rounded-md border-slate-200 focus:border-blue-300"
              type="text"
              name=""
              id="nickname"
              placeholder="Thêm nickname"
              maxLength={128}
              value=""
            />
          </div>
        </div>
      </div>

      {/* Nation-Birth-Gender Section */}
      <div className="flex my-10">
        <label className="p-2">Ngày sinh</label>
        <select
          className="w-32 p-2 mx-3 border-2 rounded-md border-slate-200 focus:outline-blue-300"
          name="day"
          id=""
        >
          <option value="0">Ngày</option>
          <option value="1">1</option>
        </select>
        <select
          className="w-32 p-2 mx-3 border-2 rounded-md border-slate-200 focus:outline-blue-300"
          name="month"
          id=""
        >
          <option value="0">Tháng</option>
          <option value="1">1</option>
        </select>
        <select
          className="w-32 p-2 mx-3 border-2 rounded-md border-slate-200 focus:outline-blue-300"
          name="year"
          id=""
        >
          <option value="0">Năm</option>
          <option value="1">1</option>
        </select>
      </div>

      <div className="flex my-10">
        <div className="p-2 mr-3">Giới tính</div>
        <input className="ml-3" type="radio" value="Male" name="gender" />
        <label className="py-2 ml-3 mr-10" for="Male">
          Nam
        </label>
        <input className="ml-3" type="radio" value="Female" name="gender" />
        <label className="py-2 ml-3 mr-10" for="Female">
          Nữ
        </label>
        <input className="ml-3" type="radio" value="Other" name="gender" />
        <label className="py-2 ml-3 mr-10" for="Other">
          Khác
        </label>
      </div>

      <div className="flex my-10">
        <div className="p-2 mr-3">Quốc tịch</div>
        <select
          className="w-32 p-2 mr-3 border-2 rounded-md border-slate-200 w-80 focus:outline-blue-300"
          name="year"
          id=""
        >
          <option value="0">Chọn quốc tịch</option>
          <option value="1">Việt Nam</option>
        </select>
      </div>

      <div className="flex justify-center w-full">
        <button className="px-2 text-white bg-blue-500 border rounded-lg w-fit h-9">
          Lưu thay đổi
        </button>
      </div>
    </div>
  );
}
