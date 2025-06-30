# 🧩 Code Challenge – Multi-Step User Registration Form

Este projeto é uma solução para o desafio de frontend proposto, com foco na construção de um formulário de cadastro de usuários em múltiplas etapas, utilizando tecnologias modernas como **Next.js**, **Zustand** e **TailwindCSS**.

> ⚠️ As funcionalidades de listagem, edição e exclusão de usuários não foram implementadas. O foco foi em entregar um fluxo de cadastro fluido, validado e com boa experiência de usuário.

---

## ✅ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand) (gerenciamento de estado)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (validações)
- [Tailwind CSS](https://tailwindcss.com/) (estilização)
- [SweetAlert2](https://sweetalert2.github.io/) (feedback visual)
- [React Icons](https://react-icons.github.io/react-icons/) (ícones)

---

## 🧭 Funcionalidades Implementadas

### 🧾 Formulário Multi-Etapas (3 Steps)

1. **Step 1: Dados Pessoais**

   - Campos: Nome completo, Email, Telefone
   - Máscara para telefone
   - Validações em tempo real

2. **Step 2: Endereço**

   - Campos: CEP, Endereço, Número, Cidade, Estado (dropdown)
   - Máscara para CEP
   - Validações de preenchimento e formato

3. **Step 3: Revisão e Envio**
   - Exibição dos dados preenchidos para conferência
   - Checkbox obrigatório para aceitação dos termos
   - Envio via `POST /users` para a API de backend
   - Feedback de sucesso ou erro usando SweetAlert2

---

## 🎯 Diferenciais de UX

- Barra de progresso interativa (o usuário pode retornar para etapas anteriores clicando)
- Botão “Submit” desabilitado até o formulário estar válido
- Estilo responsivo para diferentes tamanhos de tela

---

## ✅ Conclusão

Este projeto implementa um formulário de cadastro de usuários em múltiplas etapas com foco em experiência do usuário, validação de dados e responsividade. Embora as telas de edição e exclusão de usuários não tenham sido incluídas, o foco foi em desenvolver uma experiência fluida, acessível e robusta no processo de cadastro.

Entre os destaques do projeto:

- Formulário multi-step com validações em tempo real usando **Zod** + **React Hook Form**
- Máscaras de input para telefone e CEP
- Gerenciamento global de estado com **Zustand**
- Estilização moderna com **Tailwind CSS**
- Feedback visual de respostas da API com **SweetAlert2**
- Layout responsivo, acessível e com uma interface intuitiva
- Código tipado com **TypeScript** para segurança e legibilidade

O resultado é um sistema funcional e extensível, pronto para evoluir com funcionalidades de gerenciamento de usuários ou outras melhorias futuras.
