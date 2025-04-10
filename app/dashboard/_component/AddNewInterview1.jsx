"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { v4 as uuidv4 } from 'uuid';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import moment from 'moment/moment';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false)
  const [jobPosition, setJobPosition] = useState()
  const [jobDesc, setJobDesc] = useState()
  const [jobExperience, setJobExperience] = useState()
  const [loading, setLoading] = useState(false)
  const [jsonResponse, setJsonResponse] = useState([])
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault()
    console.log(jobPosition, jobDesc, jobExperience);

    const inputPrompt = "job profile: " + jobPosition + ", job Description: " + jobDesc + ", years of experience:" + jobExperience + ", depends on this information please give me " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview questions with answers in json format, give question and answers as field in json"

    const result = await chatSession.sendMessage(inputPrompt);
    const MockjsonResp = (result.response.text()).replace('```json', '').replace('```', '');
    const cleanedResp = MockjsonResp.trim(); // Removes unwanted spaces or text
    const parsedData = JSON.parse(cleanedResp);
    console.log(parsedData);

    // console.log(JSON.parse(MockjsonResp));
    setJsonResponse(parsedData);

    if (parsedData) {
      try {
        const resp = await db.insert(MockInterview).values({
          mockId: uuidv4(),
          jsonMockResp: MockjsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-YYYY')
        }).returning({ mockId: MockInterview.mockId });
        console.log("Inserted ID:", resp);
        if (resp) {
          setOpenDialog(false);
          router.push('/dashboard/interview/' + resp[0]?.mockId)
        }
      } catch (error) {
        console.error("Database insert error:", error);
      }
    }
    else {
      console.log("ERROR");
    }

    setLoading(false);

  }
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-center"> +Add New </h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tell us more about Job you are interviewing</DialogTitle>
            {/* <DialogDescription> */}
              <form onSubmit={onSubmit}>
                <div>
                <h2>Add Details about your job Position/role, Job Description and years of experience</h2>
                <div className='mt-7 my-2'>
                  <label> Job Role/Job Position</label>
                  <Input placeholder="Ex. Full Stack Developer" required
                  onChange={(event) => setJobPosition(event.target.value)} />
                </div>
                <div className='my-3'>
                  <label> Job Description/ Tech Stack</label>
                  <Textarea placeholder="Ex. React,Angular,Node.js, Mysql etc" required
                  onChange={(event) => setJobDesc(event.target.value)} />
                </div>
                <div className='my-3'>
                  <label> Years of experience</label>
                  <Input placeholder="Ex. 5" type='number' required max="50"
                  onChange={(event) => setJobExperience(event.target.value)} />
                </div>
              </div>
              <div className='flex gap-5 justify-end'>
                <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button type="submit" disabled={loading} >
                  {loading ?
                  <>
                  <LoaderCircle className='animate-spin' />'Generating From AI'
                  </> : 'Start Interview'
                  }
                  </Button>
              </div>
              </form>
              
            {/* </DialogDescription> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview