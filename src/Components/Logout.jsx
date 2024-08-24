import React from "react";
import Form from "./Form";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {
  const { isAuthenticated, logOut } = useAuth0();
  const user = "Nguyễn Đức Minh";
  const email = "dminso1koaiso2@gmail.com";
  return (
    isAuthenticated && (
      <div className=" w-[500px] my-[50px] mx-auto p-[20px] border border-purple-500 border-solid rounded-[10px]">
        <div className="flex items-center justify-center flex-col border border-purple-500  border-solid p-[40px] rounded-[5px]">
          <div className="avatar">
            <img
              src="https://fastly.picsum.photos/id/405/200/300.jpg?hmac=f-f0GKz4x3t4FLNM9cdniTfIv8KFbABBlSpzEkkoJ6g"
              alt=""
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
          <div className="user-info mt-[12px]">
            <h3 className="font-bold">Have a nice day {user}! </h3>
            <span className="block mt-[12px] text-center"></span>
            <div className=" text-center mt-[12px]">
              <a href={`mailto:${email}`} className="text-blue-700 underline">
                Email:{email}
              </a>
            </div>
          </div>
          <Form />
        </div>
        <button
          onClick={() => {
            logOut();
          }}
          className="mt-[10px] w-full py-[10px] border-none rounded-[10px] bg-[#ff1493] text-white font-[500] text-[18px] cursor-pointer transition-transform linear duration-[0.2s] hover:scale-[90%] "
          value={"Send"}
          type="submit"
        >
          Logout
        </button>
      </div>
    )
  );
}
