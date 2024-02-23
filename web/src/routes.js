/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Eboueurs from "views/Eboueurs.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import { CreateFako } from "views/createFako";
import Signalement from "views/Signalement";
import Poubelle from "views/Poubelle";
import Signaleur from "views/Signaleur";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Profil organisation",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/eboueurs",
    name: "Éboueurs",
    icon: "nc-icon nc-delivery-fast",
    component: Eboueurs,
    layout: "/admin"
  },
  {
    path: "/signalement",
    name: "Signalement",
    icon: "nc-icon nc-notes",
    component: Signalement,
    layout: "/admin"
  },
  {
    path: "/createFako",
    name: "createFako",
    icon: "nc-icon nc-notes",
    component: CreateFako,
    layout: "/admin"
  },
  {
    path: "/poubelle",
    name: "Poubelle",
    icon: "nc-icon nc-square-pin",
    component: Poubelle,
    layout: "/admin"
  },
  {
    path: "/signaleurs",
    name: "Signaleurs",
    icon: "nc-icon nc-notification-70",
    component: Signaleur,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
