window.ATLAS_WIKI = {
  groups: [
    { label: "Comece aqui", pages: ["inicio", "primeiros-passos", "entenda-atlas"] },
    { label: "Atendimento", pages: ["atendimentos", "conversa", "novo-atendimento", "dados-cliente", "financeiro"] },
    { label: "Colaboração", pages: ["grupos", "chat-interno", "tarefas", "reunioes"] },
    { label: "Operação", pages: ["atlas-pulse", "agenda-os", "onu", "telefonia", "smart-pager"] },
    { label: "Gestão", pages: ["crm", "metricas", "automacoes", "administracao", "integracoes"] }
  ],
  pages: {
    "inicio": {
      title: "Tudo o que você precisa para dominar o Atlas.", shortTitle: "Visão geral", icon: "⌂", category: "Comece aqui", time: "3 min",
      description: "Guias diretos, exemplos reais e respostas rápidas para atender melhor, sem linguagem complicada e sem perder tempo.",
      intro: `<div class="welcome-callout"><strong>Por onde eu começo?</strong><p>Se este é seu primeiro acesso, abra <a href="#/primeiros-passos">Primeiros passos</a>. Em poucos minutos você aprende a entrar, ajustar seu status e assumir o primeiro atendimento.</p></div>`,
      sections: [{ heading: "Explore por funcionalidade", cards: [
        ["atendimentos", "Atendimentos", "Filas, conversas, transferência, encerramento e templates."],
        ["grupos", "Grupos e equipe", "Grupos do WhatsApp, mensagens e colaboração interna."],
        ["dados-cliente", "Dados do cliente", "Cadastro, conexões, faturas, contratos e histórico."],
        ["administracao", "Administração", "Usuários, setores, permissões, templates e configurações."]
      ] }]
    },
    "primeiros-passos": {
      title: "Primeiros passos no Atlas", shortTitle: "Primeiros passos", icon: "↗", category: "Comece aqui", time: "5 min",
      description: "O essencial para deixar seu ambiente pronto e começar a atender.",
      sections: [{ heading: "Antes do primeiro atendimento", steps: [
        ["Entre na instalação da empresa", "Use o endereço e as credenciais fornecidas pelo administrador."],
        ["Confira seu perfil", "Revise nome, avatar, identificador, idioma e tema."],
        ["Marque-se como disponível", "O status informa à equipe que você pode receber atendimentos."],
        ["Abra a fila", "Use a aba Fila para visualizar clientes que aguardam atendimento."],
        ["Puxe uma conversa", "Ao puxar, o ticket passa para Comigo e fica sob sua responsabilidade."]
      ] }, { heading: "Dica Atlas", note: "Leia o histórico antes de responder. Isso evita repetir perguntas e deixa o atendimento mais humano." }]
    },
    "entenda-atlas": {
      title: "Como o Atlas está organizado", shortTitle: "Entenda o Atlas", icon: "◎", category: "Comece aqui", time: "4 min",
      description: "Conheça os módulos, os estados de atendimento e o que aparece para cada perfil.",
      sections: [{ heading: "Áreas principais", bullets: ["Atendimentos concentra as conversas com clientes.", "Grupos reúne os grupos de WhatsApp liberados para a equipe.", "Equipe permite conversar internamente com outros usuários.", "Operação reúne diagnósticos, OS, ONU, telefonia e alertas.", "Administração controla usuários, setores, permissões e automações."] }, { heading: "O que muda por instalação", note: "O nome, a marca, os módulos disponíveis e as integrações dependem da configuração da sua empresa." }]
    },
    "atendimentos": {
      title: "Atendimentos", shortTitle: "Atendimentos", icon: "▣", category: "Atendimento", time: "7 min",
      description: "Acompanhe filas, assuma conversas e conduza cada atendimento até a conclusão.",
      sections: [{ heading: "Entenda as abas", list: [["Fila", "Clientes aguardando um agente."], ["Comigo", "Atendimentos sob sua responsabilidade."], ["Automação", "Conversas ainda conduzidas pelo sistema."], ["Encerrados", "Histórico de atendimentos concluídos, quando permitido."]] }, { heading: "Ações principais", steps: [["Abra um cartão", "Veja cliente, protocolo, canal e última mensagem."], ["Clique em Puxar", "O atendimento será atribuído ao seu usuário."], ["Responda o cliente", "Use texto, mídia, áudio ou respostas rápidas."], ["Transfira ou encerre", "Escolha o destino ou confirme a conclusão."]] }]
    },
    "conversa": {
      title: "Conversar com o cliente", shortTitle: "Mensagens e mídia", icon: "✦", category: "Atendimento", time: "8 min",
      description: "Use mensagens, áudios, documentos e recursos de contexto durante o atendimento.",
      sections: [{ heading: "O que você pode enviar", bullets: ["Texto e emojis.", "Imagens, vídeos e documentos.", "Áudios gravados no momento.", "Figurinhas salvas.", "Faturas, boletos e links quando disponíveis."] }, { heading: "Ações sobre uma mensagem", list: [["Responder", "Mantém a mensagem original como referência."], ["Reagir", "Adiciona uma reação rápida."], ["Encaminhar", "Envia o conteúdo para outro destino permitido."], ["Transcrever", "Converte um áudio recebido em texto."], ["Copiar contato", "Copia o telefone de um cartão de contato recebido."]] }]
    },
    "novo-atendimento": {
      title: "Iniciar um novo atendimento", shortTitle: "Novo atendimento", icon: "+", category: "Atendimento", time: "5 min",
      description: "Comece uma conversa pela API oficial usando um template aprovado pela Meta.",
      sections: [{ heading: "Como iniciar", steps: [["Clique em Novo", "O Atlas carregará os templates disponíveis."], ["Informe o telefone", "Confira país e DDD antes de continuar."], ["Escolha o template", "Use um modelo aprovado e adequado ao motivo do contato."], ["Preencha as variáveis", "Revise nomes, datas e demais informações."], ["Envie", "O Atlas criará o atendimento após a confirmação do canal."]] }, { heading: "Importante", warning: "Templates e idiomas disponíveis são definidos na conta Meta da instalação. Um template recusado ou pausado não poderá ser utilizado." }]
    },
    "dados-cliente": {
      title: "Dados do cliente", shortTitle: "Dados do cliente", icon: "◉", category: "Atendimento", time: "8 min",
      description: "Consulte cadastro, conexão, contratos, faturas e histórico sem sair da conversa.",
      sections: [{ heading: "Abrindo o painel", steps: [["Abra um atendimento", "Selecione a conversa desejada."], ["Clique no ícone de dados", "O painel buscará as informações disponíveis."], ["Confirme o cliente", "Se houver mais de um resultado, escolha o cadastro correto."]] }, { heading: "Informações disponíveis", bullets: ["Nome, documento, código e telefone.", "Logins PPPoE, IP e estado da conexão.", "Contratos e faturas em aberto.", "Ordens de serviço e histórico técnico.", "Notas internas e histórico do atendimento."] }, { heading: "Segurança", note: "As informações são consultadas pela API segura da instalação. Credenciais dos sistemas integrados não ficam expostas no navegador ou aplicativo." }]
    },
    "financeiro": {
      title: "Faturas, boletos e pagamentos", shortTitle: "Financeiro", icon: "$", category: "Atendimento", time: "7 min",
      description: "Consulte cobranças e envie as opções disponíveis diretamente ao cliente.",
      sections: [{ heading: "Enviar uma fatura existente", steps: [["Abra Dados do cliente", "Confirme o cadastro vinculado."], ["Localize Faturas em aberto", "Confira valor, vencimento e número."], ["Clique em Enviar", "Revise o documento antes de publicar na conversa."]] }, { heading: "Gerar boleto", steps: [["Clique em Boleto", "Abra o formulário de geração."], ["Informe os dados", "Preencha valor, vencimento e descrição solicitados."], ["Confirme", "A integração da empresa processará a solicitação."], ["Envie ao cliente", "Use o retorno gerado na conversa."]] }, { heading: "Atenção", warning: "Sempre confirme nome, documento, valor e vencimento antes do envio. Não repita a geração se a primeira solicitação ainda estiver processando." }]
    },
    "grupos": {
      title: "Grupos do WhatsApp", shortTitle: "Grupos", icon: "♟", category: "Colaboração", time: "6 min",
      description: "Acompanhe os grupos liberados para sua equipe e responda em tempo real.",
      sections: [{ heading: "Recursos", bullets: ["Buscar e abrir grupos autorizados.", "Enviar texto, áudio, imagem e documento.", "Responder, reagir, encaminhar e editar quando permitido.", "Consultar participantes e fotos.", "Visualizar digitando e novas mensagens em tempo real."] }, { heading: "Visibilidade", note: "Você verá apenas os grupos liberados pelo administrador e compatíveis com as permissões do seu usuário." }]
    },
    "chat-interno": {
      title: "Chat interno da equipe", shortTitle: "Chat interno", icon: "◇", category: "Colaboração", time: "4 min",
      description: "Converse com colegas sem misturar mensagens internas com o atendimento do cliente.",
      sections: [{ heading: "Como usar", steps: [["Abra Equipe", "Localize um usuário pelo nome."], ["Selecione a pessoa", "O histórico privado será aberto."], ["Envie sua mensagem", "Use texto, mídia ou figurinha."], ["Acompanhe a presença", "Veja quando o colega está disponível, ausente ou ocupado."]] }, { heading: "Boa prática", note: "Nunca envie uma orientação interna na conversa do cliente. Use o chat da equipe para alinhamentos e informações operacionais." }]
    },
    "tarefas": { title: "Tarefas", shortTitle: "Tarefas", icon: "✓", category: "Colaboração", time: "6 min", description: "Organize atividades, prazos, responsáveis, comentários e anexos.", sections: [{ heading: "Fluxo básico", steps: [["Crie a tarefa", "Informe título, descrição, prioridade e prazo."], ["Defina o responsável", "Escolha usuário ou setor."], ["Acompanhe o andamento", "Mova o cartão entre as etapas."], ["Conclua", "Registre comentários e finalize quando o trabalho terminar."]] }] },
    "reunioes": { title: "Reuniões", shortTitle: "Reuniões", icon: "◫", category: "Colaboração", time: "5 min", description: "Crie salas de áudio e vídeo para sua equipe ou convidados.", sections: [{ heading: "Participar de uma reunião", bullets: ["Crie uma sala e copie o convite.", "Autorize câmera e microfone quando o navegador solicitar.", "Use os controles para silenciar, ativar vídeo ou compartilhar a tela.", "Ao terminar, saia da sala ou encerre para todos se você for o responsável."] }] },
    "atlas-pulse": { title: "Atlas Pulse", shortTitle: "Atlas Pulse", icon: "⌁", category: "Operação", time: "7 min", description: "Colete testes de velocidade e dados de rede diretamente do aparelho do cliente.", sections: [{ heading: "Executar diagnóstico", steps: [["Abra o atendimento", "Confirme que o recurso está disponível."], ["Gere o diagnóstico", "O Atlas criará um link único."], ["Envie o link", "O cliente deverá abrir e autorizar o teste."], ["Acompanhe o resultado", "Velocidade, latência e dados disponíveis aparecerão no ticket."]] }] },
    "agenda-os": { title: "Agenda de ordens de serviço", shortTitle: "Agenda de OS", icon: "▦", category: "Operação", time: "7 min", description: "Consulte e organize ordens de serviço integradas ao sistema da empresa.", sections: [{ heading: "Ações comuns", bullets: ["Filtrar por período, situação e técnico.", "Abrir os detalhes da ordem.", "Consultar cliente, assunto e produtos.", "Editar os campos liberados.", "Salvar a atualização no sistema integrado."] }] },
    "onu": { title: "Funções de campo", shortTitle: "Funções de campo", icon: "⌬", category: "Operação", time: "6 min", description: "Consulte CTOs e diagnósticos de ONU diretamente pelos comandos operacionais do WhatsApp.", sections: [{ heading: "Consultas disponíveis", list: [["Consulta de CTO", "Exibe estado, capacidade, ocupação e portas disponíveis da caixa informada."], ["Diagnóstico de ONU", "Retorna PPPoE, MAC, localização, sinais RX e TX, estado do link e causa da última queda."]] }, { heading: "Como utilizar", steps: [["Abra o grupo operacional", "Use o grupo autorizado para as funções de campo."], ["Envie o comando", "Informe a CTO ou o login PPPoE no formato configurado."], ["Confira o retorno", "Valide a identificação e os parâmetros antes de atuar na rede."]] }] },
    "telefonia": { title: "Telefonia", shortTitle: "Telefonia", icon: "☎", category: "Operação", time: "7 min", description: "Atenda, origine e transfira chamadas quando o módulo estiver habilitado.", sections: [{ heading: "Controles", list: [["Atender", "Assume a chamada recebida."], ["Silenciar", "Desativa temporariamente seu microfone."], ["Segurar", "Mantém a chamada em espera."], ["Transferir", "Encaminha para ramal ou destino disponível."], ["Encerrar", "Finaliza a chamada atual."]] }] },
    "smart-pager": { title: "Smart Pager", shortTitle: "Smart Pager", icon: "!", category: "Operação", time: "4 min", description: "Acione rapidamente o NOC e acompanhe quem assumiu o alerta.", sections: [{ heading: "Como funciona", steps: [["Chame o NOC", "Informe o contexto necessário."], ["Aguarde o aceite", "O radar mostrará o alerta ativo."], ["Acompanhe o responsável", "O Atlas indicará quem assumiu."], ["Resolva", "O técnico encerra o alerta ao concluir a ajuda."]] }] },
    "crm": { title: "CRM", shortTitle: "CRM", icon: "◆", category: "Gestão", time: "6 min", description: "Acompanhe oportunidades em etapas e mantenha o histórico comercial organizado.", sections: [{ heading: "Ações", bullets: ["Criar uma oportunidade.", "Definir responsável, origem, valor e etapa.", "Mover o cartão no funil.", "Registrar notas e dados de contato.", "Consultar o atendimento que originou o lead."] }] },
    "metricas": { title: "Métricas e desempenho", shortTitle: "Métricas", icon: "↟", category: "Gestão", time: "6 min", description: "Acompanhe volume, tempo de atendimento, avaliações e desempenho da equipe.", sections: [{ heading: "Como interpretar", bullets: ["Use o período para comparar intervalos equivalentes.", "Abra o detalhamento antes de concluir que existe um problema.", "Considere volume e complexidade junto do tempo médio.", "Use avaliações como sinal de melhoria, não como medida isolada."] }] },
    "automacoes": { title: "Automações e templates", shortTitle: "Automações", icon: "⚡", category: "Gestão", time: "8 min", description: "Configure mensagens, respostas rápidas, URA, cobrança, pós-venda e campanhas.", sections: [{ heading: "Recursos", list: [["Templates Meta", "Modelos aprovados para iniciar conversas."], ["Respostas rápidas", "Textos curtos disponíveis no atendimento."], ["URA", "Opções e palavras-chave que direcionam o cliente."], ["Cobrança", "Mensagens programadas em relação ao vencimento."], ["Pós-venda", "Acompanhamentos após a ativação."], ["Campanhas", "Envio controlado para listas selecionadas."]] }] },
    "administracao": { title: "Administração", shortTitle: "Administração", icon: "⚙", category: "Gestão", time: "10 min", description: "Gerencie usuários, setores, permissões, grupos, templates e auditoria.", sections: [{ heading: "Áreas administrativas", bullets: ["Usuários e autenticação em dois fatores.", "Setores, membros e permissões.", "Grupos visíveis para a equipe.", "Templates Meta e respostas rápidas.", "Mensagens automáticas e URA.", "Métricas, avisos e registros de auditoria.", "Configurações de integrações e módulos licenciados."] }, { heading: "Princípio de segurança", note: "Conceda somente as permissões necessárias para cada função. As ações críticas permanecem protegidas pela API, mesmo quando um botão não aparece na interface." }] },
    "integracoes": { title: "Integrações da instalação", shortTitle: "Integrações", icon: "⇄", category: "Gestão", time: "8 min", description: "Entenda como o Atlas conversa com os sistemas configurados para sua empresa.", sections: [{ heading: "O que pode estar integrado", bullets: ["WhatsApp oficial e grupos.", "ERP e informações do assinante.", "n8n e fluxos de automação.", "Financeiro, boletos e pagamentos.", "Benefícios, inteligência artificial e telefonia."] }, { heading: "Para administradores", note: "Cada instalação usa suas próprias URLs e credenciais. Nunca copie tokens ou links de uma empresa para outra. Teste cada conector antes de ativá-lo em produção." }]
    }
  }
};

