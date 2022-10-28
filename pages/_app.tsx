import type { AppProps } from 'next/app'
import { wrapper } from "../store/store";
import {QueryClientProvider, QueryClient} from 'react-query'
import React from 'react';
function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>)
}

export default wrapper.withRedux(App);
