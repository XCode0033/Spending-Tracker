
const RemainingBudgetCard = () => {
    return ( 
        <div >
            <div id="Budget-Card-Content" 
            className="
            flex flex-col bg-blue-800 w-90 rounded-lg
            p-3 text-text mb-5">
            <p className="font-medium">Remaining Budget: </p>
            <h1 className="font-bold text-xl">$1,428 left</h1>
            <p className="text-sm"> of <span className="font-bold">$2,000</span> monthly budget</p>

            <p>--------------</p>
            <p className="text-xs"><span className="font-bold">62%</span> of budget used.</p>

            </div>
        </div>
     );
}
 
export default RemainingBudgetCard;