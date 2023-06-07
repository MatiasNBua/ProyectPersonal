
const NewAuctionIMG = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>)

const MyAuctionsIMG = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>
)

const ProfileIMG = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
)


const navigation = [
  { name: MyAuctionsIMG, href: '/myAuctions', current: true },
  { name: NewAuctionIMG, href: '/newAuction', current: false },
  { name: ProfileIMG, href: '/profile', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Footer() {

  return (
        <div className="bg-gray-800">
          <div className="sm:block">
            <div className="flex justify-around">
              {navigation.map((item) => (
                <a
                key={item.name}
                href={item.href}
                className={classNames(
                   'text-gray-500 hover:text-white 500',
                  'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
              </div>
   
  )
}

export default Footer
