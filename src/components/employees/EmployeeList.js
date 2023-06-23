import { useEffect, useState } from "react"
import "./Employee.css"
import { Employee } from "./Employee"
//component that sets state for employees and displays list of employees
export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=true`).then(r => r.json()).then(employees => setEmployees(employees))
        },[]
    )


    return <article className="employees">
    {
        employees.map(employee => <Employee key={`employee--${employee.id}`} name={employee.fullName} email={employee.email} id={employee.id}/>
        )
    }
    
    </article>
}