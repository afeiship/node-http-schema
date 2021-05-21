import httpSchema from '@jswork/http-schema';
import NxFetch from '@jswork/next-fetch';
import nxFetchWithDebug from '@jswork/next-fetch-with-debug';
import nxFetchWithTimeout from '@jswork/next-fetch-with-timeout';
import nxFetchWithDelay from '@jswork/next-fetch-with-delay';
import nxFetchWithRandomUa from '@jswork/next-fetch-with-random-ua';
import nxFetchWithProxy from '@jswork/next-fetch-with-proxy';
import nxFetchWithResponseType from '@jswork/next-fetch-with-response-type';
import nxApplyFetchMilddeware from '@jswork/next-apply-fetch-middleware';
import nodeFetch from 'node-fetch';

export default (inConfig, inOptions?) => {
  const fetch = nxApplyFetchMilddeware([
    nxFetchWithTimeout,
    nxFetchWithDelay,
    nxFetchWithRandomUa,
    nxFetchWithProxy,
    nxFetchWithResponseType,
    nxFetchWithDebug
  ])(nodeFetch);

  const http = NxFetch.getInstance({
    fetch,
    ...inOptions
  });

  return httpSchema(inConfig, http);
};
