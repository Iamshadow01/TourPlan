import Cards from './Cards'
function Container({tour,removecity}){
    return(
        <div className="max-w-[1100px] flex flex-wrap justify-around">
            {
                tour.map((tour)=>{
                    return(
                        <Cards key={tour.id} {...tour} removecity={removecity}/>
                    )
                })
            }
        </div>
    )
}
export default Container;