const initialState = {
  playlist: [
    {
      title: 'Dennis speaking',
    },
    {
      title: 'Daren speaking',
    },
    {
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
