import { useForm } from "react-hook-form";
import { URL } from "../config";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

const feedBack = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    fetch(`${URL}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async () => {
        NotificationManager.success(
          "Thank You! Feedback sent Successfully.",
          "Success",
          2000
        );
      })
      .catch(() => {
        NotificationManager.error("Message Didn't Send!", "Error", 3000);
      });
  };

  return (
    <>
      <div
        className={`container d-flex justify-content-center `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <form className="d-block my-5 col-lg-3 ">
          <div className="col-12  mb-4">
            <label className="form-label">Name</label>
            <input
              {...register("name", {
                required: true,
                minLength: 1,
              })}
              placeholder="Name"
              type="text"
              className={`form-control ${errors.name ? `is-invalid` : ""}`}
            />
            {errors.name && (
              <div className="invalid-feedback">Please Enter Your Name</div>
            )}
          </div>

          <div className="col-12 mb-4">
            <label className="form-label">E-mail</label>
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
              })}
              type="email"
              placeholder="email@example.com"
              className={`form-control ${errors.email ? `is-invalid` : ""} `}
            />
            {errors.email && (
              <div className="invalid-feedback">Please Enter Valid Email</div>
            )}
          </div>

          <div className="col-12 mb-4">
            <label className="form-label">Message</label>
            <textarea
              {...register("message", {
                required: true,
                minLength: 1,
              })}
              type="text"
              placeholder="Type Your Message..."
              className={`form-control ${errors.message ? `is-invalid` : ""}`}
            />
            {errors.message && (
              <div className="invalid-feedback">Please Enter Your Message!</div>
            )}
          </div>

          <button className="btn btn-primary mt-4 w-100" type="submit">
            Send
          </button>
        </form>
      </div>
      <NotificationContainer />
    </>
  );
};

export default feedBack;
