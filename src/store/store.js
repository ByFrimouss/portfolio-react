// ============================================================
// store.js
// Configuration du store Redux global.
// configureStore() de Redux Toolkit intègre automatiquement
// redux-thunk (middleware async) et redux-devtools.
// ============================================================

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
