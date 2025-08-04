# EmailJS Setup Instructions

To enable the contact form functionality, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Contact Form

1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email (ombewamaurice79@gmail.com) for the message

## Security Notes

- The `.env` file is already added to `.gitignore` to keep your credentials secure
- Never commit your actual EmailJS credentials to version control
- For production deployment, set these environment variables in your hosting platform

## Troubleshooting

- **Form not sending**: Check that all environment variables are set correctly
- **Email not received**: Check your spam folder and verify the template setup
- **CORS errors**: Make sure your domain is added to EmailJS allowed origins

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 1 email template
- Basic support

This should be sufficient for a portfolio contact form.
