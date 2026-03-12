import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sofa,
  Clock,
  Ruler,
  Building2,
  MapPin,
  Download,
  Share2,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/lib/projectsData";
import { useLeadModal } from "@/context/LeadModalContext";

const TABS = [
  "About",
  "Video",
  "Amenities",
  "Address of Luxury",
  "Master Layout",
  "Typical Floor Plan",
  "Typical Unit Plans",
  "Location",
] as const;

const TOWNSHIP_VIDEO_SRC = "/Shantigram_realty.mp4";

const LOCATION_TEXT = "SG Highway, Ahmedabad – Gandhinagar, Gujarat";

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;
  const { openLead } = useLeadModal();
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("About");
  const [readMore, setReadMore] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageFallbackError, setImageFallbackError] = useState(false);
  const amenitiesScrollRef = useRef<HTMLDivElement>(null);

  const propertyImageSrc = imageFallbackError ? null : (imageError ? FALLBACK_IMAGE : project.image);
  const handleImageError = () => {
    if (!imageError) setImageError(true);
    else setImageFallbackError(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-24">
        <div className="text-center px-4">
          <h1 className="font-display text-2xl text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-accent hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

  const amenities = project.amenities ?? [];
  const priceDisplay = project.priceDisplay ?? project.price;
  const longDesc = project.longDescription ?? project.description ?? "";

  const scrollAmenities = (dir: number) => {
    if (amenitiesScrollRef.current) {
      amenitiesScrollRef.current.scrollBy({ left: dir * 180, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-20 md:pb-16">
      <div className="container-custom mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </motion.div>

        {/* Header: name, location, price, RERA, actions */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl text-foreground mb-1">
                {project.name}
              </h1>
              <p className="text-muted-foreground text-sm mb-1">
                {project.location ?? LOCATION_TEXT}
              </p>
              <p className="text-foreground font-medium text-sm">
                {priceDisplay}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.reraNumber && (
                <a
                  href={project.reraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-accent underline max-w-[200px] sm:max-w-none truncate"
                >
                  RERA No. {project.reraNumber}
                </a>
              )}
              <Button
                size="sm"
                variant="outline"
                className="rounded-full gap-1.5"
                onClick={openLead}
              >
                <Download size={16} /> Download Brochure
              </Button>
              <Button size="sm" variant="outline" className="rounded-full gap-1.5">
                <Share2 size={16} /> Share
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Single property image */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-xl overflow-hidden bg-secondary shadow-lg">
            {propertyImageSrc ? (
              <img
                src={propertyImageSrc}
                alt={project.name}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                <Building2 size={64} className="mb-2 opacity-50" />
                <span className="text-sm font-medium">Image not available</span>
              </div>
            )}
            {propertyImageSrc && (
              <div className="absolute bottom-2 left-2 px-2.5 py-1.5 rounded-md bg-black/70 text-white text-xs font-medium backdrop-blur-sm">
                Artistic Impression
              </div>
            )}
          </div>
        </motion.section>

        {/* Key details row */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
            <Sofa size={22} className="text-accent flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Configuration</p>
              <p className="text-sm font-medium text-foreground truncate">{project.type}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
            <Clock size={22} className="text-accent flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Possession</p>
              <p className="text-sm font-medium text-foreground truncate">{project.possessionDate ?? "TBA"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
            <Ruler size={22} className="text-accent flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">RERA Carpet</p>
              <p className="text-sm font-medium text-foreground truncate">{project.area}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
            <Building2 size={22} className="text-accent flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Project Area</p>
              <p className="text-sm font-medium text-foreground truncate">{project.projectArea ?? "—"}</p>
            </div>
          </div>
        </motion.section>

        {/* Tabs */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="border-b border-border mb-8 overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-6 min-w-max pb-px">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium whitespace-nowrap py-3 border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.nav>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {activeTab === "About" && (
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                {project.name}: {project.type}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {readMore ? longDesc : longDesc.slice(0, 280)}
                {longDesc.length > 280 && !readMore && "..."}
              </p>
              {longDesc.length > 280 && (
                <button
                  onClick={() => setReadMore(!readMore)}
                  className="text-accent font-medium text-sm hover:underline"
                >
                  {readMore ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          )}

          {activeTab === "Video" && (
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-2">
                Adani Shantigram – The centre of all major locations
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                {project.name} is part of Adani Shantigram. Watch the overview – where the future lies.
              </p>
              <div className="rounded-xl overflow-hidden border border-border bg-black/5 aspect-video max-w-4xl">
                <video
                  src={TOWNSHIP_VIDEO_SRC}
                  title="Adani Shantigram Township"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {activeTab === "Amenities" && (
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-6">
                {project.name} – Amenities
              </h2>
              <div className="relative group/amenities">
                <div
                  ref={amenitiesScrollRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
                >
                  {amenities.map((a) => (
                    <div
                      key={a.name}
                      className="flex-shrink-0 snap-start w-32 text-center"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2 border-2 border-border">
                        <img
                          src={a.image}
                          alt={a.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-medium text-foreground line-clamp-2">
                        {a.name}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollAmenities(-1)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-9 h-9 rounded-full bg-card border border-border shadow-lg flex items-center justify-center opacity-0 group-hover/amenities:opacity-100 transition-opacity"
                >
                  <ChevronLeft size={18} className="text-foreground" />
                </button>
                <button
                  onClick={() => scrollAmenities(1)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-9 h-9 rounded-full bg-card border border-border shadow-lg flex items-center justify-center opacity-0 group-hover/amenities:opacity-100 transition-opacity"
                >
                  <ChevronRight size={18} className="text-foreground" />
                </button>
              </div>
            </div>
          )}

          {activeTab === "Address of Luxury" && (
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                Address of Luxury
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.name} is situated within Adani Shantigram, the 600-acre integrated township on SG Highway between Ahmedabad and Gandhinagar. The address offers prime connectivity to the airport, railway station, SP Ring Road, and key city landmarks while being part of a secure, master-planned community with world-class amenities.
              </p>
              <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                <p className="font-medium text-foreground">{project.name}</p>
                <p className="text-muted-foreground text-sm">{LOCATION_TEXT}</p>
                <p className="text-muted-foreground text-sm">Adani Shantigram — 600-acre integrated township · RERA registered</p>
              </div>
              <Button onClick={openLead} className="mt-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                Get directions & brochure
              </Button>
            </div>
          )}

          {activeTab === "Master Layout" && (
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                Master Layout
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Shantigram master plan includes residential zones, commercial spaces, The Belvedere Golf & Country Club, Adani International School, parks, and retail. {project.name} is part of this integrated layout.
              </p>
              <div className="rounded-xl overflow-hidden border border-border bg-secondary/50 aspect-[4/3] max-w-4xl flex items-center justify-center relative">
                <img
                  src="/master-layout.png"
                  alt="Shantigram master layout"
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (fallback) fallback.classList.remove("invisible");
                  }}
                />
                <div className="invisible absolute inset-0 flex items-center justify-center text-center text-muted-foreground px-6">
                  Master layout plan available in brochure. Contact sales for the latest layout and site plan.
                </div>
              </div>
              <Button onClick={openLead} className="mt-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                Download master layout
              </Button>
            </div>
          )}

          {activeTab === "Typical Floor Plan" && (
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                Typical Floor Plan
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Floor plans for {project.name} show configuration, room sizes, and layout. Request the latest brochure for detailed typical floor plans and availability.
              </p>
              <div className="rounded-xl border border-border bg-secondary/40 p-10 text-center max-w-xl mx-auto">
                <p className="text-muted-foreground mb-4">Floor plan available on request</p>
                <Button onClick={openLead} className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Request floor plan
                </Button>
              </div>
            </div>
          )}

          {activeTab === "Typical Unit Plans" && (
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                Typical Unit Plans
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unit-wise plans for {project.type} at {project.name} include carpet area, room dimensions, and optional variants. Contact our sales team for unit plans and pricing.
              </p>
              <div className="rounded-xl border border-border bg-secondary/40 p-10 text-center max-w-xl mx-auto">
                <p className="text-muted-foreground mb-4">Unit plans available on request</p>
                <Button onClick={openLead} className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Request unit plans
                </Button>
              </div>
            </div>
          )}

          {activeTab === "Location" && (
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-4">
                Location
              </h2>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                <MapPin size={24} className="text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{LOCATION_TEXT}</p>
                  <p className="text-sm text-muted-foreground">Adani Shantigram — 600-acre integrated township</p>
                </div>
              </div>
              <div className="mt-4 aspect-video rounded-xl overflow-hidden bg-secondary">
                <iframe
                  title="Location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.58%2C23.18%2C72.72%2C23.26&layer=mapnik&marker=23.22%2C72.65"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-secondary/60 border border-border"
        >
          <p className="text-sm text-muted-foreground">
            *Price indicative. RERA compliant. Contact sales for updated pricing.
          </p>
          <div className="flex gap-3">
            <a href="tel:18001080009">
              <Button size="sm" className="rounded-full bg-accent text-accent-foreground gap-2">
                <Phone size={16} /> Call Now
              </Button>
            </a>
            <Button size="sm" variant="outline" className="rounded-full" onClick={openLead}>
              Enquire
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
