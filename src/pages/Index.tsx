import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Brain, 
  TrendingUp, 
  Shield, 
  Users, 
  Activity,
  ChevronRight,
  PlayCircle,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models predict patient risk with 94% accuracy over 90-day periods."
    },
    {
      icon: TrendingUp,
      title: "Explainable Insights",
      description: "Understand why a patient is at risk with clear visualizations and feature contributions."
    },
    {
      icon: Shield,
      title: "Clinical Validation",
      description: "Models validated by healthcare professionals and compliant with medical standards."
    },
    {
      icon: Users,
      title: "Dual Interface",
      description: "Separate views for clinicians (detailed analytics) and patients (actionable insights)."
    }
  ];

  const stats = [
    { value: "94%", label: "Prediction Accuracy" },
    { value: "90", label: "Day Forecast" },
    { value: "15+", label: "Risk Factors" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Award className="mr-2 h-3 w-3" />
                  Healthcare Innovation 2024
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block">CarePredict</span>
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    AI Risk Engine
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Predict, Prevent, Personalize Chronic Care with AI
                </p>
                <p className="text-lg text-muted-foreground">
                  Advanced machine learning platform that identifies at-risk chronic care patients 
                  90 days in advance, enabling proactive interventions and better outcomes.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Try Demo
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-1">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3" />
              <img
                src={heroImage}
                alt="Healthcare Dashboard Analytics"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              The Challenge in Chronic Care
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>6 in 10 adults</strong> in the US have chronic diseases, leading to $3.8 trillion in annual healthcare costs. 
              Traditional reactive care often results in preventable hospitalizations and emergency interventions.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-danger mb-2">80%</div>
                  <p className="text-sm text-muted-foreground">
                    of hospitalizations are preventable with early intervention
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-warning mb-2">$3.8T</div>
                  <p className="text-sm text-muted-foreground">
                    annual cost of chronic disease management in the US
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <p className="text-sm text-muted-foreground">
                    of healthcare spending goes to chronic conditions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              How CarePredict Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI algorithms analyze patient data to predict risks and recommend interventions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <feature.icon className="h-6 w-6" />
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
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Three-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From data input to actionable insights in minutes
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <CardTitle>Collect Patient Data</CardTitle>
                <CardDescription>
                  Input comprehensive health metrics including vitals, labs, lifestyle, and medical history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="text-sm">Multi-modal data integration</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <CardTitle>AI Risk Analysis</CardTitle>
                <CardDescription>
                  Advanced algorithms process data to generate 90-day risk predictions with confidence scores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Machine learning analysis</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <CardTitle>Actionable Insights</CardTitle>
                <CardDescription>
                  Receive personalized recommendations and alerts for proactive care management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm">Personalized interventions</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center py-16 px-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Transform Patient Care?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the power of predictive analytics in chronic care management. 
                Start identifying at-risk patients before symptoms appear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    <Heart className="mr-2 h-5 w-5" />
                    Explore Dashboard
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/patient-data">
                    Input Patient Data
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;