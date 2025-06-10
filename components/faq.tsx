"use client"
import  { useState } from "react";

interface FAQItem {
    title: string;
    desc: string;
    expanded?: boolean
}

// 你的原始数据
const initialFaqData: FAQItem[] = [
    { title: 'What kind of auto parts can you help me find?', desc: 'We offer a range of services, including residential cleaning, deep cleaning, move-in/move-out cleaning, and seasonal deep cleaning.', expanded: false },
    { title: 'Can you help confirm if I’m requesting the right part?', desc: 'We offer a range of services, including residential cleaning, deep cleaning, move-in/move-out cleaning, and seasonal deep cleaning.', expanded: false },
    { title: 'How do I request a quote for parts?', desc: 'We offer a range of services, including residential cleaning, deep cleaning, move-in/move-out cleaning, and seasonal deep cleaning.', expanded: false },
    { title: 'How do I receive my parts after ordering?', desc: 'We offer a range of services, including residential cleaning, deep cleaning, move-in/move-out cleaning, and seasonal deep cleaning.', expanded: false },
    { title: 'What if the part is wrong or doesn’t fit?', desc: 'We offer a range of services, including residential cleaning, deep cleaning, move-in/move-out cleaning, and seasonal deep cleaning.', expanded: false },
    { title: 'What payment methods do you accept?', desc: 'We accept secure online payments via debit/credit card (processed by Stripe), as well as direct bank transfers to our NCB business account.', expanded: false },
    { title: 'How long does delivery usually take?', desc: 'For in-stock local parts, delivery can be same-day or next-day in Kingston and Portmore. For islandwide courier, it usually takes 1–3 working days.', expanded: false },
    { title: 'Can you help with parts that need to be imported?', desc: 'Yes. If a part is not available locally, we can assist with overseas sourcing. Estimated delivery time and shipping cost will be provided in the quote.', expanded: false },
    { title: 'Do you offer installation or mechanic referrals?', desc: 'While we don’t install parts directly, we can recommend reliable local mechanics or garages depending on your location and request.', expanded: false },
    { title: 'What if I have an issue after receiving my part?', desc: ' If the part is damaged, incorrect, or doesn’t match your vehicle, please contact our support team within 3 days of receiving the item. We’ll verify the issue and work with the supplier to resolve it. Most items are returnable as long as they are unused and in original packaging. After 3 days, we may not be able to accept returns.', expanded: false },
    { title: 'Why should I use Spark instead of going shop to shop?', desc: 'With Spark, you skip the long lines, wrong parts, and wasted time. We search trusted local suppliers for you, confirm the part fits your vehicle, and arrange fast delivery or pickup. Instead of guessing or arguing with store clerks, you get professional, one-on-one support — without leaving your home.', expanded: false },
];

export default function FAQ() {
    const [faqList, setFaqList] = useState<FAQItem[]>(initialFaqData);

    // 优化后的点击事件：点击一个展开，其他自动关闭
    const toggleExpanded = (index: number) => {
        const newFaqList = faqList.map((item: FAQItem, i: number) => {
            if (i === index) {
                // 切换当前点击项的展开状态
                return { ...item, expanded: !item.expanded };
            }
            // 将所有其他项设置为折叠状态
            return { ...item, expanded: false };
        });
        setFaqList(newFaqList);
    };

    return (
        <>
            <section className="section_faq">
                <div className="padding-global padding-section-medium">
                    <div className="container-medium">
                        <div className="faq_wrap">
                            <div className="faq_header">
                                <h2 className="text-6xl">Frequently asked questions</h2>
                                <div className="text-base text-lineheight-2xl">Everything you need to know about our cleaning services and billing.</div>
                            </div>
                            <div className="faq_list">
                                {faqList.map((item: FAQItem, index: number) => {
                                    return (
                                        // 使用 item.expanded 动态添加 'is-open' 类
                                        <div 
                                            key={index} 
                                            className={`accordion w-dropdown ${item.expanded ? 'is-open' : ''}`}
                                            onClick={() => toggleExpanded(index)}
                                        >
                                            <div 
                                                className={`accordion-toggle w-dropdown-toggle ${item.expanded ? 'w--open' : ''}`}
                                                aria-expanded={item.expanded}
                                                role="button"
                                            >
                                                <div className="accordion_toggle-text">{item.title}</div>
                                                <div className="accordion-icon">
                                                    <div className="icon-horizontal"></div>
                                                    <div className="icon-vertical"></div>
                                                </div>
                                            </div>
                                            <nav className={`accordion-content w-dropdown-list ${item.expanded ? 'w--open' : ''}`}>
                                                <div className="content-wrap">
                                                    <div className="text-base text-lineheight-2xl">{item.desc}</div>
                                                </div>
                                            </nav>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 使用 styled-jsx 添加动画和样式，代码更整洁 */}
            <style jsx>{`
                .accordion {
                    cursor: pointer;
                    /* 移除原始代码中不必要的 transform 和 z-index */
                }
                .accordion-content {
                    /* 关键动画：使用 max-height 实现平滑展开/折叠 */
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease-out;
                }
                .accordion-content .content-wrap {
                    opacity: 0;
                    transform: translateY(-10px); /* 轻微向上移动，增加动感 */
                    transition: opacity 0.3s ease-in, transform 0.3s ease-in;
                    padding-bottom: 1.5rem; /* 为内容添加一些底部空间 */
                }
                .accordion-icon .icon-vertical {
                    /* 关键动画：图标旋转 */
                    transition: transform 0.3s ease;
                }

                /* --- 展开时的样式 --- */
                .accordion.is-open .accordion-content {
                    /* 设置一个足够大的值，确保内容能完全显示 */
                    max-height: 1000px; 
                    transition: max-height 0.5s ease-in;
                }
                .accordion.is-open .accordion-content .content-wrap {
                    opacity: 1;
                    transform: translateY(0);
                }
                .accordion.is-open .accordion-icon .icon-vertical {
                    /* 旋转90度形成减号 */
                    transform: rotate(90deg);
                }
                
                /* 保持你原始的UI库样式 */
                .accordion-toggle.w--open {
                   /* 这个类名可能控制一些 Webflow 的默认样式，我们保留它 */
                }
                .accordion-content.w--open {
                    /* 这个类名现在主要由我们的 max-height 控制，但同样保留 */
                }

                /* 你的其他样式，这里只放示例 */
                
                .icon-horizontal { height: 2px; width: 16px; }
                .icon-vertical { height: 16px; width: 2px; position: absolute; }
            `}</style>
        </>
    )
}