import { useEffect, useState } from "react"
import { Customer } from "./Customer"

export const CustomerList = () => {
    //set initial state for customers
    const [Customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user`)
            .then((r) => r.json())
            .then((d) => setCustomers(d))
        },[]
    )

        return <section>
       {Customers.map(
        (customer) => < Customer key={customer.id} name={customer?.user?.fullName} address= {customer.address} 
        number= {customer.phoneNumber} id={customer.id}/>
       )}
        </section>
}