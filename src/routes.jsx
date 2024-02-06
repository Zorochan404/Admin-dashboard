import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default/index";
import Profile from "./views/admin/profile/index";
import DataTables from "./views/admin/tables/index";


// Auth Imports
import SignIn from "./views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdPendingActions,
  MdLocalShipping,
  MdDoneOutline
} from "react-icons/md";
import { RiFolderReceivedFill } from "react-icons/ri";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
 
  // {
  //   name: "Orders",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  {
    name: "Pending",
    layout: "/admin",
    icon: <MdPendingActions className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Pickup",
    layout: "/admin",
    icon: <MdLocalShipping className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Received",
    layout: "/admin",
    icon: <RiFolderReceivedFill className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Delivered",
    layout: "/admin",
    icon: <MdDoneOutline className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;


