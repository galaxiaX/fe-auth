import { useState } from "react";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 20rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  background-color: #f7fafc;
  border-color: #e2e8f0;
  border-radius: 0.25rem;
  color: #4a5568;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  width: 15rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #cbd5e0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    background-color: #edf2f7;
    border-color: #e2e8f0;
    border-radius: 0.25rem;
    color: #4a5568;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    width: 15rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #e2e8f0;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const Error = styled.p`
  color: red;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const ToggleFormButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: #4a5568;
  font-size: 0.875rem;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: #256eed;
  }
`;

const EmailForm = ({}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (isSignUp) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(result.user);
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log(result.user);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleFormSubmit}>
        <InputWrapper>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </InputWrapper>
        <ButtonWrapper>
          <button type="submit">
            <FiMail />
            {isSignUp ? "Sign up with Email" : "Sign in with Email"}
          </button>
        </ButtonWrapper>
        {error && <Error>{error}</Error>}
        <ToggleFormButton onClick={toggleForm}>
          {isSignUp
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign up"}
        </ToggleFormButton>
      </Form>
    </FormWrapper>
  );
};

export default EmailForm;
