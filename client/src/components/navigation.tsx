import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePrint = () => {
    window.print();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card border-b border-border z-50 no-print shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-lg font-semibold text-primary">Ajeesh N.G.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <button
                data-testid="nav-summary"
                onClick={() => scrollToSection("summary")}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
              >
                Summary
              </button>
              <button
                data-testid="nav-skills"
                onClick={() => scrollToSection("skills")}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                data-testid="nav-certifications"
                onClick={() => scrollToSection("certifications")}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
              >
                Certifications
              </button>
              <button
                data-testid="nav-experience"
                onClick={() => scrollToSection("experience")}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                data-testid="nav-education"
                onClick={() => scrollToSection("education")}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
              >
                Education
              </button>
              <Button
                data-testid="button-download-pdf"
                onClick={handlePrint}
                className="ml-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              data-testid="button-mobile-menu"
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              data-testid="mobile-nav-summary"
              onClick={() => scrollToSection("summary")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              Summary
            </button>
            <button
              data-testid="mobile-nav-skills"
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              Skills
            </button>
            <button
              data-testid="mobile-nav-certifications"
              onClick={() => scrollToSection("certifications")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              Certifications
            </button>
            <button
              data-testid="mobile-nav-experience"
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              Experience
            </button>
            <button
              data-testid="mobile-nav-education"
              onClick={() => scrollToSection("education")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              Education
            </button>
            <Button
              data-testid="mobile-button-download-pdf"
              onClick={handlePrint}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
