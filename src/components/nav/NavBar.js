
import "./NavBar.css"
import { CustomerNavBar } from "./CustomerNav.js"
import { EmployeeNavBar } from "./EmployeeNav.js"

export const NavBar = () => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    return honeyUserObject.staff ? <EmployeeNavBar /> : <CustomerNavBar />;
}
