import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  Award, 
  ExternalLink,
  Github,
  Mail
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Clinical Lead & AI Researcher",
      expertise: "Cardiology, Machine Learning"
    },
    {
      name: "Alex Kumar",
      role: "ML Engineer",
      expertise: "Deep Learning, Healthcare Analytics"
    },
    {
      name: "Maya Patel",
      role: "Full-Stack Developer",
      expertise: "React, Node.js, Healthcare APIs"
    },
    {
      name: "Dr. James Rodriguez",
      role: "Medical Advisor",
      expertise: "Chronic Disease Management"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning algorithms trained on comprehensive healthcare datasets."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensuring patient data privacy and regulatory compliance."
    },
    {
      icon: Heart,
      title: "Clinical Validation",
      description: "Models validated by healthcare professionals and tested in real clinical environments."
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Design",
      description: "Built for both clinicians and patients with tailored interfaces for each user type."
    }
  ];

  return (
    <div className="container py-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
          <Award className="h-4 w-4" />
          <span>Healthcare Innovation Hackathon 2024</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          About CarePredict
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          An AI-powered risk prediction engine designed to transform chronic care management through 
          predictive analytics, personalized interventions, and explainable AI insights.
        </p>
      </div>

      {/* Problem Statement */}
      <Card>
        <CardHeader>
          <CardTitle>The Problem We're Solving</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Chronic diseases affect over 6 in 10 adults in the United States, leading to significant healthcare costs 
            and reduced quality of life. Traditional reactive care models often result in preventable hospitalizations 
            and emergency interventions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Healthcare providers need predictive tools that can identify at-risk patients early, provide actionable 
            insights, and enable proactive interventions to prevent adverse outcomes.
          </p>
        </CardContent>
      </Card>

      {/* Our Solution */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Solution</h2>
          <p className="text-muted-foreground mt-2">
            Predict, Prevent, Personalize Chronic Care with AI
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features & Capabilities</CardTitle>
          <CardDescription>
            Comprehensive AI-driven healthcare risk assessment platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">90-day risk prediction</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Multi-modal data integration</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Explainable AI insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Real-time alerts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Personalized recommendations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Dual-mode interface</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Approach */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Innovation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold">Machine Learning</h4>
              <p className="text-sm text-muted-foreground">
                Ensemble models combining Random Forest, XGBoost, and Neural Networks for optimal prediction accuracy.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Feature Engineering</h4>
              <p className="text-sm text-muted-foreground">
                Advanced feature extraction from vitals, labs, lifestyle, and temporal patterns.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Explainability</h4>
              <p className="text-sm text-muted-foreground">
                SHAP values and feature importance visualization for transparent AI decision-making.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Meet Our Team</h2>
          <p className="text-muted-foreground mt-2">
            Multidisciplinary experts in healthcare, AI, and technology
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{member.expertise}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle>Get Involved</CardTitle>
          <CardDescription>
            Interested in collaborating or learning more about our research?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center space-x-4">
          <Button variant="default">
            <Github className="mr-2 h-4 w-4" />
            View Source Code
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Contact Team
          </Button>
          <Button variant="outline">
            <ExternalLink className="mr-2 h-4 w-4" />
            Research Paper
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;