import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Trophy, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-accent" />,
      title: "Best Innovation Award 2024",
      description: "Awarded for developing an AI-powered solution that improved user experience by 40%",
      source: "Tech Innovation Summit",
      link: "https://example.com/news/innovation-award-2024",
      date: "March 2024"
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Top Developer Recognition",
      description: "Recognized as one of the top 10 developers in Indonesia for outstanding contributions",
      source: "Developer Weekly",
      link: "https://example.com/news/top-developers-2024",
      date: "January 2024"
    },
    {
      icon: <Star className="w-6 h-6 text-accent" />,
      title: "Open Source Contributor Award",
      description: "Honored for significant contributions to open source projects with over 1000+ stars",
      source: "Open Source Magazine",
      link: "https://example.com/news/open-source-2023",
      date: "December 2023"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Prestasi & Penghargaan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beberapa pencapaian dan pengakuan yang telah saya terima dalam perjalanan karir sebagai developer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {achievement.icon}
                    <div>
                      <CardTitle className="text-lg text-foreground line-clamp-2">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent font-medium">
                    {achievement.source}
                  </span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 text-xs"
                    onClick={() => window.open(achievement.link, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Baca Berita
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;