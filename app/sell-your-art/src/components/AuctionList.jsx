import testData from '../testData/data'
import './AuctionList.css'

function AuctionList() {


    return (
        <div className="full-container-list-auction" >
            <div className="content-container">

            <div className="full-container-search">
                <label htmlFor="search">Buscador</label>
                <input type="text" placeholder="..." />
            </div>

            <div className="full-container-render-auction">
                <ul className='full-container-of-items'>
                    {testData.map((auction) => (
                        <li className='container-of-items'>
                            <h3> {auction.author} </h3>
                            <h1> {auction.title} </h1>
                            <p> {auction.description} </p>
                            <img src={auction.img} alt="" />
                            <p> {auction.value} </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    )
}

export default AuctionList