import { Card } from "@/components/ui/card";
import { Target, Users, User } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Group Matwork Classes",
    description: "Join a supportive community in mixed-ability mat classes. Perfect for all fitness levels.",
    features: [
      "STOTT Pilates Mat",
      "Mixed ability levels welcome",
      "1 hour sessions",
      "Weekly classes during term time"
    ],
    pricing: [
      { label: "Trial Class", price: "€16" },
      { label: "10-Class Card", price: "€150" },
      { label: "Annual Membership", price: "€50/month" }
    ]
  },
  {
    icon: User,
    title: "Private 1-on-1 Sessions",
    description: "Personalized attention tailored to your specific needs, goals, and body's requirements.",
    features: [
      "Pilates Mat or Reformer",
      "MELT Method",
      "Neural Reset Therapy",
      "Rossiter Stretching",
      "Therapeutic Massage"
    ],
    pricing: [
      { label: "60-minute session", price: "€60" },
      { label: "Plus travel/parking expenses", price: "" }
    ]
  },
  {
    icon: Target,
    title: "Duet / Semi-Private",
    description: "Train with a friend or partner. Share the experience while receiving personalized guidance.",
    features: [
      "2 participants maximum",
      "All modalities available",
      "Customized programming",
      "1 hour sessions"
    ],
    pricing: [
      { label: "Per person", price: "€35" },
      { label: "Plus travel/parking expenses", price: "" }
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Choose Your Path to Wellness
          </h2>
          <p className="text-lg text-muted-foreground">
            Multiple approaches to support your unique journey toward pain-free movement and vitality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
            >
              <div className="space-y-6">
                <div className="inline-flex p-4 bg-accent rounded-2xl">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  {service.pricing.map((price, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{price.label}</span>
                      <span className="font-bold text-primary">{price.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            * All group classes run during school term weeks (40 weeks per year)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
