import React from 'react';
import {useEffect, useState} from 'react'

function Customers() {
    const [customers, setCustomers] = useState(null)

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch('/api/users')
            const json = await response.json()

            if (response.ok) {
                setCustomers(json)
            }
        }

        fetchCustomers()
    }, [])

    return (
        <div>
            {customers && customers.map((customer) => (
                <p key={customer._id}>{customer.name}</p>
            ))}
        </div>
    );   
}

export default Customers;