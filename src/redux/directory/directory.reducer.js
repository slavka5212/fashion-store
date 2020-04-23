const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg',
      size: 'large',
      id: 1,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg',
      size: 'large',
      id: 2,
      linkUrl: 'shop/mens'
    },
    {
      title: 'hats',
      imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg',
      id: 3,
      linkUrl: 'shop/hats'
    },
    {
      title: 'accessory',
      imageUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      id: 4,
      linkUrl: 'shop/accessory'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg',
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
