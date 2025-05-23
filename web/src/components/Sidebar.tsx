import { Home, BadgeDollarSign, Recycle, Truck, MonitorCog, CircleUserRound, LogOut  } from "lucide-react";
import logo from "@/assets/sidebarLogo.png";

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
  SidebarSeparator,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Alugueis",
    url: "/rent",
    icon: BadgeDollarSign,
  },
  {
    title: "Caçambas",
    url: "/dumpsters",
    icon: Truck,
  },
  {
    title: "Residuos",
    url: "/residues",
    icon: Recycle,
  },
  {
    title: "Operações",
    url: "/operations",
    icon: MonitorCog,
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src={logo} alt="logo" className="w-52 py-2" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="text-black"/>
                      <span className="text-black">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarSeparator/>
        <div className="flex justify-between items-center p-2">
            <div className="flex items-center gap-2">
                <CircleUserRound className="size-5" />
                <span className="text-sm font-semibold">Usuário</span>
            </div>
            <LogOut className="size-5 cursor-pointer hover:text-gray-500"/>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
