'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// 表单字段接口
interface FormData {
  name: string;
  whatsapp: string;
  carBrand: string;
  vinNumber: string;
  partsNeeded: string;
}

// 表单提交状态
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// 动画变体
const formVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function ContactForm() {
  // 表单状态管理
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    carBrand: '',
    vinNumber: '',
    partsNeeded: ''
  });
  
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 表单提交处理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // 调用API路由来处理飞书表格API的交互
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      // 成功提交
      setStatus('success');
      // 重置表单
      setFormData({
        name: '',
        whatsapp: '',
        carBrand: '',
        vinNumber: '',
        partsNeeded: ''
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  // 渲染不同状态的表单
  if (status === 'success') {
    return (
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center py-8">
          <motion.div 
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.2 
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <motion.h3 
            className="text-xl font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Request Submitted Successfully!
          </motion.h3>
          <motion.p 
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We'll contact you shortly with information about your requested parts.
          </motion.p>
          <motion.button 
            onClick={() => setStatus('idle')} 
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Another Request
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 className="text-xl font-semibold mb-4" variants={itemVariants}>
        Repairs done on your preferred schedule, fill the form
      </motion.h3>
      
      {status === 'error' && (
        <motion.div 
          className="bg-red-50 text-red-600 p-3 rounded-md mb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {errorMessage || 'There was an error submitting your request. Please try again.'}
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit}>
        <motion.div className="space-y-4" variants={formVariants}>
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="Your WhatsApp"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="carBrand"
              value={formData.carBrand}
              onChange={handleChange}
              placeholder="Vehicle brand"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="vinNumber"
              value={formData.vinNumber}
              onChange={handleChange}
              placeholder="Vehicle identification number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <textarea
              name="partsNeeded"
              value={formData.partsNeeded}
              onChange={handleChange}
              placeholder="Parts needed"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors disabled:bg-orange-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'submitting' ? 'Submitting...' : 'Make Appointment'}
            </motion.button>
          </motion.div>
        </motion.div>
      </form>
    </motion.div>
  );
}