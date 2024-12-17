import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import "modern-normalize";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
          <Toaster
            position="top-center"
            reverseOrder={true}
            toastOptions={{ duration: 2000 }}
          />
        </HelmetProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
