const dbUsers = [
    {
        id: 1, 
        apiKey: '08QQAZY-8N4MSJ6-Q5PXK7E-1NH3BNR', 
        firstName: 'Benjamin', 
        lastName: 'Button', 
        email: 'oldyoung@gmail.com', 
        createdAt: '2019-04-02T15:03:18.200Z', 
        modifiedAt: '2019-04-02T15:03:18.200Z', 
        scope: [
            // billing.read,
            // emails.send
        ], 
        status: 1},
    {
        id: 2, 
        apiKey: 'J2CWJJY-54DMBE3-MH5GQ0W-VG2PY9B', 
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'johnd@gmail.com', 
        createdAt: '2019-04-02T15:04:18.200Z', 
        modifiedAt: '2019-04-02T15:04:18.200Z', 
        scope: [
            // billing.read,
            // emails.read,
            // emails.send,
            // users.read
        ], 
        status: 0
    },
    {
        id: 3, 
        apiKey: 'RHAR00H-N9VMMTJ-KG2WGH2-CHH1SAM', 
        firstName: 'Soin', 
        lastName: 'Soe', 
        email: 'sso@yahoo.com', 
        createdAt: '2019-04-02T15:05:18.200Z',
         modifiedAt: '2019-04-02T15:05:18.200Z', 
         scope: [
            // users.read
         ], 
         status: 1
    },
]

export default dbUsers;