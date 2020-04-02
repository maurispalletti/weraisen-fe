import React, { Component } from 'react'
import './termycond.css'

import logo from './icons/logo4.png'
import { Redirect } from 'react-router'

class Terminos extends Component {
  state = {
    goToSignUp: false,
    reviewFailed: false,
    points: 0,
    missingPoints: false,
  }


  render() {
    if (this.state.goToSignUp) {
      return <Redirect to="/SignUp" />}
    return (
      <div className="TyC">
         
            <div align="justify">
            <h1>Términos de uso </h1>
            <h2>¡Te damos la bienvenida a <b>WeRaisen </b>!</h2>
            <h3>1. Aceptación de los Términos de Uso.</h3>
            <article>
              <p>Al crear una cuenta de <b><b>WeRaisen </b> </b>a través de un dispositivo móvil (colectivamente, el “Servicio”) estás de acuerdo en obligarte por estos términos de uso. Si no aceptas y acuerdas estar obligado por todos los términos de este, no deberás utilizar el Servicio.
                Podemos hacer cambios en este Acuerdo y en el Servicio de vez en cuando. Podemos hacer esto por una variedad de razones, entre ellas para reflejar los cambios en los requisitos o de la ley, nuevas características o cambios en las prácticas comerciales. La versión más reciente es la versión que se aplica. Si los cambios incluyen cambios materiales que afectan a tus derechos u obligaciones, se te notificará con antelación de los cambios por medios razonables, que podrían incluir la notificación a través del Servicio o por correo electrónico. Si continúas utilizando el servicio después de que los cambios entren en vigor, entonces estarás de acuerdo con el Acuerdo revisado. Aceptas que el presente Acuerdo reemplazará cualquier acuerdo anterior (excepto donde se indique específicamente en este documento), y será aplicable a toda tu relación con <b>WeRaisen </b>.
              </p>
              </article>
            <h3>2. Elegibilidad.</h3>
            <article>
              <p>Debes tener al menos 18 años de edad para crear una cuenta en <b>WeRaisen </b> y utilizar el Servicio. Al crear una cuenta y utilizar el Servicio, declaras y garantizas que: 
              <ul class="list-unstyled">
              <li>• Puedes formar un contrato vinculante con <b>WeRaisen </b>,</li>
              <li>•	Vas a cumplir con este Acuerdo y todas las leyes locales, estatales, nacionales e internacionales, normas y reglamentos aplicables, y</li>
              <li>•	Nunca has sido condenado o no disputaste un delito grave, un delito sexual, o cualquier delito que implique violencia, y que no estás obligado a registrarte como delincuente sexual en ningún estado, registro federal o local de delincuentes sexuales.</li>
              </ul>
              </p>
              </article>
            <h3>3. Tu cuenta.</h3>
            <article>
              <p>Para utilizar <b>WeRaisen </b>, debes crear un usuario ingresando tus datos personales. Eres responsable de mantener la confidencialidad de tus datos de acceso que utilizas para iniciar sesión en <b>WeRaisen </b>, y eres el único responsable de todas las actividades que ocurran bajo esas credenciales. Si crees que alguien ha tenido acceso a tu cuenta, por favor, ponte en contacto inmediatamente con help@weraisen.com. </p>
              </article>
            <h3>4. Modificación del servicio y terminación.</h3>
            <article>
              <p><b>WeRaisen </b> siempre está tratando de mejorar el servicio y lograr que la funcionalidad adicional que se encuentra atractiva y útil. Esto significa que podemos añadir nuevas características o mejoras de productos de vez en cuando, así como eliminar algunas de las características, y si estas acciones no afecten materialmente sus derechos u obligaciones, que no se puede proporcionarle un aviso antes de tomarlos. Podemos incluso suspender el Servicio en su totalidad, en cuyo caso, le notificaremos con antelación a menos que las circunstancias atenuantes, tales como problemas de seguridad o de seguridad, no nos permiten hacerlo. Puedes cancelar tu cuenta en cualquier momento, por cualquier motivo.
<b>WeRaisen </b> puede cancelar tu cuenta en cualquier momento y sin previo aviso si se considera que has violado este Acuerdo. Tras dicha terminación, no tendrás derecho a ningún reembolso por las compras. Después de que se cancele tu cuenta, el presente Acuerdo terminará.
 </p>
              </article>
            <h3>5. Seguridad</h3>
            <article>
              <p>Tu aventura con <b>WeRaisen </b> empieza cuando te animas a embarcarte hacia lo nuevo y lo desconocido. Dar este paso solo es posible si te sientes a salvo en nuestra comunidad, por lo que no toleramos que ningún usuario muestre una actitud peligrosa o amenazadora. </p>
              </article>
            <h4>5.1 Autolesionarte o herir a otras personas</h4>
            <article>
              <p>No debes cometer agresiones físicas, agresiones o abusos sexuales, acoso sexual, violencia doméstica ni robos o realizar trata de personas, así como ningún otro acto de violencia, ni retener a nadie en contra de su voluntad. Los miembros de organizaciones peligrosas, como grupos terroristas, organizaciones criminales o agrupaciones racistas violentas, no son bienvenidos en nuestra comunidad. <b>WeRaisen </b> se compromete a colaborar con las fuerzas del orden como sea necesario y responder a sus solicitudes válidas.
Nos tomamos el suicidio, la autolesión, los trastornos de la alimentación y el consumo de drogas duras muy en serio y hacemos todo lo posible para ayudar a aquellas personas atrapadas en este tipo de situaciones.
 </p>
              </article>
            <h4>5.2 Amenazar a otros usuarios</h4>
            <article>
              <p>No debes intentar dañar a otras personas verbal o físicamente. Del mismo modo, nos tomamos tan en serio las amenazas de autolesión como las acciones y, por eso, puede que intervinamos si nos enteramos de la existencia de una amenaza. </p>
              </article>
            <h4>5.3 Spam, suplantación de identidad o fraude</h4>
            <article>
              <p>No debes llevar a cabo transacciones fuera de la plataforma; apartar, cometer fraude crediticio o lavado de dinero; intentar desviar tráfico a otros sitios o productos no relacionados con el mercado; desviar pagos hechos a terceros; abusar de nuestro sistema de referencias; o levantar falso testimonio en contra de otro miembro de la comunidad. </p>
              </article>
            <h4>5.4	Tus interacciones con otros usuarios.</h4>
            <article>
              <p>Aunque <b>WeRaisen </b> se esfuerza en fomentar una experiencia de usuario respetuosa a través de funcionalidades como la verificación de la persona con el reconocimiento del DNI, no es responsable de la conducta de cualquier usuario dentro o fuera del Servicio. Aceptas tener precaución en todas las interacciones con otros usuarios, sobre todo si decides comunicarte fuera del Servicio o conocerse en persona. Además, te comprometes a revisar y seguir los Consejos de seguridad de <b>WeRaisen </b> antes de usar el Servicio. Te comprometes a no proporcionar tu información financiera (por ejemplo, tu tarjeta de crédito o cuenta bancaria), o transferir ni enviar dinero a otros usuarios..
ERES EL ÚNICO RESPONSABLE DE TUS INTERACCIONES CON OTROS USUARIOS.ENTIENDES QUE <b>WeRaisen </b> NO VERIFICA LOS ANTECEDENTES PENALES DE SUS USUARIOS NI INVESTIGA DE OTRO MODO LOS ANTECEDENTES DE SUS USUARIOS. <b>WeRaisen </b> NO DECLARA NI GARANTIZA LA CONDUCTA DE SUS USUARIOS. <b>WeRaisen </b> SE RESERVA EL DERECHO A REALIZAR —Y TÚ ACEPTAS QUE <b>WeRaisen </b> PUEDA REALIZAR— UNA VERIFICACIÓN DE LOS ANTECEDENTES PENALES Y OTROS CRIBADOS (COMO BÚSQUEDAS EN LOS REGISTROS DE CRIMINALES SEXUALES) EN CUALQUIER MOMENTO USANDO LOS REGISTROS PÚBLICOS DISPONIBLES
 </p>
              </article>
            <h3>6. Respeto</h3>
            <article>
              <p>La comunidad internacional de <b>WeRaisen </b> es tan diversa, singular y dinámica como el mundo en el que vivimos. Ser justos los unos con los otros es lo que nos une, lo que permite que nos integremos en un grupo a la perfección y que sintamos que podemos disfrutar de cualquier rincón del planeta. </p>
              </article>
            <h4>6.1 Mostrar actitudes intolerantes o discriminatorias</h4>
            <article>
              <p>Debes tratar a todo el mundo con el respeto que se merece. Por eso, es importante que no discrimines a otras personas en función de su color de piel, etnia, nacionalidad, religión, orientación sexual, género o identidad de género, discapacidad o enfermedad. Por descontado, no toleramos los insultos u ofensas a otras personas por estos motivos. </p>
              </article>
            <h4>6.2 Intimidar o acosar a otros miembros o usuarios</h4>
            <article>
              <p>No debes compartir los datos privados de otras personas para humillarlas o chantajearlas ni mostrar una actitud abusiva hacia ellas o difamarlas o infringir nuestras normas de evaluación y de contenidos. </p>
              </article>
            <h3>7. Autenticidad</h3>
            <article>
              <p>Tus experiencias en <b>WeRaisen </b> deberían estar llenas de buenos momentos y aventuras sorprendentes. La confianza es uno de los pilares de nuestra comunidad, por lo que la honestidad es un valor imprescindible. Es importante que haya un equilibrio entre las expectativas de los anfitriones y los huéspedes, que ambas partes demuestren su sinceridad y que los datos que proporcionen sean fiables. </p>
              </article>
            <h4>7.1 Facilitar datos falsos sobre ti</h4>
            <article>
              <p>No debes proporcionar un nombre o una fecha de nacimiento falsos, utilizar el alojamiento con fines comerciales o para celebrar eventos o fiestas sin la aprobación del anfitrión, tener cuentas duplicadas o registrarte si eres menor de 18 años. </p>
              </article>
            <h3>8. Fiabilidad</h3>
            <article>
              <p>Cada experiencia con <b>WeRaisen </b> es única. Cuando nuestra comunidad se compromete a brindar un abanico de posibilidades tan amplio, la veracidad y la fiabilidad son esenciales, tanto en la comunicación entre los usuarios como las valoraciones de los mismos. </p>
              </article>
            <h4>8.1 Romper compromisos</h4>
            <article>
              <p>Salvo por causas de fuerza mayor, no deberías cancelar tu encuentro después de haber acordado con la otra parte. </p>
              </article>
            <h4>8.2 No responder o no estar disponible</h4>
            <article>
              <p>No deberías recibir valoraciones negativas de forma continua y reiterada, ni desentenderte de tu encuentro una vez aceptada la solicitud. </p>
              </article>
            <h3>9. Derechos que <b>WeRaisen </b> te otorga.</h3>
            <article>
              <p><b>WeRaisen </b> te concede una licencia personal, mundial, exenta de regalías, no asignable, no exclusiva, revocable y no transferible a terceros para acceder y utilizar el Servicio. Esta licencia se otorga con el único propósito de que te permita usar y disfrutar de los beneficios del Servicio de la forma prevista por <b>WeRaisen </b> y permitida por el presente Acuerdo. Por lo tanto, acuerdas:
<ul class="list-unstyled">
<li>•	No utilizar el Servicio o cualquier contenido en el Servicio para fines comerciales sin nuestro consentimiento por escrito.</li>
<li>•	No copiar, modificar, transmitir, crear trabajos derivados de, hacer uso de, o reproducir en forma alguna cualquier material con derechos de autor, imágenes, marcas comerciales, nombres comerciales, marcas de servicio, u otra propiedad intelectual, contenidos o información propietaria de acceso a través del Servicio sin el previo consentimiento por escrito de <b>WeRaisen </b>.</li>
<li>•	No expresar ni insinuar que cualquiera de tus declaraciones está avaladas por <b>WeRaisen </b>.</li>
<li>•	No utilizar ningún robot, bot, araña, robot de búsqueda, raspador, aplicación de búsqueda de sitios o de recuperación, proxy u otro dispositivo manual o automático, método o proceso para acceder, recuperar, indexar, “mina de datos”, o en cualquier forma reproducir o sortear la estructura de navegación o presentación del Servicio o su contenido.</li>
<li>•	No utilizar el servicio de ninguna manera que pudiera interferir con, interrumpir o afectar negativamente el Servicio o los servidores o redes conectados al Servicio.</li>
<li>•	No subir virus u otro código malicioso ni poner en peligro la seguridad del Servicio.</li>
<li>•	No falsificar encabezados ni manipular identificadores para disfrazar el origen de cualquier información transmitida a través del Servicio..</li>
<li>•	No modificar, adaptar, sublicenciar, traducir, vender, realizar ingeniería inversa, descifrar, descompilar o desensamblar cualquier parte del Servicio, o provocar que otros lo hagan.</li>
<li>•	No utilizar o desarrollar cualquier aplicación de terceros que interactúe con el Servicio o Contenido o información de otros usuarios sin nuestro consentimiento por escrito.</li>
<li>•	No utilizar, acceder ni publicar la interfaz de programación de la aplicación de <b>WeRaisen </b> sin nuestro consentimiento por escrito.</li>
<li>•	No sondear, escanear ni probar la vulnerabilidad de nuestro Servicio o de cualquier sistema o red.</li>
<li>•	No fomentar ni promover cualquier actividad que viole este Acuerdo.</li>
</ul>
 </p>
</article>
<article>
<p>
La Compañía puede investigar y tomar las acciones legales disponibles en respuesta al uso ilegal y/o no autorizado del Servicio, incluida la terminación de tu cuenta.
 </p>
</article>
            <h3>10.	Contenido de otros Usuarios.</h3>
            <article>
              <p>Aunque <b>WeRaisen </b> se reserva el derecho de revisar y eliminar el Contenido que viole este Acuerdo, dicho Contenido es responsabilidad exclusiva del usuario que lo publica, y <b>WeRaisen </b> no puede garantizar que todo el Contenido cumpla con este Acuerdo. Si ves Contenido en el Servicio que viole este Acuerdo, por favor reportarlo. </p>
              </article>
            <h3>11. Servicios de terceros.</h3>
            <article>
              <p>El Servicio puede contener anuncios y promociones ofrecidos por terceros y enlaces a otros sitios web o recursos. <b>WeRaisen </b> no es responsable de la disponibilidad (o falta de disponibilidad) de dichos sitios web o recursos externos. Si decides interactuar con los terceros puestos a disposición a través de nuestro Servicio, los términos de dicha parte regirán su relación contigo. <b>WeRaisen </b> no es responsable de los términos o acciones de dichos terceros. </p>
              </article>
            <h3>12.	Lugar de encuentro.</h3>
            <article>
              <p>Queda fuera de nuestro alcance intervenir en la elección del lugar de encuentro entre el guía y el turista. El Servicio garantizará la seguridad hasta el momento del inicio del chat, luego queda a cargo de las partes. </p>
              </article>



      </div>
      <div className="right-container">
            <input type="button" className="btn-primero" value="Volver" onClick={() => this.setState({ goToSignUp: true })} />
      </div>
    </div>
    )
  }
};

export default Terminos;
