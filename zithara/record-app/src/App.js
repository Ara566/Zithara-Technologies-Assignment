import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/records`, {
          params: { page, sortBy, search },
        });
        const data = await response.data;
        setRecords(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecords();
  }, [page, sortBy, search]);

  return (
    <div className="container mt-5">
    <h2>React and Node JS Application Development</h2><br/>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or location"
        className="form-control mb-3"
      />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="form-select mb-3"
      >
        <option value="date">Sort by Date</option>
        <option value="time">Sort by Time</option>
      </select>
      <table className="table table-bordered table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>S.No.</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.sno}</td>
              <td>{record.customer_name}</td>
              <td>{record.age}</td>
              <td>{record.phone}</td>
              <td>{record.location}</td>
              <td>{record.date}</td>
              <td>{record.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        className="btn btn-primary me-2"
      >
        Previous Page
      </button>
      <button
        onClick={() => setPage((prevPage) => prevPage + 1)}
        className="btn btn-primary"
      >
        Next Page
      </button>
    </div>
  );
};

export default App;
