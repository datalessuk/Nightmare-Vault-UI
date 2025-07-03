import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import React from 'react';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
