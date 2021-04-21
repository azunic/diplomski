import React, { useState } from 'react';
import getIcon from '../../../utils/iconsLoader';

export default function SideDrawerListItem(props) {
  const [expanded, setExpanded] = useState(false);
  const { icon, text, expandable, expandableItems, menuOnClick, history } = props;
  const submenuGoToFunction = (name) => {
    let id = '';
    if (name === 'Muški mirisi') {
      id = '5fecfa89d1fc6e13b8d80849';
    } else if (name === 'Ženski mirisi') {
      id = '5fafc161f797bd3670ef1cb1';
    } else if (name === 'Unisex mirisi') {
      id = '5fecf0e3e9d36532b44440a5';
    } else if (name === 'Trepavice') {
      id = '5fecefffe9d36532b444409a';
    } else if (name === 'Toaletna torbica') {
      id = '5fecf014e9d36532b444409b';
    } else if (name === 'Pribor') {
      id = '5fecf02ee9d36532b444409c';
    } else if (name === 'Šiljila') {
      id = '5fecf04ae9d36532b444409d';
    } else if (name === 'Nokti') {
      id = '5fecf056e9d36532b444409e';
    } else if (name === 'Ogledala') {
      id = '5fecf061e9d36532b444409f';
    } else if (name === 'Kistovi') {
      id = '5fecf061e9d36532b444409f';
    } else if (name === 'Torbe') {
      id = '5fecf061e9d36532b444409f';
    } else if (name === 'Setovi') {
      id = '5fecf083e9d36532b44440a2';
    } else if (name === 'Pincete') {
      id = '5fecf08fe9d36532b44440a3';
    } else if (name === 'Maske za lice') {
      id = '5fecf0a4e9d36532b44440a4';
    } else if (name === 'Njega tijela') {
      id = '5fecf14be9d36532b44440a7';
    } else if (name === 'Muška njega') {
      id = '5fecf20fe9d36532b44440a8';
    } else if (name === 'Njega kose') {
      id = '5fecf24ce9d36532b44440a9';
    } else if (name === 'Styling') {
      id = '5fecf258e9d36532b44440aa';
    } else if (name === 'Šamponi') {
      id = '5fecf26ae9d36532b44440ab';
    } else if (name === 'Regeneratori') {
      id = '5fecf278e9d36532b44440ac';
    } else if (name === 'Boje za kosu') {
      id = '5fecf284e9d36532b44440ad';
    } else if (name === 'Oči') {
      id = '5fecf2d5e9d36532b44440ae';
    } else if (name === 'Lice') {
      id = '5fecf2dee9d36532b44440af';
    } else if (name === 'Usne') {
      id = '5fecf2e4e9d36532b44440b0';
    } else if (name === 'Njega ruku i nogu ') {
      id = '5fecf42de9d36532b44440b8';
    } else if (name === 'Higijenski proizvodi') {
      id = '5fecf741d1fc6e13b8d80831';
    } else if (name === 'Setovi') {
      id = '5fecf5cbe9d36532b44440c4';
    } else if ((name = 'Parfemi')) {
      id = '5fafc161f797bd3670ef1cb1';
    } else if ((name = 'Mirisi')) {
      id = '5fecf6b2d1fc6e13b8d8082e';
    } else if ((name = 'Kolonjske vode')) {
      id = '5fecf645d1fc6e13b8d8082c';
    } else if ((name = 'Nokti')) {
      id = '5fed02f67d3bc022549c53f7';
    }

    if (id != '') {
      history.push(`/products/category/${id}`);
    }
  };
  return (
    <li className="sidedrawer-list-item" onClick={!expandable ? menuOnClick : null}>
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
