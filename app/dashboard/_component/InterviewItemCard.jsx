import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'



function InterviewItemCard({interview}) {

  const router=useRouter();

const onStart=()=>{
  router.push('/dashboard/interview/'+interview?.mockId)
}

const onFeedback=()=>{
  router.push('/dashboard/interview/'+interview?.mockId+'/feedback')
}

  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-purple-700' >{interview?.jobPosition} </h2>
        <h2 className='text-sm text-gray-600' >{interview?.jobExperience} Years of Experience </h2>
        <h2 className='text-xs text-gray-400' > Created At:{interview.createdAt} </h2>
        <div className='flex justify-between mt-2 gap-3'>
          
          <Button size="sm" variant="outline" className="w-full  "  onClick={onFeedback} >Feedback</Button>
          <Button size="sm" className="w-full bg-purple-700"  onClick={onStart} >Re-Attempt</Button>
        </div>

    </div>
  )
}

export default InterviewItemCard