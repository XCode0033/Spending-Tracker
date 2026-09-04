import { useEffect, useState } from "react";

const AddExpensePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const res = await fetch('/api/add-expense');
      const json = await res.json();
      setData(json);
    }
    loadData();
  }, []);

  return (
    <>
    <div className="text-text mt-5 w-90">

      <div id="header" className="flex justify-evenly gap-20">
        <p> button </p>
        <p className="font-bold">Add expense</p>
        <p>x</p>
      </div>
    
      <div id="content" className="flex flex-col items-center">
        <p className="border-b-1 ">Money</p>

        <div id="expense-data-cards">
            <div id="expense-data-food">Food</div>
            <div id="expense-data-date">Date</div>
            <div id="expense-data">Merchant</div>
            <div id="expense-data-payment-method">Payment Method</div>
        </div>

        {/* add reciept function later through file uploading. */}
        <div id="notes">
            <p>Notes</p>
            <textarea placeholder="Add a note(optional)"></textarea>
        </div>

        {/* save expense button div thing? */}
      </div>
    </div>
    </>
  );
}

export default AddExpensePage;
