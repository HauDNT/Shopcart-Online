import { FC } from "react"
import { SidebarProps } from "@/interfaces"
import Logo from "@/components/Logo"
import { X } from "lucide-react"
import { headerData } from "@/constant/data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SocialMediaGroupFrame from "@/components/SocialMediaGroupFrame"
import { useOutsideClick } from "@/hooks"

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>
      <div ref={sidebarRef} className="min-w-72 max-w-96 bg-black h-screen p-4 flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanDesign="group-hover:text-white"/>
          <button 
            onClick={onClose}
            className="hover:text-shop_light_orange hoverEffect">
            <X/>
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link 
              href={item?.href} 
              key={item?.title}
              className={`hover:text-shop_light_orange hoverEffect ${pathname === item?.href && "text-shop_light_orange"}`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMediaGroupFrame/>
      </div>
    </div>
  )
}

export default SideMenu
