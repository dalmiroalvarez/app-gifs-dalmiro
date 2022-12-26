import { useState } from "react"
import AddCategory from "./AddCategory"
import GifGrid from "./GifGrid"

const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([''])

    const handleAdd = () => {
        setCategories([ ...categories, ])
    }
  
    return (
    <>
        <h1>GifExpert App</h1>
        <AddCategory
            setCategories={setCategories}
        />
        
        <ol>
            { categories.map ( category => (
                <GifGrid 
                    key={category}
                    category={category}
                />           
            ))
            }
        </ol>
    </>
  )
}

export default GifExpertApp