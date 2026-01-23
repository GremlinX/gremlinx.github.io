// src/data/blogData.js
import { FaVuejs, FaDocker, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiReact, SiSpringboot } from "react-icons/si";

export const blogCategories = [
  // .NET
  {
    id: "dotnet",
    icon: "🖥️",
    title: ".NET / C#",
    description: "LINQ, migrations, DTOs, REST APIs, controllers",
    posts: [],
  },

  //ENTITY FRAMEWORK
  {
    id: "ef",
    icon: "🧩",
    title: "Entity Framework",
    description: "Relacionamentos, lazy loading, seed data",
    posts: [],
  },

  // VUE 3
  {
    id: "vue",
    icon: <FaVuejs />,
    title: "Vue 3",
    description: "Composition API, reatividade, Pinia, props",
    posts: [
      {
        id: 1,
        title: "2-Way Binding",
        slug: "vue-3-visao-geral",
        content: `
## 2-Way Binding

- **1. Comunicação de HTML para JS (v-on):** O v-on é usado para escutar eventos do DOM e chamar métodos no JavaScript. Então, quando um evento como click, input, change, etc., ocorre, você usa v-on para escutá-lo e reagir a ele com uma função no Vue.
- **2. Comunicação de JS para HTML (v-bind):** O v-bind é usado para vincular valores dinâmicos de dados (do JavaScript) a atributos do HTML.
- **2-Way Data Binding (v-model):** Agora, no Vue, o verdadeiro 2-way data binding é feito com o \`v-model\`. Ele permite que você vincule uma variável de dados com um elemento de entrada, e as mudanças em um lado (input ou variável) são refletidas no outro.

\`\`\`js
<!-- Exemplo de 2-way binding -->
<input v-model="message" />
<p>{{ message }}</p>
\`\`\`
        `,
      },
      {
        id: 2,
        title: "Computed Properties",
        slug: "computed-properties",
        content: `
## Computed Properties

As \`computed properties\` são uma forma de calcular valores com base em dados reativos de maneira eficiente. Diferente das funções simples que podem ser usadas diretamente no template, as computed properties são cacheadas. Ou seja, o Vue vai recalcular o valor apenas quando uma das dependências (dados reativos) mudar. Isso ajuda a evitar re-renderizações desnecessárias e melhora o desempenho da aplicação.

### Exemplo:
\`\`\`js
<template>
  <div>{{ fullName }}</div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullName() {
      return \`\${this.firstName} \${this.lastName}\`;
    }
  }
};
</script>
\`\`\`

> [!WARNING]
> - Nesse exemplo, a propriedade fullName será recalculada somente quando firstName ou lastName mudarem.
> - Se fosse uma função no template, o Vue chamaria essa função em cada renderização, o que poderia ser ineficiente.
        `,
      },
      {
        id: 3,
        title: "Watchers",
        slug: "watchers",
        content: `
## Watchers

O \`watch\` **reage a mudanças em dados e executa ações**. Não é usado para calcular valores, mas sim para fazer algo quando uma variável muda, como executar código adicional (por exemplo, buscar dados na API, fazer validações, etc.).
Em resumo: Reage a mudanças e executa ações (como chamadas à API ou mudanças de estado).

OBS.: 
- computed = calcula algo.
- watch = faz algo em resposta a uma mudança.
        `,
      },
      {
        id: 4,
        title: "Renderização Condicional",
        slug: "renderizaca-condicional",
        content: `
## Renderização Condicional
- \`v-if\`
- \`v-else-if\`
- \`v-else\`
- \`v-show\` tem a mesma ideia do \`v-if\`, mas ao invés de **adicionar e remover items do DOM** (o que pode custar desempenho da aplicação), \`v-show\` apenas revela/esconde usando CSS (display: none).
        

> [!WARNING]
> - No Vue, ao trabalhar com loops (como v-for), é fundamental utilizar a propriedade key. O key serve para atribuir uma identificação única a cada item repetido na lista. Isso permite que o Vue consiga rastrear e identificar com precisão qual item foi alterado ou removido. Como resultado, o Vue pode otimizar o processo de re-renderização, atualizando apenas o item específico que sofreu alteração, em vez de atualizar toda a lista, o que melhora a performance da aplicação.
`,
      },
      {
        id: 5,
        title: "Loop",
        slug: "loop",
        content: `
## Props

Para falar de props precisamos falar sobre **componentes**; São, basicamente, códigos que contém seu html, css e js, e são usados para reaproveitar o código escrito fazendo com que seja renderizado em outras trechos de códigos.

Props é a forma abrevidade de **propriedade** dos componentes, isto é, podemos passar valores de forma dinâmica para os componentes. Em palavras mais técnicas: Props são uma forma de passar dados de um componente pai para um componente filho. Elas permitem que o componente filho receba valores dinâmicos, que podem ser usados em seu template ou lógica interna.

> [!NOTE]
> - Quando você passa a prop de um componente pai para um componente filho, a convenção no template é usar kebab-case (porque HTML é insensível a maiúsculas e minúsculas).
> - Já no script, dentro do componente filho, a prop é referenciada em camelCase, pois JavaScript distingue maiúsculas de minúsculas.

### Exemplo:

\`\`\`html
<!-- Componente Pai -->
<meu-componente numero-telefone="123456789"></meu-componente>

// Componente Filho
export default {
  props: {
    numeroTelefone: String
  }
}
\`\`\`
        `,
      },
      {
        id: 6,
        title: "Emits",
        slug: "emits",
        content: `
## Emits (Comunicação Filho para Pai)

No Vue.js, a comunicação filho para pai é feita usando a **emissão de eventos customizados**, onde o componente filho emite um evento e o pai escuta esse evento para executar uma função de callback, como uma forma de enviar dados ou notificar o pai sobre uma ação.

\`\`\`html
<!-- Componente Filho -->
<template>
  <!-- Usando $emit() para disparar um evento, passando o nome do evento e os dados a ser enviado. -->
  <button @click="$emit('customEvent', { message: 'Olá do filho!' })">
    Enviar para Pai
  </button>
</template>

<!-- Componente Pai -->
<template>
  <!-- Ouvindo o evento emitido pelo filho usando @customEvent -->
  <!-- e definindo uma função para ser executada, handleChildEvent, quando o evento ocorrer. -->
  <ChildComponent @customEvent="handleChildEvent" />
</template>

<script>
export default {
  methods: {
    handleChildEvent(data) {
      console.log('Mensagem recebida do filho:', data.message);
    }
  }
}
</script>
\`\`\`
        `,
      },
      {
        id: 7,
        title: "Provide + Inject",
        slug: "provide-inject",
        content: `
# Provide + Inject

Algo que pode ser muito comum em projetos Vue é o \`prop drilling\` ou repassar informações de componentes para componentes. Ou seja, uma infomação que está, por exemplo, no componente raiz, precisa passar por um Componente A até chegar num Componente B ao qual de fato precisa.

\`Provide\` e \`Inject\` está aí para isso! Remover essa necessidade de passar informações para componentes intermediários e fazer uma comunicação direta.

## Exemplo 1
\`\`\`js
// ParentComponent.vue
<script setup>
import { provide } from 'vue'
import ChildComponent from './ChildComponent.vue'

provide('message', 'Hello from ParentComponent')

</script>

<template>
  <div>
    <child-component />
  </div>
</template>
\`\`\`

\`\`\`js
//ChildComponent.vue
<script setup>
import { inject } from 'vue'
const injectedMessage = inject('message', 'This is the default message')
</script>

<template>
  <div>
    <p>{{ injectedMessage }}</p>
  </div>
</template>
\`\`\`

É possível passar vários tipos de dados/informações entre componentes usando \`provide\` e \`inject\`. No exemplo a seguir, vamos passar uma função.

O que acontece aqui:
- O componente pai fornece a função greet usando provide.
- O componente filho injeta a função com inject('greet').
- O componente filho chama a função passando o parâmetro desejado e exibe o resultado.

## Exemplo 2
\`\`\`js
// ParentComponent.vue
<script setup>
import { provide } from 'vue'
import ChildComponent from './ChildComponent.vue'

function greet(name) {
  return \`Hello, \${name}!\`
}

provide('greet', greet) // Fornece a função greet
</script>

<template>
  <div>
    <child-component />
  </div>
</template>
\`\`\`
        `,
      },
    ],
  },

  // DOCKER
  {
    id: "docker",
    icon: <FaDocker />,
    title: "Docker",
    description: "comandos, volumes, redes, erros de build",
    posts: [],
  },

  // POSTGRES
  {
    id: "postgres",
    icon: <BiLogoPostgresql/>,
    title: "PostgreSQL",
    description: "queries, tipos de dados, scripts úteis",
    posts: [],
  },

  // ERROS
  {
    id: "erros",
    icon: "🚨",
    title: "Erros e bugs comuns",
    description: "stack traces, causas e soluções rápidas",
    posts: [],
  },

  // BOAS-PRÁTICAS
  {
    id: "boas-praticas",
    icon: "💡",
    title: "Boas práticas e padrões",
    description: "arquitetura limpa, SOLID, camadas",
    posts: [],
  },

  // REACT
  {
    id: "react",
    icon: <SiReact />,
    title: "React",
    description: "hooks, JSX, useEffect, comunicação entre componentes",
    posts: [],
  },

  // JAVA / SPRING BOOT
  {
    id: "java",
    icon: <SiSpringboot />,
    title: "Java / Spring Boot",
    description: "REST APIs, JPA, injeção de dependência, boas práticas",
    posts: [],
  },

  // GIT
  {
    id: "git",
    icon: <FaGitAlt />,
    title: "Git",
    description:
      "branching, merge, rebase, comandos úteis e resolução de conflitos",
    posts: [
      {
        id: 1,
        title: "Atualizando feature com a develop",
        slug: "atualizando-feature-com-a-develop",
        content: `
# Atualizando sua branch
Já passou por momentos que você estava trabalhando em uma feature e que por algum motivo você precisou largar ela para fazer qualquer outra coisa e quando voltou, a branch \`develop\` estava a dezenas de commits a mais que sua feature?
Pois bem, esse artigo é para você!

Tudo o que você precisa fazer é seguir os seguintes passos para que você consiga alcançar a develop:
1. \`git checkout develop\`. Como você está em buscar da develop atualizada você precisa estar nela para depois...
2. \`git push orgin develop\` ... isso fará que você atualize a sua branch develop local com a branch develop da origin.
3. \`git checkout feature/nome_da_feature\`. Com a branch develop atualizada, basta você conseguir trazer a develop para a sua branch através do comando...
4. \`git merge origin develop\` ... Isto fará que você faça um merge com a branch da develop.
5. A partir daqui você poderá enfrentar alguns conflitos para resolver, mas assim que resolvidos basta fazer um \`git commit\` seguido de um \`git push\`.

Um texto simples e direto ao ponto, mas que pode salvar você e sua equipe de resolver grandes conflitos sem esse procedimento!
        `
      }
    ],
  },
];
