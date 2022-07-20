import styles from "../styles/Home.module.css";

const feedBack = () => {
  return (
    <div className={`d-flex justify-content-center ${styles.feedback}`}>
      <form className="d-block g-3 ">
        <div className="col-12 mb-4">
          <label for="validationDefault01" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div className="col-12 mb-4">
          <label for="validationDefaultUsername" className="form-label">
            Username
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="email"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="col-12 mb-4">
          <label for="validationDefault02" className="form-label">
            Message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default feedBack;
