import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Building2 } from "lucide-react";
import { projects } from "@/lib/projectsData";
import type { Project } from "@/lib/projectsData";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80";

function ProjectCardImage({ project }: { project: Project }) {
  const [error, setError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
      return;
    }
    setFallbackError(true);
  };

  if (fallbackError) {
    return (
      <div className="w-full h-52 bg-secondary flex flex-col items-center justify-center text-muted-foreground">
        <Building2 size={48} className="mb-2 opacity-60" />
        <span className="text-sm font-medium">Image not available</span>
      </div>
    );
  }

  return (
    <img
      src={error ? FALLBACK_IMAGE : project.image}
      alt={project.name}
      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
      onError={handleError}
    />
  );
}

interface ProjectsSectionProps {
  onOpenLead: () => void;
}

export default function ProjectsSection({ onOpenLead }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Projects at Shantigram</h2>
          <div className="accent-line" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            From ready-to-move villas to under-construction apartments and penthouses — find your perfect home.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="card-lift overflow-hidden group"
            >
              <Link to={`/project/${project.slug}`} className="block">
                <div className="relative overflow-hidden">
                  <ProjectCardImage project={project} />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1">
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                    <p className="text-white/90 text-sm flex items-center gap-1">
                      <Home size={14} /> {project.type}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="p-5">
                <div className="flex justify-between text-sm text-muted-foreground mb-3">
                  <span>RERA Carpet</span>
                  <span>{project.area}</span>
                </div>
                <p className="font-display text-lg text-foreground mb-4">{project.price}</p>
                <div className="flex gap-2">
                  <Link to={`/project/${project.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full rounded-full">
                      View Details
                    </Button>
                  </Link>
                  <Button onClick={onOpenLead} className="flex-1 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Enquire
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-xs mt-8"
        >
          *Indicative. Refer to project page for T&C. RERA registered.
        </motion.p>
      </div>
    </section>
  );
}
