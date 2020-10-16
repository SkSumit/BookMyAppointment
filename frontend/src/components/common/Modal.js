import React from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";

const Modal = (props)=> {
 
  const history = useHistory();
  //  console.log(props.modalActive)
    return (
      <div>
        <div className={`${props.modalActive ? "is-active" : ""} modal  `}>
          <div className="modal-background"></div>
          <div className="modal-content box">
            <p className="subtitle">{props.text}</p>
            <div className="buttons">
              <button
                className="button is-danger"
                onClick={async () => {
                  await props.dispatch(
                    props.action(props._id, props.value)
                  );
                  await props.setModalToggle(false);
                  // props.redirect &&  history.push(props.redirectURL);
                 
                  toast[props.toastType](props.toastText, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              >
                {props.buttonText}
              </button>
              <button
                onClick={() => props.setModalToggle(false)}
                className="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <ToastContainer
          toastClassName="has-background-success"
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </div>
    
    );
   
}
export default connect()(Modal);
