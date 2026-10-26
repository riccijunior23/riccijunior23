# Revisão — fluxo de inspiração e contas

## Experiência

A primeira escolha passa a ser a inspiração: signo, nome/data ou surpresa. Jogo, quantidade e complemento aparecem depois. Sonhos, matemática e todos os métodos anteriores seguem disponíveis. O resultado dá prioridade aos números, a Copiar e a Salvar; as demais ações ficam em um menu de opções acessível por teclado.

A marca recebeu uma versão mais simples do logotipo, e a home mantém a direção visual clara com lua, órbitas e detalhes discretos. Artigos e páginas internas foram preservados.

## Contas

Supabase Auth e sincronização de histórico, favoritos e preferências foram preparados, com isolamento por usuário no banco, validação da sessão, confirmação de e-mail, recuperação por sessão autorizada, atualização de e-mail e exclusão da própria conta. Perfis não concedem privilégios administrativos.

O código anterior de administrador pré-cadastrado, a criação automática de usuário fictício e a recuperação local sem prova de identidade foram retirados. Cópias antigas de JavaScript e CSS na pasta `preview` foram removidas; não eram usadas pela aplicação. O JSON histórico dessa pasta foi preservado.

O modo local de teste fica identificado e não é usado como autenticação em uma hospedagem pública. As senhas novas de teste são derivadas por PBKDF2 com salt. Uma conta local antiga é migrada para hash após um login válido. O HTML portátil sempre usa o modo offline.

## Limites

Nenhum projeto Supabase está configurado neste ambiente. Não foi possível validar autenticação, e-mails ou sincronização contra um serviço hospedado real. SQL e contratos HTTP foram verificados localmente, com essa distinção preservada. A ativação depende das etapas em `supabase/README.md`.

APIs de interpretação por IA não vieram no projeto original. O fallback local de geração continua funcionando. Prêmios e dados de demonstração permanecem preservados. Nenhuma publicação no Netlify foi feita.

## Evidências de verificação

- 42 gerações entre sete modalidades e seis métodos, conferindo quantidade, intervalo e ausência de repetição interna.
- 30 combinações de página e largura, de 320 a 1440 px, sem rolagem horizontal indesejada.
- Escolha de inspiração, alternância de nome/data, validação do signo, opções secundárias, cópia, favoritos e salvamento automático após cadastro local.
- Arquivo offline com logo e demais recursos incorporados, geração e salvamento local, sem requisições externas.
- Verificações automatizadas de acessibilidade nas páginas selecionadas, login e resultado gerado, sem violações detectadas nos critérios executados. Isso não substitui avaliação humana.
- Contrato HTTP com provedor simulado: autenticação, confirmação, histórico em clientes independentes, refresh de sessão, recuperação, exclusão, conflitos e falhas de sincronização. O provedor simulado não comprova disponibilidade ou configuração do Supabase real.
- Políticas SQL em PostgreSQL/PGlite: acesso ao próprio perfil, bloqueio de leitura e alteração entre usuários, bloqueio de anônimos e exclusão da própria conta com remoção do perfil associado.
- Conteúdo informado no campo Nome é apresentado como texto, sem execução de HTML inserido.
- Gerador de configuração recusa uma chave administrativa e escreve uma configuração pública em teste isolado. Nenhuma configuração real foi ativada.
