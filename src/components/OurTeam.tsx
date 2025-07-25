import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";
import teamJohn from "@/assets/team-john.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamAlex from "@/assets/team-alex.jpg";
import teamMaya from "@/assets/team-maya.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Leonardo Steven Girsang",
      position: "Supply Chain Management Enthusiast",
      image: teamJohn,
      description: "Mahasiswa aktif semester 5 Program Studi Manajemen Logistik Industri Elektronika di Politeknik APP Jakarta dengan fokus pada supply chain management. Memiliki pengalaman dalam pengelolaan inventaris dan analisis data logistik. Terampil dalam menggunakan SAP Business untuk transaksi logistik dan Microsoft Excel untuk pengolahan data.",
      skills: ["Procurement", "Inventory Management", "Warehouse & Distribution", "Production Planning"],
      email: "leongirsang31@gmail.com",
      linkedin: "https://www.linkedin.com/in/leonardo-steven-girsang-1a62b2364/",
    },
    {
      id: 2,
      name: "Yuntamal Irtiqo Ngulya",
      position: "Accounting & Suppply Chain Specialist",
      image: teamSarah,
      description: "Akuntan dengan pengalaman dalam pengelolaan keuangan dan analisis data. Memiliki keterampilan dalam sistem akuntansi dan pelaporan keuangan.",
      skills: ["Procurement", "Inventory Management", "Accounting Report skill", "Analitical Hierarcy Process"],
      email: "yuntamaltiqo@gmail.com",
      linkedin: "https://www.linkedin.com/in/yuntamal-irtiqo-ngulya-88192a22b/",
      github: "https://github.com/UserKit0707"
    },
    {
      id: 3,
      name: "Alex Chen",
      position: "Data Scientist",
      image: teamAlex,
      description: "Data scientist dengan expertise dalam machine learning dan analytics. Passionate tentang AI dan automation.",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Analytics"],
      email: "alex@company.com",
      linkedin: "https://linkedin.com/in/alexchen",
      github: "https://github.com/alexchen"
    },
    {
      id: 4,
      name: "Maya Putri",
      position: "Project Manager",
      image: teamMaya,
      description: "Project manager berpengalaman dalam agile methodology. Expert dalam koordinasi tim dan delivery management.",
      skills: ["Agile", "Scrum", "Team Leadership", "Strategic Planning"],
      email: "maya@company.com",
      linkedin: "https://linkedin.com/in/mayaputri",
      github: "https://github.com/mayaputri"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tim yang berpengalaman dan passionate dalam menciptakan solusi digital terbaik. 
            Setiap anggota membawa keahlian unik untuk kesuksesan proyek Anda.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6 overflow-hidden rounded-full w-32 h-32 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                {/* Name & Position */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
                
                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border/50 hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={() => window.open(member.linkedin, '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border/50 hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border/50 hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={() => window.open(member.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;