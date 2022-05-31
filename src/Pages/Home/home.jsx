import Header from "../../Components/Header";
import Posts from "../../Components/Posts";
import Footer from "../../Components/Footer";
import Sidebar from "../../Components/Sidebar";
import {useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState ([]);

   useEffect (() => {
       const fetchPosts = async () => {
           const res = await axios.get("/posts")
           setPosts(res.data)
       }
       fetchPosts()
   }, [])
    return ( 
        <>
        <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
        </>
     );
}
 
export default Home;