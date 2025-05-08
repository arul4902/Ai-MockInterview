"use client";
import React, { useEffect, useState } from 'react';
import { MockInterview } from '@/utils/schema';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { Button } from '@/components/ui/button';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import Link from 'next/link';

const StartInterview = ({ params }) => {
    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    useEffect(() => {
        GetInterviewDetails();
    }, []);

    /**
     * Used to Get Interview Details by MockId/Interview Id
     */
    const GetInterviewDetails = async () => {
        try {
            const result = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId));

            if (result[0] && result[0].jsonMockResp) {
                // Handle any unwanted characters before parsing the JSON string
                const jsonString = result[0].jsonMockResp.trim();

                try {
                    const jsonMockResp = JSON.parse(jsonString);
                    console.log(jsonMockResp);
                    setMockInterviewQuestion(jsonMockResp);
                    setInterviewData(result[0]);
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    // Handle the error or set a fallback value
                    setMockInterviewQuestion([]);
                }
            } else {
                console.error("No JSON data found in the result.");
            }
        } catch (error) {
            console.error("Error fetching interview details:", error);
        }
    };

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Questions  */}
                <QuestionsSection
                    mockInterviewQuestion={mockInterviewQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                />

                {/* Video/ Audio Recording  */}
                <RecordAnswerSection
                    mockInterviewQuestion={mockInterviewQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                    interviewData={interviewData}
                />
            </div>
            <div className='flex justify-end gap-6'>
                {activeQuestionIndex > 0 && <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>}
                {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>Next Question</Button>}
                {activeQuestionIndex === mockInterviewQuestion?.length - 1 &&
                    <Link href={`/dashboard/interview/${params.interviewId}/feedback`}>
                        <Button>End Interview</Button>
                    </Link>}
            </div>
        </div>
    );
};

export default StartInterview;
