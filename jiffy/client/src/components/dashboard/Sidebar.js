import React from 'react';

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
          <a className="nav-link " href="/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* <!-- End Dashboard Nav --> */}

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#customers-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i><span>Customer Management</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="customers-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="http://localhost:3000/customers">
                <i className="bi bi-circle"></i><span>All Customers</span>
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/add-customer">
                <i className="bi bi-circle"></i><span>Add New Customer</span>
              </a>
            </li>
          </ul>
        </li>
        {/* <!-- End Customer Nav --> */}

        <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
          <i class="bi bi-layout-text-window-reverse"></i><span>Factory Management</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          
          <li>
            <a href="/view-factory">
              <i class="bi bi-circle"></i><span>Factory Details</span>
            </a>
          </li>

          <li>
            <a href="/add-factory">
              <i class="bi bi-circle"></i><span>Insert Factory</span>
            </a>
          </li>

          <li>
            <a href="/view-machine">
              <i class="bi bi-circle"></i><span>Machine Details</span>
            </a>
          </li>

          <li>
            <a href="/add-machine">
              <i class="bi bi-circle"></i><span>Insert Machine</span>
            </a>
          </li>

          <li>
            <a href="/update-machine">
              <i class="bi bi-circle"></i><span>Update Machine Status</span>
            </a>
          </li>

        </ul>
      </li>
        {/* <!-- End Factory Nav --> */}

      </ul>

    </aside>
  );
}

export default Sidebar;