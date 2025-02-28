# Nexa - Aplicativo de Produtividade

**Nexa** é um aplicativo de produtividade multifuncional para ajudar os usuários a organizar suas tarefas diárias, notas e eventos. O aplicativo inclui funcionalidades como uma tela de **Home** para visão geral, gerenciamento de **Notas**, controle de **Tarefas**, um **Calendário** para eventos e compromissos, e uma tela de **Configurações** para personalização.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Código](#estrutura-do-código)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Descrição do Projeto

**Nexa** é um aplicativo que integra várias funcionalidades para ajudar os usuários a se manterem organizados e produtivos. O app inclui:

- **Home**: Visão geral das notas, tarefas e eventos próximos.
- **Note**: Criação, edição e gerenciamento de notas.
- **Task**: Gerenciamento de tarefas com prazos e prioridades.
- **Calendar**: Visualização de eventos e compromissos em um calendário mensal.
- **Config**: Configurações para personalizar o app, como tema e preferências.

### Funcionalidades

- **Home**:
  - Acesso rápido às últimas notas, tarefas e eventos.
  - Visão geral da agenda do dia e do status das tarefas.
  
- **Note**:
  - Adicionar, editar e excluir notas.
  - Salvar notas localmente com persistência usando `AsyncStorage`.
  
- **Task**:
  - Criar tarefas com prazos e prioridades.
  - Visualizar tarefas pendentes e concluídas.
  
- **Calendar**:
  - Visualizar eventos em um calendário mensal.
  - Adicionar, editar e excluir eventos e compromissos.
  
- **Config**:
  - Personalizar o tema (modo claro ou escuro).
  - Ajustar preferências de notificação.

---

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **React Navigation**: Biblioteca para navegação entre telas.
- **AsyncStorage**: Para armazenar dados localmente no dispositivo (notas, tarefas e configurações).
- **React-Icons**: Para ícones de interface de usuário.
- **Moment.js**: Para manipulação de datas e horários.
- **Expo** (opcional): Para facilitar o desenvolvimento e teste do app.

---

## Instalação

### Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
- **Expo CLI** (opcional): Se você deseja usar o Expo, instale o Expo CLI.

### Passos

1. **Clone este repositório**:

```bash
git clone https://github.com/seu-usuario/Nexa.git
```

2. **Instale as dependências**:

```bash
cd Nexa
npm install
```

3. **Instale o `@react-native-async-storage/async-storage`** (para persistência local):

```bash
npm install @react-native-async-storage/async-storage
```

4. **Instale o `react-navigation` e dependências**:

```bash
npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context
```

5. **Inicie o aplicativo**:

Se estiver utilizando o Expo:

```bash
npm start
```

Ou, caso esteja usando o React Native CLI:

```bash
npx react-native run-android   # Para Android
npx react-native run-ios       # Para iOS
```

---

## Uso

1. **Tela Home**:
   - Na tela inicial, você verá um resumo de suas últimas **Notas**, **Tarefas** e **Eventos**.
   - Você pode acessar rapidamente as telas de **Notas**, **Tarefas** e **Calendário** a partir da tela inicial.

2. **Tela Note**:
   - Crie, edite e exclua notas. As notas são salvas localmente no dispositivo e podem ser visualizadas na tela **Home**.
   
3. **Tela Task**:
   - Gerencie suas tarefas diárias e defina prazos e prioridades.
   - Marque as tarefas como concluídas ou exclua-as.

4. **Tela Calendar**:
   - Visualize seus eventos e compromissos em um calendário mensal.
   - Adicione, edite ou exclua eventos com datas específicas.

5. **Tela Config**:
   - Personalize as configurações do aplicativo, como tema (modo claro ou escuro) e preferências de notificação.

---

## Estrutura do Código

A estrutura de pastas do projeto é organizada de forma a manter a modularidade e facilitar o desenvolvimento:

```
/Nexa
├── App.js                     # Componente principal que gerencia a navegação entre as telas
├── /components
│   ├── NoteCard.js             # Componente para exibir cada nota
│   ├── TaskCard.js             # Componente para exibir cada tarefa
│   └── CalendarEvent.js        # Componente para exibir eventos no calendário
├── /screens
│   ├── Home.js                 # Tela principal com visão geral
│   ├── Note.js                 # Tela para adicionar/editar notas
│   ├── Task.js                 # Tela para gerenciar tarefas
│   ├── Calendar.js             # Tela para visualização do calendário
│   └── Config.js               # Tela de configurações
├── /utils
│   ├── storage.js              # Funções auxiliares para salvar e carregar dados (AsyncStorage)
│   └── dateHelper.js           # Funções auxiliares para manipulação de datas
└── /assets
    └── icons                   # Ícones usados no app
```

### Descrição das principais telas

- **Home.js**: Tela de visão geral, com acesso rápido a notas, tarefas e calendário.
- **Note.js**: Tela para criar e editar notas. Usa `TextInput` para inserir título e conteúdo.
- **Task.js**: Tela para gerenciamento de tarefas. As tarefas podem ser adicionadas, editadas ou removidas.
- **Calendar.js**: Tela de visualização de eventos no calendário. O calendário é interativo, permitindo adicionar eventos.
- **Config.js**: Tela para ajustar configurações do aplicativo, como tema e preferências.

---

## Contribuindo

Contribuições são bem-vindas! Para contribuir com o projeto, siga os passos abaixo:

1. Faça um **fork** deste repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça suas alterações.
4. Teste as alterações localmente.
5. Envie suas mudanças (`git commit -am 'Adicionando nova feature'`).
6. Envie para o repositório remoto (`git push origin feature/nova-feature`).
7. Abra um **Pull Request**.

---

## Licença

Este projeto está licenciado sob a licença **JVS**.

---

Essa documentação fornece uma visão geral do projeto **Nexa**, descreve como instalar, configurar e usar o aplicativo, além de permitir contribuições para o código-fonte.
