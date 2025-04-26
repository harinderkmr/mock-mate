"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (user) await GetInterviewList();
    };
    fetchData();
  }, [user]);

  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)) // ✅ FIXED
      .orderBy(desc(MockInterview.id));

    console.log("Fetched Interviews:", result);
    setInterviewList(result);
  };

  return (
    <div  >
      <h2 className="font-medium text-xl text-purple-900 mt-4 mb-3">Previous Mock Interviews</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-5">
        {interviewList.length > 0 ? (
          interviewList.map((Interview) => (
            <InterviewItemCard key={Interview.id} interview={Interview} /> // ✅ FIXED
          ))
        ) : (
          <p>No interviews found.</p>
        )}
      </div>
    </div>
  );
}

export default InterviewList;
