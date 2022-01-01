import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navber from '../../Shared/Navber/Navber';
import { Button, TextField } from '@mui/material';
const Learner = () => {
    const [learners, setLearners] = useState([]);
    const [search, setSearch] = useState('');
    const [age, setAge] = useState({});
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(() => {
        fetch(`https://hidden-refuge-17971.herokuapp.com/learnerUser?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setLearners(data.learners);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page])

    const handleSearch = e => {
        e.preventDefault();
        const searchingData = []
        searchingData.push(learners.find(learner => (learner.name.toLowerCase() === search.toLowerCase() || learner.phone === search || learner.email === search)))
        console.log(searchingData);
        setLearners(searchingData);
        setSearch('')
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAgeData = { ...age };
        newAgeData[field] = value;
        console.log(newAgeData);
        setAge(newAgeData);
    }

    const handleByAgeSearch = e => {
        e.preventDefault();
        const searchingData = learners.filter(learner => (learner.age >= age.minimum_age && learner.age <= age.maximum_age));
        // console.log(searchingData);
        setLearners(searchingData);

    }

    return (
        <div>
            <Navber></Navber>
            <h1>Driver List</h1>
            <form onSubmit={handleSearch}>
                <TextField
                    sx={{ width: "50%", m: 1 }}
                    label="Search"
                    onChange={e => setSearch(e.target.value)}
                    variant="outlined" />
                <Button
                    sx={{ padding: "15px", m: 1 }}
                    variant="contained"
                    type="submit">Serach</Button>
            </form>
            <form onSubmit={handleByAgeSearch}>
                <TextField
                    sx={{ width: "30%", m: 1 }}
                    label="Minimum_age"
                    name="minimum_age"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <TextField
                    sx={{ width: "30%", m: 1 }}
                    label="Maximum_age"
                    name="maximum_age"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <Button
                    sx={{ padding: "15px", m: 1 }}
                    variant="contained"
                    type="submit">Serach By Age</Button>
            </form>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {learners?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="pagination" style={{ margin: '30px' }}>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            key={number}
                            className={number === page ? 'selected' : ''}
                            onClick={() => setPage(number)}
                            style={{ marginRight: "20px", padding: "10px" }}>{number + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Learner;