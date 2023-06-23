import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, update] = useState({})
    
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&_embed=customerTickets&id=${customerId}`)
            .then((r) => r.json())
            .then((d) => {
                const singleCustomer = d[0]
                update(singleCustomer)
            })
        },[customerId]
    )
    return <section className="customerDetails">
        <header>{customer?.user?.fullName}</header>
        <div>Email: {customer?.user?.email} </div>
        <div>phoneNumber: {customer.phoneNumber} </div>
        <div>address: {customer.address}</div>
    </section>
}
