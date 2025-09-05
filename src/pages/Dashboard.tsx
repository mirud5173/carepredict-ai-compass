import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  Activity,
  Pill,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Patient Risk Dashboard</h1>
        <p className="text-muted-foreground">
          AI-powered risk predictions for chronic care management
        </p>
      </div>

      {/* Risk Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-danger">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Patients</CardTitle>
            <AlertTriangle className="h-4 w-4 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medium Risk</CardTitle>
            <TrendingUp className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">28</div>
            <p className="text-xs text-muted-foreground">
              -4 from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Risk</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">145</div>
            <p className="text-xs text-muted-foreground">
              +8 from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              Model confidence
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Patient Risk Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary" />
            <span>Current Patient: Sarah Johnson</span>
          </CardTitle>
          <CardDescription>
            90-day risk prediction with AI confidence scoring
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Risk Level */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Risk Level</h3>
              <Badge variant="secondary" className="bg-warning/10 text-warning border-warning">
                Medium Risk
              </Badge>
            </div>
            <div className="text-right space-y-1">
              <div className="text-2xl font-bold text-warning">68%</div>
              <p className="text-sm text-muted-foreground">Risk Score</p>
            </div>
          </div>

          {/* Confidence Score */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>AI Confidence</span>
              <span className="font-medium">87%</span>
            </div>
            <Progress value={87} className="h-2" />
          </div>

          {/* Key Risk Factors */}
          <div className="space-y-3">
            <h4 className="font-medium">Key Risk Factors</h4>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center space-x-3 p-3 rounded-lg border bg-muted/30">
                <TrendingUp className="h-4 w-4 text-warning" />
                <div>
                  <p className="text-sm font-medium">Blood Pressure Trend</p>
                  <p className="text-xs text-muted-foreground">Increasing over 30 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border bg-muted/30">
                <Pill className="h-4 w-4 text-danger" />
                <div>
                  <p className="text-sm font-medium">Medication Adherence</p>
                  <p className="text-xs text-muted-foreground">72% compliance rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4 border-t">
            <Button variant="default">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Follow-up
            </Button>
            <Button variant="outline">View Full Analysis</Button>
            <Button variant="outline">Generate Report</Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts & Recommendations</CardTitle>
          <CardDescription>AI-generated insights and suggested actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 rounded-lg border bg-danger/5 border-danger/20">
              <AlertTriangle className="h-5 w-5 text-danger mt-0.5" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Critical: BP Reading Above Threshold</p>
                <p className="text-xs text-muted-foreground">
                  Patient's blood pressure reading of 165/95 exceeds safe limits. Immediate consultation recommended.
                </p>
                <Button size="sm" variant="outline" className="mt-2">
                  Contact Patient
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg border bg-warning/5 border-warning/20">
              <TrendingDown className="h-5 w-5 text-warning mt-0.5" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Medication Adherence Declining</p>
                <p className="text-xs text-muted-foreground">
                  Suggest setting up automated reminders or pill dispenser for better compliance.
                </p>
                <Button size="sm" variant="outline" className="mt-2">
                  Schedule Call
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg border bg-accent/5 border-accent/20">
              <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Positive: Exercise Goals Met</p>
                <p className="text-xs text-muted-foreground">
                  Patient exceeded weekly exercise targets. Consider adjusting goals upward.
                </p>
                <Button size="sm" variant="outline" className="mt-2">
                  Update Plan
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;