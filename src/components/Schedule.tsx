import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Calendar } from "lucide-react";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "18:45 - 19:45", type: "Mixed Ability Mat", location: "De Zilk" },
      { time: "20:00 - 21:00", type: "Mixed Ability Mat", location: "De Zilk" }
    ]
  },
  {
    day: "Tuesday",
    classes: [
      { time: "10:30 - 11:30", type: "Mixed Ability Mat", location: "Leiden" }
    ]
  },
  {
    day: "Wednesday",
    classes: [
      { time: "09:00 - 10:00", type: "Mixed Ability Mat", location: "De Zilk" },
      { time: "10:15 - 11:15", type: "Mixed Ability Mat", location: "De Zilk" }
    ]
  },
  {
    day: "Thursday",
    classes: [
      { time: "By Appointment", type: "Private / Duet Sessions", location: "De Zilk or Leiden" }
    ]
  },
  {
    day: "Friday",
    classes: [
      { time: "By Appointment", type: "Private / Duet Sessions", location: "De Zilk or Leiden" }
    ]
  }
];

const locations = [
  {
    name: "Home Studio - De Zilk",
    address: "De Zilk, Zuid-Holland"
  },
  {
    name: "VogelenwijkSpeeltuin",
    address: "Nachtegaallaan, Leiden"
  }
];

const Schedule = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Schedule</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Weekly Class Timetable
          </h2>
          <p className="text-lg text-muted-foreground">
            Find the perfect time for your practice. All classes run during school term weeks.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 mb-16">
          {schedule.map((daySchedule, index) => (
            <Card key={index} className="p-6 hover:shadow-soft transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {daySchedule.day}
                  </h3>
                </div>

                <div className="flex-1 space-y-4">
                  {daySchedule.classes.map((classInfo, idx) => (
                    <div 
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2 text-foreground font-medium min-w-[140px]">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{classInfo.time}</span>
                      </div>

                      <Badge variant="secondary" className="w-fit">
                        {classInfo.type}
                      </Badge>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground ml-auto">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{classInfo.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Class Locations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-shadow">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">{location.name}</h4>
                <p className="text-sm text-muted-foreground">{location.address}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-accent/50 px-6 py-3 rounded-full">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Classes run during school term weeks (40 weeks per year)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
