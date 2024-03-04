import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function Invoice() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const detail = async () => {
    try {
      const [orderResponse, itemsResponse] = await Promise.all([
        Axios.get(`/api/single/order/${id}`, { withCredentials: true }),
        Axios.get(`/api/finditems`, { withCredentials: true }),
      ]);

   

      const updatedDetails = {
        ...orderResponse.data,
        items: orderResponse.data.items.map((item) => {
          const correspondingItem = itemsResponse.data.find((i) => i.item === item.item);
          const price = correspondingItem ? correspondingItem.price : 0;
          return {
            ...item,
            price: price,
          };
        }),
      };

      updatedDetails.items.forEach((item) => {
      });


      setDetails(updatedDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  useEffect(() => {
    detail();
  }, [id]);

  const handlePrint = () => {
    const printInvoice = document.getElementById("Invoice").innerHTML;
    const printContents = document.body.innerHTML;
    document.body.innerHTML = printInvoice;
    window.print();
    document.body.innerHTML = printContents;
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-5 border border-gray-300 shadow-sm" key={details._id}>
        <div className="p-5 bg-white" id="Invoice">
          <div className="logo">
            <img src="your_logo.png" alt="Company Logo" width={150} className="max-w-xs h-auto"/>
          </div>
          <div className="text-center mb-5">
            <h1 className="text-2xl my-2">Invoice</h1>
            <p>Invoice Number: INV12345</p>
            {/* <p>Date: 2023-09-20</p> */}
          </div>
          <div className="company-details">
            <h2>Company Contact Details:</h2>
            <p>Prestoclean</p>
            <p>Address: {details.servicelocation}, Guwahati</p>
            <p>Email: prestocleanguwahati@gmail.com</p>
            <p>Phone: +91 60035 09743</p>
          </div>
          <div className=" mb-5">
            <h2 className="text-lg mb-3">Bill To:</h2>
            <p>Customer Name: {details.name}</p>
            <p>Customer Phone No: {details.phoneno}</p>
            <p>
              Address: {details.address}, House No: {details.hno}, Pin:{" "}
              {details.Pincode}
            </p>
            <p>City: Guwahati</p>
            <p>Order Date: {formatDate(details.createdat)}</p>
            <p>Pickup Date:: {formatDate(details.pickupdate)}</p>
          </div>
          {Array.isArray(details.items) && details.items.length > 0 ? (
            <>
              <table className="w-full border-collapse border border-gray-300 mb-5">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Item</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                {details.items.map((itemm, index) => (
                    <tbody key={itemm.item}>
                        <tr>
                            <td className="border border-gray-300 p-2">{itemm.item}</td>
                            <td>{itemm.quantity}</td>
                            <td>{itemm.price}</td> 
                            <td>{itemm.quantity * itemm.price}</td>
                            {/* {console.log(itemm)} */}
                        </tr>
                    </tbody>
                ))}
              </table>
            </>
          ) : (
            <h5>No items available</h5>
          )}
          <div className="text-right">
            <p>
              <strong> Grand Total:</strong> {details.price}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="px-4 py-2 text-base cursor-pointer bg-blue-500 text-white rounded" onClick={handlePrint}>
          Generate Invoice
        </button>
      </div>
    </>
  );
}
