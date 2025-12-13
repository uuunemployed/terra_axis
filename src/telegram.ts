const BOT_TOKEN = "8535679754:AAEzXPGSyW1dMV1KVm6Vlfofl2UmK6Fl9So"; 
const CHAT_ID = "1149871757";


export interface TelegramMsgData {
  name: string;
  phone: string;
  email?: string;
  // Додамо опціональні поля, якщо захочеш слати дані з калькулятора
  service?: string;
  area?: string;
  location?: string;
  estimatedPrice?: number;
}

export const sendMessageToTelegram = async (formData: TelegramMsgData): Promise<boolean> => {
  const text = `
📩 *Нова заявка (Консультація)*

👤 *Ім'я:* ${formData.name}
📞 *Телефон:* ${formData.phone}
📧 *Email:* ${formData.email || "Не вказано"}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Network Error:', error);
    return false;
  }
};