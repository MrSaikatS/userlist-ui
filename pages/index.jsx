import Card from "../components/Card";

const index = () => {
	return (
		<>
			<div className='text-center text-xl my-5'>User List UI Design</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row place-items-center gap-20'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
};

export default index;
