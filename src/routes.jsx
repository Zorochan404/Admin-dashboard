import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default/index";
import PendingDashboard from "./views/admin/Orders_sidebar/Pending_sidebar/index";
import PickupDashboard from "./views/admin/Orders_sidebar/Pickup_sidebar/index";
import ReceivedDashboard from "./views/admin/Orders_sidebar/Received_sidebar/index";
import DeliveredDashboard from "./views/admin/Orders_sidebar/Delivered_sidebar/index"
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
import { IoStorefront } from "react-icons/io5";


const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
 
  {
    name: "All Pendings",
    layout: "/admin",
    icon: <MdPendingActions className="h-6 w-6" />,
    path: "pending-list",
    component: <PendingDashboard />,
  },
  {
    name: "All Pickups",
    layout: "/admin",
    icon: <MdLocalShipping className="h-6 w-6" />,
    path: "pickup-list",
    component: <PickupDashboard />,
  },
  {
    name: "All Received",
    layout: "/admin",
    icon: <RiFolderReceivedFill className="h-6 w-6" />,
    path: "received-list",
    component: <ReceivedDashboard />,
  },
  {
    name: "All Delivered",
    layout: "/admin",
    icon: <MdDoneOutline className="h-6 w-6" />,
    path: "delivered-list",
    component: <DeliveredDashboard />,
  },
  {
    name: "Store Details",
    layout: "/admin",
    path: "profile",
    icon: <IoStorefront className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
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
