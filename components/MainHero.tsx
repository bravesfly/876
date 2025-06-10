"use client";
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedWrapper } from './AnimatedWrapper';
import CountUp from 'react-countup'; // 安装这个库来做数字滚动动画: npm i react-countup
import { useInView } from 'react-intersection-observer';

const stats = [
    { value: 1300, suffix: '+', label: 'Parts requests handled' },
    { value: 95, suffix: '%', label: 'Match accuracy' },
    { value: 48, suffix: 'H', label: 'Delivery speed' }
];

export default function MainHero() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <section className="section_hero">
            <div className="padding-global">
                <div className="container-medium">
                    <div className="hero_background"></div>
                    <div className="hero_wrap">
                        <div className="hero_content">
                            <div className="hero_header">
                                <div className="hero_title-wrap">
                                    <AnimatedWrapper animationType="fade-in-up">
                                        <h1 className="text-9xl">The best<strong className="text-color-green"> auto parts </strong>in Jamaica</h1>
                                    </AnimatedWrapper>
                                    <AnimatedWrapper delay={150}>
                                        <div className="text-base text-lineheight-2xl">
                                            Spark Auto Part Assistant provides a smarter way to source car parts in Jamaica. Submit your request online — we’ll find the best local options, confirm details with you, and arrange fast delivery or pickup. No more waiting in line or visiting multiple stores. Get the parts you need, without the hassle.
                                        </div>
                                    </AnimatedWrapper>
                                </div>
                                <AnimatedWrapper delay={300}>
                                    <div className="hero_buttons-wrap">
                                        <div className="button-wrapper">
                                            <Link href="/contact-us" className="button is-secondary w-inline-block">
                                                <div className="button-background is-white-bg"></div>
                                                <div className="text-block">Get a Quote</div>
                                            </Link>
                                        </div>
                                        <div className="button-wrapper">
                                            <Link href="/services" className="button is-outline w-button">How It Works</Link>
                                        </div>
                                    </div>
                                </AnimatedWrapper>
                            </div>

                            <div className="hero_statistics" ref={ref}>
                                {stats.map((stat, index) => (
                                    <div key={index}>
                                        <AnimatedWrapper delay={400 + index * 150}>
                                            <div className="hero_value">
                                                <div className="text-6xl is-hero-value">
                                                    {inView && <CountUp end={stat.value} duration={2.5} />}
                                                    <strong className={`text-5xl text-color-green ${index === 0 ? 'is-first' : 'is-second'}`}>{stat.suffix}</strong>
                                                </div>
                                                <div className="text-xs">{stat.label}</div>
                                            </div>
                                        </AnimatedWrapper>
                                        {index < stats.length - 1 && (
                                            <AnimatedWrapper animationType='fade-in' delay={450 + index * 150}>
                                                <div className="vertical-line"></div>
                                            </AnimatedWrapper>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <AnimatedWrapper className="hero_visual" animationType='scale-in' delay={200}>
                             <Image 
                                className="img" 
                                src="/67328069adab5393875d682c_hero%20visual.webp" 
                                alt="Auto parts arranged neatly" 
                                width={1174}
                                height={800} // 添加一个近似的高度
                                priority // 这是首屏图片，优先加载
                             />
                        </AnimatedWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}