import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import socialLinks from "@/data/socialLinks"
import { SocialMediaTooltipProps } from "@/interfaces"
import { cn } from "@/lib/utils"
import Link from "next/link"

const SocialMediaGroupFrame = ({className, iconClassName, tooltipClassname}: SocialMediaTooltipProps) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {
          socialLinks?.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link 
                  key={item?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item?.href}
                  className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_orange hoverEffect", iconClassName)}
                >
                  {item?.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent className={cn("font-semibold", tooltipClassname)}>{item?.title}</TooltipContent>
            </Tooltip>
          ))
        }
      </div>
    </TooltipProvider>
  )
}

export default SocialMediaGroupFrame
