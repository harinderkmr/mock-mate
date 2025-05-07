"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

import Footer from "@/app/dashboard/_component/Footer";


export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "✅ Success!",
          description: "Your message has been sent.",
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "❌ Failed to send",
          description: data.message || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "🚨 Server Error",
        description: "Something went wrong. Try again later.",
        variant: "destructive",
      });
      console.error(err);
    }
  };

  return (
    <>
    
    <div className="max-w-3xl mx-auto p-10  ">
      <Card className="shadow-lg rounded-2xl bg-purple-100">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-900 ">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <Input
              className="bg-purple-200 shadow-inner"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              className="bg-purple-200 shadow-inner"
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              className="bg-purple-200 shadow-inner"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <Textarea
              className=" bg-purple-300 shadow-inner"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* ✅ This renders the toast popup */}
      <Toaster />
    </div>
    <Footer/>
    </>
  );
}
