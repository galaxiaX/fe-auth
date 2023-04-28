import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Item, { ItemProps } from "../components/Item";
import { faker } from "@faker-js/faker";
import { getAuth } from "firebase/auth";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 1rem;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  background-color: #d3eefc;
  padding: 0.75rem;
  border-radius: 0.5rem;

  h2 {
    font-size: 1.5rem;
    color: #3182ce;
  }

  button {
    background-color: #ef4444;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #dc2626;
    }
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  gap: 1.5rem;
  align-items: center;
`;

const AddItemButton = styled.button`
  text-align: center;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 0.375rem;
  padding: 0.5rem;
  width: 12rem;
  margin-top: 2rem;

  &:hover {
    background-color: #2563eb;
  }
`;

const Dashboard: NextPage = () => {
  const [itemData, setItemData] = useState<ItemProps[]>([]);
  const userName: string = "Admin";
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  // Generate some fake items.
  useEffect(() => {
    const items: ItemProps[] = [];
    for (let i = 0; i < 3; i++) {
      items.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        seller: faker.name.fullName(),
      });
    }
    setItemData(items);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push("/");
    return <div>Please sign in to continue</div>;
  }

  const itemElements = itemData.map((item, index) => (
    <Item key={index} {...item} />
  ));

  return (
    <Wrapper>
      <Heading>
        <h2>Signed in as: {userName}</h2>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </Heading>
      <ItemsContainer>{itemElements}</ItemsContainer>
      <AddItemButton>Add Item</AddItemButton>
    </Wrapper>
  );
};

export default Dashboard;
