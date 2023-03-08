import ProductCard from "../../components/ProductCard";
import { Flex } from "@chakra-ui/react";
type HomeComponentProps = {
  items: Array<StoreItems>;
};

type StoreItems = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function HomeComponent(props: HomeComponentProps) {
  const { items } = props;

  return (
    <Flex>
      {items.map((item) => (
        <ProductCard item={item} />
      ))}
    </Flex>
  );
}

export default HomeComponent;
