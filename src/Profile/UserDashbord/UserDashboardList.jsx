import { useEffect, useState } from "react";

const UserDashboardList = (Orders) => {
  const { productId } = Orders.orders;
  const [loading, setLoading] = useState(true);

  const [orderData, setOrderData] = useState([]);
  console.log(orderData);
  const { name, price, writer, link } = orderData;
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/api/v1/product/product/single/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOrderData(data.product);
        setLoading(false)
      });
  }, [productId]);
  return (
    <tr>
      <td>
        {
            loading === true ? <div className="skeleton w-[100px] h-[150px] rounded-none"></div> :<img
            src={`http://localhost:5000/api/v1/product/product/photo?id=${productId}`}
            alt="Avatar Tailwind CSS Component"
            className="w-[100px] h-[150px]"
          />
        }
        
      </td>
      <td>
        {
            loading === true ? <div className="flex flex-col items-start gap-3"><div className="skeleton h-3 w-28 rounded-none"></div>
            <div className="skeleton h-3 w-full rounded-none"></div>
            <div className="skeleton h-3 w-full rounded-none"></div></div> : <span className="text-lg">{name}</span>
        }
      </td>
      <td>
      {
            loading === true ? 
            <div className="skeleton h-3 w-full rounded-none"></div> : <span className="text-lg">${price}</span>
        }
        
      </td>
      <td>
      {
            loading === true ? 
            <div className="skeleton h-3 w-full rounded-none"></div> : <span className="text-lg">{writer}</span>
        }
        
      </td>
      <th>
      {
            loading === true ? 
            <div className="skeleton h-5 w-10 rounded-none"></div> : <a href={link} className="btn btn-ghost btn-sm">
            Link
          </a>
        }
        
      </th>
    </tr>
  );
};

export default UserDashboardList;
