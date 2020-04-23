const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'pictures/woman.jpeg',
      size: 'large',
      id: 1,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'pictures/man.jpeg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/mens'
    },
    {
      title: 'hats',
      imageUrl: 'pictures/hats.jpg',
      id: 3,
      linkUrl: 'shop/hats'
    },
    {
      title: 'accessory',
      imageUrl: 'pictures/bag.jpeg',
      id: 4,
      linkUrl: 'shop/accessory'
    },
    {
      title: 'sneakers',
      imageUrl: 'pictures/sneakers.jpeg',
      id: 5,
      linkUrl: 'shop/sneakers'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
