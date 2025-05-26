import { NextResponse } from 'next/server';

// 飞书API相关配置
interface FeishuConfig {
  appId: string;
  appSecret: string;
  spreadsheetToken: string;
  sheetId: string;
}

// 表单数据接口
interface FormData {
  name: string;
  whatsapp: string;
  carBrand: string;
  vinNumber: string;
  partsNeeded: string;
}

// 获取飞书访问令牌
async function getFeishuToken(config: FeishuConfig) {
  try {
    const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        app_id: config.appId,
        app_secret: config.appSecret
      })
    });

    const data = await response.json();
    
    if (data.code !== 0) {
      throw new Error(`Failed to get Feishu token: ${data.msg}`);
    }
    
    return data.tenant_access_token;
  } catch (error) {
    console.error('Error getting Feishu token:', error);
    throw error;
  }
}

// 将数据写入飞书表格
async function writeToFeishuSheet(token: string, config: FeishuConfig, formData: FormData) {
  try {
    // 准备表格数据
    const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD 格式
    
    // 构建API请求URL
    const url = `https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/${config.spreadsheetToken}/values_prepend`;
    
    // 准备请求数据
    const requestData = {
      valueRange: {
        range: `${config.sheetId}!A:E`, // 假设表格有5列：日期、姓名、WhatsApp、车型、VIN、零件
        values: [
          [currentDate, formData.name, formData.whatsapp, formData.carBrand, formData.vinNumber, formData.partsNeeded]
        ]
      }
    };
    
    // 发送请求
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(requestData)
    });
    
    const data = await response.json();
    
    if (data.code !== 0) {
      throw new Error(`Failed to write to Feishu sheet: ${data.msg}`);
    }
    
    return data;
  } catch (error) {
    console.error('Error writing to Feishu sheet:', error);
    throw error;
  }
}

// API路由处理函数
export async function POST(request: Request) {
  try {
    // 解析请求体
    const formData: FormData = await request.json();
    
    // 验证必填字段
    const requiredFields = ['name', 'whatsapp', 'carBrand', 'vinNumber', 'partsNeeded'];
    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // 飞书API配置
    // 注意：在生产环境中，这些值应该从环境变量中获取
    const feishuConfig: FeishuConfig = {
      appId: process.env.FEISHU_APP_ID || '',
      appSecret: process.env.FEISHU_APP_SECRET || '',
      spreadsheetToken: process.env.FEISHU_SPREADSHEET_TOKEN || '',
      sheetId: process.env.FEISHU_SHEET_ID || ''
    };
    
    // 检查配置是否完整
    const missingConfigs = Object.entries(feishuConfig)
      .filter(([_, value]) => !value)
      .map(([key]) => key);
    
    if (missingConfigs.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Missing Feishu API configuration: ${missingConfigs.join(', ')}. Please provide API credentials.` 
        },
        { status: 500 }
      );
    }
    
    // 获取飞书访问令牌
    const token = await getFeishuToken(feishuConfig);
    
    // 将数据写入飞书表格
    await writeToFeishuSheet(token, feishuConfig, formData);
    
    // 返回成功响应
    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}