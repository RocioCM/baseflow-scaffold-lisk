import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/common/Button";
import { FeatureCard } from "../components/features/FeatureCard";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Headphones,
  MessageSquare,
  Minus,
  Package2,
  Plus,
  Receipt,
  Shield,
  TrendingUp,
} from "lucide-react";

export function HomePage() {
  const router = useRouter();
  const navigate = router.push;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
    },
    transition: {
      duration: 0.5,
    },
  };
  const problems = [
    {
      title: "Manual Invoicing",
      before: "Hours spent creating and sending invoices",
      after: "Just tell AI what you sold - invoice sent instantly",
    },
    {
      title: "Inventory Tracking",
      before: "Constantly checking spreadsheets and stock levels",
      after: "Real-time updates and automatic reordering",
    },
    {
      title: "Customer Support",
      before: "Answering the same questions repeatedly",
      after: "AI handles common inquiries 24/7",
    },
    {
      title: "Payment Processing",
      before: "Waiting days for payments to clear",
      after: "Instant payments with automatic bank deposits",
    },
  ];
  const features = [
    {
      title: "Smart Invoice Assistant",
      description:
        "Create and send invoices via chat or voice. Just say what you sold and to whom - we handle the rest.",
      icon: <Receipt size={24} className="text-blue-600" />,
    },
    {
      title: "Inventory Automation",
      description: "Stock levels update in real-time. Get alerts before you run out and automate reordering.",
      icon: <Package2 size={24} className="text-green-600" />,
    },
    {
      title: "24/7 Customer Support",
      description: "AI handles refunds, tracking, and common questions - giving you more time for your business.",
      icon: <Headphones size={24} className="text-purple-600" />,
    },
  ];
  const steps = [
    {
      title: "Quick Setup",
      description: "Answer 3 simple questions about your business and we'll configure everything automatically.",
      icon: <CheckCircle size={24} className="text-blue-600" />,
    },
    {
      title: "Connect Your Tools",
      description: "We work with your existing tools - Shopify, WhatsApp, Email, and more.",
      icon: <MessageSquare size={24} className="text-green-600" />,
    },
    {
      title: "Start Automating",
      description: "Simply tell your AI assistant what you need - no complex interfaces or training required.",
      icon: <TrendingUp size={24} className="text-purple-600" />,
    },
  ];
  const faqs = [
    {
      question: "How does the invoicing work?",
      answer:
        "Simply tell your AI assistant what you sold and to whom. For example, 'Invoice John $200 for 2 chairs.' The AI creates and sends the invoice instantly, tracks payment, and updates your inventory.",
    },
    {
      question: "Do I need to install any software?",
      answer:
        "No! Everything works through tools you already use - WhatsApp, email, or SMS. There's also a web dashboard if you prefer that.",
    },
    {
      question: "How do I receive payments?",
      answer:
        "Payments are processed instantly and automatically deposited to your bank account. You can also keep funds in your account for business expenses.",
    },
    {
      question: "What about my existing inventory?",
      answer:
        "We'll automatically import your inventory from popular platforms like Shopify, or you can easily add items through chat. Everything stays synced automatically.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="px-6 lg:px-8 py-24 relative overflow-hidden">
        <div className="flex justify-end mb-4 max-w-7xl mx-auto">
          <ConnectButton accountStatus="address" chainStatus="icon" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            Your Business Assistant
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            Run your entire business by chat. Let AI handle invoicing, inventory, and customer service while you focus
            on growth.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <Button onClick={() => navigate("/dashboard")} variant="primary" size="large">
              Launch BaseFlow
            </Button>
            <Button onClick={() => window.open("https://docs.basecommerce.ai")} variant="secondary" size="large">
              See How It Works
            </Button>
          </motion.div>
        </div>
      </header>
      {/* Stats Section */}
      <section className="px-6 lg:px-8 py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center justify-center mb-2">
                <Clock size={24} className="text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">20+ Hours</p>
              <p className="text-gray-600">Saved Weekly</p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{
                delay: 0.2,
              }}
            >
              <div className="flex items-center justify-center mb-2">
                <Shield size={24} className="text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-gray-600">Secure Payments</p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{
                delay: 0.4,
              }}
            >
              <div className="flex items-center justify-center mb-2">
                <TrendingUp size={24} className="text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">30%</p>
              <p className="text-gray-600">Average Growth</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Problems & Solutions Section */}
      <section className="px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">From Manual to Automated</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform time-consuming tasks into simple conversations
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                className="bg-gray-50 rounded-xl p-6"
                {...fadeIn}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                      <Minus size={14} className="text-red-600" />
                    </div>
                    <p className="text-gray-600">{problem.before}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Plus size={14} className="text-green-600" />
                    </div>
                    <p className="text-gray-600">{problem.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need, In One Chat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Replace your complex tools with simple conversations
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...fadeIn}
                transition={{
                  delay: index * 0.2,
                }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started Is Easy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Be up and running in minutes, not days</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                {...fadeIn}
                transition={{
                  delay: index * 0.2,
                }}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight size={24} className="text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Example Usage Section */}
      <section className="px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">As Simple As Texting a Friend</h2>
            <p className="text-xl text-gray-600">No complex interfaces. Just chat naturally.</p>
          </motion.div>
          <motion.div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6" {...fadeIn}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-gray-600">You:</div>
                <div className="flex-1">&quot;Create an invoice for $200 for the chair delivery&quot;</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-600">Assistant:</div>
                <div className="flex-1">
                  &quot;Invoice created and sent! I&lsquo;ve updated the inventory and scheduled payment tracking.&quot;
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-gray-600">You:</div>
                <div className="flex-1">&quot;How many chairs are left in stock?&quot;</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-600">Assistant:</div>
                <div className="flex-1">
                  &quot;You have 3 chairs left. Would you like me to prepare a reorder?&quot;
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about the service</p>
          </motion.div>
          <motion.div className="space-y-4" {...fadeIn}>
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {activeFaq === index ? (
                    <Minus size={20} className="text-gray-500" />
                  ) : (
                    <Plus size={20} className="text-gray-500" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-24 bg-blue-50">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeIn}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of merchants who are saving time and growing their business with automated tools.
          </p>
          <Button onClick={() => navigate("/dashboard")} variant="primary" size="large">
            Start Your Free Trial
          </Button>
          <p className="mt-4 text-sm text-gray-600">No credit card required. Cancel anytime.</p>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="px-6 lg:px-8 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2024 Base Commerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
