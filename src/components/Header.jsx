export default function Header() {
  return (
    <header className=" py-6 border-b border-black bg-[#FFC017] ">
      <div className=" flex justify-between max-w-6xl mx-auto my-auto px-5 ">
        <img
          src="/src/images/logo.png"
          alt=""
          className=" h-6  object-contain "
        />
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                href="/"
                className=" hidden md:block lg:block  text-sm text-[#292929] "
              >
                Our story
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" hidden  md:block lg:block text-sm text-[#292929]  "
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" hidden  md:block lg:block text-sm text-[#292929]  "
              >
                Write
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-sm  md:block lg:block  text-[#292929]   "
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="/"
                className="  text-[13px] text-white bg-black rounded-full py-3 px-4 "
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
