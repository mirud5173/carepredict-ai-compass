import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Activity, 
  Pill, 
  Moon, 
  Footprints, 
  User, 
  FileText,
  Save,
  Upload
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PatientData = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Vitals
    systolicBP: "",
    diastolicBP: "",
    heartRate: "",
    weight: "",
    bloodSugar: "",
    
    // Lab Results  
    hba1c: "",
    cholesterol: "",
    creatinine: "",
    
    // Lifestyle
    sleepHours: "",
    exerciseMinutes: "",
    stressLevel: "",
    
    // Demographics
    age: "",
    gender: "",
    
    // Medical History
    conditions: "",
    medications: "",
    allergies: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Patient data saved successfully",
      description: "AI risk assessment will be updated within 5 minutes.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Patient Data Input</h1>
        <p className="text-muted-foreground">
          Comprehensive health data collection for AI risk analysis
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="vitals" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="vitals" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Vitals</span>
            </TabsTrigger>
            <TabsTrigger value="labs" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Lab Results</span>
            </TabsTrigger>
            <TabsTrigger value="lifestyle" className="flex items-center space-x-2">
              <Footprints className="h-4 w-4" />
              <span className="hidden sm:inline">Lifestyle</span>
            </TabsTrigger>
            <TabsTrigger value="demographics" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Demographics</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">History</span>
            </TabsTrigger>
          </TabsList>

          {/* Vitals Tab */}
          <TabsContent value="vitals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Vital Signs</span>
                </CardTitle>
                <CardDescription>
                  Current vital measurements and readings
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="systolicBP">Systolic Blood Pressure (mmHg)</Label>
                  <Input
                    id="systolicBP"
                    type="number"
                    placeholder="120"
                    value={formData.systolicBP}
                    onChange={(e) => handleInputChange("systolicBP", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="diastolicBP">Diastolic Blood Pressure (mmHg)</Label>
                  <Input
                    id="diastolicBP"
                    type="number"
                    placeholder="80"
                    value={formData.diastolicBP}
                    onChange={(e) => handleInputChange("diastolicBP", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="heartRate">Heart Rate (BPM)</Label>
                  <Input
                    id="heartRate"
                    type="number"
                    placeholder="72"
                    value={formData.heartRate}
                    onChange={(e) => handleInputChange("heartRate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="70"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bloodSugar">Blood Sugar Level (mg/dL)</Label>
                  <Input
                    id="bloodSugar"
                    type="number"
                    placeholder="95"
                    value={formData.bloodSugar}
                    onChange={(e) => handleInputChange("bloodSugar", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Lab Results Tab */}
          <TabsContent value="labs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-secondary" />
                  <span>Laboratory Results</span>
                </CardTitle>
                <CardDescription>
                  Recent lab test results and biomarkers
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="hba1c">HbA1c (%)</Label>
                  <Input
                    id="hba1c"
                    type="number"
                    step="0.1"
                    placeholder="5.7"
                    value={formData.hba1c}
                    onChange={(e) => handleInputChange("hba1c", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cholesterol">Total Cholesterol (mg/dL)</Label>
                  <Input
                    id="cholesterol"
                    type="number"
                    placeholder="200"
                    value={formData.cholesterol}
                    onChange={(e) => handleInputChange("cholesterol", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="creatinine">Creatinine (mg/dL)</Label>
                  <Input
                    id="creatinine"
                    type="number"
                    step="0.01"
                    placeholder="1.0"
                    value={formData.creatinine}
                    onChange={(e) => handleInputChange("creatinine", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Lifestyle Tab */}
          <TabsContent value="lifestyle" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Footprints className="h-5 w-5 text-accent" />
                  <span>Lifestyle Factors</span>
                </CardTitle>
                <CardDescription>
                  Daily habits and lifestyle measurements
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sleepHours" className="flex items-center space-x-2">
                    <Moon className="h-4 w-4" />
                    <span>Sleep Hours (per night)</span>
                  </Label>
                  <Input
                    id="sleepHours"
                    type="number"
                    step="0.5"
                    placeholder="8"
                    value={formData.sleepHours}
                    onChange={(e) => handleInputChange("sleepHours", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="exerciseMinutes">Exercise Minutes (per day)</Label>
                  <Input
                    id="exerciseMinutes"
                    type="number"
                    placeholder="30"
                    value={formData.exerciseMinutes}
                    onChange={(e) => handleInputChange("exerciseMinutes", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="stressLevel">Stress Level</Label>
                  <Select onValueChange={(value) => handleInputChange("stressLevel", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stress level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (1-3)</SelectItem>
                      <SelectItem value="moderate">Moderate (4-6)</SelectItem>
                      <SelectItem value="high">High (7-10)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Demographics Tab */}
          <TabsContent value="demographics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span>Demographics</span>
                </CardTitle>
                <CardDescription>
                  Basic demographic and personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="35"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Medical History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Medical History</span>
                </CardTitle>
                <CardDescription>
                  Comprehensive medical background and current treatments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="conditions">Current Medical Conditions</Label>
                  <Textarea
                    id="conditions"
                    placeholder="List current diagnosed conditions (e.g., Type 2 Diabetes, Hypertension, etc.)"
                    value={formData.conditions}
                    onChange={(e) => handleInputChange("conditions", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medications" className="flex items-center space-x-2">
                    <Pill className="h-4 w-4" />
                    <span>Current Medications</span>
                  </Label>
                  <Textarea
                    id="medications"
                    placeholder="List all current medications, dosages, and frequency"
                    value={formData.medications}
                    onChange={(e) => handleInputChange("medications", e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="allergies">Known Allergies</Label>
                  <Textarea
                    id="allergies"
                    placeholder="List any known allergies or adverse reactions"
                    value={formData.allergies}
                    onChange={(e) => handleInputChange("allergies", e.target.value)}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-between pt-6">
          <Button variant="outline" type="button">
            <Upload className="mr-2 h-4 w-4" />
            Import from File
          </Button>
          <div className="space-x-3">
            <Button variant="outline" type="button">
              Save Draft
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Save & Analyze
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientData;