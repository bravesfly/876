"use client";
import Link from 'next/link';
import { AnimatedWrapper } from './AnimatedWrapper';

const categoryData = [
    { href: "/services/home-cleaning", title: "Fast Quotes for Common Parts", desc: "Need filters, brake pads, or sensors? Get quick matches based on your car's model and year." },
    { href: "/services/business-cleaning", title: "Not Sure Version? Let Us Match It.", desc: "You know what part you need — just not the exact version or fit." },
    { href: "/services/green-cleaning-solutions", title: "Priority sourcing service", desc: "Need it fast or can’t find it locally? We’ll search wider, move quicker, and update you at every step" },
    { href: "/services/tailored-services", title: "Flexible sourcing plans", desc: "From standard requests to complex needs, we adapt our service to fit your situation — not the other way around." },
    { href: "/services/client-focused-service", title: "Customer-first approach", desc: "We keep you in the loop at every step — from sourcing to confirmation. Real people, real updates, zero guesswork." }
];

const CategoryCard = ({ href, title, desc, delay }: {
    href: string;
    title: string;
    desc?: string;  // 可选属性
    delay?: number; // 可选属性
}) => (
    <AnimatedWrapper className="w-dyn-item" delay={delay}>
        <Link href={href} className="categories_card w-inline-block">
            <div className="categories_card-content">
                <div className="categories_card-header">
                    {/* SVG Icon can be componentized if it changes per card */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="icon-1x1-medium"><path d="M11.62 5.825L16 2.5L22 7.05V4H25.5V9.705L30.5 13.5V16.5H28V29.5H4V16.5H1.5V13.5L4.605 11.145" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M26.0216 14.9995L15.9991 7.39453L5.97656 14.9995" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 7C7.51625 6.43875 7.06125 5.98375 6.5 3.5C5.93875 5.98375 5.48375 6.43875 3 7C5.48375 7.56125 5.93875 8.01625 6.5 10.5C7.06125 8.01625 7.51625 7.56125 10 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 23.5498C12.8712 23.0686 12.4812 22.6786 12 20.5498C11.5188 22.6786 11.1288 23.0686 9 23.5498C11.1288 24.0311 11.5188 24.4211 12 26.5498C12.4812 24.4211 12.8712 24.0311 15 23.5498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.5 18.0498C20.3063 17.3286 19.7212 16.7436 19 13.5498C18.2788 16.7436 17.6937 17.3286 14.5 18.0498C17.6937 18.7711 18.2788 19.3561 19 22.5498C19.7212 19.3561 20.3063 18.7711 23.5 18.0498Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <h3 className="text-2xl">{title}</h3>
                </div>
                <div className="text-sm">{desc}</div>
            </div>
            <div className="more-services_card-link">
                <div className="text-base text-weight-bold is-categories-card-link">Contact Us</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
        </Link>
    </AnimatedWrapper>
);


export default function Categories() {
    return (
        <section className="section_categories is-home-page">
            <div className="padding-global padding-section-large">
                <div className="container-medium">
                    <div className="categories_wrap">
                        <div className="categories_header">
                            <div className="categories_title-wrap">
                                <AnimatedWrapper><h2 className="text-5xl">All-in-One Local Parts Sourcing</h2></AnimatedWrapper>
                                <AnimatedWrapper delay={150}><div className="text-base text-lineheight-2xl">From request to delivery, we handle the full process — saving you time, effort, and mistakes.</div></AnimatedWrapper>
                            </div>
                            <AnimatedWrapper delay={250}>
                                <div className="button-wrapper">
                                    <Link href="/services" className="button is-outline-blue w-button">See services</Link>
                                </div>
                            </AnimatedWrapper>
                        </div>

                        {/* Note: Original HTML has multiple w-dyn-list. Simplified to one list for clarity */}
                        {categoryData.map((card, index) => (
                            <CategoryCard key={index} href={card.href} title={card.title} desc={card.desc} delay={300 + index * 100} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}