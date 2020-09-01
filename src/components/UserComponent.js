import React from 'react';
import UserService from '../service/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
                this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className = "text-center">User List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> User ID</td>
                            <td> User Full Name</td>
                            <td> User NIC</td>
                            <td> Role Type</td>
                            <td> User Email</td>
                            <td> User Date Of Birth</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.userId}>
                                        <td>{user.userId}</td>
                                        <td>{user.fullName}</td>
                                        <td>{user.nic}</td>
                                        <td>{user.roleType}</td>
                                        <td>{user.email}</td>
                                        <td>{user.dateOfBirth}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent