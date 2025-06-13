import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'

interface ContactFormData {
  name: string
  email: string
  message: string
}

const sesClient = new SESv2Client({ region: process.env.AWS_REGION || 'ap-northeast-1' })

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateInput = (data: any): data is ContactFormData => {
  if (!data || typeof data !== 'object') return false
  
  const { name, email, message } = data
  
  if (!name || typeof name !== 'string' || name.trim().length === 0) return false
  if (!email || typeof email !== 'string' || !validateEmail(email)) return false
  if (!message || typeof message !== 'string' || message.trim().length === 0) return false
  
  return true
}

const createCorsHeaders = (origin?: string) => {
  const allowedOrigins = [
    'https://letsspeak.github.io',
    'https://lsklab.com',
    'http://localhost:5173',
    'http://localhost:5174'
  ]
  
  const isAllowedOrigin = origin && allowedOrigins.includes(origin)
  
  return {
    'Access-Control-Allow-Origin': isAllowedOrigin ? origin : 'https://letsspeak.github.io',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Requested-With',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Max-Age': '86400'
  }
}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const corsHeaders = createCorsHeaders(event.headers.origin || event.headers.Origin)
  
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ''
    }
  }
  
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }
  
  try {
    // Parse request body
    let requestData: any
    try {
      requestData = JSON.parse(event.body || '{}')
    } catch (parseError) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid JSON format' })
      }
    }
    
    // Validate input
    if (!validateInput(requestData)) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ 
          error: 'Invalid input data. Required fields: name, email, message' 
        })
      }
    }
    
    const { name, email, message } = requestData as ContactFormData
    
    // Prepare email content
    const emailSubject = `【ポートフォリオサイト】${name}様からのお問い合わせ`
    const emailBody = `
お問い合わせを受信しました。

■ 送信者情報
お名前: ${name}
メールアドレス: ${email}

■ お問い合わせ内容
${message}

■ 送信日時
${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}

このメールは自動送信されました。
    `.trim()
    
    // Send email via SES
    const sendEmailCommand = new SendEmailCommand({
      FromEmailAddress: process.env.FROM_EMAIL || 'contact@lsklab.com',
      Destination: {
        ToAddresses: [process.env.TO_EMAIL || 'contact@lsklab.com']
      },
      Content: {
        Simple: {
          Subject: {
            Data: emailSubject,
            Charset: 'UTF-8'
          },
          Body: {
            Text: {
              Data: emailBody,
              Charset: 'UTF-8'
            }
          }
        }
      },
      ReplyToAddresses: [email]
    })
    
    await sesClient.send(sendEmailCommand)
    
    console.log(`Contact form submission processed successfully for ${email}`)
    
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ status: 'ok' })
    }
    
  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ 
        error: 'Internal server error. Please try again later.' 
      })
    }
  }
}