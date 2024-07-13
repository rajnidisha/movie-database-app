
import Banner from '../../components/Banner';
import Movies from '../../components/Movies';
// function HomePage({watchlist,handleAddToWatchList, deleteFromWatchList }) {
    function HomePage() {
return (<>
    
    <Banner/>
    {/* <Movies watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} deleteFromWatchList={deleteFromWatchList}/> */}
    <Movies />
</>)
}
export default HomePage;