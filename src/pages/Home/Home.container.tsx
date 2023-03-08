import HomeComponent from "./Home.component";
import storeItems from "../../data/items.json";
import { useState, useMemo } from "react";

export function HomeContainer() {
  const [items, setItems] = useState(storeItems);

  const containerProps = {
    items,
  };

  const memoContainerProps = useMemo(() => {
    return containerProps;
  }, [...Object.values(containerProps)]);

  return <HomeComponent {...memoContainerProps} />;
}

export default HomeContainer;
