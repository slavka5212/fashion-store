import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'womens',
          imageUrl: 'https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg',
          size: 'large',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg',
          size: 'large',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'hats',
          imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg',
          id: 3,
          linkUrl: 'hats'
        },
        {
          title: 'accessory',
          imageUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
