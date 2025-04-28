"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Code,
  Database,
  Github,
  Linkedin,
  Loader,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Check if any field is empty

    if (
      !formState.name ||
      !formState.email ||
      !formState.subject ||
      !formState.message
    ) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;

    const templateParams = {
      name: formState.name,
      email: formState.email,
      subject: formState.subject,
      message: formState.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Message sent successfully! ✅");

      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  };
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-purple-500" />
              <span className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Areesha Tariq
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            {/* <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link> */}
            <Link
              href="https://www.linkedin.com/in/areesha-tariq-795b92222"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Button
              variant="outline"
              className="ml-4 hidden md:flex border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12  bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                    Machine Learning Engineer
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Building intelligent systems that learn and adapt.
                    Specializing in deep learning, computer vision, and natural
                    language processing.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#projects">
                    <Button
                      variant="outline"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-700 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50"
                    >
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[550px] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl shadow-purple-500/10">
                  <Image
                    src="/images/hero.png"
                    width={600}
                    height={550}
                    alt="Hero Image showing AI visualization"
                    className="rounded-2xl object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6 text-justify">
                  I'm Areesha, a confident learner and passionate
                  problem-solver, with a strong background in software and a
                  growing love for intelligent technologies. Starting with a
                  foundation in Software Engineering, I quickly found my
                  interest moving toward AI and Machine Learning. I love working
                  on projects where machines can learn, adapt, and understand
                  the world better.
                </p>
                <p className="text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
                  My journey with Natural Language Processing (NLP) has been
                  especially exciting — exploring how machines can understand,
                  process, and even generate human language opened up a whole
                  new side of tech for me. Whether it’s building ML models,
                  analyzing data, working on NLP tasks, or leading a project,
                  I’m always ready to take on challenges with energy,
                  confidence, and focus.
                </p>
              </div>
            </div>
            {/* <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-500 mb-4">
                  <Database className="h-5 w-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">Data Science</h3>
                  <p className="text-zinc-400">
                    Experienced in data analysis, visualization, and statistical
                    modeling to extract meaningful insights from complex
                    datasets.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 mb-4">
                  <Brain className="h-5 w-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">
                    Deep Learning
                  </h3>
                  <p className="text-zinc-400">
                    Specialized in neural networks, computer vision, and natural
                    language processing for building intelligent applications.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 mb-4">
                  <Code className="h-5 w-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-white">
                    Software Engineering
                  </h3>
                  <p className="text-zinc-400">
                    Strong programming skills with experience in developing and
                    deploying machine learning models to production.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute bottom-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Skills & Expertise
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My technical toolkit spans across various domains of machine
                  learning and software development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-950 border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardHeader>
                  <CardTitle className="text-white">Machine Learning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Supervised Learning
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Unsupervised Learning
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Reinforcement Learning
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Feature Engineering
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Model Evaluation
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Hyperparameter Tuning
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-zinc-950 border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                <CardHeader>
                  <CardTitle className="text-white">Deep Learning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    Neural Networks
                  </Badge>
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    CNN
                  </Badge>
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    RNN/LSTM
                  </Badge>
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    Transformers
                  </Badge>
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    GANs
                  </Badge>
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    Transfer Learning
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-zinc-950 border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <CardTitle className="text-white">Computer Vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/20">
                    Image Classification
                  </Badge>
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/20">
                    Object Detection
                  </Badge>
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/20">
                    Segmentation
                  </Badge>
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/20">
                    Face Recognition
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-zinc-950 border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardHeader>
                  <CardTitle className="text-white">NLP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Text Classification
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Named Entity Recognition
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Sentiment Analysis
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Language Modeling
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    BERT/GPT
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20">
                    Hugging Face
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-zinc-950 border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                <CardHeader>
                  <CardTitle className="text-white">Programming</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    Python
                  </Badge>

                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    SQL
                  </Badge>
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    JavaScript
                  </Badge>
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    C++
                  </Badge>
                  <Badge className="bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20">
                    Java
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-zinc-950 border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <CardTitle className="text-white">
                    Tools & Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/20">
                    TensorFlow
                  </Badge>
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/20">
                    PyTorch
                  </Badge>
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/20">
                    Scikit-learn
                  </Badge>
                  <Badge className="bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 border-cyan-500/20">
                    Pandas
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent work in machine learning and
                  artificial intelligence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group overflow-hidden bg-zinc-950 border-zinc-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/project1.png"
                    width={400}
                    height={200}
                    alt="Medical imaging project showing brain scan analysis"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">
                    Computer Vision for Medical Imaging
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Deep learning model for medical image analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Developed a CNN-based system for detecting abnormalities in
                    medical scans with 95% accuracy, improving diagnostic
                    capabilities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-purple-500/20 text-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden bg-zinc-950 border-zinc-800 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/project2.png"
                    width={400}
                    height={200}
                    alt="NLP chatbot interface with conversation flow"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">
                    NLP for Customer Support
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Automated response system using NLP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Built a transformer-based chatbot that handles customer
                    inquiries, reducing response time by 60% and improving
                    satisfaction.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-pink-500/20 text-pink-500 hover:bg-pink-500/10 hover:text-pink-400"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden bg-zinc-950 border-zinc-800 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/project3.png"
                    width={400}
                    height={200}
                    alt="Analytics dashboard with charts and predictions"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">
                    Predictive Analytics Platform
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Time series forecasting for business metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Created an end-to-end forecasting system that predicts key
                    business metrics with 92% accuracy, enabling data-driven
                    decision making.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-cyan-500/20 text-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden bg-zinc-950 border-zinc-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/project4.png"
                    width={400}
                    height={200}
                    alt="Recommendation engine visualization showing content suggestions"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">
                    Recommendation Engine
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Personalized content recommendation system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Designed a collaborative filtering algorithm that increased
                    user engagement by 40% through personalized content
                    recommendations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-purple-500/20 text-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden bg-zinc-950 border-zinc-800 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/project5.png"
                    width={400}
                    height={200}
                    alt="Anomaly detection system showing IoT sensor data analysis"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">
                    Anomaly Detection System
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Real-time anomaly detection for IoT devices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Implemented an unsupervised learning approach to detect
                    anomalies in IoT sensor data, reducing false alarms by 75%.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-pink-500/20 text-pink-500 hover:bg-pink-500/10 hover:text-pink-400"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="group overflow-hidden bg-zinc-950 border-zinc-800 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/project6.png"
                    width={400}
                    height={200}
                    alt="Robotics reinforcement learning simulation"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">
                    Reinforcement Learning for Robotics
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    RL algorithms for robotic control
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Developed reinforcement learning algorithms that enable
                    robots to learn complex manipulation tasks through trial and
                    error.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-cyan-500/20 text-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute bottom-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in working together? Feel free to reach out for
                  collaborations or just a friendly chat.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">
                  Contact Information
                </h3>
                <p className="text-zinc-400">
                  Fill out the form or contact me directly using the information
                  below.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <Mail className="h-5 w-5 text-purple-500" />
                    <a href="mailto: khanareeshat@gmail.com">
                      khanareeshat@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <Phone className="h-5 w-5 text-pink-500" />
                    <a href="tel: 03330795597">03330795597</a>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer">
                    <MapPin className="h-5 w-5 text-cyan-500" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                </div>
              </div>
              <Card className="bg-zinc-950 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                  <CardDescription className="text-zinc-400">
                    I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid  gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        type="email"
                        className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 ${
                        loading
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-[#0C3083] hover:bg-[#0C3083] text-white"
                      }`}
                    >
                      {loading ? (
                        <Loader className="animate-spin h-4 w-4 mr-2" />
                      ) : (
                        <Send className="h-4 w-4 mr-2" />
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-zinc-800 py-6 md:py-0 bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-zinc-400 md:text-left">
            © 2025 ML Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link> */}
            <Link
              href="https://www.linkedin.com/in/areesha-tariq-795b92222"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:khanareeshat@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
