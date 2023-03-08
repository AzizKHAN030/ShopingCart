import ProductCardComponent from "./ProductCard.component";
import { useMemo } from "react";

type ProductCardProps = {
  item: ProductCardItem;
};

export type ProductCardItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function ProductCardContainer(props: ProductCardProps) {
  const {
    item: { id, name, price, imgUrl },
  } = props;

  const containerProps = {
    id,
    name,
    price,
    imgUrl,
  };

  const memoContainerProps = useMemo(() => {
    return containerProps;
  }, [...Object.values(containerProps)]);

  return <ProductCardComponent {...memoContainerProps} />;
}

export default ProductCardContainer;
