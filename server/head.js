import { request } from './index'
export const head = data => {
  return request(data.url, {
    method: 'POST',
    ...(data.options || {}),
  });
}
