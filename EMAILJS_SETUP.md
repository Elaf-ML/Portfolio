# EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which should be sufficient for a portfolio contact form

## 2. Add an Email Service

1. In the EmailJS dashboard, go to "Email Services" and click "Add New Service"
2. Select your email provider (Gmail, Outlook, etc.)
3. Follow the authentication steps for your provider
4. Name your service (e.g., "portfolio_contact")
5. Note down the **Service ID** (you'll need this later)

## 3. Create an Email Template

1. In the EmailJS dashboard, go to "Email Templates" and click "Create New Template"
2. Design your email template with the following dynamic variables:
   - `{{name}}` - The sender's name
   - `{{email}}` - The sender's email
   - `{{subject}}` - The message subject
   - `{{message}}` - The message content
   - `{{to_email}}` - The recipient email (yours)

3. Here's a simple template example:

```
From: {{name}} <{{email}}>
To: {{to_email}}
Subject: Portfolio Contact: {{subject}}

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save your template and note down the **Template ID**

## 4. Get Your Public Key

1. In the EmailJS dashboard, go to "Account" > "API Keys"
2. Copy your **Public Key**

## 5. Update Your Contact Component

Open your `Contact.tsx` file and update the following values:

```typescript
const serviceId = 'your_service_id'; // Replace with your Service ID
const templateId = 'your_template_id'; // Replace with your Template ID
const userId = 'your_public_key'; // Replace with your Public Key
```

## 6. Test Your Contact Form

1. Fill out your contact form and submit it
2. Check your email to ensure you received the message
3. Check the browser console for any errors if the email doesn't arrive

## Troubleshooting

- If emails aren't being sent, check the browser console for error messages
- Verify all IDs are correctly entered in your `Contact.tsx` file
- Ensure your email template has all the required variables
- Check your EmailJS dashboard for any sending limitations or errors

## Security Note

The EmailJS Public Key is designed to be used in client-side code and is safe to include in your repository. However, never share your EmailJS Private Key or other sensitive authentication information. 