import { useEffect } from "react";
import { Link } from "react-router-dom";
import { confirmMail, handleLogin } from "../services/api_user";

function ActionSuccessMessage(props) {
  const handleLoad = async () => {
    try {
      const resp = await handleLogin({
        email: props.email,
        password: props.password,
      });
      localStorage.setItem("userId", resp.data.user._id);
      localStorage.setItem(
        "emailToken",
        resp.data.user.email_confirmation_token
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div id="action-success-message-content">
      <section className="asm-section">
        <h1>{props.mainMessage}</h1>
        {props.secondaryMessages.map((message, index) => {
          return <h4 key={index}>{message}</h4>;
        })}
        <button className="asm-button h-10">{props.linkText}</button>
        <p>
          Ne prikazuje ti se mail?{" "}
          <span className="text-black hover:cursor-pointer text-[#E1BF57]">
            Ponovno pošalji
          </span>
        </p>
      </section>
    </div>
  );
}

export default ActionSuccessMessage;
