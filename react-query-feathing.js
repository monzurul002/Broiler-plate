import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {

    const { isLoading, data: menu = [], refetch } = useQuery({
        queryKey: ['menu'], queryFn: async () => {
            const result = await fetch("http://localhost:5000/menu");
            return result.json()
        }
    })

    return [menu, isLoading, refetch]  //have to main index number
}

export default useMenu


// import { useEffect, useState } from "react";

// const useMenu = () => {
//     const [menu, setMenu] = useState([]);
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         fetch('http://localhost:5000/menu')
//             .then(res => res.json())
//             .then(data => {
//                 console.log('Fetched menu data:', data);
//                 setLoading(false);
//                 setMenu(data);
//             })
//             .catch(error => {
//                 console.error('Error fetching menu data:', error);
//                 setLoading(false);
//             });
//     }, []);

//     return [menu, loading]
// }

// export default useMenu