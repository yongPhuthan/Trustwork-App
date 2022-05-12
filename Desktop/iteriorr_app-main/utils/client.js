import client from '@sanity/client';
import config from './config.js';

export default client({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2021-08-31',
  useCdn: true,
});