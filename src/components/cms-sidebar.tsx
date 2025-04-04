import type * as React from "react";

// import { NavMain } from "@/components/nav-main";
// import { NavTabs } from "@/components/nav-tabs";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
// import { UserDropdown } from "@/components/user-dropdown";
// import {
//   RiAddLine,
//   RiApps2AiLine,
//   RiCalendarLine,
//   RiHome3Line,
//   RiNotification2Line,
//   RiQuestionLine,
//   RiSearch2Line,
// } from "@remixicon/react";
import Link from "next/link";

const data = {
  bottom: [
    {
      title: "My Space",
      url: "/dashboard/my-space",
      // icon: RiApps2AiLine,
    },
    {
      title: "Calendar",
      url: "/dashboard/calendar",
      // icon: RiCalendarLine,
    },
  ],
};

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
                  <Button size="icon">
                    {/* <RiHome3Line className="size-5" aria-hidden="true" /> */}
                  </Button>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu className="flex flex-col items-center gap-2">
            <SidebarMenuItem>
              <Button
                size="icon"
                variant="outline"
                className="text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-full"
                aria-label="Notification"
              >
                {/* <RiNotification2Line className="size-5" aria-hidden="true" /> */}
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button
                size="icon"
                variant="outline"
                className="text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-full"
                aria-label="Notification"
              >
                {/* <RiQuestionLine className="size-5" aria-hidden="true" /> */}
              </Button>
            </SidebarMenuItem>
            {/* <UserDropdown /> */}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <Sidebar
        collapsible="none"
        variant="floating"
        className="bg-background hidden w-[calc(var(--sidebar-width))] flex-1 overflow-hidden rounded-lg shadow-md md:flex"
      >
        <SidebarHeader>
          <div className="mt-2 flex items-center gap-2 px-1">
            <Button variant="outline" className="h-8 flex-1">
              {/* <RiAddLine className="size-5" aria-hidden="true" /> */}
              New Project
            </Button>
            <Button variant="outline" size="icon" className="size-8">
              {/* <RiSearch2Line className="size-5" aria-hidden="true" /> */}
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              {/* <NavMain /> */}
            </SidebarGroupContent>
          </SidebarGroup>
          {/* <NavTabs /> */}
        </SidebarContent>
        <SidebarFooter>
          <hr className="border-border mx-2 -mt-px border-t" />
          <SidebarMenu>
            {data.bottom.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className="hover:from-sidebar-accent hover:to-sidebar-accent/40 data-[active=true]:from-primary/20 data-[active=true]:to-primary/10 h-9 gap-3 rounded-md bg-gradient-to-r font-medium hover:bg-transparent [&>svg]:size-auto"
                  asChild
                >
                  <Link href={item.url}>
                   
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </Sidebar>
  );
}
