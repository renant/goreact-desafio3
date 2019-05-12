const INITIAL_STATE = {
  loading: false,
  data: [
    {
      id: 1,
      name: "Teste",
      cordinates: {
        latitude: -23.18660216,
        longitude: -46.88578606
      }
    },
    {
      id: 2,
      name: "Teste 2",
      cordinates: {
        latitude: -23.18486639,
        longitude: -46.87900543
      }
    }
  ],
  error: null
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {};
