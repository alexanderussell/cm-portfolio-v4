import * as React from "react"

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Header = () => (
    <header>
      <nav className="w-full border-b bg-background/95 backdrop-blur-md transition-[transform,border-color] duration-300 fixed border-b-transparent translate-y-0" aria-label="Global">
        <div className="flex items-center justify-between py-4 container mx-auto px-container">
          <div className="flex items-center gap-2">
            <a href="#">
              <span className="sr-only">Collectively Made</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div> 
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      
        <div className="hidden lg:flex">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )

export default Header
