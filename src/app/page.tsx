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
		<>
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

			<div className='grid grid-cols-3 gap-6 place-content-center m-5'>
				{data?.map((user) => (
					<div key={user.id} className='relative bg-zinc-800 p-3 rounded-md'>
						<p className='absolute right-2 top-1 flex items-center justify-center bg-black w-5 h-5 rounded-full'>
							<span className='text-[10px] font-bold text-zinc-400'>{user.id}</span>
						</p>
						<p className='text-zinc-400 font-bold'>
							UserName: <span className='text-white font-normal'>{user.username}</span>
						</p>
						<p className='text-zinc-400 font-bold'>
							Name: <span className='text-white font-normal'>{user.name}</span>
						</p>

						<p className='text-zinc-400 font-bold'>
							Email: <span className='text-white font-normal'>{user.email}</span>
						</p>
					</div>
				))}
			</div>
		</>
	)
}

export default HomePage
