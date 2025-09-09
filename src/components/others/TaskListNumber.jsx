import React from 'react'

const TaskListNumbers = ({data})=>{
    return(
        <div>
            <div className='flex mt-10 justify-between gap-5 screen'>
                <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
                    <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                 <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
                    <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
                    <h3 className='text-xl font-medium'>Completed Task</h3>
                </div>
                 <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
                    <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
                    <h3 className='text-xl font-medium'>Accepted Task</h3>
                </div>
                 <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
                    <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
                    <h3 className='text-xl font-medium'>Failed Task</h3>
                </div>
            </div>
        </div>
    )
}

export default TaskListNumbers


/*import React from 'react'

const TaskListNumbers = ({ data }) => {
  // If no data yet, show loading or empty UI
  if (!data || !data.taskCounts) {
    return (
      <div className="flex mt-10 justify-between gap-5">
        <p className="text-white">Loading task stats...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex mt-10 justify-between gap-5 flex-wrap">
        <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
          <h2 className="text-3xl font-semibold">{data.taskCounts?.newTask ?? 0}</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
          <h2 className="text-3xl font-semibold">{data.taskCounts?.completed ?? 0}</h2>
          <h3 className="text-xl font-medium">Completed</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
          <h2 className="text-3xl font-semibold">{data.taskCounts?.active ?? 0}</h2>
          <h3 className="text-xl font-medium">Active</h3>
        </div>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
          <h2 className="text-3xl font-semibold">{data.taskCounts?.failed ?? 0}</h2>
          <h3 className="text-xl font-medium">Failed</h3>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumbers
*/