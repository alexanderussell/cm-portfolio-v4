import * as React from "react"

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Header = () => (
    <header className="z-30 w-full border-b bg-background/95 duration-300 border-b-black-10">
      <nav className="w-full border-b bg-background/95" aria-label="Global">
        <div className="flex items-center justify-between py-4 container mx-auto px-container">
          <div className="flex items-center gap-2">
            <a href="#">
              <span className="sr-only">Collectively Made</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div> 
          <div className="items-center gap-6 text-base font-medium leading-relaxed md:flex">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-xs font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )

export default Header
