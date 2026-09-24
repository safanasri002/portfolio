import Socials from "./Socials";

export default function Footer() {
  return (
    <footer id="contact">
      <p className="eyebrow">Get in touch</p>
      <h2>Let&apos;s talk</h2>
      <p>Always open to internship opportunities in AI and Cloud, as well as collaborative projects.</p>
      <a
        className="btn-primary contact-cta"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=safanasri2003@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Envoyer un email
      </a>
      <Socials />
      <p className="footnote">© 2026 Safa Nasri. Built with coffee and a bit of code.</p>
    </footer>
  );
}
