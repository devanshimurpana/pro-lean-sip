import logo from "@/assets/logo.png";
import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Pro Lean Sip" className="w-10 h-10" width={512} height={512} loading="lazy" />
          <span className="font-display text-lg tracking-wide">PRO LEAN SIP</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/proleansip/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:enquiry@proleansip.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            enquiry@proleansip.com
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Pro Lean Sip. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
