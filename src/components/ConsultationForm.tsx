import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Target } from "lucide-react";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    primaryGoal: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    // For now, we'll show a success message
    toast({
      title: "Consultation Request Received!",
      description: "Sam will contact you shortly to discuss your wellness journey.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      primaryGoal: "",
      message: ""
    });
  };

  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get Started</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Book Your Free Consultation
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your goals and find the perfect program for your wellness journey
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 md:p-12 shadow-medium">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="border-2 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+31 6 1234 5678"
                  className="border-2 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="border-2 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="primaryGoal" className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Primary Goal *
              </Label>
              <Select
                value={formData.primaryGoal}
                onValueChange={(value) => setFormData({ ...formData, primaryGoal: value })}
                required
              >
                <SelectTrigger className="border-2 focus:border-primary">
                  <SelectValue placeholder="Select your main focus..." />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="injury-recovery">Injury Recovery</SelectItem>
                  <SelectItem value="post-surgery">Post-Surgery Rehabilitation</SelectItem>
                  <SelectItem value="pain-relief">Pain Relief & Management</SelectItem>
                  <SelectItem value="flexibility">Improve Flexibility & Mobility</SelectItem>
                  <SelectItem value="strength">Build Core Strength</SelectItem>
                  <SelectItem value="burnout">Recovery from Burnout</SelectItem>
                  <SelectItem value="general-wellness">General Wellness & Fitness</SelectItem>
                  <SelectItem value="stress-relief">Stress Relief & Relaxation</SelectItem>
                  <SelectItem value="other">Other (please specify in message)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Tell Us More About Your Goals (Optional)
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share any specific concerns, previous experience with Pilates, or questions you may have..."
                className="border-2 focus:border-primary min-h-[120px]"
              />
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300 text-lg"
            >
              Request Free Consultation
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              We'll contact you within 24 hours to schedule your consultation
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ConsultationForm;
