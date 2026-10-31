
import { Search, Bell, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">

      <div className="search-box">
        <Search size={19} />
        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <div className="navbar-right">

        <button className="notification">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <div className="profile-avatar">N</div>

          <div className="profile-info">
            <h4>Nisha</h4>
            <p>Admin</p>
          </div>

          <ChevronDown size={17} />

        </div>

      </div>

    </header>
  );
}

export default Navbar;
