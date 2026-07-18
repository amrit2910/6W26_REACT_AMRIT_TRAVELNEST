import { Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
    return (
        <>
        <AdminHeader></AdminHeader>
        <main>
        <Outlet></Outlet>
        </main>
        <AdminFooter></AdminFooter>
        
        </>
    )
}