const ATLAS_WIKI_IMAGE_CAPTIONS = {
  "inicio": "Visão geral do ecossistema Atlas com os atalhos principais da operação.",
  "primeiros-passos": "Sequência recomendada para preparar o usuário e iniciar o primeiro atendimento.",
  "entenda-atlas": "Como canais, atendimento e equipe se conectam dentro do Atlas.",
  "atendimentos": "Fila e conversa lado a lado para assumir e conduzir atendimentos.",
  "conversa": "Mensagens do cliente e do atendente organizadas em uma única linha do tempo.",
  "novo-atendimento": "Seleção de canal, destinatário e template aprovado pela Meta.",
  "dados-cliente": "Cadastro e conexão consultados com segurança dentro do atendimento.",
  "financeiro": "Resumo de faturas com ação direta para enviar o boleto ao cliente.",
  "grupos": "Grupos autorizados e mensagens da equipe em tempo real.",
  "chat-interno": "Conversa privada entre membros da equipe, separada do atendimento ao cliente.",
  "tarefas": "Quadro de tarefas por etapa, responsável e prazo.",
  "reunioes": "Sala de reunião com controles essenciais de áudio e vídeo.",
  "atlas-pulse": "Resultado do diagnóstico de velocidade realizado no aparelho do cliente.",
  "agenda-os": "Agenda operacional com horários, serviços, técnicos e situação das visitas.",
  "smart-pager": "Alerta operacional do NOC acompanhado em uma linha do tempo.",
  "crm": "Oportunidades comerciais distribuídas pelas etapas do funil.",
  "metricas": "Indicadores de volume, tempo e satisfação acompanhados por período.",
  "automacoes": "Automações ativas e o caminho percorrido por cada atendimento.",
  "administracao": "Usuários, setores, perfis e acessos reunidos na administração."
};

