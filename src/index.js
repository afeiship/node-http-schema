import httpSchema from '@jswork/http-rest-config';
import fetch from 'node-fetch';

import '@jswork/next';
import '@jswork/next-fetch';

export default (inConfig) => {
  const context = {};
  const http = nx.Fetch.getInstance({ fetch, responseType: 'json' });
  httpSchema(context, http, inConfig);
  return context;
};
