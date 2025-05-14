// src/components/Footer.tsx
import Link from 'next/link';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-footer-link hover:text-footer-foreground transition-colors text-sm">
    {children}
  </Link>
);

const FooterButtonLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="inline-block bg-footer-button-background border border-footer-button-border text-footer-foreground hover:bg-footer-button-border transition-colors px-4 py-2 rounded-full text-sm"
  >
    {children}
  </Link>
);

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h5 className="text-xs text-footer-heading-foreground uppercase tracking-wider mb-3">{title}</h5>
    <ul className="space-y-2">
      {children}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Tagline */}
        <div className="text-center mb-12">
          {/* EQT SVG Logo */}
          <svg 
            width="160" 
            height="50" 
            viewBox="0 0 160 50" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4"
            aria-label="EQT Logo"
          >
            {/* E */}
            <path d="M0 0H30V8H8V19H25V27H8V42H30V50H0V0Z" />
            {/* Q */}
            <path fillRule="evenodd" clipRule="evenodd" d="M75 25C75 11.1929 63.8071 0 50 0C36.1929 0 25 11.1929 25 25C25 38.8071 36.1929 50 50 50C63.8071 50 75 38.8071 75 25ZM33 25C33 15.6112 40.6112 8 50 8C59.3888 8 67 15.6112 67 25C67 34.3888 59.3888 42 50 42C40.6112 42 33 34.3888 33 25Z" transform="translate(35, 0)" />
            <path d="M53 35L67 49L70 45L57 31H53V35Z" transform="translate(35, 0)" />
            {/* T */}
            <path d="M0 0H30V8H19V50H11V8H0V0Z" transform="translate(130, 0)" />
          </svg>
          <p className="text-3xl text-footer-foreground">
            A Purpose-Driven Global Investment Organization
          </p>
        </div>

        {/* Bottom Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <FooterColumn title="Contact us">
            <li><FooterLink href="#">Offices</FooterLink></li>
            <li><FooterButtonLink href="tel:+46850655300">+46850655300</FooterButtonLink></li>
          </FooterColumn>

          <FooterColumn title="Press">
            <li><FooterLink href="#">Newsroom</FooterLink></li>
            <li><FooterButtonLink href="mailto:press@eqtpartners.com">press@eqtpartners.com</FooterButtonLink></li>
          </FooterColumn>

          <FooterColumn title="Careers">
            <li><FooterLink href="#">Get to know EQT</FooterLink></li>
            <li><FooterLink href="#">Life at EQT</FooterLink></li>
            <li><FooterLink href="#">Work at EQT</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Follow us">
            <li><FooterLink href="#">LinkedIn</FooterLink></li>
            <li><FooterLink href="#">X</FooterLink></li>
            <li><FooterLink href="#">YouTube</FooterLink></li>
            <li><FooterLink href="#">Instagram</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Legal">
            <li><FooterLink href="#">Terms and Conditions</FooterLink></li>
            <li><FooterLink href="#">Cookie Notice</FooterLink></li>
            <li><FooterLink href="#">Privacy Notice</FooterLink></li>
            <li><FooterLink href="#">EQT Policies & Statements</FooterLink></li>
          </FooterColumn>

          <FooterColumn title="Local sites">
            <li><FooterLink href="#">Japan - 日本</FooterLink></li>
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
}
