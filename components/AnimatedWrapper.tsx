"use client";
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    delay?: number;
    animationType?: 'fade-in-up' | 'fade-in' | 'scale-in';
}

export const AnimatedWrapper = ({ children, className, delay = 0, animationType = 'fade-in-up' }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const getAnimationClasses = () => {
        switch (animationType) {
            case 'fade-in':
                return inView ? 'opacity-100' : 'opacity-0';
            case 'scale-in':
                return inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
            case 'fade-in-up':
            default:
                return inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
        }
    };

    return (
        <div
            ref={ref}
            className={`${className || ''} transition-all duration-700 ease-out ${getAnimationClasses()}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};