const items = [
  {
    name: "Aarav Mehta",
    title: "Software Engineer, Infosys",
    image: "/college-boy-black.png",
    body: "MockMate helped me polish my interview answers and get real-time feedback. After just a week of practice, I cracked two interviews back to back!",
  },
  {
    name: "Sneha Iyer",
    title: "UI/UX Designer, Zoho",
    image: "/student-girl.png",
    body: "As a fresh graduate, I lacked confidence. MockMate gave me realistic mock interviews and personalized tips. I finally felt ready—and I landed my dream job!",
  },
  {
    name: "Rajiv Nair",
    title: "Senior Developer, TCS",
    image: "/indian-men-thinking.png",
    body: "MockMate’s tech interview prep is solid. I used it to prep for a role switch to backend development and aced my internal interviews.",
  },
  {
    name: "Priya Sharma",
    title: "Product Analyst, Flipkart",
    image: "/girl-handbag.png",
    body: "MockMate helped me track my progress with clear analytics after each mock session. It made a huge difference in my preparation strategy.",
  },
];

  
  export default function Testimonial() {
    return (
      <div className="relative flex flex-col py-5 w-full items-center bg-purple-100  ">
        <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-purple-900">Happy Users</h1>
        <p className="text-lg text-gray-600 mt-2">who transformed their interview prep with MockMate</p>
      </div>
        
        
        <div className="relative flex max-w-[100vw] overflow-hidden py-5 ">
          
          <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-full px-2.5">
                
                <div className="relative h-full w-[28rem] rounded-2xl border border-purple-600 bg-white/10 px-8 py-6 bg-slate-50 shadow-lg ">
                  <div className="pb-4 font-light text-black">{item.body}</div>
  
                  <div className="mt-auto flex items-center gap-4">
                    <img src={item.image} className="h-9 w-9 rounded-full" />
  
                    <div className="flex flex-col text-sm">
                      <div className="text-black">{item.name}</div>
  
                      <div className="text-black">{item.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  