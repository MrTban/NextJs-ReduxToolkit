'use client'

import { PuffLoader } from 'react-spinners'

const Loader = () => {
	return (
		<div
			className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
		>
			<PuffLoader size={100} color='cyan' />
			<span className='text-2xl font-bold mt-4'>Loading</span>
		</div>
	)
}

export default Loader
