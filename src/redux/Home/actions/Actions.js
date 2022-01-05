export const FETCH_CITIES = 'FETCH_CITIES';
export const FETCH_ONE = 'FETCH_ONE'

export const GetOneCity = (payload) => ({
    type: 'FETCH_ONE',
    payload,
  });