import Card from "../components/Card";

const index = () => {
	return (
		<>
			<div className='mx-8 rounded-3xl mt-6 mb-10 shadow-lg bg-blue-900 shadow-blue-900/50'>
				<h1 className='text-center text-white text-xl py-4'>
					User List UI Design
				</h1>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row place-items-center gap-20'>
				<Card />
				<Card />
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
