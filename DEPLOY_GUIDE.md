# 🚀 Guia de Deploy - Portfolio Lua

## Opção 1: Deploy na Vercel (Recomendado - Gratuito e Fácil)

### Passo 1: Push para GitHub
Se ainda não tiver feito:

```bash
git remote add origin https://github.com/seu-usuario/my-portfolio-lua.git
git branch -M main
git push -u origin main
```

### Passo 2: Acessar Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub"
4. Autorize a Vercel a acessar seus repositórios

### Passo 3: Criar novo projeto
1. Clique em "New Project"
2. Selecione o repositório "my-portfolio-lua"
3. Vercel detectará automaticamente que é um projeto Next.js
4. Clique em "Deploy"

✅ Seu site estará disponível em: `https://seu-nome.vercel.app`

---

## Opção 2: Deploy na Netlify

### Passo 1: Preparar para Netlify
```bash
npm run build
```

### Passo 2: Acessar Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign up"
3. Escolha "GitHub"

### Passo 3: Deploy
1. Autorize Netlify
2. Selecione o repositório
3. Deixe as configurações padrão
4. Clique em "Deploy"

---

## Opção 3: Deploy Local (Para Testar)

```bash
npm run build
npm start
```

Acesse: `http://localhost:3000`

---

## Variáveis de Ambiente (Se necessário)

Crie um arquivo `.env.local` na raiz do projeto:

```
# Exemplo de variáveis
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

---

## Checklist Pré-Deploy

- ✅ Build local funciona: `npm run build`
- ✅ Sem erros de ESLint
- ✅ Responsividade testada em mobile
- ✅ Links internos funcionam
- ✅ Formulário de contato testado
- ✅ Git commit feito: `git commit -m "..."`
- ✅ Push para GitHub: `git push`

---

## Monitoramento Pós-Deploy

### Vercel
- Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
- Analytics disponível gratuitamente
- Logs de deploy em tempo real

### Netlify
- Dashboard: [app.netlify.com](https://app.netlify.com)
- Build notifications por email

---

## Domínio Customizado

### Vercel
Settings → Domains → Adicione seu domínio

### Netlify
Site settings → Domain management → Adicione seu domínio

---

## Troubleshooting

### Erro: "Cannot find module"
```bash
npm install
npm run build
```

### Erro de build: "Port already in use"
```bash
# Mude a porta
npm run dev -- -p 3002
```

### Build muito lento
- Verifique `.next` e `node_modules`
- Execute `npm cache clean --force`

---

## Performance Tips

1. **Otimizar imagens**: Use Next.js Image component
2. **Code splitting**: Faito automaticamente pelo Next.js
3. **Cache**: Configurado automático na Vercel
4. **CDN**: Vercel usa CDN global automaticamente

---

## Após Deploy

1. Teste todas as páginas
2. Verifique responsividade em mobile
3. Teste o formulário de contato
4. Verifique links internos
5. Teste navegação com menu hambúrguer
6. Verifique performance com Lighthouse

---

**Dúvidas? Verifique a documentação oficial:**
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
