import { Component } from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

import SECTIONS_DATA from '../../data/sections.data';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...remainngParams }) => (
          <MenuItem key={'section' + id} {...remainngParams} />
        ))}
      </div>
    );
  }
}

export default Directory;
