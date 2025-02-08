import { Bell, Crown, LogOut, Store, User, LucideIcon, User2, ChevronUp, Settings } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";


// Menu items.
const items = [
    {
        title: "Allstars Marketplace",
        url: "/marketplace",
        icon: Store,
    },
    {
        title: "Allstars Prime",
        url: "/allstar-page",
        icon: Crown,
    },
    {
        title: "Notifikasi",
        url: "/notification",
        icon: Bell,
        active: false,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel><h1 className="text-lg font-bold text-red-500">allstars</h1></SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className={cn("flex items-center space-x-2 p-4 cursor-pointer", item.active ? "text-red-500 font-bold" : "text-gray-500")}>
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Akun
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <Link href="/account-setting">
                                        <span className={cn("flex items-center cursor-pointer gap-2")}><Settings className="w-4 h-4" /> Setting</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span className={cn("flex items-center cursor-pointer gap-2")}><LogOut className="w-4 h-4"/>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
