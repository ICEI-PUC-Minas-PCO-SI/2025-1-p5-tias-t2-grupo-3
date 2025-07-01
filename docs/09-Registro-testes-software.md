# 🧪 Registro de Testes de Software – EcoDump

## ✅ Pré-requisitos

- Interface implementada com base na especificação
- Plano de testes de software documentado
- Casos de teste validados com base nos requisitos funcionais

---

## 📂 Registro de Evidências

| Caso de Teste | Requisito Associado | Registro de Evidência |
|---------------|---------------------|------------------------|
| CT-001 – Cadastrar nova caçamba | RF-001 – Permitir o registro de uma nova caçamba com dados como localização, capacidade e status. | [Ver evidência](https://www.exemplo.com/drive/ct-001) |
| CT-002 – Editar dados de uma caçamba | RF-002 – Permitir a edição dos dados de uma caçamba registrada. | [Ver evidência](https://www.exemplo.com/drive/ct-002) |
| CT-003 – Buscar caçambas com filtros | RF-004 – Permitir a pesquisa de caçambas usando filtros como localização e status. | [Ver evidência](https://www.exemplo.com/drive/ct-003) |
| CT-004 – Visualizar localização em mapa | RF-009 – Exibir a localização das caçambas em mapa interativo. | [Ver evidência](https://www.exemplo.com/drive/ct-004) |
| CT-005 – Gerar relatório de uso | RF-008 – Gerar relatórios baseados no uso das caçambas. | [Ver evidência](https://www.exemplo.com/drive/ct-005) |

> 🎥 Cada link acima corresponde a um screencast gravado durante os testes, evidenciando a execução e o resultado de cada caso.

---

## 📊 Avaliação dos Resultados

### ✔️ Pontos Fortes Identificados

- A interface demonstrou ser **intuitiva e de fácil uso**, mesmo para usuários com pouca familiaridade tecnológica.
- Todos os **fluxos principais** (cadastro, edição, consulta e geração de relatórios) foram concluídos com **alta taxa de sucesso**.
- A exibição de caçambas em mapa interativo aumentou a **visibilidade logística**, conforme percebido nos testes com o gestor.
- O tempo médio de execução das tarefas foi **inferior ao tempo atual** no processo manual.

---

### ❌ Falhas e Pontos de Melhoria

- **Mapa interativo** apresentou lentidão no carregamento inicial em dispositivos com internet limitada.
- **Campo de data** no cadastro de caçambas não validava corretamente formatos incorretos.
- Alguns **rótulos de botão** (“Salvar”, “Atualizar”) geraram dúvida entre usuários operacionais.

---

### 🔧 Melhorias Implementadas / Planejadas

| Falha Identificada | Ação Corretiva |
|--------------------|----------------|
| Carregamento lento do mapa | Otimização da chamada à API do mapa e pré-carregamento condicional. |
| Validação de datas fraca | Adição de máscara e validação no front-end. |
| Rótulos ambíguos | Atualização dos botões com descrições mais claras (ex: “Salvar novo registro”). |

---

### 🔁 Próximas Iterações

- Realizar **refinamentos na UI/UX** com base nos comentários dos participantes do teste.
- Expandir os testes de usabilidade para incluir **usuários externos (clientes da empresa)**.
- Incluir testes automatizados em etapas futuras para garantir a **regressão funcional** contínua.

---

## 🔐 Observação sobre LGPD

Todos os testes foram realizados em conformidade com a **Lei Geral de Proteção de Dados (LGPD)**. Nenhum dado pessoal ou sensível dos participantes foi coletado. Todas as métricas e evidências são **anonimizadas** e utilizadas apenas para fins de avaliação técnica da solução.

---

