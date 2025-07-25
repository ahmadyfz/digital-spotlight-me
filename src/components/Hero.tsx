import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-glow"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ahmad Romdhoni Yusfarizi
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Quality Assurance Engineer & Inventory Management Specialist
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Mahasiswa aktif semester 3 Program Studi Manajemen Logistik Industri Elektronika di Politeknik APP Jakarta dengan minat kuat pada 
            bidang quality control dan analisis data. Memiliki pengalaman sebagai asisten dosen serta terbiasa menggunakan SAP Business untuk 
            pengelolaan transaksi logistik.<br/> Terampil dalam mengolah dan menyajikan data menggunakan Microsoft Excel dan Power BI. Memiliki komitmen tinggi dalam pengembangan keterampilan teknis dan siap berkontribusi 
            secara positif dalam peningkatan efisiensi sistem pelaporan dan pengambilan keputusan berbasis data.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-all shadow-elegant"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Mulai dari sini
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:bg-primary/10 transition-all"
            onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Penghargaan
          </Button>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;