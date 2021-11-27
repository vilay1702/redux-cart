const initialState = { total: 0, cart: [] };

export const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      try {
        if (payload["count"] >= 1) {
          payload["count"] += 1;
          return { total: state.total + 1, cart: state.cart };
        } else {
          payload["count"] = 1;
          return { total: state.total + 1, cart: [...state.cart, payload] };
        }
      } catch {}
      return state;

    // case "REMOVE_FROM_CART":
    //   // let itemIndex = state.indexOf(payload);
    //   const newCart = state.cart.filter((item) => {
    //     if (item.id === payload) {
    //       if (item.count > 1) {
    //         item.count -= 1;
    //         return item;
    //       }
    //       return;
    //     }
    //     return item;
    //   });
    //   return { total: state.total - 1, cart: newCart };

    default:
      return state;
  }
};
