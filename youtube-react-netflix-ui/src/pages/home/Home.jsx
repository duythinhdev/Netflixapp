import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import axios from "axios";
import { useEffect,useState } from "react";
const Home = ( { type } ) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTVlY2U2ZjYyZDMxM2JmMDAwMzA0MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjEzNjE1MywiZXhwIjoxNjcyNTY4MTUzfQ.QqqLMXVs04t3grGIPBO6Zk1_Z2Pw1UhG5SEAJn_P2ZY",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => {
        return <List list={list}/>
      })}
      {/* <List/>
      <List/>
      <List/>
      <List/> */}
    </div>
  );
};

export default Home;
