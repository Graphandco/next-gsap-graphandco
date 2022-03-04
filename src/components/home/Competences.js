import Image from "next/image"
import FadeInOut from "../../animation/FadeInOut"
import LinkButton from "../../ui/LinkButton"

const Competences = () => {
  const content = [
    `<strong>La communication visuelle</strong>, et plus particulièrement par le biais d’un site internet, est devenu un élément essentiel aujourd’hui dans un monde régi par les nouvelles technologies et le numérique qui en découle.`,
    `<strong>Graph and Co</strong> vous aide à vous montrer présent sur internet, et permet à vos clients d’accéder à vos produits, informations, supports de communication, n’importe où, n’importe quand.`,
    `Opter pour un site web c’est se donner les chances d’optimiser le nombre de clients potentiels et de <strong>se montrer présent</strong> dans cette avancée vers le futur à laquelle nous sommes en train d’assister depuis quelques années.`,
    `Il est cependant important d’avoir <strong>un site correspondant à ses besoins</strong> et pouvant avoir un réel impact et apport commercial. Dématérialiser ses produits ne correspond pas forcément à tout le monde, mais par votre site seront transmises votre identité ainsi que les valeurs que vous souhaitez véhiculer, et Graph and Co place cela en haut de la liste de ses priorités en respectant vos exigences.`,
  ]

  return (
    <section className="competences">
      <div className="competences-wrapper container">
        <h2>Nos compétences à votre service</h2>
        <div className="competences-inner">
          <div className="competences-text">
            {content.map((p, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
            <div className="competences-cta">
              <LinkButton name="Voir nos réalisations" link="/realisations" />
            </div>
          </div>
          <div className="competences-image">
            <FadeInOut
              y={-20}
              delay={1.8}
              // className="prestations__lead__image"
            >
              <Image width={500} height={650} src="/img/home-prestations.svg" />
            </FadeInOut>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competences
