import Image from "next/image";

const Card = () => {
	return (
		<div className='max-w-sm mx-auto grid grid-flow-row border border-black py-4'>
			<div className='grid grid-flow-col place-content-center'>
				<div className=''>
					<div className='w-32 h-32 rounded-full ring ring-offset-2'>
						<Image
							className='rounded-full mx-auto'
							src='https://randomuser.me/api/portraits/women/10.jpg'
							alt='user pic'
							width={128}
							height={128}
						/>
					</div>
				</div>
			</div>

			<div className='text-lg place-items-center'>
				<div className='grid grid-cols-4 gap-2'>
					<div className='justify-self-end'>
						<Image
							className='self-center'
							src='/icons8-user-96.png'
							alt='user pic'
							width={26}
							height={26}
						/>
					</div>
					<div className='col-span-3'>Lucy Phillips</div>
				</div>
				<div className='grid grid-cols-4 gap-2'>
					<div className='justify-self-end'>
						<Image
							className='self-center'
							src='/icons8-at-sign-96.png'
							alt='user pic'
							width={26}
							height={26}
						/>
					</div>
					<div className='col-span-3'>lucy.phillips@example.com</div>
				</div>
				<div className='grid grid-cols-4 gap-2'>
					<div className='justify-self-end'>
						<Image
							className=''
							src='/icons8-gender-96.png'
							alt='user pic'
							width={26}
							height={26}
						/>
					</div>
					<div className='capitalize'>female</div>
					<div className='justify-self-end'>
						<Image
							className=''
							src='/icons8-circle-96.png'
							alt='user pic'
							width={26}
							height={26}
						/>
					</div>
					<div className=''>33</div>
				</div>
				<div className='grid grid-cols-4 gap-2'>
					<div className='justify-self-end'>
						<Image
							className=''
							src='/icons8-address-96.png'
							alt='user pic'
							width={26}
							height={26}
						/>
					</div>
					<div className='col-span-3'>6640, Stanley Road. Dundee.</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
