import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { 
  ArrowRight, 
  Brain, 
  Clock, 
  LineChart, 
  MessageSquare, 
  Star, 
  Target,
  UserCheck
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Image 
        src={'/grid.svg'} 
        className="absolute z-[-10] w-full" 
        width={1200} 
        height={300} 
        alt="Background grid"
      />
      <Header/>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 relative">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="inline-flex items-center py-1 px-3 mb-6 text-sm bg-primary/10 text-primary rounded-full">
            <span className="font-medium">New AI-powered features released</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate-fadeIn">
            Your Personal <span className="text-primary">AI Interview Coach</span>
          </h1>
          
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl max-w-3xl mx-auto dark:text-gray-400">
            Double your chances of landing that job offer with our AI-powered interview preparation that adapts to your experience, industry, and target role.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
           
          </div>
          
          <div className="flex justify-center items-center gap-8 mt-12">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
              <span className="text-sm text-gray-500 ml-2">4.9/5 from 200+ reviews</span>
            </div>
            <div className="h-6 border-l border-gray-300 hidden sm:block"></div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">Trusted by 10,000+ job seekers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our AI Interview Coach?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our platform uses advanced AI to simulate realistic interviews and provide personalized feedback
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-500">
                Get detailed feedback on your responses, body language, and speaking pace from our advanced AI system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry-Specific Practice</h3>
              <p className="text-gray-500">
                Practice with questions tailored to your industry, role, and experience level for more relevant preparation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice Anytime</h3>
              <p className="text-gray-500">
                No scheduling hassles—practice whenever you want, as many times as you need before your interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Everything you need to ace your next interview
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mock Interviews</h3>
                <p className="text-gray-500">
                  Participate in realistic interview simulations with common and challenging questions for your role.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Feedback</h3>
                <p className="text-gray-500">
                  Receive detailed assessments on your answers, delivery, and areas for improvement.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-gray-500">
                  Monitor your improvement over time with comprehensive analytics and performance metrics.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Answer Suggestions</h3>
                <p className="text-gray-500">
                  Get AI-generated examples of strong answers to help you craft your own winning responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to ace your next interview?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start practicing now and increase your chances of landing your dream job
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary" className="group">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-4">AI Interview Coach</h3>
            <p className="text-gray-400 mb-4">
              Helping job seekers prepare and succeed in interviews with AI-powered coaching.
            </p>
            <p className="text-gray-400">© {new Date().getFullYear()} AI Interview Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}