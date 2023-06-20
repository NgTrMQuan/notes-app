import React, { useState } from "react";
import plusIcon from "../../assets/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91","#FFF8DC","#2F4F4F","#FFC0CB"];

  const [listOpen, setListOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredColors, setFilteredColors] = useState(colors);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = colors.filter((color) =>
      color.toLowerCase().includes(query)
    );
    setFilteredColors(filtered);
  };

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-bar__input"
        />
      </div>
      <img
        src={plusIcon}
        alt="Add"
        onClick={() => setListOpen(!listOpen)}
        className="add-icon"
      />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {filteredColors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
