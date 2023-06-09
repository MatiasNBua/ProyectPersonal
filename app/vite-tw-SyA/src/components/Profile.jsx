function Profile () {

  return(
    <form className=" flex justify-center" action="#" method="POST">
      <div className="w-1/5 mt-20 space-y-4">
           <h3 className="text-center text-white text-xl">¡  Cambie los datos de su Pefil!</h3>
            <div>
              <label htmlFor="Phonenumber" className="block text-sm font-medium leading-6 text-gray-900">
                Phonenumber
              </label>
              <div className="mt-0">
                <input
                  id="Phonenumber"
                  name="Phonenumber"
                  type="number"
                  autoComplete="Phonenumber"
                  required
                  className=" px-2 block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="+12 345 678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-0">
                <input
                  id="city"
                  name="city"
                  type="city"
                  autoComplete="city"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  About me
                </label>
                
              </div>
              <div className="mt-0">
                <input
                  id="about"
                  name="about"
                  type="about"
                  autoComplete="current-about"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-600 px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            </div>
          </form>
  )
}

export default Profile