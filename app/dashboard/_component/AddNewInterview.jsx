"use client";
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { v4 as uuidv4 } from 'uuid';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/GeminiAIModal';
import { LoaderCircle } from 'lucide-react';
import moment from 'moment/moment';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';

function AddNewInterview() {
  // State management for form inputs and UI behavior
  const [openDailog, setOpenDailog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobdesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  
  // Hooks for navigation and user authentication
  const router = useRouter();
  const { user } = useUser();

  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true
    
    //console.log(jobPosition, jobdesc, jobExperience);

    // Construct AI prompt for interview questions
    const inputPrompt = `job profile: ${jobPosition}, job Description: ${jobdesc}, years of experience: ${jobExperience}, depends on this information please give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions with answers in json format, give question and answers as field in json`;

    // Send request to AI model
    const result = await chatSession.sendMessage(inputPrompt);
    
    // Process AI response
    const MockjsonResp = result.response.text().replace('```json', '').replace('```', '').trim();
    const parsedData = JSON.parse(MockjsonResp);
    console.log(parsedData);
    
    setJsonResponse(parsedData);
    
    if (parsedData) {
      // Insert data into database
      const resp = await db.insert(MockInterview).values({
        mockId: uuidv4(),
        jsonMockResp: MockjsonResp,
        jobPosition: jobPosition,
        jobDesc: jobdesc,
        jobExperience: jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY')
      }).returning({ mockId: MockInterview.mockId });
      
      //console.log("Inserted ID:", resp);
      
      // Navigate to interview details page if insertion is successful
      if (resp) {
        setOpenDailog(false);
        router.push('/dashboard/interview/' + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }
    
    setLoading(false);
  };

  return (
    <div>
      {/* Button to open the dialog for adding a new interview */}
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDailog(true)}
      >
        <h2 className="text-center"> +Add New </h2>
      </div>
      
      {/* Dialog component for adding job details */}
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tell us more about the Job you are interviewing for</DialogTitle>
            
            <form onSubmit={onSubmit}>
              <div>
                <h2>Add details about your job position, job description, and years of experience</h2>
                
                {/* Job Position Input */}
                <div className='mt-7 my-2'>
                  <label> Job Role/Job Position</label>
                  <Input placeholder="Ex. Full Stack Developer" required onChange={(event) => setJobPosition(event.target.value)} />
                </div>
                
                {/* Job Description Input */}
                <div className='my-3'>
                  <label> Job Description/ Tech Stack</label>
                  <Textarea placeholder="Ex. React, Angular, Node.js, MySQL, etc." required onChange={(event) => setJobDesc(event.target.value)} />
                </div>
                
                {/* Years of Experience Input */}
                <div className='my-3'>
                  <label> Years of experience</label>
                  <Input placeholder="Ex. 5" type='number' required max="50" onChange={(event) => setJobExperience(event.target.value)} />
                </div>
              </div>
              
              {/* Form action buttons */}
              <div className='flex gap-5 justify-end'>
                <Button type="button" variant="ghost" onClick={() => setOpenDailog(false)}>Cancel</Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <LoaderCircle className='animate-spin'/> 'Generating From AI'
                    </>
                  ) : ('Start Interview')}
                </Button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
