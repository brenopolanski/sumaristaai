export const sendDiscordNotification = async (message: string) => {
  try {
    await fetch("/api/send-discord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  } catch (error) {
    console.error("Erro ao enviar notificação para o Discord:", error);
  }
};
