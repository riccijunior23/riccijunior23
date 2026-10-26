# Palpinet — versão para revisão

Esta versão parte do ZIP `palpinet-online-header-alinhado-admin-20260824.zip`.
Nenhuma publicação foi feita no Netlify.

## Visualizar no Windows

1. Extraia o ZIP inteiro para uma nova pasta, mantendo a versão anterior guardada.
2. Com Python 3 instalado, abra `Visualizar.bat`.
3. O navegador abre a prévia local. Mantenha a janela do servidor aberta; Ctrl+C encerra.

Também é possível executar `python preview_server.py` na pasta do projeto. O servidor oferece as rotas internas com o mesmo fallback de HTML do Netlify. Não abra somente o HTML por duplo clique: os caminhos dos arquivos são relativos à raiz do site.

## O que mudou

- Navegação compacta, menu Explorar por clique/teclado e menu móvel recolhível.
- Home com introdução curta, gerador, informação secundária de prêmio, três passos e até três artigos de categorias diferentes.
- Mesmo gerador na home e em `/gerador`; links `/#gerador` preservados.
- Campos mais confortáveis, complementos condicionais e personalização opcional; preço e probabilidade fora das opções.
- Catálogos completos em Jogos e Métodos; busca e categorias do blog na página própria, com grade que ocupa a largura.
- Conta em `/conta`, mantendo `/#cliente`, navegação lateral no computador e recolhível no celular. Acesso ao gerador pelos detalhes e pelas combinações semelhantes.
- Fundo claro, contraste em azul-escuro, ações em roxo, sombras suaves e textos revisados.
- Identidade, logo, artigos, dados de demonstração, regras de geração e armazenamento local das contas preservados.

## Verificações

- Sintaxe JavaScript válida; o projeto não exige compilação nem instalação de pacotes.
- Navegador Chromium: 42 gerações com sete modalidades e seis métodos, conferindo quantidade, intervalo e ausência de números repetidos em cada resultado.
- Quantidades máximas das sete modalidades também verificadas; navegação de retorno aos catálogos, filtros e busca do blog, detalhes, combinações semelhantes e saída da conta móvel passaram.
- 55 combinações de página/tamanho entre celular, tablet e computador, sem rolagem horizontal. Verificação adicional em 320 px.
- Validação de campos, personalização, troca de quantidade, cópia, nova geração, cadastro/login local, salvamento e favoritos.
- Navegação por teclado, menu Explorar e Escape; navegação móvel e compatibilidade dos links antigos.
- Verificação automatizada de acessibilidade nas páginas públicas, no login e nas oito telas da conta. Isso não substitui uma auditoria humana completa.

## Limitações da versão recebida

- APIs de geração/interpretação por IA não vieram no ZIP. O fallback local já existente gera as combinações; interpretações externas não foram validadas.
- Configuração do Supabase contém marcadores de exemplo; sincronização externa não foi ativada.
- As contas e o histórico continuam no armazenamento local de cada navegador. Não foi criada nem substituída autenticação.
- Prêmios, concursos, datas e valores de demonstração foram preservados. Não há integração nova com resultados reais.

## Arquivos

`index.html` e `app.js` contêm as alterações estruturais e de navegação. `refinements.css` reúne o novo visual sobre a folha original, preservada para os componentes existentes. `preview_server.py` e `Visualizar.bat` servem somente à revisão local. A pasta `preview` pertence ao ZIP original; a aplicação usa os arquivos na raiz.

## Proposta de apresentação 3D

- Nova abertura com esferas renderizadas em WebGL, iluminação, profundidade, flutuação e perspectiva guiada pelo mouse.
- Ação de acesso direto ao gerador e interface principal preservada. Os números da cena são ilustrativos.
- Pausa e retomada por botão, compatível com teclado. A preferência por movimento reduzido inicia a cena pausada.
- Renderização limitada a aproximadamente 30 quadros por segundo; resolução limitada e animação suspensa fora da tela e em abas ocultas.
- Ilustração estática quando WebGL não está disponível, falha na inicialização ou o contexto gráfico é perdido.
- Exportador offline reproduzível, sem bibliotecas ou recursos remotos.

Verificações da proposta: 42 gerações entre modalidades/métodos e 55 combinações de página/tamanho passaram novamente. Também foram verificadas larguras de 320 a 1440 px, pausa/retomada, suspensão fora da tela, movimento reduzido, perda de contexto, ausência de WebGL e geração na versão offline sem requisições externas. Esses testes usam Chromium com renderização por software no ambiente; desempenho em aparelhos físicos ainda depende de revisão.

O acesso à referência externa retornou HTTP 403. A proposta explora a direção 3D e imersiva do pedido, sem afirmar que reproduz a referência visual com precisão. Nenhuma publicação no Netlify foi realizada.
