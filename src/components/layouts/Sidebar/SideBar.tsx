import React from 'react';
import './SideBar.scss';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? '' : 'open'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
      </div>
      <ul>
        <li>Elemento de menú 1</li>
        <li>Elemento de menú 2</li>
        <li>Elemento de menú 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;