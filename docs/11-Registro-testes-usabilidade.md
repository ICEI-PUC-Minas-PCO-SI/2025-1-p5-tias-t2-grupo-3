# 🧪 Registro de Testes de Usabilidade – EcoDump

## ✅ Pré-requisitos
- Projeto de interface
- Plano de testes de usabilidade
- Cenários definidos com base em histórias de usuário reais

---

## 📍 Cenário 1: Registro de nova caçamba

**Descrição:** Você é um funcionário da empresa e deseja registrar o recebimento de uma nova caçamba no pátio.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|--------|------------------|-----------------------|-------------------------------|
| 1      | SIM              | 5 (Ótimo)            | 29,88 segundos                |
| 2      | SIM              | 4 (Bom)              | 33,47 segundos                |
| 3      | SIM              | 5 (Ótimo)            | 26,22 segundos                |

**Tempo de execução pelo especialista:** 11,20 segundos

**Comentários dos usuários:**  
> “Muito direto, entendi rápido onde clicar. Gostei do campo de status automático.”  
> “Poderia ter um botão ‘Salvar e nova’ para registrar várias caçambas seguidas.”

---

## 📍 Cenário 2: Consulta de status da caçamba

**Descrição:** Você é um administrador e precisa consultar o status atual de uma caçamba específica no sistema.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|--------|------------------|-----------------------|-------------------------------|
| 1      | SIM              | 5 (Ótimo)            | 20,35 segundos                |
| 2      | SIM              | 4 (Bom)              | 22,11 segundos                |
| 3      | SIM              | 5 (Ótimo)            | 18,89 segundos                |

**Tempo de execução pelo especialista:** 8,63 segundos

**Comentários dos usuários:**  
> “Muito fácil de buscar, os filtros ajudam.”  
> “Faltou uma legenda para cores do status, tive que interpretar sozinho.”

---

## 📍 Cenário 3: Lançamento de tipo e quantidade de resíduos

**Descrição:** Você é um funcionário que deseja lançar o tipo e a quantidade de resíduos descartados em uma caçamba.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|--------|------------------|-----------------------|-------------------------------|
| 1      | SIM              | 3 (Regular)          | 45,01 segundos                |
| 2      | NÃO              | 2 (Ruim)             | 65,45 segundos                |
| 3      | SIM              | 4 (Bom)              | 40,18 segundos                |

**Tempo de execução pelo especialista:** 19,22 segundos

**Comentários dos usuários:**  
> “Demorei para entender onde informar a quantidade.”  
> “Talvez colocar exemplo no campo ajudasse (placeholder).”

---

## 📍 Cenário 4: Geração de relatório de uso das caçambas

**Descrição:** Você é um gestor e precisa gerar um relatório com o histórico de uso das caçambas nos últimos 30 dias.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|--------|------------------|-----------------------|-------------------------------|
| 1      | SIM              | 4 (Bom)              | 37,10 segundos                |
| 2      | SIM              | 5 (Ótimo)            | 33,02 segundos                |
| 3      | SIM              | 5 (Ótimo)            | 30,91 segundos                |

**Tempo de execução pelo especialista:** 14,00 segundos

**Comentários dos usuários:**  
> “Gostei do botão direto para exportar CSV.”  
> “Poderia ter um atalho direto no dashboard para relatórios.”

---

## 📊 Avaliação Geral

Com base nos testes realizados com usuários reais da empresa (funcionários, administradores e gestores), a aplicação **EcoDump demonstrou excelente desempenho** nos principais quesitos avaliados:

- **Taxa de sucesso:** Todos os usuários conseguiram realizar ao menos 3 dos 4 cenários testados com sucesso.
- **Satisfação subjetiva:** A média geral de avaliação foi **4,3** em uma escala de 1 a 5.
- **Tempo médio de execução:** Apesar de maior que o do especialista, todos os cenários foram concluídos com tempo aceitável (< 1 minuto).

---

## ❌ Pontos de Melhoria

Durante os testes, foram identificadas oportunidades de aprimoramento:

| Problema Encontrado | Ação Planejada |
|---------------------|----------------|
| Campo de entrada pouco intuitivo para resíduos | Adicionar exemplos e títulos explicativos |
| Ausência de legenda para status visual | Incluir tooltip com explicações de status (cores/ícones) |
| Geração de relatórios não acessível diretamente no dashboard | Criar atalho rápido para relatórios no menu principal |

---

## ✅ Conclusão

O teste de usabilidade demonstrou que o sistema **EcoDump** é funcional, fácil de usar e atende às expectativas do público-alvo, com destaque para:

- Redução significativa de tempo comparado ao processo manual atual.
- Navegação compreensível mesmo por usuários com baixa familiaridade tecnológica.
- Alta aceitação da interface e sugestões construtivas para melhoria contínua.

A equipe utilizará as evidências coletadas para orientar a próxima sprint de refinamento da interface.

---

## 🔐 LGPD e Privacidade

Todos os testes seguiram as diretrizes da **Lei Geral de Proteção de Dados (LGPD)**. Os dados coletados foram **anonimizados** e utilizados apenas com fins acadêmicos e técnicos. Nenhum dado sensível foi registrado.

---

