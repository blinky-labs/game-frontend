// To be removed and made way for GameState object (TBC - Caius has a tool we can use)

import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Test",
        price: 200,
        shortdesc: "test",
      }
    ],
    cart: []
  },
  mutations: {

  }
});
