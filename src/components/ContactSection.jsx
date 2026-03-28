import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Jika Anda memiliki proyek atau berminat untuk berkolaborasi, silakan
          menghubungi saya. Saya terbuka untuk mendiskusikan peluang dan kerja
          sama baru.
        </p>
        <div className="grid grid-cols-1 gap-2 place-items-center text-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 flex flex-col items-start text-left">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-medium">Email</h4>
                  <a className="text-muted-foreground hover:text-primary">
                    faiz.muhammad.rijal.fikri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-medium">Phone</h4>
                  <a className="text-muted-foreground hover:text-primary">
                    (+62) 823 1818 8517
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Jawa Barat, Bandung, Indonesia
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/faiz-fikri-389875398/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  <Linkedin />
                </a>
                
                <a 
                  href="https://www.instagram.com/faizmuuhh?igsh=eHVpdTRIM2pyaWVh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition-colors"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};