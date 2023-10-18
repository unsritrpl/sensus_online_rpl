import { useState } from "react"
import { items } from "@/components/navbar/items"
import NavbarItem from "@/components/navbar/navbar-item"
import NavbarMobile from "@/components/navbar/navbar-mobile"
import ThemeSwitcher from "@/components/theme/theme-switcher"
import Icons from "@/components/icons"

export default function NavbarMain() {

  const [openState, setOpenState] = useState<boolean>(false)

  return (
    <nav className="sticky w-full top-0 left-0 py-2 border-b">
      <div className="flex justify-between items-center container">
        {/* brand */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl text-primary font-semibold">
            PSO
          </h1>
          <div className="hidden md:block text-based text-muted-foreground">
            Pendataan Sensus
            <span className="block">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-3 block md:hidden">
          <ThemeSwitcher />
          <Icons.mobileMenuIcon onClick={() => setOpenState(!openState)} />
        </div>
        {/* nav items */}
        <div className="hidden md:flex items-center gap-4">
          {items.map((item, i) => (
            <NavbarItem
              key={i}
              link={item.link}
              text={item.text}
            />
          ))}
          <ThemeSwitcher />
        </div>
      </div>
      {openState && (
        <NavbarMobile
          openState={openState}
          setOpenState={setOpenState}
        />
      )}
    </nav>
  )
}