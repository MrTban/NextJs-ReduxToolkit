'use client'

import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { increment, decrement } from '@/redux/features/counterSlice'
import { useGetUserByIdQuery, useGetUsersQuery } from '@/redux/services/userApi'
import ErrorState from './error'
import Loading from './Loading'

const HomePage = () => {
	const count = useAppSelector((state) => state.counterReducer.counter)
	const dispatch = useAppDispatch()
	const { data, error, isLoading, isFetching } = useGetUsersQuery(null)

	if (isLoading || isFetching) return <Loading />
	if (error) return <ErrorState />

	return (
		<div>
			<div className='flex flex-col items-center justify-center gap-3 my-5'>
				<h1>Total: {count}</h1>
				<div className='flex gap-4'>
					<button
						onClick={() => {
							dispatch(increment())
						}}
						className='bg-green-500 px-3 py-2 rounded-md'
					>
						Increment
					</button>
					<button
						onClick={() => {
							dispatch(decrement())
						}}
						className='bg-blue-500 px-3 py-2 rounded-md'
					>
						Decrement
					</button>
				</div>
			</div>

			<div className='grid grid-cols-3 gap-y-6 place-content-center mx-auto'>
				{data?.map((user) => (
					<div key={user.id}>
						<p>{user.name}</p>
						<p>{user.username}</p>
						<p>{user.email}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default HomePage
