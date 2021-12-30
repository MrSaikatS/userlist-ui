import Card from "../components/Card";

<<<<<<< Updated upstream
const index = () => {
  return (
    <>
      <div className='mx-8 rounded-3xl mt-6 mb-10 shadow-lg bg-blue-900 shadow-blue-900/50'>
        <h1 className='text-center text-white text-xl py-4'>
          User List UI Design
        </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 grid-flow-row place-items-center gap-20'>
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

export async function getServerSideProps() {
  const req = await fetch(``);
=======
const index = (props) => {
	const data = props.res;

	return (
		<>
			<div className='mx-8 rounded-3xl mt-6 mb-10 shadow-lg bg-blue-900 shadow-blue-900/50'>
				<h1 className='text-center text-white text-xl py-4'>
					User List UI Design
				</h1>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row place-items-center gap-20'>
				{data.map((data, index) => {
					return <Card key={index} user={data} />;
				})}
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const req = await fetch(`http://localhost:4000/data`);

	const res = await req.json();

	return {
		props: { res },
	};
>>>>>>> Stashed changes
}

export default index;
