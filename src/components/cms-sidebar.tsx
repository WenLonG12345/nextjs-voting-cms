import type * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { UserDropdown } from "@/components/user-dropdown";
import { Logo } from "./logo";

export function CMSSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      side="left"
      variant="inset"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_4px)]"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu className="gap-2">
                <SidebarMenuItem>
                  <Logo />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu className="flex flex-col items-center gap-2">
            <UserDropdown />
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <Sidebar
        collapsible="none"
        variant="floating"
        className="hidden w-[calc(var(--sidebar-width))] flex-1 overflow-hidden rounded-lg bg-background shadow-md md:flex"
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <NavMain />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </Sidebar>
  );
}
