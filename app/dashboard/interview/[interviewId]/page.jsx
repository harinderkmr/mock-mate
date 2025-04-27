"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import Webcam from 'react-webcam';

function Interview({params}) {
    const resolvedParams = use(params); // Unwrap Promise

    const [interviewData, setInterviewData]=useState(null);
    const [webCamEnabled,setWebCamEnabled]=useState(false)

    useEffect(()=>{
        console.log(resolvedParams.interviewId)
        GetInterviewDetails();
    },[])

    // -----------------------------------------------------
    // used to get interview details by mockid/interviewId
    // -----------------------------------------------------
    const GetInterviewDetails = async () => {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, resolvedParams.interviewId));

      console.log("Query Result:", result);

      if (!result.length) {
        console.error("No interview data found!");
        return;
      }

      console.log("First Entry:", result[0]);
      setInterviewData(result[0]); // ✅ Updates state safely
    };


    useEffect(() => {
        if (interviewData) {
          console.log("Updated interviewData:", interviewData);
          console.log("Job Position:", interviewData.jobPosition);
        }
      }, [interviewData]); // ✅ Runs when `interviewData` updates

return (
    <div className='container mx-auto mt-10 px-6 '>
        <h2 className=' text-2xl text-purple-900 font-bold'>Let's Get Start</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>

            <div className='flex flex-col my-5 gap-5 p-5 rounded-lg border bg-purple-100 shadow-lg'>
                <div className='flex flex-col p-5 rounded-lg border border-purple-200 gap-5 bg-purple-200 shadow-lg '>
                    {interviewData ? (
                        <> {/* ✅ Wrap elements inside Fragment */}
                        <h2 className='text-lg text-purple-900'><strong>Job Role/Job Position:</strong> {interviewData.jobPosition}</h2>
                        <h2 className='text-lg text-purple-900'><strong>Job Description/Tech Stack:</strong> {interviewData.jobDesc}</h2>
                        <h2 className='text-lg text-purple-900'><strong>Years of Experience:</strong> {interviewData.jobExperience}</h2>
                        </>
                        ):
                        (
                        <p>Loading...</p>
                    )}
                </div>

                
                <div className='p-5 bg-yellow-100 border rounded-lg border-yellow-300 '>
                    <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
                    <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                </div>
            </div>
            <div>
                {webCamEnabled? <Webcam
                onUserMedia={()=>setWebCamEnabled(true)}
                onUserMediaError={()=>setWebCamEnabled(false)}
                mirrored={true}
                style={{
                    height:300,
                    width:300
                }}
                />:
                <>
                <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border '/>
                <Button variant="ghost " className=" border bg-secondary hover:bg-green-400 " onClick={()=>setWebCamEnabled(true)} >Enable Web Cam and Microphone</Button>
                </>
                }
            </div>
        </div>
        <div className='flex justify-end items-end'>
            {/* <Link href={'/dashboard/interview/'+params.interviewId+'/start'}> */}
            <Link href={`/dashboard/interview/${resolvedParams.interviewId}/start`}>
            <Button>Start Interview</Button>
            </Link>
        </div>
    </div>
    )
}

export default Interview