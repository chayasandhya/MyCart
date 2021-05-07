import React, { useEffect } from "react";
import { connect } from "react-redux";
// Action -----------------------------------------------------------------
import { clearAlert } from "../../store/action/LoginRegister";
// CSS -----------------------------------------------------------------
import "./Alert.css";

function Alert({ alertMsg, clearAlert }) {
  useEffect(() => {
    if (alertMsg != "") {
      setTimeout(() => {
        clearAlert();
      }, 3000);
    }
  }, [alertMsg]);

  return (
    <div
      className="alert_container"
      style={{ display: alertMsg != "" ? "block" : "none" }}
    >
      <div className="alert_contents">
        <h3>{alertMsg}</h3>
        <button className="alert_close" onClick={clearAlert}>
          X
        </button>
      </div>
    </div>
  );
}

const stateToProps = (state) => {
  return { alertMsg: state.LoginReducer.alertMsg };
};

export default connect(stateToProps, { clearAlert })(Alert);
