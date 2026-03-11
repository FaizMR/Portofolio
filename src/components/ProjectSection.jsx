import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Perpuskit Landing Page",
    description: "A beautiful landing page using Vue and Tailwind",
    image: "/projects/Perpuskit.png",
    tags: ["Vue", "TailwindCSS", "MySQL"],
    demoURL: "https://l-page-perpuskit.vercel.app/",
    githubURL: "https://github.com/FaizMR/Perpuskit",
  },
  {
    id: 2,
    title: "UMKM Landing Page",
    description: "A beautiful landing page using Vue and Tailwind",
    image: "/projects/Umkm.png",
    tags: ["Vue", "TailwindCSS", "Typscript"],
    demoURL: "https://website-sederhana-ashy.vercel.app/",
    githubURL: "https://github.com/FaizMR/Website_Sederhana",
  },
  {
    id: 1,
    title: "Perpuskit Landing Page",
    description: "A beautiful landing page using Vue and Tailwind",
    image: "/projects/Company.png",
    tags: ["Vue", "TailwindCSS", "Typscript"],
    demoURL: "https://website-sederhana-2.vercel.app/",
    githubURL: "https://github.com/FaizMR/Website_Sederhana_2",
  },
];
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foregroud mb-12 max-w-2xl mx-auto">
          Proyek ini adalah aplikasi web modern yang responsif, terstruktur, dan
          siap digunakan untuk kebutuhan nyata dengan fokus pada UI yang bersih
          dan performa yang optimal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col border-2"
            >
              <div className="h-f48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-hover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border bg-primary/20 font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-4 px-10">
                {project.description}
              </p>
                <div className="flex mt-auto space-x-3 p-3 items-center">
                  <a
                    href={ project.demoURL }
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={ project.githubURL }
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/FaizMR"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
