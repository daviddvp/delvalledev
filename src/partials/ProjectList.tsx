import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>Proyectos</GradientText> recientes
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Conversor de monedas"
        description="Este es un conversor de monedas que desarrolle para
        practicar mis habilidades con Javascript"
        link="https://github.com/daviddvp/daviddvp.github.io"
        img={{
          src: '/assets/images/project-converter.png',
          alt: 'Project Converter',
        }}
        category={
          <>
            {/* <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
            {/* <Tags color={ColorTags.ROSE}>JavaScript</Tags> */}
          </>
        }
      />
      <Project
        name="Calculadora"
        description="Esta es una calculadora que desarrolle para practicar, de nuevo, mis habilidades con Javascript.
        Tambien me ayudo a entender la forma de manejar las operaciones en programacion y practicar el diseño web al darle un estilo
        parecido al de cierta compañia frutera"
        link="https://github.com/daviddvp/NormalCalculator"
        img={{
          src: '/assets/images/project-calculator.png',
          alt: 'Project Calculator',
        }}
        category={
          <>
            {/* <Tags color={ColorTags.VIOLET}>Next.js</Tags> */}
            {/* <Tags color={ColorTags.EMERALD}>Blog</Tags> */}
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
          </>
        }
      />
      {/* <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      /> */}
    </div>
  </Section>
);

export { ProjectList };
