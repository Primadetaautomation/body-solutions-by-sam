import aboutImage from "@/assets/about-instructor.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Sam</span>
              <div className="h-1 w-20 bg-gradient-primary mt-2 rounded-full" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Your Journey to Wellness Starts Here
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                My journey into bodywork and pain relief began with my own experience of injury and recovery. 
                Like many of my clients, I discovered how powerful our bodies truly are when we learn to listen 
                to them and give them the right kind of support. What started as a personal healing journey has 
                grown into a deep passion for helping others move freely, regain their energy, and reconnect with 
                their confidence.
              </p>
              
              <p className="font-medium text-foreground">
                I believe that every body has the ability to heal — sometimes it just needs a little guidance.
              </p>
              
              <p>
                Through gentle, effective techniques I've both learned and used myself, I help people recover 
                from injuries or surgery, move through burnout, or simply rediscover the joy of movement.
              </p>
              
              <p>
                My approach is friendly, empathetic, and personal. I take the time to understand where you are 
                and what your body needs, so we can work together to restore balance, ease, and vitality. 
                Whether you're taking your first steps toward recovery or looking to feel more comfortable and 
                confident in your body, I'm here to support you every step of the way.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground italic">
                — Sam Forcey, STOTT Pilates Instructor
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
              <img 
                src={aboutImage} 
                alt="Sam Forcey - STOTT Pilates Instructor" 
                className="relative rounded-3xl shadow-medium w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
