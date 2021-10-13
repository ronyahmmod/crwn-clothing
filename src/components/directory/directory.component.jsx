import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { selectDirectory } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({ directory }) => {
  console.log(directory);
  return (
    <div className="directory">
      {directory.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  directory: selectDirectory,
});
export default connect(mapStateToProps)(Directory);
