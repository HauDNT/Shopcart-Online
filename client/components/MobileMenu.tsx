"use client"
import { useState } from "react"
import { AlignLeft } from "lucide-react"
import SideMenu from "@/components/SideMenu"

const MobileMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  return (
    <>
      <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer"/>
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </div>
    </>
  )
}

export default MobileMenu
