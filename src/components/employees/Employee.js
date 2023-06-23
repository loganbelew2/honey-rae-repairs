import { Link } from "react-router-dom"

export const Employee = ({ name, email, id}) => {
    return <section className="employee">
        <div className="employee__Name employee__item">
           <Link to={`/employees/${id}`}> Name: {name}</Link>
        </div>
        <div className="employee__Email employee__item">
            email: {email}
        </div>
    </section>
}