Object.entries(ATLAS_WIKI_IMAGE_CAPTIONS).forEach(([id, caption]) => {
  const page = window.ATLAS_WIKI.pages[id];
  if (!page) return;
  const cleanSources = {
    "atendimentos": "assets/screenshots/conversa-limpa.webp",
    "conversa": "assets/screenshots/conversa-limpa.webp"
  };
  if (!cleanSources[id]) return;
  page.image = cleanSources[id];
  page.imageAlt = `Tela demonstrativa do Atlas — ${page.shortTitle}`;
  page.imageCaption = caption;
});

const ATLAS_WIKI_SCREENSHOT_GALLERIES = {
  "inicio": [
    { src: "assets/screenshots/inicio-dashboard.webp", alt: "Visão geral individual do Atlas", caption: "Resumo pessoal com atendimentos resolvidos, satisfação, avaliações e gamificação diária." }
  ],
  "dados-cliente": [
    { src: "assets/screenshots/dados-cliente-relatorio.webp", alt: "Relatório técnico do cliente no Atlas", caption: "Relatório técnico com conexão PPPoE, ONU, potência, CTO e histórico de quedas." }
  ],
  "financeiro": [
    { src: "assets/screenshots/financeiro-relatorio.webp", alt: "Relatório financeiro do cliente no Atlas", caption: "Visão consolidada de títulos pagos, vencidos, a vencer e cancelados." },
    { src: "assets/screenshots/financeiro-link-pagamento.webp", alt: "Formulário para criar link de pagamento", caption: "Criação de link de pagamento com valor, vencimento e descrição." },
    { src: "assets/screenshots/financeiro-gerar-boleto.webp", alt: "Formulário para gerar boleto", caption: "Geração de uma nova cobrança para posterior envio ao cliente." }
  ],
  "atlas-pulse": [
    { src: "assets/screenshots/atlas-pulse-historico.webp", alt: "Histórico de diagnósticos do Atlas Pulse", caption: "Histórico do Atlas Pulse com velocidade, aparelho, bateria e informações públicas de rede." }
  ],
  "telefonia": [
    { src: "assets/screenshots/telefonia-atlasphone.webp", alt: "Teclado do AtlasPhone dentro do atendimento", caption: "AtlasPhone aberto sobre o atendimento, com teclado para números e ramais." }
  ],
  "automacoes": [
    { src: "assets/screenshots/automacoes-regua-cobranca.webp", alt: "Configuração da régua de cobrança", caption: "Régua de cobrança com filiais, calendário, prazos e templates oficiais da Meta." }
  ],
  "novo-atendimento": [
    { src: "assets/screenshots/novo-atendimento-meta.webp", alt: "Novo atendimento com template oficial da Meta", caption: "Escolha do template aprovado, telefone e pré-visualização antes do disparo." }
  ],
  "grupos": [
    { src: "assets/screenshots/grupos-oficial.webp", alt: "Lista de grupos do WhatsApp no Atlas", caption: "Grupos autorizados reunidos em uma interface dedicada." }
  ],
  "chat-interno": [
    { src: "assets/screenshots/chat-interno-oficial.webp", alt: "Conversas privadas da equipe", caption: "Lista de conversas privadas entre integrantes da operação." }
  ],
  "tarefas": [
    { src: "assets/screenshots/tarefas-oficial.webp", alt: "Quadro de tarefas e ordens de serviço", caption: "Quadro operacional organizado por etapa, prioridade e responsável." }
  ],
  "reunioes": [
    { src: "assets/screenshots/reunioes-oficial.webp", alt: "Página de reuniões do Atlas Meet", caption: "Salas de reunião com áudio, vídeo, compartilhamento e convidados externos." }
  ],
  "agenda-os": [
    { src: "assets/screenshots/agenda-os-oficial.webp", alt: "Agenda de ordens de serviço por técnico", caption: "Agenda operacional com técnicos, serviços e situação de cada ordem." }
  ],
  "metricas": [
    { src: "assets/screenshots/metricas-desempenho.webp", alt: "Visão geral administrativa de desempenho", caption: "Indicadores da operação, tempos médios, satisfação, destaques e equipe em atendimento." }
  ],
  "crm": [
    { src: "assets/screenshots/crm-oficial.webp", alt: "Funil do CRM de vendas e leads", caption: "Leads distribuídos por etapa, com crédito, valores, responsáveis e ações comerciais." }
  ],
  "smart-pager": [
    { src: "assets/screenshots/smart-pager-oficial.webp", alt: "Formulário para chamar ajuda operacional", caption: "Acionamento do Suporte N1, recepção, NOC ou liderança conforme o motivo da ajuda." }
  ],
  "onu": [
    { src: "assets/screenshots/funcoes-campo-cto-v2.webp", alt: "Consulta de CTO pelo WhatsApp", caption: "Função de campo para consultar capacidade e ocupação das portas de uma CTO." },
    { src: "assets/screenshots/funcoes-campo-onu.webp", alt: "Diagnóstico de ONU pelo WhatsApp", caption: "Função de campo para consultar sinais, localização, MAC e estado da ONU." }
  ]
};

Object.entries(ATLAS_WIKI_SCREENSHOT_GALLERIES).forEach(([id, images]) => {
  const page = window.ATLAS_WIKI.pages[id];
  if (page) page.images = images;
});
