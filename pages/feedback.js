import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { URL } from "../config";

const feedBack = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = (data) => {
    console.log(data);
    // fetch(URL + `/feedback`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: "Post Feedback" }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => setLikeCount(data.liked));
  };

  return (
    <div
      className={`d-flex justify-content-center ${styles.feedback}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <form className="d-block g-3 ">
        <div className="col-12 mb-4">
          <label className="form-label">Name</label>
          <input
            {...register("name", {
              required: true,
              minLength: 1,
            })}
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
            className={`form-control ${errors.message ? `is-invalid` : ""}`}
          />
          {errors.message && (
            <div className="invalid-feedback">Please Enter Your Message!</div>
          )}
        </div>

        <button className="btn btn-primary mt-4" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default feedBack;
