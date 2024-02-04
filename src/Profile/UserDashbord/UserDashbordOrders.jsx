/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const UserDashbordOrders = ({showPage}) => {
    return (
        <div className={`${showPage === 'Orders' ? "" : "hidden"}`}>
            <h1 className='text-3xl font-bold text-center'>You don&apos;t have any orders now</h1>
        </div>
    );
};

export default UserDashbordOrders;