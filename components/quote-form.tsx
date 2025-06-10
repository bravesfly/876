"use client";

import { useState, FormEvent } from 'react';
import { useInView } from 'react-intersection-observer';

// 定义表单数据和状态的类型
type FormState = 'idle' | 'loading' | 'success' | 'error';
interface FormData {
    name: string;
    phone: string;
    needs: string;
}

export function QuoteForm() {
    // Intersection Observer 用于触发入场动画
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // 表单数据状态
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        needs: '',
    });

    // 表单提交状态
    const [formState, setFormState] = useState<FormState>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.needs) {
            setFormState('error');
            setErrorMessage('Please fill out all fields.');
            return;
        }

        setFormState('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/submit-form', { // 你的 API 端点
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // 如果API返回错误信息，则显示它
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong.');
            }

            setFormState('success');
        } catch (error) {
            setFormState('error');
            setErrorMessage(error as string);
        }
    };

    // 如果提交成功，显示成功信息
    if (formState === 'success') {
        return (
            <div id="quote-form-section" ref={ref} className="quote-form-container success-state">
                <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h3 className="text-4xl">Request Sent!</h3>
                <p className="text-base text-lineheight-2xl">
                    Thank you for your submission. We've received your request and will get back to you shortly.
                </p>
            </div>
        );
    }

    // 默认表单视图
    return (
        <section id="quote-form-section" ref={ref} className="quote-form-container">
            <div className={`form-header transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-6xl">Get a Quick Quote</h2>
                <p className="text-base text-lineheight-2xl">
                    Fill out the form below, and our team will get back to you with a personalized quote for your auto parts.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className={`quote-form transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '200ms' }}
            >
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., John Doe"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., (876) 555-1234"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="needs">Parts You Need</label>
                    <textarea
                        id="needs"
                        name="needs"
                        value={formData.needs}
                        onChange={handleInputChange}
                        placeholder="Please describe the part(s) you need. Include your car's make, model, and year for best results. (e.g., 'Front brake pads for a 2018 Honda Civic')"
                        rows={5}
                        required
                    ></textarea>
                </div>
                
                {formState === 'error' && <p className="error-message">{errorMessage}</p>}

                <div className="button-wrapper">
                    <button type="submit" className="button is-secondary w-inline-block" disabled={formState === 'loading'}>
                        <div className="button-background is-white-bg"></div>
                        <div className="text-block">
                            {formState === 'loading' ? 'Submitting...' : 'Submit Request'}
                        </div>
                    </button>
                </div>
            </form>
        </section>
    );
}