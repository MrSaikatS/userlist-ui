import Image from "next/image";

const Card = () => {
	return (
		<div className='w-96 h-auto text-white text-base rounded-3xl shadow-xl shadow-violet-900/50 py-6 bg-gradient-to-b from-pink-600 to-violet-900 hover:drop-shadow-2xl hover:shadow-violet-900/50'>
			<div className='flex justify-center mb-5'>
				<div className='w-32 h-32 self-center rounded-full border-4 border-black'>
					<Image
						className='rounded-full'
						src='https://randomuser.me/api/portraits/women/10.jpg'
						alt='img'
						width={128}
						height={128}
					/>
				</div>
			</div>
			<div className='grid grid-flow-row gap-y-2 w-80 mx-auto'>
				<div className='grid grid-cols-4 items-center'>
					<div className='justify-self-end'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</div>
					<div className='col-span-3 ml-4'>Mrs Hayley Davies</div>
				</div>
				<div className='grid grid-cols-4 items-center'>
					<div className='justify-self-end'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								strokeWidth={2}
								d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
							/>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								strokeWidth={2}
								d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
							/>
						</svg>
					</div>
					<div className='col-span-3 ml-4'>27</div>
				</div>
				<div className='grid grid-cols-4 items-center'>
					<div className='justify-self-end'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								strokeWidth={2}
								d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
							/>
						</svg>
					</div>
					<div className='col-span-3 ml-4'>Female</div>
				</div>

				<div className='grid grid-cols-4 items-center'>
					<div className='justify-self-end'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
							/>
						</svg>
					</div>
					<div className='col-span-3 ml-4'>hayley.davies@example.com</div>
				</div>

				<div className='grid grid-cols-4 items-center'>
					<div className='justify-self-end'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
					</div>
					<div className='col-span-3 ml-4'>United Kingdom</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

//https://randomuser.me/api/portraits/women/10.jpg
