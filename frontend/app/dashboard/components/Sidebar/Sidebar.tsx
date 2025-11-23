"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdLogout,
} from "react-icons/md";

import "@/app/dashboard/components/Sidebar/Sidebar.scss";

const menuItems = [
  {
    title: "Accueil",
    href: "/dashboard",
    icon: <MdDashboard size={22} />,
  },
  {
    title: "Projets",
    href: "/dashboard/pages/projects",
    icon: <MdWork size={22} />,
  },
  {
    title: "Products",
    href: "/dashboard/pages/products",
    icon: <MdShoppingBag size={22} />,
  },
  {
    title: "Transactions",
    href: "/dashboard/pages/transactions",
    icon: <MdAttachMoney size={22} />,
  },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <div className="sidebar_user">
        <div className="user-detail">
          <span className="detail-username">Lusmo</span>
          <span className="detail-userTitle">Administrateur</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="sidebar_pages">
        {menuItems.map((page) => (
          <Link
            key={page.title}
            href={page.href}
            className={pathname === page.href ? "active" : "pages-link"}
          >
            <div className="link-content">
              {page.icon}
              <h4>{page.title}</h4>
            </div>
          </Link>
        ))}

      <Link href="/" className="pages-link logout"><MdLogout size={22} />Logout</Link>
      </div>
    </section>
  );
}
