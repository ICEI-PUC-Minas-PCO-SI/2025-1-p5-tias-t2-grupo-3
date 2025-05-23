import type { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar"
import Container from "./Container";
 

const Layout = ({ children } : { children: ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <Container>
                {children}
            </Container>
        </SidebarProvider>
    )
}

export default Layout;