import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarMenuSub,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";

import { Boxes, UserCog, Layers, User, Receipt, Tag, Wrench, Plus, LayoutList } from "lucide-react";
import { Collapsible,CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { Link } from "react-router";

export default function AppSideBar() {
  return (
    <SidebarProvider>
      <div className="relative flex">
    
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="mb-5 ml-2">
                Sidebar
              </SidebarGroupLabel>
              <SidebarGroupContent>

              <SidebarMenu>
  <Collapsible defaultOpen className="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton > <UserCog/> Master</SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem >  
          
          

          <Collapsible defaultOpen className="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton > <p className="text-gray-500 flex "> <Layers className="h-4 "/> Items</p></SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
        <SidebarMenuSubItem > <Link to={"/"}><p className="flex"> <Tag className="h-4 "/> Orders Page</p></Link>  </SidebarMenuSubItem>
          <SidebarMenuSubItem > <Link to={"/Products"}><p className="text-rose-500 flex"> <Tag className="h-4 "/> Products</p></Link>  </SidebarMenuSubItem>
          <SidebarMenuSubItem > <Link to={"/Services"}><p className="text-indigo-500 flex"><Wrench className="h-5"/> Services</p></Link>   </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>




          
          </SidebarMenuSubItem>
          <SidebarMenuSubItem > <Link to={"/Customer"}> <p className="text-gray-500 flex"><User className="h-5 ml-2"/> Customer</p> </Link> </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</SidebarMenu>

<SidebarMenu>
  <Collapsible defaultOpen className="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton > <Boxes/> Orders</SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem > 


          <Collapsible defaultOpen className="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton > <p className="text-gray-500 flex"> <Receipt className="h-5 "/>  Sales Order</p></SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem > <p className="text-green-600 flex"> <Plus className="h-5"/>  Create</p></SidebarMenuSubItem>
          <SidebarMenuSubItem > <p className="text-amber-500 flex"> <LayoutList className="h-4 mt-[2px]"/>  List</p></SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>





          </SidebarMenuSubItem>
         
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</SidebarMenu>




              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

      
        <SidebarTrigger className="absolute top-4 -right-8 z-50 bg-gray-200 rounded-full shadow p-2" />
      </div>
    </SidebarProvider>
  );
}
