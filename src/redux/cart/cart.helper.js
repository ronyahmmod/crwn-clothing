export const cartHelper = (newItem, items) => {
  const foundedItem = items.find((item) => item.id === newItem.id);
  if (foundedItem) {
    return items.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...newItem, quantity: 1 }];
};
