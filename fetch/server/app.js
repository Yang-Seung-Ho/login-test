const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


let id = 2;
const userInfo = [
    {
        id: 1,
        user_name: '테스트',
        user_id: 'ju5979',
        user_pd: 'hj748159',
    },
];

app.get('/signup', (req, res) => {
    res.json(userInfo);
});

app.post('/signup', (req, res)=> {
    const {user_name,user_id, user_pd} = req.body;
    userInfo.push({
        id: id++,
        user_name,
        user_id,
        user_pd,
    });
    return res.send('success!');
});

app.get('/login', (req, res) => {
    res.json(userInfo);
});




app.listen(4000, () => {
    console.log('server start!');
});