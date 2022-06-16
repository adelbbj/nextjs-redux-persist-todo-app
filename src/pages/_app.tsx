import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { PersistGate } from "redux-persist/integration/react";

import reduxStore from "../redux/store";

import "../styles/globals.css";

interface AppProps {
  Component?: any;
  pageProps?: any;
  store: any;
}

function MyApp({ Component, pageProps, store }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={"Loading..."}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default withRedux(reduxStore)(MyApp);
