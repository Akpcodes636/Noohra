// utils/emailTemplates.ts
export function assessmentEmailTemplate(scores: { ADHD: number; ASD: number; General: number }) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Your Assessment Results</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
            color: #333;
          }
          .container {
            max-width: 500px;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          h2 {
            color: #4a90e2;
            margin-bottom: 10px;
          }
          .score-box {
            background: #f1f4f9;
            padding: 10px 15px;
            border-radius: 8px;
            margin-bottom: 10px;
          }
          .score-label {
            font-weight: bold;
          }
          .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #888;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🧠  Your Assessment Results</h2>
          <p>Here’s how you scored based on your answers:</p>
          
          <div class="score-box"><span class="score-label">ADHD:</span> ${scores.ADHD}</div>
          <div class="score-box"><span class="score-label">ASD:</span> ${scores.ASD}</div>
          <div class="score-box"><span class="score-label">General:</span> ${scores.General}</div>
          
          <p>Thank you for completing the assessment.  
          This result is for informational purposes and should not replace professional diagnosis.</p>
  
          <div class="footer">
            Noohra — Your AI-Powered Learning App for ADHD & ASD Support
          </div>
        </div>
      </body>
    </html>
    `;
  }
  