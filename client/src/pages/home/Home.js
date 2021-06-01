import React,{useState,useEffect} from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import axios from 'axios'
import './home.css'
export default function Home() {
    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("http://localhost:8000/api/posts");
            setPosts(res.data);
        }
        fetchPosts();
    },[])
    return (
        <>
         <Header/>
        <div className="home">
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        </>
    )
}
