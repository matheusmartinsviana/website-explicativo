import React, { useEffect } from "react";
import ghPagesLogo from "../../assets/images/ghpages/ghpageslogo.webp";
import dockerLogo from "../../assets/images/docker/dockerlogo.webp";
import pm2Logo from "../../assets/images/pm2/pm2logo.webp";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

function DevOps() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="devops-container">
      <header className="technology-header">
        <img
          src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
          alt="Docker Logo"
          width={200}
          height="auto"
          loading="lazy"
        />
        <h1>Como Configurar o GitHub Pages</h1>
      </header>

      <section className="devops-tutorial">
        <h2>Passo a Passo para Configuração</h2>
        <ol>
          <li>
            <details>
              <summary>1. Criar um Novo Repositório</summary>
              <p>
                No canto superior direito de qualquer página no GitHub, clique
                em <strong>Novo repositório</strong>.
              </p>
              <img
                src="https://docs.github.com/assets/cb-29762/mw-1440/images/help/repository/repo-create-global-nav-update.webp"
                width={400}
                height="auto"
                alt="Criar um repositório no GitHub"
              />
            </details>
          </li>

          <li>
            <details>
              <summary>2. Configurar o Proprietário</summary>
              <p>
                Use o menu suspenso <strong>Proprietário</strong> para
                selecionar a conta responsável pelo repositório.
              </p>
              <img
                src="https://docs.github.com/assets/cb-26656/mw-1440/images/help/repository/create-repository-owner.webp"
                width={400}
                height="auto"
                alt="Configurar o proprietário do repositório"
              />
            </details>
          </li>

          <li>
            <details>
              <summary>3. Nomear o Repositório</summary>
              <p>
                Escolha um nome único para o repositório. Para sites de usuário
                ou organização, o nome precisa ser no formato{" "}
                <code className="language-javascript">
                  seuusuario.github.io
                </code>
                .
              </p>
              <img
                src="https://docs.github.com/assets/cb-48480/mw-1440/images/help/pages/create-repository-name-pages.webp"
                width={400}
                height="auto"
                alt="Nomear o repositório corretamente"
              />
            </details>
          </li>

          <li>
            <details>
              <summary>4. Configurar a Fonte de Publicação</summary>
              <p>
                Acesse as configurações do repositório, vá até{" "}
                <strong>Pages</strong> e selecione o branch para publicação
                (ex.: <code className="language-javascript">gh-pages</code>).
              </p>
              <img
                src="https://docs.github.com/assets/cb-70355/mw-1440/images/help/pages/select-source.webp"
                width={400}
                height="auto"
                alt="Configurar a fonte de publicação"
              />
            </details>
          </li>

          <li>
            <details>
              <summary>5. Adicionar Arquivos ao Site</summary>
              <p>
                Faça o upload dos arquivos HTML, CSS e JavaScript necessários
                para o seu site e envie ao repositório remoto.
              </p>
            </details>
          </li>

          <li>
            <details>
              <summary>6. Criar o Workflow com GitHub Actions</summary>
              <p>
                Adicione o seguinte arquivo no repositório:{" "}
                <code className="language-javascript">
                  .github/workflows/pages.yml
                </code>
                .
              </p>
              <pre>
                <code className="language-javascript">
                  {`
jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v3
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: steps.deployment.outputs.page_url
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
                  `}
                </code>
              </pre>
            </details>
          </li>
        </ol>
      </section>

      <section className="devops-notes">
        <h2>Notas Importantes</h2>
        <ul>
          <li>
            Pode levar até 10 minutos para as alterações serem refletidas após o
            push.
          </li>
          <li>
            Use <strong>GitHub Actions</strong> para automatizar o processo de
            build e deploy.
          </li>
          <li>
            Se o site não for publicado, verifique a configuração da fonte de
            publicação e permissões de administrador.
          </li>
        </ul>
      </section>
      <section>
        <header className="technology-header">
          <img
            src={pm2Logo}
            alt=" Docker Logo"
            loading="lazy"
            width={200}
            height={"auto"}
          />
          <h2>Início rápido do gerenciamento de processos PM2</h2>
          <p>
            O PM2 é um gerenciador de processos daemon que ajudará você a
            gerenciar e manter seu aplicativo online. Começar a usar o PM2 é
            direto, ele é oferecido como uma CLI simples e intuitiva, instalável
            via NPM.
          </p>
        </header>
        <pre>
          <code className="language-javascript">
            {`$ npm install pm2@latest -g
# ou
$ yarn global add pm2`}
          </code>
        </pre>
        <section className="usage-section">
          <h3>Comandos básicos para iniciar</h3>
          <ul>
            <li>
              <details>
                <summary>1. Iniciar um aplicativo</summary>
                <pre>
                  <code className="language-bash">
                    {`$ pm2 start app.js
# Substitua 'app.js' pelo arquivo principal do seu projeto`}
                  </code>
                </pre>
              </details>
            </li>
            <li>
              <details>
                <summary>2. Ver processos em execução</summary>
                <pre>
                  <code className="language-bash">
                    {`$ pm2 list
# Mostra todos os processos gerenciados pelo PM2`}
                  </code>
                </pre>
              </details>
            </li>
            <li>
              <details>
                <summary>3. Reiniciar um aplicativo</summary>
                <pre>
                  <code className="language-bash">
                    {`$ pm2 restart app.js
# Reinicia o aplicativo em execução`}
                  </code>
                </pre>
              </details>
            </li>
            <li>
              <details>
                <summary>4. Parar um aplicativo</summary>
                <pre>
                  <code className="language-bash">
                    {`$ pm2 stop app.js
# Para a execução do aplicativo`}
                  </code>
                </pre>
              </details>
            </li>
            <li>
              <details>
                <summary>5. Salvar configuração de execução</summary>
                <pre>
                  <code className="language-bash">
                    {`$ pm2 save
# Salva o estado atual dos processos para reiniciar automaticamente`}
                  </code>
                </pre>
              </details>
            </li>
          </ul>
        </section>
        <section className="logging-section">
          <h3>Visualizar logs do aplicativo</h3>
          <p>
            O PM2 facilita o monitoramento dos logs do seu aplicativo em tempo
            real:
          </p>
          <pre>
            <code className="language-bash">
              {`$ pm2 logs
# Exibe os logs em tempo real para todos os aplicativos`}
            </code>
          </pre>
        </section>
        <footer className="technology-footer">
          <h3>Recursos adicionais</h3>
          <p>
            Para mais informações e comandos avançados, consulte a documentação
            oficial do PM2:
            <a
              href="https://pm2.keymetrics.io/docs/usage/quick-start/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PM2 Quick Start Guide
            </a>
          </p>
        </footer>
      </section>
      <section>
        <header className="technology-header">
          <img
            src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png"
            alt=" Docker Logo"
            loading="lazy"
            width={200}
            height={"auto"}
          />
          <h2>Como criar uma imagem Docker para o seu aplicativo</h2>
          <p>
            Docker permite empacotar seu aplicativo e suas dependências em um
            container, garantindo que ele seja executado consistentemente em
            qualquer ambiente. Isso resolve problemas de compatibilidade e
            simplifica a implantação.
          </p>
        </header>
        <section className="benefits-section">
          <h3>Benefícios da containerização</h3>
          <ul>
            <li>
              <strong>Portabilidade:</strong> Execute o aplicativo em qualquer
              ambiente que suporte Docker, como servidores locais, na nuvem ou
              em sistemas de CI/CD.
            </li>
            <li>
              <strong>Isolamento:</strong> Cada container funciona como uma
              instância independente, evitando conflitos de dependências.
            </li>
            <li>
              <strong>Escalabilidade:</strong> Containers podem ser replicados
              para suportar alta demanda facilmente.
            </li>
            <li>
              <strong>Velocidade:</strong> Containers são leves, resultando em
              inicializações rápidas e uso eficiente de recursos.
            </li>
          </ul>
        </section>
        <section className="steps-section">
          <h3>Passos para criar uma imagem Docker</h3>
          <ul>
            <li>
              <details>
                <summary>1. Criar um arquivo Dockerfile</summary>
                <p>
                  O <code>Dockerfile</code> define como sua imagem será
                  construída. Aqui está um exemplo básico:
                </p>
                <pre>
                  <code className="language-docker">
                    {`# Use uma imagem base
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package*.json ./
RUN npm install

COPY . .

# Expõe a porta para o serviço
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]`}
                  </code>
                </pre>
              </details>
            </li>
            <li>
              <details>
                <summary>2. Construir a imagem</summary>
                <pre>
                  <code className="language-bash">
                    {`$ docker build -t meu-aplicativo:1.0 .
# Substitua 'meu-aplicativo:1.0' pelo nome desejado para sua imagem`}
                  </code>
                </pre>
              </details>
            </li>
            <li>
              <details>
                <summary>3. Executar o container</summary>
                <pre>
                  <code className="language-bash">
                    {`$ docker run -p 3000:3000 meu-aplicativo:1.0
# O aplicativo será acessível em http://localhost:3000`}
                  </code>
                </pre>
              </details>
            </li>
          </ul>
        </section>
        <footer className="technology-footer">
          <h3>Próximos passos</h3>
          <p>
            Depois de criar sua imagem Docker, você pode armazená-la em um
            registro como o
            <a
              href="https://hub.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Docker Hub{" "}
            </a>
            ou em registros privados para uso em produção.
          </p>
        </footer>
      </section>
    </div>
  );
}

export default DevOps;
