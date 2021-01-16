import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...remainngParams }) => (
      <MenuItem key={'section' + id} {...remainngParams} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, null)(Directory);
