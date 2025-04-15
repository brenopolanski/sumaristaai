<div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
  <img src="https://sumaristaai.vercel.app/SumaristaAI-logo.webp" alt="SumaristaAI Logo" width="200" height="200" />
  <!-- <img src="https://github.com/matheusmartinsviana/sumaristaai/actions/workflows/ci.yml/badge.svg" alt="CI/CD Status" /> -->
  <h2>⚡ Gere Sumários Poderosos com seus PDFs</h2>
  <p><strong>Faça um sumário de qualquer PDF em segundos</strong></p>
  <p>Com o <strong>SumaristaAI</strong>, criar sumários nunca foi tão fácil.</p>
</div>

## 🚀 Como funciona?

O **SumaristaAI** é uma ferramenta que permite criar sumários em apenas 3 passos:

### 1. Envie o seu PDF

Apenas arraste e solte ou clique para enviar seu PDF para o SumaristaAI.

### 2. Análise com IA

Nosso sistema de inteligência artificial irá analisar seu PDF e criar um sumário detalhado em segundos.

### 3. Baixe/veja o seu sumário

Receba um sumário claro, objetivo e direto ao ponto com base no seu conteúdo.

## 🔗 Links úteis

- NeonDB: https://console.neon.tech/
- UploadThing: https://uploadthing.com/dashboard
- Clerk: https://dashboard.clerk.com/
- Stripe: https://dashboard.stripe.com/dashboard
- Gemini: https://ai.google.dev/gemini-api/docs/pricing?hl=pt-br
- OpenAI: https://platform.openai.com/docs/concepts
- Shadcn: https://ui.shadcn.com/docs/components
- Zod: https://zod.dev/

## ⌨️ Modo Desenvolvimento

### 🔐 Stripe

No ambiente de desenvolvimento (modo teste) do Stripe, siga os passos abaixo:

1. Acesse a [Dashboard do Stripe](https://dashboard.stripe.com/test/dashboard) em **modo de teste**.
2. Copie a **chave da API de teste** e utilize-a na sua aplicação.
3. Sempre que iniciar o servidor local com o comando:
   ```bash
   tl --port 3000
  ```
4. Atualize a URL do Webhook no Stripe, apontando para essa nova URL, para garantir que os eventos sejam recebidos corretamente pelo seu servidor local.

⚠️ Lembre-se: essa URL muda a cada reinicialização, então é importante atualizá-la sempre que iniciar novamente o servidor.