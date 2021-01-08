import React, { useState } from 'react';
import getIcon from '../../../utils/iconsLoader';

export default function SideDrawerListItem(props) {
  const [expanded, setExpanded] = useState(false);
  const { icon, text, expandable, expandableItems, OnClick, history } = props;
  const submenuGoToFunction = (name) => {
    let id = '';
    if (name === 'Muški mirisi') {
      id = '5fecf0f5e9d36532b44440a6';
    } else if (name === 'Ženski mirisi') {
      id = '5fafc161f797bd3670ef1cb1';
    }

    if (id != '') {
      history.push(`/products/category/${id}`);
    }
  };
  return (
    <li className="sidedrawer-list-item" onClick={!expandable ? OnClick : null}>
      <div className="sidedrawer-list-item-expandable" onClick={() => setExpanded(!expanded)}>
        <div className="sidedrawer-list-item-expandable-left">
          {icon && (
            <span className="sidedrawer-list-item-expandable-left-icon">
              <img src={getIcon(icon)} alt={`${icon} icon`}></img>
            </span>
          )}
          <span className="sidedrawer-list-item-expandable-left-title">{text}</span>
        </div>
        <div className="sidedrawer-list-item-expandable-right">
          {expandable ? <i className="material-icons">{expanded ? 'expand_less' : 'expand_more'}</i> : '\u00A0'}
        </div>
      </div>
      {expandable && expanded && (
        <ul className={`sidedrawer-list-item-submenu sidedrawer-list-item-submenu-${expanded ? 'active' : 'inactive'}`}>
          {expandableItems.map((item, index) => (
            <li
              className={`sidedrawer-list-item-submenu-item ${
                expanded && index === 0 ? 'sidedrawer-list-item-submenu-item-active' : ''
              }`}
              key={item._id}
              onClick={() => submenuGoToFunction(item.name)}
            >
              <span className="sidedrawer-list-item-submenu-item-title">{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
