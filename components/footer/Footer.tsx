import { ExternalLink, Facebook, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground flex justify-center">
            <div className="w-full px-4 md:px-0 md:w-[70%] py-12 md:py-16">
                <div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
                >
                    {/* About */}
                    <div>
                        <div className="flex gap-1 items-center">
                            <Image src='/assets/logo.webp' alt="Logo" width={50} height={50} />
                            <h4 className="text-xl font-bold">SMS Institute</h4>
                        </div>

                        <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                            Transforming skills into success through quality vocational training and international certification.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-primary-foreground/80 hover:text-accent transition-all duration-200"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-primary-foreground/80 hover:text-accent transition-all duration-200"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:info@smsinstitute.com"
                                className="text-primary-foreground/80 hover:text-accent transition-all duration-200"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                { label: 'About Us', href: '/about-us' },
                                { label: 'Courses', href: '/our-programs' },
                                { label: 'Contact', href: '/contact-us' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Popular Programs</h4>
                        <ul className="space-y-2 text-sm">
                            {['Electrician', 'Carpenter', 'Welder', 'Chef'].map((program) => (
                                <li key={program}>
                                    <a
                                        href="/enroll-now"
                                        className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                                    >
                                        {program}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                        <div className="space-y-3 text-sm">
                            <p className="text-primary-foreground/80">
                                <strong>Phone:</strong>{" "}
                                <a href="tel:9851190713" className="hover:text-accent transition-colors duration-200">
                                    9851190713
                                </a>
                            </p>
                            <p className="text-primary-foreground/80">
                                <strong>Email:</strong><br />
                                <a href="mailto:info@smsinstitute.com" className="hover:text-accent transition-colors duration-200">
                                    info@smsinstitute.com
                                </a>
                            </p>
                            {/* <p className="text-primary-foreground/80">
                                <strong>Website:</strong><br />
                                <a href="www.smsinstitute.com" className="hover:text-accent transition-colors duration-200 flex items-center gap-1">
                                    www.smsinstitute.com <ExternalLink size={14} />
                                </a>
                            </p> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="border-t border-primary-foreground/20 pt-8"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/70 gap-4">
                        <p>&copy; {currentYear} SMS Skills & Trades Institute. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="hover:text-accent transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-accent transition-colors duration-200"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
