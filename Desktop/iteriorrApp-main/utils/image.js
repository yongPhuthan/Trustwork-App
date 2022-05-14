import ImageUrlBuilder from '@sanity/image-url';
import client from './client';

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).height(200).width(500).url();
}

function urlForShow(source) {
  return ImageUrlBuilder(client).image(source).height().width().url();
}

export { urlForThumbnail, urlForShow };