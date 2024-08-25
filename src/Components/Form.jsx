import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useState } from "react";
import { AppContext } from "./Context";
import axios from "axios";

export default function Form() {
  const { user } = useAuth0();
  const { toastContent, setToast } = useContext(AppContext);
  const [errors, setErrors] = useState("");
  const [form, setForm] = useState({
    name: user?.name,
    email: user?.email,
    message: "",
  });
  console.log(user);

  const service_id = "service_tvuc3ow";
  const template_id = "template_0p42ymb";
  const public_key = "74wQpoDiUQWlfWlgQ";
  const handleChange = (e) => {
    if (e.target.name == "user_name") {
      setForm((preState) => {
        return { ...preState, name: e.target.value };
      });
    } else {
      if (e.target.name == "user_email") {
        setForm((preState) => {
          return { ...preState, email: e.target.value };
        });
      } else {
        if (e.target.name == "message") {
          setForm((preState) => {
            return { ...preState, message: e.target.value };
          });
        }
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("service_id", service_id);
    formData.append("template_id", template_id);
    formData.append("user_id", public_key);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      if (!form.message) {
        setErrors("Vui lòng nhập nội dung");
      } else {
        setErrors("");
        const res = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send-form",
          formData,
          {
            headers: "application/json",
          }
        );
        if (res.status <= 200 && res.status >= 300) {
          throw new Error();
        }
        setToast("Gửi Email thành công!!!");
      }
    } catch (e) {
      console.log(e);
      setToast("Gửi Email thất bại!!!");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="w-full mt-[30px]"
    >
      <div className="flex flex-col gap-x-2.5 mt-[10px]">
        <label className="text-purple-800 font-semibold " htmlFor="">
          Name
        </label>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          className="p-[10px] text-[16px] font-[500] placeholder:text-purple-700 border border-purple-800 border-solid rounded-[4px] text-purple "
          type="text"
          name="user_name"
          placeholder="Enter your name..."
          value={form.name}
        />
      </div>
      {/* end name */}
      {user.sub.includes("facebook") ? (
        ""
      ) : (
        <div className="flex flex-col gap-x-2.5 mt-[10px]">
          <label className="text-purple-800 font-semibold" htmlFor="">
            Email
          </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className="p-[10px] text-[16px] font-[500] placeholder-purple-700 border border-purple-800 border-solid rounded-[4px] text-purple "
            type="email"
            name="user_email"
            placeholder="Enter your email..."
            value={form.email}
          />
        </div>
      )}
      {/* end email */}
      <div className="flex flex-col gap-x-2.5 mt-[10px]">
        <label className="text-purple-800 font-semibold" htmlFor="">
          Message
        </label>
        <textarea
          onChange={(e) => {
            handleChange(e);
          }}
          className="p-[10px] text-[16px] font-[500] border border-purple-800 border-solid rounded-[4px] text-purple resize-none h-[150px]"
          name="message"
          placeholder="Enter your message..."
        />
        <span className="text-red-400 italic text-xl">{errors}</span>
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
