import React from 'react';
import PropTypes from 'prop-types';

import getTrad from '../../utils/getTrad';

import Wrapper from './Wrapper';
import IntlText from '../IntlText';

const SortListItem = ({ onClick, selectedItem, label, value }) => {
  const handleClick = () => {
    onClick({ target: { name: '_sort', value } });
  };

  return (
    <Wrapper isActive={selectedItem === value} onClick={handleClick}>
      <IntlText id={getTrad(`sort.${label}`)} />
    </Wrapper>
  );
};

SortListItem.defaultProps = {
  selectedItem: null,
  label: '',
  onClick: () => {},
  value: null,
};

SortListItem.propTypes = {
  selectedItem: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default SortListItem;
