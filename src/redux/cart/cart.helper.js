export const addItemsToCart = (newItem, items) => {
  const foundedItem = items.find((item) => item.id === newItem.id);
  if (foundedItem) {
    return items.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...newItem, quantity: 1 }];
};

export const removeItemsToCart = (newItem, items) => {
  const foundedItem = items.find((item) => item.id === newItem.id);
  if (foundedItem) {
    if (foundedItem.quantity === 1) {
      return items.filter((curItem) => curItem.id !== newItem.id);
    }
    return items.map((curItem) =>
      curItem.id === newItem.id
        ? { ...curItem, quantity: curItem.quantity - 1 }
        : curItem
    );
  }
};
