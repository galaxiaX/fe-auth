import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import type { NextPage } from "next";
import { initFirebase } from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import EmailForm from "@/components/EmailForm";
import styled from "styled-components";

const HomeWrapper = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const GoogleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;
  padding: 1rem 0;
  width: 20rem;
  background-color: #fff;
  border: 2px solid #cbd5e0;
  color: #4a5568;
  margin-bottom: 1rem;

  &:hover {
    border-color: #a0aec0;
    background-color: #f1f5f9;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const FacebookButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;
  padding: 1rem 0;
  width: 20rem;
  background-color: rgb(37, 99, 235);
  border: 2px solid rgb(37, 99, 235);
  color: #fff;
  margin-bottom: 1rem;

  &:hover {
    background-color: rgb(73, 125, 239);
    border-color: rgb(73, 125, 239);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const Separator = styled.div`
  margin-bottom: 1rem;
`;
const Loading = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
`;

const Home: NextPage = () => {
  const auth = getAuth();

  initFirebase();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (user) {
    router.push("/dashboard");
    return <Loading>Loading...</Loading>;
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        console.log(result.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        console.log(result.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (user) {
    router.push("/dashboard");
    return <Loading>Loading...</Loading>;
  }

  return (
    <HomeWrapper>
      <Title>Please sign in to continue</Title>
      <GoogleButton onClick={signInWithGoogle}>
        <FcGoogle size={24} />
        Continue with Google
      </GoogleButton>

      <FacebookButton onClick={signInWithFacebook}>
        <FaFacebook size={24} />
        Continue with Facebook
      </FacebookButton>

      <Separator>OR</Separator>

      <EmailForm />
    </HomeWrapper>
  );
};

export default Home;
