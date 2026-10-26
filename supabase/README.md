# Ativar contas reais

A integração usa Supabase Auth e uma tabela de perfis protegida por RLS. Ainda não há um projeto vinculado a esta versão. Os testes locais do contrato HTTP e das políticas SQL não comprovam uma conexão real, envio de e-mails ou configuração de um projeto hospedado.

1. Crie ou selecione seu projeto no Supabase.
2. No SQL Editor, execute `accounts.sql`. O arquivo pode ser reaplicado.
3. Em Authentication, habilite o provedor de e-mail, a confirmação de endereço e uma política de senha de pelo menos oito caracteres. Configure o serviço de envio e os limites adequados antes do lançamento.
4. Em URL Configuration, configure o endereço real do site. Permita o retorno para `/conta`, inclusive no endereço local se for testar pelo localhost.
5. Preencha `account-config.js`: `enabled: true`, a URL HTTPS padrão do projeto e a chave **publishable** (ou a antiga **anon**). Essas informações são públicas. **Nunca coloque uma chave secret ou service_role no navegador.** Não é necessário compartilhar senhas ou chaves secretas nesta conversa.
6. Como alternativa, defina `PALPINET_SUPABASE_URL` e `PALPINET_SUPABASE_PUBLISHABLE_KEY` no ambiente e execute `python configure_accounts.py`. O script escreve a mesma configuração pública e recusa chaves administrativas. Não execute esse script com uma chave secreta.
7. Teste cadastro, confirmação por e-mail, login, recuperação, saída, histórico em dois dispositivos, preferências, favoritos e exclusão da conta em um projeto de teste antes de publicar.

## O que é protegido

- Senhas de contas reais são enviadas ao Supabase Auth, não gravadas em perfis ou no armazenamento local da aplicação.
- Cada sessão é validada pelo endpoint de usuário do provedor. Tokens ficam em memória e no `sessionStorage` da aba; abrir outra aba pode exigir novo login.
- O histórico e as preferências são vinculados ao ID autenticado. A política SQL impede ler ou escrever o perfil de outro usuário.
- A função de exclusão aceita apenas a identidade da própria sessão; não recebe um ID de usuário do navegador.
- Campos de perfil não concedem privilégios administrativos. A administração de contas reais exige implementação de endpoints autorizados no servidor; o antigo painel local não administra o Supabase.
- Revisões evitam sobrescrever silenciosamente uma alteração feita em outro dispositivo. Se houver conflito, o perfil é recarregado e a interface pede uma nova tentativa.

## Limites e comportamento

A sincronização acontece ao entrar, recarregar, retornar à aba e clicar em Atualizar histórico. Não há uma conexão de atualização contínua. Uma falha de rede não deve ser apresentada como salvamento bem-sucedido.

A home e o gerador funcionam sem contas. Em hospedagem pública com configuração ausente ou inválida, o login local não é usado como substituto. A prévia offline e o localhost mantêm contas de teste identificadas como locais. Elas não são migradas automaticamente para contas reais.

O arquivo portátil em `offline` sempre desativa a conexão ao Supabase, mesmo quando a configuração online foi preenchida. Para revisar contas sincronizadas, use o projeto completo com rede disponível.
