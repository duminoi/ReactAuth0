import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import { AppContext } from "./Context";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";
import Spinner from "./Spinner";
export default function Login() {
  const { loginWithRedirect } = useAuth0();
  const { loading, setLoading, setToast } = useContext(AppContext);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setToast("Vui lòng chờ");
      const res = await loginWithRedirect();
      console.log(res);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {}, [loading]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-customOrange w-[400px] flex items-center justify-center flex-col my-[200px] mx-auto text-white text-center p-[30px] rounded-[10px]">
          <h1 className="pb-[12px] text-3xl font-bold">Welcome to F8</h1>
          <span className="text-[18px] font-[500]">
            Thank you for using F8's services
          </span>
          <p className="mt-[16px] text-[22px]">
            If you have any questions or help, log in and ask here!
          </p>
          <button
            onClick={handleLogin}
            className="block bg-white border-none py-[15px] px-[30px] rounded-[6px] mt-[20px] text-[18px] font-[500] text-customOrange cursor-pointer transition-transform linear duration-[0.2s] hover:scale-90"
          >
            Login || Register
          </button>
        </div>
      )}
    </>
  );
}
