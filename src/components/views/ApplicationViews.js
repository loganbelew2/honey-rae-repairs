import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeView } from "./EmployeeViews.js"
import { CustomerView } from "./CustomerViews.js"

export const ApplicationViews = () => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    if (honeyUserObject.staff) {
        return <EmployeeView />
    } else {
        return <CustomerView />
    }
}

