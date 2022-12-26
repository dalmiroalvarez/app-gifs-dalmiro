import GifItem from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";


const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);    

    return (
    <>
        <h4>{category}</h4>
        <div className="card-grid">
            {
            
                images.map(( image ) => (
                    <GifItem 
                        key={image.id}
                        { ...image }                     
                    />
                ))            
            }
        </div>
    </>
  )
}

export default GifGrid