import Card from "../components/Card";

const index = () => {
	return (
		<div className='container mx-auto'>
			<div className='text-center'>UserList UI</div>
			<div className='grid grid-cols-3 '>
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default index;
