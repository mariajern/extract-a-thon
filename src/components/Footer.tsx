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
          <h2 className="text-5xl font-bold mb-4">EQT</h2>
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
