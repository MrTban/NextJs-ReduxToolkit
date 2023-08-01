'use client'

import Heading from './Heading'

interface EmptyState {
	title?: string
	subtitle?: string
}

const EmptyState: React.FC<EmptyState> = ({ title, subtitle }) => {
	return (
		<div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
			<Heading title={title} subtitle={subtitle} center />
		</div>
	)
}

export default EmptyState
