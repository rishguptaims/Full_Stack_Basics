import express from "express";

const app = express();

// Data for 5 peoples
app.get('/api/peoples', (req, res) => {
    const peoples = [
        {
            id: 1,
            title: 'QA Analyst',
            name: 'Tarun'
        },
        {
            id: 2,
            title: 'QA Engineer',
            name: 'Harry'
        },
        {
            id: 3,
            title: 'Team Lead QA',
            name: 'Shivank'
        },
        {
            id: 4,
            title: 'Senior QA Engineer',
            name: 'Promod'
        },
        {
            id: 5,
            title: 'Senior QA Analyst',
            name: 'Terry'
        },
    ]
    res.send(peoples);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});