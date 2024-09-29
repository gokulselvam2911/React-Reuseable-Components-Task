// SignUp.jsx
import PropTypes from "prop-types";
import './SignUp.css';

const SignUp = ({ heading, className }) => {
  return (
    <div className={`lead-section ${className}`}>
      <h1>{heading}</h1>
      <form className="lead-form form-control-lg">
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          required
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string, 
};

export default SignUp;
