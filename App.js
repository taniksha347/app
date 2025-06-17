import { FaVideo, FaChalkboardTeacher, FaProjectDiagram, FaBriefcase, FaCertificate, FaInfinity } from 'react-icons/fa'; 
import { Home,Download,CheckCircle, GraduationCap, Brain, Handshake, UserCheck, DollarSign, BadgeDollarSign, Video, BookCheck, Briefcase, User} from "lucide-react";

import { useState } from "react";
import logo from "./pictures/appLogo.png"
import dhurina from "./pictures/dhurina.png"
import background from "./pictures/backg.jpg"
import one from "./pictures/one.jpg"
import two from "./pictures/two.jpg"
import three from "./pictures/three.jpg"
import four from "./pictures/four.jpg"
import sir from "./pictures/sir.png"
import Form from "./components/Form";
import Card from "./components/card";
import Button from "./components/button";
import Reviews from "./components/Reviews";
import MentorCard from "./components/MentorCard";
import QuestionCard from "./components/QuestionCard";
function App() {


  const toolsArray = [
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Adobe_Photoshop_CC_icon.svg.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-1.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/rank.png",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-1-1.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/e.webp",
    'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-3.png',
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/images-2.png",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/meta-icon.webp",
    "https://digitalchaabiacademy.com/wp-content/uploads/2024/07/174881.png",
  ];

  const ReviewsArray= [
    {
      name:'Rajesh Kumar',
      description:'Enrolling in Digital Chaabi Academy was the best decision for my business. The strategies I learned helped me increase my revenue by 50% within just six months. My business became profitable for the first time, and I owe it all to the expert guidance and practical insights from the academy.',
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-1.webp'
    },
    {
      name:'Anil Mehta',
      description:"I was able to implement advanced digital marketing techniques that boosted my client base and significantly increased my earnings. The academy's comprehensive training not only helped me grow my business but also paved the way for continuous career growth. A game-changer for digital entrepreneurs",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-3.webp'
    },
    {
      name:'Suresh Ray',
      description:"The courses are incredibly detailed and hands-on, providing me with the tools and knowledge to effectively market my business online. I've seen a substantial increase in both traffic and sales, making my business more profitable than I ever imagined. This academy is a must for anyone serious about success",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/testi-2.webp'
    },
    {
      name:'Ravneet Singh',
      description:"The courses are well-structured and cover everything you need to know about digital marketing. Not only did I advance my career, but my business also became profitable faster than I expected. The academy's focus on practical application ensures you see real results",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/person.png'
    }
  ]

  const mentors = [
    {
      name: "Ankush Mehta",
      title: "Multipreneur, Founder- Digital Chaabi Brands",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Ankush-Mehta.webp',
    },
    {
      name: "Sunil Mehta",
      title: "Admin, Healthcare & Influencer Marketing Practitioner",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/rohit-sir.webp',
    },
    {
      name: "Aryan Tiwari",
      title: "Growth Catalyst Brand Marketer",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Harsh-sir-1.webp'
    }
  ];

  const quesArray=[
    {
      title:'What sets apart the Digital Marketing program in Hisar from other programs? ',
      discription:'The Digital Marketing program in Hisar is different because it’s all about what works right here. You’ll learn practical stuff that you can use in businesses around Hisar. Plus, you’ll actually do things, not just talk about them. It’s like learning by doing, which makes it way easier to understand and remember. So, when you finish, you’ll be ready to confidently tackle any digital marketing job.',
    },
    {
      title:'How is AI technology integrated into the Digital Marketing curriculum?',
      discription:'In our Digital Marketing program, we show you how to use AI to make your marketing super effective. You’ll learn to understand data, know your customers better, and create ads that really work. It’s like having a super-smart helper by your side! So, when you finish, you’ll be ahead of the pack and impress everyone with your awesome skills.',
    },
    {
      title:'Is prior marketing experience necessary to enroll in the Digital Marketing program?',
      discription:'No, you don’t need any marketing experience to join our Digital Marketing program. We welcome beginners who are just starting, as well as those with some experience looking to level up their skills. Our program is designed to meet you where you are and help you succeed, no matter your background.',
    },
    {
      title:'What are the potential career paths after completing a Digital Marketing program in Hisar?',
      discription:'Upon completion, graduates can pursue various career paths, including direct positions such as Digital Marketing Specialist, Social Media Manager, SEO Analyst, Content Marketer, Email Marketing Manager, Paid Advertising Specialist, and Digital Marketing Strategist.',
    }
  ] 

  const trainers = [
    {
      name: "Shushmita goyal",
      title: "Multipreneur, Founder - Digital Chaabi Brands",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/a.webp',
    },
    {
      name: "Tammana Rathi",
      title: "Admin, Healthcare & Influencer Marketing Practitioner",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/renu-300x300-1.webp',
    },
    {
      name: "Rahul Jhangra",
      title: "Growth Catalyst Brand Marketer",
      img:'https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Monu-Saharan-SEO-1-1.webp',
    },
  ];
  

<Card 
                title="Sample Title" 
                description="This is a sample description for the card." 
                icon="fas fa-info-circle" // Example icon class
                buttonText="Read More" 
                className="additional-class" 
            />

  const features = [
    { text: "Access to Recorded Classes", icon: <FaVideo /> },
    { text: "Expert Live Sessions", icon: <FaChalkboardTeacher /> },
    { text: "Hands-on Projects", icon: <FaProjectDiagram /> },
    { text: "100% Job Placement Assistance", icon: <FaBriefcase /> },
    { text: "Industry Certifications", icon: <FaCertificate /> },
    { text: "Lifetime Access", icon: <FaInfinity /> },
  ];
  return (
<div className=" w-screen h-screen bg-gray-800 text-white" style={{ backgroundImage: `url(${background}`, backgroundSize:'cover', backgroundRepeat: 'no-repeat',overflowX: 'hidden'}}>
  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

    {/* First Section */}
      <section className="p-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-50 mt-10 ml-10">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Logo and Featured Section */}
            <div className="flex items-center gap-4 pl-4 w-[630px] -mt-[10px] ">
              <img
                src={logo}
                alt="Logo"
                height={100}
                width={100}
              />
              <div>
              <h1 className=" font-extrabold tracking-wider text-[40px]  px-1 -mt-[20px]">KODU</h1>
                <h6 className=" font-bold tracking-widest text-[20px] border-white border-b-2  px-1 ">CODE YOUR FUTURE</h6>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-[50px] font-semibold leading-tight">Bano Ek
              <span className="font-bold bg-gradient-to-r from-teal-600 to-red-600 bg-clip-text text-transparent"> <br /> Full Stack Developer<br /></span>
                      Sirf <span className="text-red-600 font-bold text-[60px] tracking-tighter ">95</span> DAYS mein !!
            </h1>

            {/* Collaboration Section */}
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold">In Collaboration With</p>
              <img
                src={dhurina}
                alt="SmallLogo"
                className="h-12 bg-white p-1 rounded-xl shadow shadow-white"
              />
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-2xl mt-5">
              
            </div>
          </div>
          <div className=" self-start">
          
            </div>

          {/* Form Component */}
          <Form/>
          {/* Right Content */}
        </div>
      </section>

      {/* Second Section */}
      <section className="flex justify-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {[
            { title: "100 Days", subtitle: "Duration" },
            { title: "15+ AI Tools", subtitle: "Features" },
            { title: "100% Placement", subtitle: "Assistance*" },
            { title: "Scholarship", subtitle: "Get up to 100% scholarship!" },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center p-4 rounded-lg shadow-white shadow-inner`}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="font-bold text-2xl">{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section */}
      <section className="py-5 text-center">
        <h2 className="font-bold text-5xl">Acquire Knowledge from Experienced Mentors!</h2>
        <p className="mt-4 text-2xl font-bold bg-gradient-to-r from-teal-500 to-red-700 bg-clip-text text-transparent mb-14">
        With Those Features!
    </p>
    
  

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          {/* Icon */}
          <span className="text-[22px] font-light flex items-center justify-center">
            {feature.icon} {/* Render the specific icon for each feature */}
          </span>
          <p className="shadow shadow-white p-1 rounded-md w-[350px] font-bold text-xl bg-white text-black">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  
      </section>

      {/* Fourth Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-center ">
          Voices of Our Learners → → →
          </h2>
          <p className="mt-4 text-2xl font-bold bg-gradient-to-r from-teal-500 to-red-700 bg-clip-text text-transparent mb-14">
        With Transformative Experiences!
    </p>

          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
            {/* Video 1 */}
            <div className="sm:w-1/2 lg:w-1/3 mt-[150px]">
              <iframe
                className="w-full h-64 rounded-lg shadow-white shadow border-white border-4"
                src="https://www.youtube.com/embed/5LVUXUv56nk?si=qPhpkoWhqZtOotfB"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 ml-2">
              <iframe
                className="w-full h-64 rounded-lg  shadow-white shadow border-white border-4"
                src="https://www.youtube.com/embed/RYoF2nSpoz0?si=mux7vLAlNy9UoUDv"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 mt-[300px] -ml-[387px]">
              <iframe
                className="w-full h-64 rounded-lg  shadow-white shadow border-white border-4"
                src="https://www.youtube.com/embed/oyFQ2b8kAyc?si=Zse9yREMI0cfyWRD" 
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            {/* video 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 mt-[150px]">
              <iframe
                className="w-full h-64 rounded-lg  shadow-white shadow border-white border-4"
                src="https://www.youtube.com/embed/0PlMiUWdoMI?si=Sef8cnTx4Lgn1yFf" 
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="py-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-5xl">
          Curriculum That Prepares You for Real-World Skills
          </h2>
          <p className=" mt-4 text-2xl font-bold bg-gradient-to-r from-teal-600 to-red-600 bg-clip-text text-transparent">
          With Innovative and Updated Learning Modules!
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            {[
              "WordPress Website",
              "SEO",
              "Content and Copywriting",
              "Shopify and E-Commerce",
              "Google Ads",
              "Meta Ads",
              "Influencer Marketing",
              "Communication Skills",
              "AI Integration",
              "Relationship Building",
              "Public Speaking",
              "Resume Building",
              "Interview Preparation and Mock Interviews",
              "Social Media Optimisation",
              "Graphic Designing",
            ].map((itm, idx) => (
              <Card key={idx} title={itm} buttonText={"Read More"} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { number: "180+", label: "Learning Hours" },
            { number: "13+", label: "Live Projects" },
            { number: "3", label: "Months Internship" },
          ].map((itm, idx) => (
            <div
              key={idx}
              className="bg-gray-900 w-60 h-32 flex flex-col items-center justify-center rounded-lg shadow shadow-white border-2 border-white"
            >
              <h3 className="font-bold text-5xl">{itm.number}</h3>
              <p className="font-semibold text-lg">{itm.label}</p>
            </div>
          ))}
        </div>

        {/* Download Brochure Button */}
        <div className="flex justify-center mt-10">
        
          <Button 
            className="bg-gradient-to-r from-teal-800 to-red-800 text-white py-3 px-6 rounded-lg text-2xl 
                 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:-translate-y-1"
                 text={
                  <>
                      <i className="fas fa-download"></i> {/* Font Awesome Icon */}
                      <span className="ml-2">{/* Add some margin to the left of the text */}
                          Download Brochure
                      </span>
                  </>
              }
            
          />
        </div>

      </section>
      <section>
    <div className="flex flex-col items-center">
    <h2 className="font-bold text-5xl">Join this program if you are a</h2>

    <div className="flex flex-wrap grid-cols-2 gap-7 justify-center">
        {[
            {
                title: "Student & Recent Graduate",
                description:
                    "Grab Your 1st Job with the help of our AI-powered marketing course and kickstart your career now",
            },
            {
                title: "Marketing Enthusiast",
                description:
                    "Level up your skills and master advanced marketing strategies with our practical skill-based course",
            },
            {
                title: "Entrepreneur",
                description:
                    "Don’t wait anymore, grow your business success with practical insights and actionable strategies.",
            },
            {
                title: "Freelancer",
                description:
                    "Maximize your freelancing revenue with our specialized strategies and expert guidance.",
            },
        ].map((itm, idx) => (
            <div className=" mt-10 shadow-white border-4 border-white shadow-inner w-[300px] h-[250px]" key={idx}>
                <Card title={itm.title} description={itm.description} />
            </div>
        ))}
    </div>
</div>
      </section>

      {/* Seventh Section */}
      <section>
        <div className="flex flex-col items-center mt-10">
          <h1 className="font-bold text-5xl">
            Pleasure to Meet Few Known Faces
          </h1>
          <div className="flex mt-8 gap-0.5">
            <img
              src={two}
              alt=""
              className="shadow-white shadow border-white border-4 h-80 rounded-2xl"
            />
            <img
              src={one}
              alt=""
              className="shadow-white shadow border-white border-4 h-80 rounded-2xl mx-4"
            />
            <img
              src={four}
              alt=""
              className="shadow-white shadow border-white border-4 h-80 rounded-2xl mx-4"
            />
            <img
              src={three}
              alt=""
              className="shadow-white shadow border-white border-4 h-80  rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Eighth Section */}
      <section>
        {/* <div className="flex flex-col items-center mt-8">
          <h1 className="font-bold mb-10 text-5xl">Expected Outcomes</h1>
          <div className="flex flex-wrap grid-cols-2 justify-center items-center">
            {[
              {
                title: "State Your Own Business",
                description:
                  "Have the freedom to make decisions, set your direction, and start a business that is your dream and inspires you most.",
              },
              {
                title: "Get Your First Job",
                description:
                  "With 100% Job Placement Assistance, you’re not just preparing for a job but opening your door for endless career opportunities.",
              },
              {
                title: "Be A Transformed Personality",
                description:
                  "Transform Your Personality and become corporate-ready. We focus on training you with essential soft skills and interview-cracking hacks.",
              },
              {
                title: "Start Your Career as an Influencer",
                description:
                  "Become a famous face and learn how to create engaging content that helps you build an audience and personal brand.",
              },
            ].map((itm, idx) => (
              <div key={idx}>
                <Card
                  title={itm.title}
                  description={itm.description}
                  className={"hover:border-1"}
                />
              </div>
            ))}
          </div>
        </div> */}


    <div className="flex flex-col items-center mt-8">
        <h1 className="font-bold mb-10 text-5xl">Expected Outcomes</h1>
        <div className="flex flex-wrap justify-center items-center gap-8"> {/* Added gap for spacing */}
            {[
                {
                    title: "State Your Own Business",
                    description:
                        "Have the freedom to make decisions, set your direction, and start a business that is your dream and inspires you most.",
                },
                {
                    title: "Get Your First Job",
                    description:
                        "With 100% Job Placement Assistance, you’re not just preparing for a job but opening your door for endless career opportunities.",
                },
                {
                    title: "Be A Transformed Personality",
                    description:
                        "Transform Your Personality and become corporate-ready. We focus on training you with essential soft skills and interview-cracking hacks.",
                },
                {
                    title: "Start Your Career as an Influencer",
                    description:
                        "Become a famous face and learn how to create engaging content that helps you build an audience and personal brand.",
                },
            ].map((itm, idx) => (
                <div key={idx} className="w-[200px] h-[300px] -p-[20px]"> {/* Set a fixed width for cards */}
                    <Card
                        title={itm.title}
                        description={itm.description}
                        className="hover:shadow-lg transition-shadow duration-300" // Added hover effect
                    />
                </div>
            ))}
        </div>
    </div>

      </section>

      {/* Ninth Section */}

      <section className="py-10">
        <div className="flex justify-center">
          <h1 className="font-bold text-5xl mb-12 mt-5">
          Build a Successful Career with Kodu Academy
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto rounded-2xl">
          {/* Left Side */}
          <div className="flex flex-col items-center text-center gap-6 max-w-sm mt-[50px]">
            <div className='h-[130px] border-4 border-white bg-gradient-to-l from-black to-orange-500 p-2 rounded-sm shadow-[0_4px_20px_rgba(255,255,255,0.5)] my-4  bg-transparent '>
              <h4 className="text-2xl font-bold">Industry-Driven Projects</h4>
              <p className="text-gray-300 mt-2">
                Get hands-on experience through projects sponsored by industry
                leaders for your career.
              </p>
            </div>
            <div className='h-[130px] bg-gradient-to-r from-black to-orange-500 p-2 rounded-sm shadow-[0_4px_20px_rgba(255,255,255,0.5)] border-4 border-white my-4  bg-transparent '>
              <h4 className="text-2xl font-bold">Mentorship Program</h4>
              <p className="text-gray-300 mt-2">
                Receive guidance from industry mentors who provide valuable
                advice, ensuring you have the best support.
              </p>
            </div>
          </div>

          {/* Image in Center */}
          <div className="w-60 h-60 flex-shrink-0 -mt-[255px]">
            <img
              src={sir}
              alt="Teacher"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center text-center gap-6 max-w-sm mt-[50px]">
          <div className='h-[130px] bg-gradient-to-l from-black to-orange-500 p-2 rounded-sm shadow-[0_4px_20px_rgba(255,255,255,0.5)] border-4 border-white my-4  bg-transparent '>
              <h4 className="text-2xl font-bold">Internship Opportunities</h4>
              <p className="text-gray-300 mt-2">
                Access strategic internships for career-boosting hands-on
                experience and professional growth.
              </p>
            </div>
            <div className='h-[130px] bg-gradient-to-r from-black to-orange-500 p-2 rounded-sm shadow-[0_4px_20px_rgba(255,255,255,0.5)] border-4 border-white my-4  bg-transparent '>
              <h4 className="text-2xl font-bold">1 to 1 Career Counseling</h4>
              <p className="text-gray-300 mt-2">
                Receive personalized career counseling sessions to identify your
                strengths, interests, and career goals.
              </p>
            </div>
          </div>
        </div>

        <div>
                  <div className="flex justify-center mt-[160px]">
                    <h2 className="font-bold text-5xl">Our Brands: A Legacy of Excellence</h2>
                  </div>
                  <div className="flex justify-center gap-5 mt-5 overflow-hidden">
            <style>
                {`
                    @keyframes scroll-left {
                        0% {
                            transform: translateX(100%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .scroll-container {
                        display: flex;
                        animation: scroll-left 30s linear infinite; /* Adjust duration as needed */
                    }
                `}
            </style>
            <div className="scroll-container flex">
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-55.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-57.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-52.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-51.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-53.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-54.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-56.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2025/03/inklik_logo-1.png"
                    alt=""
                    className="h-[120px]"
                />

            </div>
        </div>
                </div>
              </section>
        
              {/* Tenth Section */}
        
              <section>
                <div className="flex flex-col items-center mt-3 justify-center">
                  <h2 className="font-bold text-5xl border-y-4 py-4 px-2 border-white shadow-white shadow">
                    Internships & Placements for Your Success
                  </h2>
                  <p className="font-normal shadow shadow-slate-400 w-250 mt-7 text-center py-4 px-2 tracking-wide w-[1200px]" style={{
                backgroundColor: 'rgba(255,255,255,0.3)'
            }} >
                    We go beyond education—we build careers! Our students have
                    successfully secured internships and placements in top companies,
                    gaining hands-on experience and industry insights. With our strong
                    network and dedicated support, we ensure you get the right
                    opportunities to grow and succeed. Start your journey with us and
                    step into a brighter future!
                  </p>
                </div>
        
                <div>
                               <div className="flex justify-center gap-5 mt-5 overflow-hidden">
            <style>
                {`
                    @keyframes scroll-right {
                        0% {
                            transform: translateX(-100%);
                        }
                        100% {
                            transform: translateX(100%);
                        }
                    }

                    .scroll-container-right {
                        display: flex;
                        animation: scroll-right 30s linear infinite; /* Adjust duration as needed */
                    }
                `}
            </style>
            <div className="scroll-container-right flex">
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-55.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-57.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-52.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-51.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-53.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-54.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-56.png"
                    alt=""
                    className="h-[120px]"
                />
                <img
                    src="https://digitalchaabiacademy.com/wp-content/uploads/2025/03/inklik_logo-1.png"
                    alt=""
                    className="h-[120px]"
                />

            </div>
        </div>
                </div>
              </section>
        
              {/* Eleventh Section */}
        
              <section>
                <div className="flex flex-col items-center gap-5 mt-5">
                  <h2 className="font-bold text-5xl mt-16">Master a Toolkit of 20+ Tools</h2>
                  <p className=" mb-14 text-2xl font-bold bg-gradient-to-r from-teal-600 to-red-600 bg-clip-text text-transparent">
          And Become a Pro Full Stack Developer
          </p>
        
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 ">
                    {toolsArray.map((itm, idx) => (
                      <div
                        key={idx}
                        className="p-8 shadow-white shadow-inner border-4 border-white  flex justify-center items-center rounded-3xl w-[180px]"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.6)'
                      }}
                      >
                        <img src={itm} alt="Tools Logo" className="h-[90px] w-[90px]  rounded-3xl " />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
        
              {/* Twelth Section */}
        
              <section>
                <div className="flex flex-col items-center justify-center h-80 mt-12 rounded-2xl w-screen" 
                style={{
                  background: 'linear-gradient(to right, rgba(0, 121, 107, 0.7), rgba(220, 38, 38, 0.6))',
              }}>
        
                  <h2 className="font-bold text-4xl w-6xl text-center">Get 30% Off Fees Today — Limited Availability ~ Inquire Now !!!</h2>
                  <Button text={'Enquire Now'} className={'bg-gradient-to-l from-teal-800  to-teal-200 bold text-2xl mt-8 '} icon={<CheckCircle className="mt-1.5"/>}/>
                  <p className="font-semibold mt-5 tracking-widest">Don't Wait: 21 Seats Still Up for Grabs!</p>
                </div>
              </section>
        
              {/* Thirteenth Section */}
        
              <section >
                <h2 className="text-center font-bold text-5xl mt-12 mb-8">What our students say!</h2>
                <div className="flex">
                  {
                    ReviewsArray.map((itm,idx)=>(
                      <div key={idx}>
                        <Reviews name={itm.name} description={itm.description} img={itm.img}/>
                      </div>
                    ))
                  }
                </div>
              </section>
        
              {/* Fourteenth Section */}
        
              <section>
                <div className="h-120 bg-gray-800 shadow-white shadow-[0px_-2px_5px_rgba(34,197,94,0.6)]">
        
                  <div className="flex justify-center mt-7 py-10 gap-8">
        
                    <div className="flex flex-col w-122 gap-5 -ml-[40px] mr-[100px]">
                      <h2 className="font-semibold text-5xl pt-12 ">Get certified with a <br/>verifiable certificates.</h2>
                      <p className="font-serif ">We will also assist you with getting certificates from Google,<br/> Meta, Semrush, and more.</p>
                      <div className="flex flex-col w-52 items-center gap-5 ml-4 ml-[100px]">
                      <Button 
            className="w-[350px] bg-gradient-to-r from-teal-800 to-red-800 text-white py-3 px-6 rounded-lg text-2xl 
                 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:-translate-y-1"
                 text={
                  <>
                      <i className="fas fa-download"></i> {/* Font Awesome Icon */}
                      <span className="ml-2">{/* Add some margin to the left of the text */}
                          Download Brochure
                      </span>
                  </>
              }
            
          />
                      </div>
        
                    </div>
                    {/* Certificate Section */}
        
                    <img src="https://digitalchaabiacademy.com/wp-content/uploads/2024/07/Untitled-design-63-1.webp" alt="Certificate"
                    className="h-[300px] w-[500px] shadow-white shadow border-2 border-white p-2" />
                  </div>
        
                </div>
              </section>
        
              {/* Fifteenth Section */}
        
              <section>
                <h2 className="font-semibold text-5xl text-center text-slate-100 mt-8">Learn from top Industry Experts</h2>
                <div className="flex flex-col items-center mt-5">
                  <h4 className=" flex gap-5 text-3xl mb-5 mt-3 border-white border-y-2 p-2">Our <p className="text-3xl font-bold tracking-widest">MENTORS</p></h4>
                  <div className="flex grid-cols-4 gap-7 ">
                    {
                      mentors.map((itm,idx)=>(
                        <div key={idx}>
                          <MentorCard name={itm.name} title={itm.title} img={itm.img}/>
                        </div>
                      ))
                    }
        
                  </div>          
                  <h4 className=" flex gap-5 text-3xl mb-5  border-white border-y-2 p-2">Our <p className="text-3xl font-bold tracking-widest">TRAINERS</p></h4>
        
                  <div className="flex grid-cols-4 gap-7">
                    {
                      trainers.map((itm,idx)=>(
                        <div key={idx}>
                          <MentorCard name={itm.name} title={itm.title} img={itm.img}/>
                        </div>
                      ))
                    }
        
                  </div> 
                </div>
              </section>
        
              {/* Sixtinth Section */}
        
              <section>
                <div className="flex flex-col items-center mb-8 gap-12">
        
                <h1 className="font-bold text-5xl">Frequently Asked Questions</h1>
        
                {
                  quesArray.map((itm,idx)=>(
                    <div key={idx}>
                      <QuestionCard title={itm.title} discription={itm.discription}/>
                    </div>
                  ))
                }
        
        
                {/* left content of questions here.... */}
        
                <Button 
            className="w-[350px] bg-gradient-to-r from-teal-800 to-red-800 text-white py-3 px-6 rounded-lg text-2xl 
                 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:-translate-y-1"
                 text={
                  <>
                      <i className="fas fa-download"></i> {/* Font Awesome Icon */}
                      <span className="ml-2">{/* Add some margin to the left of the text */}
                          Download Brochure
                      </span>
                  </>
              }
            
          />
                </div>
              </section>
        
              {/* Seventeenth Section */}
        
              <section>
                <div className="flex flex-col items-center  h-80 pt-15" style={{
                  background: 'linear-gradient(to left, rgba(0, 121, 107, 0.7), rgba(220, 38, 38, 0.6))',
              }}>
                <h2 className="text-center font-bold text-5xl py-[60px] w-180">Launch Your Career in Full Stack Development!</h2>
                <Button text={'BOOK MY SEAT'} className={'text-2xl bg-gradient-to-r from-black to-red-300 text-whiteflex flex-row gap-3'} icon={<CheckCircle className="mt-1.5"/>}/>
                </div>
              </section>
            </div>
          );
        }

export default App;
