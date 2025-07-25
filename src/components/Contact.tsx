import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, MessageCircle, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ahmad-romdhoni-yusfarizi-999xyz",
      color: "hover:text-blue-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      url: "https://wa.me/6285838891849",
      color: "hover:text-green-500"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      url: "https://instagram.com/ahmadyfz",
      color: "hover:text-pink-500"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "amdromyf@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Phone",
      value: "+62 85838891849"
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: "Location",
      value: "Jakarta, Indonesia"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Mari Berkolaborasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Saya selalu terbuka untuk proyek menarik, diskusi teknologi, atau sekadar berkenalan. 
            Jangan ragu untuk menghubungi saya!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Informasi Kontak
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  {info.icon}
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Media */}
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Ikuti Saya
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={`border-border/50 hover:scale-110 transition-all ${social.color}`}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  {social.icon}
                  <span className="ml-2">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quick Contact Card */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Hubungi Langsung
              </h3>
              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-primary hover:scale-105 transition-all shadow-elegant"
                  size="lg"
                  onClick={() => window.open('mailto:amdromyf@gmail.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Kirim Email
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-green-500/50 hover:bg-green-500/10 hover:text-green-400 transition-all"
                  size="lg"
                  onClick={() => window.open('https://wa.me/6285838891849', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat di WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 transition-all"
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/ahmad-romdhoni-yusfarizi-999xyz', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect di LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;