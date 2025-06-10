"use client";
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedWrapper } from './AnimatedWrapper';

const impactData = [
    { value: "24", unit: "H", desc: "request answered <br />within 24 hours" },
    { value: "50", unit: "+", desc: "Based in Jamaica,  <br />we know the market" },
    { value: "10", unit: "+", desc: "verify exact parts  <br />before purchase" },
    { value: "500", unit: "+", desc: "Home drop-off   <br />nationwide shipping" },
];

export default function Impact() {
    return (
        <section className="section_impact">
            <div className="padding-global padding-section-small">
                <div className="container-medium">
                    <div className="impact_wrap">
                        <AnimatedWrapper className="impact_visual" animationType='scale-in'>
                             <Image 
                                src="/6734e159a165bcdef44a0b50_impact%20image.webp" 
                                loading="lazy" 
                                alt="Mechanic working on a car" 
                                width={1064}
                                height={700}
                             />
                        </AnimatedWrapper>

                        <div className="impact_content-wrap">
                            <div className="impact_header">
                                <AnimatedWrapper><h2 className="text-6xl">Transparent Pricing, Local Drop-Off, and Flexible Payment Options</h2></AnimatedWrapper>
                                <AnimatedWrapper delay={150}>
                                    <div className="text-base text-lineheight-2xl">We offer direct delivery to select gated communities in Kingston and Portmore. For other locations across Jamaica, we coordinate courier shipping through trusted third-party providers.</div>
                                </AnimatedWrapper>
                            </div>

                            <div className="impact_content">
                                {impactData.map((card, index) => (
                                    <AnimatedWrapper key={index} className="impact_card" delay={300 + index * 100}>
                                        <div className="text-5xl is-impact-card-title">{card.value} <strong className="text-4xl text-color-blue">{card.unit}</strong></div>
                                        <div className="text-base text-lineheight-2xl" dangerouslySetInnerHTML={{ __html: card.desc }}></div>
                                    </AnimatedWrapper>
                                ))}
                            </div>

                             <AnimatedWrapper delay={600}>
                                <div className="button-wrapper">
                                    <Link href="/contact-us" className="button w-inline-block">
                                        <div className="button-background"></div>
                                        <div className="text-block">Contact Us</div>
                                    </Link>
                                </div>
                            </AnimatedWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}