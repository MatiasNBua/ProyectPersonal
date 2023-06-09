function Settings() {

  return (
    <form className="h-auto w-full" action="#" method="POST">
      <div className=" flex flex-col items-center justify-start mt-10 gap-6">
        <div className="text-center">
          <h3>¡Cambiar Datos!</h3>
        </div>

        <div className=" flex flex-col gap-4">
          <div>
            <label htmlFor="oldPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Old password
            </label>
            <div className="mt-0">
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                autoComplete="oldPassword"
                required
                className="px-2 block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
                New password
              </label>

            </div>
            <div className="mt-0">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="current-newPassword"
                required
                className="px-2 block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm password
              </label>

            </div>
            <div className="mt-0">
              <input
                id="confirmPassord"
                name="confirmPassord"
                type="password"
                autoComplete="confirmPassord"
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
              Change password
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Settings