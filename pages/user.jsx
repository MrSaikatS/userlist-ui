import Anjali from "../components/Anjali";
import Swati from "../components/Swati";
import Syed from "../components/Syed";

const user = () => {
	return (
		<>
			<div className='container mx-auto'>
				<div className='grid grid-cols-3 grid-flow-row'>
					<Anjali />
					<Swati />
					<Syed />
				</div>
			</div>
		</>
	);
};

export default user;
