

## Problema
O header com scroll usa `glass-card` (fundo `rgba(255,255,255,0.03)` no dark mode), que é quase transparente e gera pouco contraste com o conteúdo abaixo.

## Solução
Aumentar a opacidade do fundo do header no estado "scrolled" sem sair do design system. Em vez de usar o `glass-card` genérico, aplicar um fundo semi-opaco mais forte com blur intenso:

### Alterações em `Header.tsx`
- Quando `scrolled`, trocar a classe `glass-card` por estilos dedicados:
  - **Dark mode**: `bg-black/80 backdrop-blur-xl border-b border-white/10`
  - **Light mode**: `bg-white/85 backdrop-blur-xl border-b border-black/10 shadow-sm`
- Usar classes condicionais do Tailwind com `dark:` ou checar o tema via estado já existente
- Manter `bg-transparent` quando não há scroll

### Detalhes técnicos
Na linha 44-48 do Header, substituir a lógica de classes:
```tsx
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  scrolled
    ? "bg-black/80 dark:bg-black/80 light:bg-white/85 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5"
    : "bg-transparent"
}`}
```

Como o projeto usa classes `dark`/`light` no `<html>`, usaremos seletores baseados no estado `theme` já disponível no componente para aplicar `bg-black/80` (dark) ou `bg-white/85` (light) — garantindo contraste real sem quebrar o visual glass do design system.

O menu mobile (`glass-card`) também receberá o mesmo tratamento de opacidade aumentada.

