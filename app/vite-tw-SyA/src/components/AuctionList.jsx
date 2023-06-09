import FakeData from '../testData/data'

function AuctionList() {

  return (
    <div className='mb-4 md:mt-6 lg:mt-8'>
      <h1 className='text-center text-white my-4 pb-4 text-5xl'> List of crafts</h1>
       
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {FakeData.map((auction) => (
          <li className='bg-gray-300  items-start p-4 flex flex-col justify-center rounded  gap-4 '>

            <div>
              <img src={auction.img} alt="" className='mx-auto w-full h-auto' />
            </div>

            <div className='p-3 space-y-1.5'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'> {auction.title} </h2>

              <p className='mt-1 text-sm leading-6 text-gray-600'> <i><b>Description:</b></i>
              <br/>{ auction.description } </p>

              <p className='mt-1 text-sm leading-6 text-gray-600'> <i>Price:</i>  { auction.value } € </p>
              <h6 className='text-base font-semibold leading-7 text-gray-900'> <i> Author: </i> {auction.author} </h6>

              <div className="space-x-4">

                <input htmlFor="bid" type='number' placeholder={auction.value + 1} className='rounded   px-4'></input> 
                <button type='submit' className='py-1 px-3 border rounded bg-gray-500 hover:bg-gray-700 hover:text-white'>
                  Send offert
                </button>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default AuctionList
