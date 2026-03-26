

## Problema
O card "Estratégia & Criação" (i=1, `isRight=false`) deveria ter ícone e texto justificados à direita em todas as resoluções, mas no mobile está aparecendo à esquerda.

## Solução
Forçar o alinhamento à direita no card do meio independentemente do breakpoint. Atualmente as classes `text-right` e `ml-auto` já são aplicadas via `!isRight`, mas vou reforçar para garantir que funcione em mobile também, adicionando `items-end` no container interno e garantindo que o `text-right` se aplique corretamente.

### Alterações em `MethodologySection.tsx`

**Linha 72-78** — Adicionar `items-end` ao wrapper do conteúdo quando `!isRight`, e `text-right` explícito nos textos:

```tsx
<div className={`relative z-10 ${!isRight ? "flex flex-col items-end text-right" : ""}`}>
  <div className={`w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors`}>
    <Icon className="w-7 h-7 text-gold" />
  </div>
  <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
  <p className="text-muted-foreground font-body text-base leading-relaxed">{step.desc}</p>
</div>
```

Isso usa `flex flex-col items-end` para alinhar todos os filhos (ícone, título, texto) à direita, removendo a necessidade do `ml-auto` individual no ícone. O `text-right` no container garante alinhamento do texto em todas as resoluções.

