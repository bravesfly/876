// 确保在文件顶部添加 "use client"
"use client";

import { useInView } from 'react-intersection-observer';
import Link from 'next/link'; // 使用 Next.js 的 Link 组件

// 将卡片数据提取出来，使代码更清晰、更易于维护
const solutionsData = [
    {
        id: "w-node-c78c30ef-a5c5-9d0c-4b95-2d49cd7827e9-b22e8805",
        iconSrc: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6733dfc2d15abf53896aa28f_services%20icon%201.svg",
        title: "Standard Parts Request",
        description: "Easily request common parts like filters, pads, and sensors — just tell us your vehicle and need."
    },
    {
        id: "w-node-_8f834c83-4076-e93f-681f-b0373112f536-b22e8805",
        iconSrc: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6733e1956b567a88d99e1a75_services%20icon%202.svg",
        title: "Assisted Matching",
        description: "Not sure what to ask for? Just describe your problem — we’ll help identify the right part."
    },
    {
        id: "w-node-_43a9d281-84c3-ce6a-da5e-a29646b56b69-b22e8805",
        iconSrc: "https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6733e1c4564205f5938dfc70_services%20icon%203.svg",
        title: "Priority Sourcing Service",
        description: "Want it faster or can’t find it? Upgrade to Priority Sourcing for quicker quotes and expanded searches."
    }
];


export default function Hero() {
    // 创建一个 observer 来监测整个组件容器
    const { ref, inView } = useInView({
        triggerOnce: true, // 动画只触发一次
        threshold: 0.1,    // 当容器 10% 可见时触发所有动画
    });

    return (
        <>
            <section className="section_solutions" ref={ref}>
                <div className="padding-global padding-section-medium">
                    <div className="container-medium">
                        <div className="solutions_wrap">
                            <div className="solutions_header">
                                {/* 标题动画 */}
                                <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                    <h2 className="text-6xl">Professional Auto Parts Sourcing That Prioritizes Speed, Accuracy, and Convenience</h2>
                                </div>
                                {/* 描述动画 (延迟 150ms) */}
                                <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
                                    <div className="text-base text-lineheight-2xl">
                                        Transform your car repair process with our smart sourcing. From part matching to delivery, SAPA makes it faster and easier to get what you need — all without running store to store. Choose the service that best fits your situation — we’ll handle the rest.
                                    </div>
                                </div>
                                {/* 按钮动画 (延迟 300ms) */}
                                <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
                                    <div className="button-wrapper">
                                        <Link href="/contact-us" className="button w-inline-block">
                                            <div className="button-background"></div>
                                            <div className="text-block">Contact Us</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="solutions_content">
                                {solutionsData.map((card, index) => (
                                    <div 
                                        key={card.id} 
                                        id={card.id} 
                                        className={`solutions_card transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                        // 关键：为每个卡片设置递增的延迟，实现错落效果
                                        style={{ transitionDelay: `${400 + index * 150}ms` }}
                                    >
                                        <div className="solutions_card-icon">
                                            <img src={card.iconSrc} loading="lazy" alt="" className="img" />
                                        </div>
                                        <h3 className="text-2xl">{card.title}</h3>
                                        <div className="text-sm">{card.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 使用 styled-jsx 添加按钮悬停效果 */}
            <style jsx>{`
                .button:hover .button-background {
                    transform: scale(1, 1);
                }
                .button-background {
                    transition: transform 0.3s ease;
                    transform: scale(0, 1);
                    transform-origin: left;
                }
            `}</style>
        </>
    );
}