"use client";

import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import {
  RiDashboardLine,
  RiFileList3Line,
  RiGroupLine,
  RiPieChart2Fill,
  RiStoreLine,
  RiToolsFill,
} from "@remixicon/react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Dashboard",
    url: "/cms",
    avatar: RiDashboardLine,
  },
  {
    name: "Campaigns",
    url: "/cms/campaigns",
    avatar: RiFileList3Line,
  },
  {
    name: "Vortal List",
    url: "/cms/vortals",
    icon: RiStoreLine,
  },
  {
    name: "Users",
    url: "/cms/users",
    icon: RiGroupLine,
  },
  {
    name: "Reports",
    url: "/cms/reports",
    icon: RiPieChart2Fill,
  },
  {
    name: "Configs",
    url: "/cms/configs",
    icon: RiToolsFill,
  },
];

export function NavMain() {
  const pathname = usePathname();

  const isActive = (url: string) => pathname === url;

  return (
    <SidebarMenu className="gap-1.5">
      {navItems.map((item) => (
        <SidebarMenuButton
          key={item.name}
          asChild
          className="group/menu-button flex h-9 gap-2 overflow-x-hidden rounded-md bg-gradient-to-r font-medium hover:bg-transparent hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/10 [&>svg]:size-auto"
          isActive={isActive(item.url)}
        >
          <a href={item.url}>
            {item.avatar && (
              <item.avatar
                aria-hidden="true"
                size={18}
                className="size-5 opacity-60"
              />
            )}
            {item.icon && (
              <item.icon aria-hidden="true" size={18} className="opacity-60" />
            )}
            <span className="truncate">{item.name}</span>
          </a>
        </SidebarMenuButton>
      ))}
    </SidebarMenu>
  );
}
