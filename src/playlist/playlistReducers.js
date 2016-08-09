const initialState = {
  podcastList: [
    {
      id: 1,
      title: 'Dennis speaking',
    },
    {
      id: 2,
      title: 'Daren speaking',
    },
    {
      id: 3,
      title: 'Omneet speaking',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
