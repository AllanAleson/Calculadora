# Calculadora Mobile

Projeto de calculadora mobile desenvolvido com React Native e Expo.

## Funcionalidades

- Operações básicas
- Layout em 4 colunas
- Botões personalizados
- Display com operador e valor atual

## Tecnologias

- React Native
- Expo
- TypeScript

## CI/CD

- O workflow de CI roda `npm ci`, `npm run lint` e valida o build da imagem Docker.
- O workflow de CD publica a imagem no Docker Hub quando houver push na branch `main`.
- Configure os secrets `DOCKERHUB_USERNAME` e `DOCKERHUB_TOKEN` no GitHub para habilitar o CD.
