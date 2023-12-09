import { useState, useEffect } from "react";
import useAuth from "./useAuth"
const useAdminHook = () => {
    const { user } = useAuth()  //const {user}=AuthProvider()  same
    const [isAdmin, setIsAdmin] = useState(null);
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdminLoading(false)
                setIsAdmin(data)
            })
    }, [])

    return { isAdmin, adminLoading }
};

export default useAdminHook;