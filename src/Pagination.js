import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search,setSearch]=useState('')

  const fetchData = async (page,search) => {
    try {
      const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/users?offset=${page}&limit=20&search=${search}`);
      debugger;
      setData(response.data.users);
      setTotalPages(response.data.total_users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
console.log("mount")
return ()=>{
  console.log("unmount")
}
  },[])

  useEffect(() => {
    fetchData(currentPage,search);
 
  }, [currentPage,search]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  return (
    <div>
      <h2>Pagination Example</h2>
      <input type="search" onChange={handleSearch}/>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.first_name}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index + 1}
            to={`/${index + 1}`}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pagination;