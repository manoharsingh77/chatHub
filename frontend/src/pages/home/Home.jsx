import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center bg-gray-200">
			<div className="flex sm:h-[450px] md:h-[550px] w-[90vw] max-w-5xl rounded-2xl shadow-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;
