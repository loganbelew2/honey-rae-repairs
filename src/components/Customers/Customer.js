import { Link } from "react-router-dom"

export const Customer = ({name, address, number, id}) => {

    return <section className="customer">
        <div className="customer__Name customer__item">
           <Link to={`/customers/${id}`}> Name: {name}</Link>
        </div>
        <div className="customer__Email customer__item">
            email: {address}
        </div>
        <div className="customer__Number customer__item">
            phoneNumber: {number}
        </div>
    </section>
}
