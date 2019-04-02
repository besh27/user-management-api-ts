import * as express from 'express';
import dbEmails from '../../db/dbEmails';
import { Router, Request, Response } from 'express';

const emails = dbEmails;

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    // router.get('/api/v2/users', (req, res) => {
    try {
        if (!emails) res.status(404).send('This resource is unavailable.');

        res.status(200).send({
            success: 'true',
            message: 'Emails retrieved successfully',
            emails: emails,
        });
    } catch (e) {
        res.status(500).send(e.toString());
    }
});

router.get('/:id', (req, res) => {
    const email = emails.find(c => c.id === parseInt(req.params.id));

    if (!email) res.status(404).send('This user id was not found in this resouce.');

    res.status(200).send({
        success: 'true',
        message: 'Emails retrieved successfully',
        email: email,
    });
})

// router.post('/api/v2/users', (req, res) => {

//     const { error } = validationUser(req.body);
//     if (error) return res.status(400).send(error.details[0].message)


//     const user: User = {
//         id: users.length + 1,
//         apiKey: uuidAPIKey.create().apiKey,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         createdAt: new Date().toISOString(),
//         modifiedAt: new Date().toISOString(),
//         scope: [],
//         status: 1
//     };

//     if (users.find(c => c.email === user.email)) {
//         res.status(404).send(`'${user.email}' is already in use.`);
//     } else {
//         users.push(user);
//         res.status(200).send(`User ${user.firstName} ${user.lastName}, with an email of '${user.email}' has been created. \n\nNew Api Key: ${user.apiKey}\n\nPlease store it somewhere safe because as soon as you navigate away from this page,\nwe will not be able to retrive or restore this generated token.`);
//     }
// });


// router.put('/api/v2/users/:id', (req, res) => {

//     const user = users.find(c => c.id === parseInt(req.params.id));
//     if (!user) res.status(404).send('This user id was not found in this resouce.');


//     const { error } = validationUser(req.body);
//     if (error) return res.status(400).send(error.details[0].message)


//     console.dir('Request body: ' + req.body);

//     user.firstName = req.body.firstName;
//     user.lastName = req.body.lastName;
//     user.email = req.body.email;
//     user.modifiedAt = new Date().toISOString();
//     user.scope = [];
//     user.status = req.body.status;
//     res.status(200).send(`User ${user.firstName} ${user.lastName}, with an email of '${user.email}' has been updated.`);
// });

// router.delete('/api/v2/users/:id', (req, res) => {
//     const user = users.find(c => c.id === parseInt(req.params.id));
//     if (!user) res.status(404).send('This user can not be deleted because they was not found in this resouce.');


//     const userName = `${user.firstName} ${user.lastName}`;
//     const index = users.indexOf(user);
//     users.splice(index, 1);

//     res.send(`The user ${userName} has been deleted.`);
// });

export default router;
