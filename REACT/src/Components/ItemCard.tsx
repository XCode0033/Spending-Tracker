
interface Props {
    category: string;
    amount: number;
}
const ItemCard = ({category, amount}:Props )=> {
    return ( 
        <>
        <div className="flex flex-row items-center border border-pink-400 rounded-md px-2 py-2 bg-gray-700">
            <div>
            <p className="mr-2">Image</p>
            </div>
            <div className="flex flex-col">

            <p className="font-semibold">{category}</p>
            <p className="font-bold">${(amount/100).toFixed(2)}</p>
            <p>% of budget</p>
            </div>
        </div>
        </>
     );
}
 
export default ItemCard;