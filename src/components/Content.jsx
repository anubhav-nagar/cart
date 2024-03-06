import Phone from "./Phone";
import data from "../../public/data";
import Total from "./Total";
const Content = () => {
    
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl my-6">Your Cart</h1> 
                {data.map((item) => {
                    return (
                        <Phone key={item.id} data={item}/>
                    )
                })}       
            </div>
            <Total />
        </>
    )
}

export default Content;