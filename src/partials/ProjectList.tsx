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
        name="Añadir un nuevo volumen en Linux"
        description="Estos scripts se utilizan para automatizar el proceso de creación, montaje y sincronización de un volumen en Linux."
        link="https://github.com/daviddvp/New_volume_Linux"
        img={{
          src: '/assets/images/project-volume.png',
          alt: 'Project new_volume',
        }}
        category={
          <>
            {/* <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
            <Tags color={ColorTags.YELLOW}>Scripting</Tags>
            <Tags color={ColorTags.LIME}>Linux</Tags>
            <Tags color={ColorTags.SKY}>Bash</Tags>
            {/* <Tags color={ColorTags.ROSE}>JavaScript</Tags> */}
          </>
        }
      />
      <Project
        name="Reloj Digital"
        description="Desarrollo de reloj digital web en JavaScript"
        link="https://github.com/daviddvp/JS_DigitalClock"
        img={{
          src: '/assets/images/project-clock.png',
          alt: 'Project Clock',
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
