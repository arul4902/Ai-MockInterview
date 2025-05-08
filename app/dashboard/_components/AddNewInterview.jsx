"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/GeminiAIModel";
import { BriefcaseBusiness, Plus, Sparkles, LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const { user } = useUser();
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setjobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);
    
    const InputPrompt =
      "Job Position: " +
      jobPosition +
      ", Job Description: " +
      jobDesc +
      ", Years of Experience: " +
      jobExperience +
      ".Depend on the job Position, Job Description and Years of Experience, give us " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview questions along with the answers in JSON format.Always generate JSON format withoutmost accuracy so that i can parse it using JSON.parse() method. Everytime Result should only contain array of questions and answers in JSON format nothing other than that.";

    const result = await chatSession.sendMessage(InputPrompt);
    console.log("result Response :"+result.response.text());
    const mockJSONResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "").trim();
    console.log("MOCK JSON RESPONSE::::::::/n"+mockJSONResp);
    setJsonResponse(mockJSONResp);
    if (mockJSONResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: mockJSONResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-YYYY HH:mm:ss"),
        })
        .returning({ mockId: MockInterview.mockId });
      console.log("Inserted ID: ", resp);
      if (resp) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    } else console.log("Error in generating JSON response");
    setLoading(false);
  };

  return (
    <div className="w-full">
      <div
        className="p-8 border rounded-xl bg-gradient-to-br from-card to-background hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-2 h-full min-h-[180px] group"
        onClick={() => setOpenDialog(true)}
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          <Plus className="text-primary w-6 h-6" />
        </div>
        <h2 className="font-semibold text-lg mt-2">Create New Interview</h2>
        <p className="text-sm text-muted-foreground text-center">
          Set up a custom interview based on job requirements
        </p>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-xl sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-2">
              <BriefcaseBusiness className="w-5 h-5 text-primary" />
              New Mock Interview
            </DialogTitle>
            <DialogDescription>
              Create a personalized interview based on job requirements
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={onSubmit} className="space-y-5 mt-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Role/Position</label>
                <Input
                  placeholder="e.g. Full Stack Developer"
                  required
                  onChange={(e) => setJobPosition(e.target.value)}
                  className="focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Description/Tech Stack</label>
                <Textarea
                  placeholder="e.g. React, Angular, Node.js, MySQL, etc."
                  required
                  onChange={(e) => setJobDesc(e.target.value)}
                  className="min-h-[100px] focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Years of Experience</label>
                <Input
                  placeholder="e.g. 2, 4"
                  type="number"
                  max="50"
                  required
                  onChange={(e) => setjobExperience(e.target.value)}
                  className="focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            
            <div className="flex gap-3 justify-end pt-3 border-t">
              <Button
                variant="outline"
                onClick={() => setOpenDialog(false)}
                type="button"
                className="transition-all"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={loading}
                className="min-w-[160px] transition-all hover:shadow-md"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <LoaderCircle className="animate-spin w-4 h-4" />
                    <span>Generating...</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </div>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Start Interview
                  </span>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;