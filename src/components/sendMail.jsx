import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const SENDMAIL = gql`
  mutation SendRecovery($admin: SendRecovery) {
    sendRecovery(admin: $admin)
  }
`;

const sendEmail = () => {
  try {
    const [Email, setEmail] = useState("");
    const [sendRecovery] = useMutation(SENDMAIL);

    const handleSubmit = (e) => {
      e.preventDefault();
      sendRecovery({ variables: { admin: { Email: Email } } });
      setEmail("");
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="s-75 m-50 lg-40 s-to-left m-to-center">
            Reset Your Password
          </h1>
          <p className="s-75 m-50 lg-40 s-to-left m-to-center">
            To reset your password, enter your email below and submit. <br />
            An email will be sent to you with instructions about how to <br />
            complete the process.{" "}
          </p>

          <div className="s-75 m-50 lg-40 s-to-left m-to-center">
            <b>Email Address</b>
            <input
              type={"email"}
              placeholder="write your email"
              value={Email}
              name="userEmail"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <br></br>
            <button className="button big">Reset Password</button>
          </div>
        </form>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
export default sendEmail;
