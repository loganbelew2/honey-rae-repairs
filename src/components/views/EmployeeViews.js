import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../tickets/TicketList.js"
import { EmployeeList } from "../employees/EmployeeList.js"
import { EmployeeDetails } from "../employees/EmployeeDetails.js"
import { CustomerList } from "../Customers/CustomerList.js"
import { CustomerDetails } from "../Customers/CustomerDetails.js"

export const EmployeeView = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>
                <Route path="tickets" element={ <TicketList /> } />
                <Route path="employees" element={ <EmployeeList /> } />
                <Route path="employees/:employeeId" element={ <EmployeeDetails /> } />
                <Route path="customers" element={ <CustomerList /> } />
                <Route path="customers/:customerId" element={ <CustomerDetails />}/>
            </Route>
        </Routes>
    )
}

