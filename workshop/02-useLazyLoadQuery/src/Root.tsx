import React, { Suspense } from 'react';

import Providers from './Providers';
import App from './App';
import Loading from './Loading';
import ErrorBoundaryRetry from './ErrorBoundaryRetry';

const Root = () => {
  /**
   * @TODO
   * Add Suspense to suspend when using useLazyLoadQuery
   * Add ErrorBoundary to catch errors in useLazyLoadQuery
   */

  return (
    <Providers>
      <ErrorBoundaryRetry>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </ErrorBoundaryRetry>
    </Providers>
  );
};

export default Root;
