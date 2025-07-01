# 📊 Modelagem de Processos – EcoDump

## ✅ Pré-requisitos

- Especificação do projeto EcoDump
- Requisitos funcionais e não funcionais definidos
- Análise da situação atual (AS-IS)
- Proposta de digitalização e melhoria (TO-BE)

---

## 🔎 Modelagem AS-IS (Situação Atual)

Atualmente, o processo de controle das caçambas e dos resíduos é realizado de forma **manual e descentralizada** pela empresa Alternativa Transportes LTDA. As informações são anotadas em **planilhas eletrônicas** ou **formulários físicos**, dificultando:

- A padronização e integridade dos dados;
- A rastreabilidade das alterações;
- A eficiência na geração de relatórios;
- O monitoramento preciso da **localização** e do **status** das caçambas.

Não existe um sistema que registre o **histórico de mudanças**, nem alertas automáticos ou uma interface integrada. Isso compromete a produtividade, a conformidade com normas ambientais e a capacidade de **tomada de decisão baseada em dados**.

---

## 🚀 Modelagem TO-BE (Proposta com EcoDump)

Com a implantação do sistema **EcoDump**, todo o processo será **digitalizado e centralizado** em uma plataforma web acessível apenas por **usuários autenticados**.

Principais melhorias:
- Cadastro, edição, exclusão e rastreamento de caçambas diretamente no sistema;
- Visualização do status em tempo real e localização em mapa interativo;
- Controle de permissões com perfis de acesso (administrador e funcionário);
- Geração de relatórios automáticos (PDF ou CSV);
- Registro de histórico de alterações e envio de notificações por e-mail.

Essa transformação trará **mais agilidade, segurança, organização e sustentabilidade** à gestão de resíduos da empresa.

---

## 🔁 Modelagem dos Processos

### 🟩 PROCESSO 1 – Gestão de Caçambas

- **Atividades:** Cadastro, atualização, exclusão, consulta e visualização no mapa.
- **Usuários envolvidos:** Funcionários e administradores.
- **Objetivo:** Manter controle centralizado e atualizado do ciclo de vida das caçambas.

### 🟩 PROCESSO 2 – Registro e Monitoramento de Resíduos

- **Atividades:** Inserção de dados de resíduos, geração de relatórios e acompanhamento por status.
- **Usuários envolvidos:** Funcionários e gestores.
- **Objetivo:** Rastrear corretamente os resíduos descartados para fins de gestão ambiental e compliance.

---

## 📈 Indicadores de Desempenho

| Indicador                     | Objetivos                                                       | Descrição                                                                 | Fonte de dados        | Fórmula de cálculo                                                  |
|------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------|------------------------|----------------------------------------------------------------------|
| Taxa de caçambas rastreadas  | Aumentar a rastreabilidade e o controle logístico               | Percentual de caçambas com dados de status e localização atualizados     | Tabela Caçambas        | (nº de caçambas rastreadas / nº total de caçambas) × 100            |
| Taxa de atualização de status| Verificar a frequência da manutenção de dados                   | Mede a % de caçambas com status alterado corretamente na semana           | Tabela Caçambas_Log    | (nº de atualizações válidas / nº total de caçambas) × 100           |
| Média de tempo de cadastro   | Avaliar agilidade no processo de registro de caçambas           | Tempo médio desde o clique em “nova caçamba” até o salvamento no sistema | Log de Cadastro        | soma dos tempos de cadastro / nº total de cadastros                 |
| Taxa de uso de relatórios    | Avaliar o uso da funcionalidade de geração de relatórios        | Percentual de usuários que geraram relatórios no período                  | Tabela Relatórios      | (nº de usuários que geraram relatórios / nº total de usuários) × 100|
| Taxa de acessos ao sistema   | Medir o engajamento com a nova plataforma                       | Percentual de usuários que acessaram o sistema ao menos 1x no mês        | Tabela Usuários        | (nº de usuários ativos / nº total de usuários cadastrados) × 100    |

---



