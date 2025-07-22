type AssessmentScore = {
    X: number;
    Y: number;
    Z: number;
  };
 export const generateAssessmentEmail = (firstName: string, score:AssessmentScore, diagnosisSummary: string) => {
    return `
      <html>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f5f5f5">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="border-radius: 8px; overflow: hidden;">
                  <tr>
                    <td align="center" style="background-color: #0F172A; padding: 30px;">
                      <h1 style="color: #ffffff; margin: 0;">Greene Nation</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 30px; color: #333;">
                      <h2 style="margin-top: 0;">Hello,</h2>
                      <p>Thank you for taking the assessment. Here are your results:</p>
                      <table width="100%" cellpadding="10" cellspacing="0" border="0" style="margin-top: 20px;">
                        <tr>
                          <td><strong>ADHD-related Score (Category X):</strong></td>
                          <td>${score.X}</td>
                        </tr>
                        <tr>
                          <td><strong>ASD-related Score (Category Y):</strong></td>
                          <td>${score.Y}</td>
                        </tr>
                        <tr>
                          <td><strong>General/Mixed Score (Category Z):</strong></td>
                          <td>${score.Z}</td>
                        </tr>
                      </table>
  
                      <p style="margin-top: 30px;"><strong>Summary:</strong></p>
                      <p style="background-color: #f0f0f0; padding: 15px; border-left: 4px solid #0F172A;">
                        ${diagnosisSummary}
                      </p>
  
                      <p style="margin-top: 30px;">If you have any questions, feel free to reach out to us.</p>
  
                      <p>Warm regards,<br/>The Greene Nation Team</p>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="background-color: #0F172A; color: #ffffff; padding: 20px;">
                      <small>© 2025 Greene Nation. All rights reserved.</small><br/>
                      <small>greenenation@example.com</small>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  };
  