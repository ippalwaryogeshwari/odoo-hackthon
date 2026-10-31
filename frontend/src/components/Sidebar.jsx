import {
  LayoutDashboard,
  Users,
  Package,
  Repeat,
  FileText,
  CreditCard,
  ChartNoAxesCombined,
  Settings,
  LogOut
} from "lucide-react";

function Sidebar() {

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Customers", icon: Users },
    { name: "Products & Plans", icon: Package },
    { name: "Subscriptions", icon: Repeat },
    { name: "Quotations", icon: FileText },
    { name: "Invoices", icon: FileText },
    { name: "Payments", icon: CreditCard },
    { name: "Reports", icon: ChartNoAxesCombined }
  ];

  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-icon">B</div>
        <h2>Brightloop</h2>
      </div>

      <p className="menu-heading">MAIN MENU</p>

      <nav className="sidebar-menu">

        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              className={`menu-item ${index === 0 ? "active" : ""}`}
              key={item.name}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </div>
          );
        })}

      </nav>

      <div className="sidebar-bottom">
        <div className="menu-item">
          <Settings size={19} />
          <span>Settings</span>
        </div>

        <div className="menu-item">
          <LogOut size={19} />
          <span>Logout</span>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;