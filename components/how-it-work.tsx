// 确保在文件顶部添加 "use client"
"use client";

import { useInView } from 'react-intersection-observer';
import Link from 'next/link'; // 使用 Next.js 的 Link 组件以获得更好的性能

// 创建一个可复用的动画子组件，以保持主组件的整洁
import { ReactNode } from 'react';

interface AnimatedBlockProps {
    children: ReactNode;
    delay?: number;
}

const AnimatedBlock = ({ children, delay = 0 }: AnimatedBlockProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // 动画只触发一次
        threshold: 0.1,    // 当元素 10% 可见时触发
    });

    return (
        <div 
            ref={ref}
            className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};


export default function HowItWork() {
    // 数据驱动的步骤，使代码更易于维护和扩展
    const overviewSteps = [
        {
            step: 1,
            title: "Submit your parts request in seconds",
            description: "Just tell us your vehicle model, year, and what you’re looking for — whether it's a full part name or just a problem description.",
            imageUrl: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a24a73e3d969c3504b_overview%20image%20one.webp",
            imageSrcSet: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a24a73e3d969c3504b_overview%20image%20one-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a24a73e3d969c3504b_overview%20image%20one-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a24a73e3d969c3504b_overview%20image%20one.webp 1064w",
        },
        {
            step: 2,
            title: "We Find, Confirm, and Quote the Right Parts",
            description: "We confirm every detail with you — no more guessing. Forget long lines and running from shop to shop. With SAPA, you save time, avoid mistakes, and get the best price.",
            imageUrl: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a24446566bfdb3332a_overview%20image%20two.webp",
            imageSrcSet: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a24446566bfdb3332a_overview%20image%20two-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a24446566bfdb3332a_overview%20image%20two-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a24446566bfdb3332a_overview%20image%20two.webp 1064w",
        },
        {
            step: 3,
            title: "Receive Your Parts — Delivered or Ready for Pickup",
            description: "Once your parts are secured, we arrange delivery to your door or a convenient pickup point. If your mechanic is willing, we’ll even speak with them directly to confirm that the part truly matches your repair.",
            imageUrl: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a3712f50fd8eae7394_overview%20image%20three.webp",
            imageSrcSet: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a3712f50fd8eae7394_overview%20image%20three-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a3712f50fd8eae7394_overview%20image%20three-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734c3a3712f50fd8eae7394_overview%20image%20three.webp 1064w",
        }
    ];

    return (
        <section className="section_overview">
            <div className="padding-global padding-section-medium">
                <div className="container-medium">
                    <div className="overview_wrap">

                        <div className="overview_header">
                            <AnimatedBlock>
                                <div className="badge">
                                    <div className="text-sm text-style-allcaps">How It Works</div>
                                </div>
                            </AnimatedBlock>
                            <AnimatedBlock delay={100}>
                                <h2 className="text-6xl">Our Simple Process for Getting the Right Auto Parts</h2>
                            </AnimatedBlock>
                            <AnimatedBlock delay={200}>
                                <div className="overview_description">
                                    <div className="text-base text-lineheight-2xl">
                                        At Spark Auto Part Assistant, we make it easy to get the parts you need — even if you're not sure what they're called. From request to delivery, we handle everything so you don't have to.
                                    </div>
                                </div>
                            </AnimatedBlock>
                        </div>
                        
                        {overviewSteps.map((step, index) => (
                            <StepBlock key={step.step} {...step} />
                        ))}

                    </div>
                </div>
            </div>
             {/* 添加一些CSS来处理按钮的悬停效果，因为原始代码依赖JS */}
             <style jsx>{`
                .button:hover .button-background {
                    transform: scale(1, 1);
                }
                .button-background {
                    transition: transform 0.3s ease;
                    transform: scale(0, 1); /* 优化悬停动画的初始状态 */
                    transform-origin: left;
                }
            `}</style>
        </section>
    );
}
interface Step {
    step:number,
    title:string,
    description:string,
    imageUrl:string,
    imageSrcSet:string,
}
// 将每个步骤块也拆分为一个独立的、带动画的组件
const StepBlock = ({ step, title, description, imageUrl, imageSrcSet }: Step) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // 块需要20%可见时才触发
    });

    return (
        <div ref={ref} className="overview_block">
            {/* 图片动画 */}
            <div className={`overview_block-visual transition-all duration-700 ease-out ${inView ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'}`}>
                <img 
                    src={imageUrl} 
                    loading="lazy" 
                    sizes="(max-width: 1064px) 100vw, 1064px" 
                    srcSet={imageSrcSet} 
                    alt={`Step ${step}: ${title}`} 
                    className="img" 
                />
            </div>
            {/* 内容动画（带有错开效果） */}
            <div className="overview_block-content">
                <div className="overview_block-text">
                    <div className={`transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
                        <div className="overview_block-badge">
                            <div>{step}</div>
                        </div>
                    </div>
                    <div className={`transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
                        <h3 className="text-4xl">{title}</h3>
                    </div>
                    <div className={`transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
                        <div className="text-base text-lineheight-2xl">{description}</div>
                    </div>
                </div>
                <div className={`transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
                    <div className="button-wrapper">
                        <Link href="/contact-us" className="button w-inline-block">
                            <div className="button-background"></div>
                            <div className="text-block">Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};