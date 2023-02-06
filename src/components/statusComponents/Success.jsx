import React from "react";
import "./Success.css";
import SuccessLogo from "../../assets/img/SuccessLogo.svg.png";

const Success = ({ count }) => {
  return (
    <div className="SuccessBloc">
      <img className="SuccessImg" src={SuccessLogo} alt="" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="BackButton">
        Назад
      </button>
    </div>
  );
};

export default Success;
