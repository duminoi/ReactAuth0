import React, { useContext, useState } from "react";
import Form from "./Form";
import { useAuth0 } from "@auth0/auth0-react";
import { AppContext } from "./Context";

export default function Logout() {
  const [status, setStatus] = useState(false);
  const buttonStyle = {
    backgroundColor: status ? "#9e9e9e6b" : "#ff1493",
  };
  const handleClick = () => {
    setStatus(true);
  };
  const { logout, user } = useAuth0();
  return (
    <div className=" w-[500px] my-[50px] mx-auto p-[20px] border border-purple-500 border-solid rounded-[10px]">
      <div className="flex items-center justify-center flex-col border border-purple-500  border-solid p-[40px] rounded-[5px]">
        <div className="avatar">
          <img
            src={user?.picture}
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="user-info mt-[12px]">
          <h3 className="font-bold">
            Have a nice day {user.name ? user.name : user.nickname}!{" "}
          </h3>
          <span className="block mt-[12px] text-center"></span>
          {user?.email ? (
            <div className=" text-center mt-[12px]">
              <a
                href={`mailto:${user?.email}`}
                className="text-blue-700 underline"
              >
                Email:{user?.email}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <Form />
      </div>
      <button
        onClick={() => {
          logout();
          handleClick();
        }}
        style={buttonStyle}
        className="mt-[10px] w-full py-[10px] border-none rounded-[10px] bg-[#ff1493] text-white font-[500] text-[18px] cursor-pointer transition-transform linear duration-[0.2s] hover:scale-[90%] "
        value={"Send"}
        type="submit"
        disabled={status}
      >
        Logout
      </button>
    </div>
  );
}
