import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello <GradientText>there</GradientText> 👋
        </>
      }
      description={
        <>
        Soy David, actualmente trabajo como 
        <a className="text-cyan-400 hover:underline" href="/"> DevOps
        </a> y soy desarrollador{' '}
        <a className="text-cyan-400 hover:underline" href="/">
          autodidacta.
        </a>{' '}
        He desarrollado esta página para practicar mis habilidades de{' '}
        <a className="text-cyan-400 hover:underline" href="/">
        programación
        </a>;{' '}
        además de mostrar mis proyectos, currículum e inquietudes.
      </>
    }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar-pixel.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            /> 
           </a> */}
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a> */}
          <a href="https://www.linkedin.com/in/david-del-valle-a89763211/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/daviddvp">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="GitHub icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
