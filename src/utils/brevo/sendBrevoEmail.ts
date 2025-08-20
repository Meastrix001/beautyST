import * as Brevo from "@getbrevo/brevo";

const apiInstance = new Brevo.TransactionalEmailsApi();

// Set your API key
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  import.meta.env.VITE_BREVO_API_KEY! // Ensure it's loaded from .env
);

export const sendBrevoEmail = async (
  text: string,
  subject: string,
  email: string
) => {
  const sendBrevoEmail: Brevo.SendSmtpEmail = {
    sender: { email: "nroofthooft2012@gmail.com" },
    subject: subject,
    htmlContent: text,
    messageVersions: [
      {
        to: [{ email: email, name: "" }],
      },
    ],
  };

  await apiInstance.sendTransacEmail(sendBrevoEmail);
};
