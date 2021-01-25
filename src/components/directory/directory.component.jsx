import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DirectoryMenuContainer } from './directory.styles';
import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...remainngParams }) => (
      <MenuItem key={'section' + id} {...remainngParams} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, null)(Directory);
