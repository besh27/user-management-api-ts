interface User {
    id: number,
    apiKey: string,
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    modifiedAt: string,
    scope: Array<string>,
    status: number
}

export default User;