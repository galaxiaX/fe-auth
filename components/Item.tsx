import styled from "styled-components";

export interface ItemProps {
  name: string;
  price: string;
  seller: string;
}

const ItemWrapper = styled.div`
  width: 100%;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.div`
  font-weight: bold;
  text-align: left;
`;

const ItemPrice = styled.div`
  color: #059669;
`;

const ItemSeller = styled.div`
  color: #6b7280;
`;

const Item: React.FC<ItemProps> = (props) => {
  return (
    <ItemWrapper>
      <ItemInfo>
        <div>
          <ItemName>{props.name}</ItemName>
          <div>
            <ItemPrice>${props.price}</ItemPrice>
            <ItemSeller>by {props.seller}</ItemSeller>
          </div>
        </div>
      </ItemInfo>
    </ItemWrapper>
  );
};

export default Item;
