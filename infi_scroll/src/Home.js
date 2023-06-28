import React from 'react';
import logo from './logo.svg';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import './App.css';
import {useEffect, useState } from 'react';

const Home = () => {
    const [posts, setPosts  ] = useState([]);
    const [totalpassengers, settotalpassengers] = useState(0)
    const [pagenumber, setpagenumber] = useState(0)
  
    useEffect(()=>{
        const fetchApiposts = async() =>{
          const res = await axios(
            `https://api.instantwebtools.net/v1/passenger?page={pagenumber}&size=10`
          );
          settotalpassengers(res.data.totalpassengers);
          setPosts(res.data.data);
        };
        fetchApiposts()
      },[])
    
      const fetchData=()=> {
        setpagenumber(pagenumber + 1);
        const fetchApiposts = async() =>{
          const res = await axios(
            `https://api.instantwebtools.net/v1/passenger?page={pagenumber}&size=10`
          );
          settotalpassengers(res.data.totalpassengers);
          setPosts(posts.concat(res.data.data));
        };
        fetchApiposts()
      }
    
    
  return (
    
    <div className="App">
      <div className="nav">
      <h2>infinite scroll bar in react js <span>LOGOUT</span></h2> 
      </div>
     
      
      <ul>
        {
          posts.map((post)=>{
            return(
              <li>
                <div className="left">
                {post.name}<br/>
                {post.airline[0].country}<br/>
                </div>
                <div className="right">
                <img src={post.airline[0].logo} alt="logo" />
                </div>
                
              </li>

            )
          })}
      </ul>

      <InfiniteScroll
  dataLength={posts.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  
>
  {/* {items} */}
      </InfiniteScroll>

    </div>
  )
};

export default Home