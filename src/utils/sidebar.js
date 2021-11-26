import Generic from "../pages/Generic/Index.jsx";
import Buyurtmalar from "../component/Buyurtmalar/Index.jsx";
import { ReactComponent as buyurtmalar } from "../assets/icons/buyurtmalar.svg";
import { ReactComponent as mahsulotlar } from "../assets/icons/mahsulotlar.svg";
import { ReactComponent as kategoriya } from "../assets/icons/kategoriya.svg";
import { ReactComponent as filial } from "../assets/icons/filial.svg";
import { ReactComponent as hisobot } from "../assets/icons/hisobot.svg";
import { ReactComponent as mijozlar } from "../assets/icons/mijozlar.svg";
export const sidebar = [
  {
    id: 1,
    title: "Buyurtmalar",
    component: Buyurtmalar,
    icon: buyurtmalar,
    pathname: "/Buyurtmalar",
    child: [],
    hidden: false,
  },
  {
    id: 2,
    title: "Mahsulotlar",
    component: Generic,
    icon: mahsulotlar,
    pathname: "/Mahulotlar",
    child: [],
    hidden: false,
  },
  {
    id: 3,
    title: "Kategoriyalar",
    component: Generic,
    icon: kategoriya,
    pathname: "/Kategoriyalar",
    child: [],
    hidden: false,
  },
  {
    id: 4,
    title: "  Filial",
    component: Generic,
    icon: filial,
    pathname: "/Filiallar",
    child: [],
    hidden: false,
  },
  {
    id: 5,
    title: "Hisobot",
    component: Generic,
    icon: hisobot,
    pathname: "/Hisobot",
    child: [],
    hidden: false,
  },
  {
    id: 6,
    title: "Mijozlar",
    component: Generic,
    icon: mijozlar,
    pathname: "/Mijozlar",
    child: [],
    hidden: false,
  },
  {
    id: 7,
    title: "Hodimlar",
    component: Generic,
    icon: mijozlar,
    pathname: "/Hodimlar",
    child: [],
    hidden: false,
  },
];
