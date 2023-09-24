import { Link } from "react-router-dom";
import "./menu.scss";
import { menus } from "../../data/menus";

const Menu = () => {
  return (
    <div className="menu">
      {menus.map((menu) => (
        <div className="item" key={menu.id}>
          <span className="menuTitle">{menu.title}</span>
          {menu.listItems.map((item) => (
            <Link to={item.url} key={item.id} className="listItem">
              <img src={item.icon} alt="" />
              <span className="listItemTitle">{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
