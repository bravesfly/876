import { NextResponse } from 'next/server';

// 飞书API相关配置
interface FeishuConfig {
  appId: string;
  appSecret: string;
  spreadsheetToken: string; // 多维表格APP token
  sheetId: string;          // 多维表格TABLE ID
}

// 表单数据接口
interface FormData {
  name: string;
  phone: string; // 对应页面中的Phone / WhatsApp字段
  email: string; // 可选字段
  role: string;  // 角色/兴趣
  message: string; // 合作内容
}

// 获取飞书访问令牌
async function getFeishuToken(config: FeishuConfig) {
  try {
    const response = await fetch('https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal/', {
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
    // 多维表格API端点
    const url = `https://open.larksuite.com/open-apis/bitable/v1/apps/${config.spreadsheetToken}/tables/${config.sheetId}/records`;

    // 构建多维表格请求体
    const requestData = {
      fields: {
        "日期": null,
        "姓名": formData.name,
        "电话": formData.phone,
        "邮箱": formData.email || "",
        "角色": formData.role,
        "内容": formData.message
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
    console.log(data);
    
    
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
    const requiredFields = ['name', 'phone', 'role', 'message'];
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
    console.log('token:',token);
    console.log('------------------------');
    
    
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