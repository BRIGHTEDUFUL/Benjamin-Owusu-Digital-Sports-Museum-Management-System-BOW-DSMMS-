import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Star, Send, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const faqs = [
  {
    question: "What are the museum opening hours?",
    answer: "We are open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 10:00 AM to 4:00 PM. We are closed on Sundays.",
  },
  {
    question: "Is there an admission fee?",
    answer: "General admission is free for all visitors. Special exhibits and guided tours may have additional fees.",
  },
  {
    question: "Are group tours available?",
    answer: "Yes! We offer guided group tours for schools, organizations, and private groups. Please contact us to book.",
  },
  {
    question: "Is the museum accessible?",
    answer: "Yes, our museum is fully wheelchair accessible with ramps, elevators, and accessible restrooms.",
  },
];

const reviews = [
  {
    name: "Kofi Mensah",
    rating: 5,
    comment: "An incredible journey through Ghana football history. The interactive exhibits are amazing!",
    date: "December 2024",
  },
  {
    name: "Ama Darko",
    rating: 5,
    comment: "Brought my children here and they loved it. Educational and entertaining!",
    date: "November 2024",
  },
  {
    name: "Emmanuel Asante",
    rating: 4,
    comment: "Great collection of memorabilia. The virtual tour experience is worth trying.",
    date: "October 2024",
  },
];

const Visitor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      toast.success("Thank you for your feedback! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark text-primary-foreground">
        <div className="container-museum">
          <div className="max-w-2xl">
            <p className="text-secondary font-medium mb-2">Plan Your Experience</p>
            <h1 className="font-display text-5xl md:text-6xl tracking-wider mb-4">
              VISITOR HUB
            </h1>
            <p className="text-muted text-lg">
              Everything you need to plan your visit, share feedback, and connect with us. 
              We're here to make your museum experience memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Info */}
      <section className="section-padding">
        <div className="container-museum">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: MapPin, title: "Location", info: "GFA Secretariat, Ridge, Accra" },
              { icon: Clock, title: "Hours", info: "Mon-Fri: 9AM-5PM, Sat: 10AM-4PM" },
              { icon: Phone, title: "Phone", info: "+233 (0) 302 665 898" },
              { icon: Mail, title: "Email", info: "museum@ghanafa.org" },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg tracking-wider mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl tracking-wider mb-6">SEND US FEEDBACK</h2>
              <Card>
                <CardContent className="p-6">
                  {submitted ? (
                    <div className="text-center py-8 animate-fade-in">
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h3 className="font-display text-2xl mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">Your message has been sent successfully.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <Input
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className={errors.subject ? "border-destructive" : ""}
                        />
                        {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your Message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                        <Send className="w-4 h-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-display text-3xl tracking-wider mb-6">FREQUENTLY ASKED</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-muted/50">
        <div className="container-museum">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">What Visitors Say</p>
            <h2 className="font-display text-4xl tracking-wider">VISITOR REVIEWS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "text-secondary fill-secondary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Visitor;
