
import { Sidebar, SidebarItem,SidebarLogo, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg"

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
    <SidebarLogo href="#" img={userImg} imgAlt="Flowbite logo" className="rounded-full">
        userName
      </SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Book
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <SidebarItem href="/login" icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem href="#" icon={HiTable}>
            Log Out
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Upgrade to Pro
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards}>
            Documentation
          </SidebarItem>
          <SidebarItem href="#" icon={BiBuoy}>
            Help
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}

export default SideBar