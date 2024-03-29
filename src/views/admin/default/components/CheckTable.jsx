import React, { useEffect, useMemo, useState } from "react";
// import CardMenu from "../../../../components/card/CardMenu";
// import Checkbox from "../../../../components/checkbox/index";
import Card from "../../../../components/card/index";
import axios from "axios";
import Popup from "../../../../components/popup/Popup";
import { useNavigate } from "react-router-dom";


function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const CheckTable = ({name, tableData, action, status}) => {
  const Navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);


  const handleDetailsClick = (order) => {
    // alert('hola amigo')
    Navigate(`/PersonalDetails/${order._id}`);
  };



  
  const pickup = async( order) => {
    if(status === "update/pickup/toreceived"){
      setSelectedOrderId(order._id)
      setShowModal(true)
    }else{
      try {
        const response = await axios.put(
          `/api/${status}/${order._id}`,
          { withCredentials: true }
        );

        alert("Success");
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    }

   


    



      
    // setpickup();
  };

  // useEffect(() => {
  //   pickup();
  // }, [alert]);


  return (
   <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {name}
        </div>
        <button className="bg-[#4318ff] text-white px-2 py-1 rounded">
          See All
        </button>
      </header>


      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden  max-h-[340px]">
        <table className="w-full" variant="simple" color="gray-500" mb="24px">
          <thead>
            <tr>
              <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  Name
                </div>
              </th>
              <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  Ordered
                </div>
              </th>
              <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  Picked up
                </div>
              </th>
              <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  Details
                </div>
              </th>
              <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  Action
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, _id)=>
            <tr key={row._id}>
                <td className="text-sm font-bold text-navy-700 dark:text-white">
                  {row.name}
                </td>
                <td className="pt-[15px] pb-[16px] sm:text-[14px]">{formatDate(row.createdat)}</td>
                <td className="pt-[15px] pb-[16px] sm:text-[14px]">{formatDate(row.pickupdate)}</td>
                <td className="pt-[15px] pb-[16px] sm:text-[14px]">
                <button className="bg-[#4318ff] text-white px-2 py-1 rounded"
                 onClick={(e) => handleDetailsClick(row)}
                //  onClick={() => pending(order)}
                 >
                    Details
                </button>
                </td>
                <td className="pt-[15px] pb-[16px] sm:text-[14px]">
                <button className="bg-[#4318ff] text-white px-2 py-1 rounded" onClick={(e) => pickup(row)}>
                    {action}
                </button>
                
                </td>
            </tr>)}
          </tbody>
        </table>
        {showModal ? (
                  <Popup setShowModal={setShowModal} order={selectedOrderId}/>
                ) : null}
      </div>
    </Card>
  );
};

export default CheckTable;
