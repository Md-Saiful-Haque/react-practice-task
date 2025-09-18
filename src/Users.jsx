import { useEffect, useState } from "react"

export default function Users () {
    const [users, setUser] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    return (
        <div className="userDiv">
            <h4>Users: {users.length}</h4>
            {
                users.map(user => {
                    return (
                        <>
                        <div className="userTitle">
                            <h5>{user.name}</h5>
                        </div>
                        <div className="userList">
                            <li className="newCard">{user.address.city}</li>
                        </div>     
                        </>
                    )
                })
            }
        </div>
    )
}