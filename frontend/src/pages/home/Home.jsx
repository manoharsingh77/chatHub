import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex w-auto h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-white/20 backdrop-blur-lg shadow-2xl">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;