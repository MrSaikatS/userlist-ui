import Image from "next/image";

const Card = () => {
	return (
		<div className='w-96 h-auto text-lg rounded-xl shadow-xl shadow-purple-500/50 py-5 bg-gradient-to-b from-pink-500 to-purple-500'>
			<div className='flex justify-center mb-5'>
				<div className='w-32 h-32 self-center rounded-full border-2 border-violet-500'>
					<Image
						className='rounded-full'
						src='https://randomuser.me/api/portraits/women/10.jpg'
						alt='img'
						width={128}
						height={128}
					/>
				</div>
			</div>
			<div className='grid grid-flow-row mx-10 gap-x-4 text-white'>
				<div className='grid grid-cols-4'>
					<div className='justify-self-end'>Name : </div>
					<div className='col-span-3 ml-4'>Mrs Hayley Davies</div>
				</div>
				<div className='grid grid-cols-4'>
					<div className='justify-self-end'>Age : </div>
					<div className='col-span-3 ml-4'>27</div>
				</div>
				<div className='grid grid-cols-4'>
					<div className='justify-self-end'>Gender : </div>
					<div className='col-span-3 ml-4'>Female</div>
				</div>

				<div className='grid grid-cols-4'>
					<div className='justify-self-end'>Email : </div>
					<div className='col-span-3 ml-4'>hayley.davies@example.com</div>
				</div>

				<div className='grid grid-cols-4'>
					<div className='justify-self-end'>Address : </div>
					<div className='col-span-3 ml-4'>priya@gmail.com</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

//https://randomuser.me/api/portraits/women/10.jpg
