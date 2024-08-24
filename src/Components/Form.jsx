import React from "react";

export default function Form() {
  const email = "dminso1koaiso2@gmail.com";
  return (
    <form className="w-full mt-[30px]">
      <div className="flex flex-col gap-x-2.5 mt-[10px]">
        <label className="text-purple-800 font-semibold " htmlFor="">
          Name
        </label>
        <input
          className="p-[10px] text-[16px] font-[500] placeholder:text-purple-700 border border-purple-800 border-solid rounded-[4px] text-purple "
          type="text"
          name="user_name"
          placeholder="Enter your name..."
          value={"43.Nguyễn Đức Minh"}
        />
      </div>
      {/* end name */}
      <div className="flex flex-col gap-x-2.5 mt-[10px]">
        <label className="text-purple-800 font-semibold" htmlFor="">
          Email
        </label>
        <input
          className="p-[10px] text-[16px] font-[500] placeholder-purple-700 border border-purple-800 border-solid rounded-[4px] text-purple "
          type="email"
          name="user_email"
          placeholder="Enter your email..."
          value={email}
        />
      </div>
      {/* end email */}
      <div className="flex flex-col gap-x-2.5 mt-[10px]">
        <label className="text-purple-800 font-semibold" htmlFor="">
          Message
        </label>
        <textarea
          className="p-[10px] text-[16px] font-[500] border border-purple-800 border-solid rounded-[4px] text-purple resize-none h-[150px]"
          name="message"
          placeholder="Enter your message..."
        />
      </div>
      {/* end message */}
      <input
        type="submit"
        className="mt-[10px] w-full py-[10px] border-none rounded-[10px] bg-purple-800 text-white font-[500] text-[18px] cursor-pointer transition-transform linear duration-[0.2s] hover:scale-[90%] "
        value={"Send"}
      />
    </form>
  );
}
