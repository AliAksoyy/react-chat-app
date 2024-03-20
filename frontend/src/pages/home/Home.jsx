import { useEffect, useState } from "react";
import MessageContainer from "../../components/messageContainer/MessageContainer";
import SideBar from "../../components/sideBar/SideBar";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:8000/api/users", {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${"jwtToken"}`,
          },
        });
        const data = await res.json();
        console.log("data", data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className=" flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
