// Contenido del curso. Cada paso puede llevar una figura: fig: ['nombre', ...args] (ver figures.js)

export const MODULES = [
  { id: 'm1', title: 'Primeros pasos', blurb: 'Del ovillo a tu primera cadeneta.', lessons: ['kit', 'sujetar', 'nudo', 'cadeneta', 'raso'] },
  { id: 'm2', title: 'Tejer en filas', blurb: 'El punto bajo y tu primer posavasos.', lessons: ['bajo', 'rematar', 'filas'] },
  { id: 'm3', title: 'Puntos altos y color', blurb: 'Puntos más altos, rayas y colores.', lessons: ['mpa', 'pa', 'color'] },
  { id: 'm4', title: 'Dar forma', blurb: 'Crecer, menguar y tejer en círculo.', lessons: ['aumdism', 'redondo'] },
  { id: 'm5', title: 'Proyectos', blurb: 'Lo que has aprendido, en cosas bonitas.', lessons: ['lazo', 'granny', 'amigurumi'] },
];

export const LESSONS = {
  kit: {
    title: 'Conoce tu kit',
    host: 'kitty',
    time: '10 min',
    goal: 'Saber qué gancho y qué lana usar para aprender.',
    intro: 'Tienes dos ganchos y lanas de colores. Con eso hay de sobra para todo este curso. Antes de tejer vamos a ver qué es cada cosa y cuál conviene usar al principio.',
    steps: [
      { h: 'El gancho', t: 'Tiene una <b>cabeza</b> con una muesca (la <b>garganta</b>), donde se engancha la lana. Luego viene el <b>cuerpo</b> (todos los puntos se forman aquí, así salen del mismo tamaño) y una zona plana para apoyar el pulgar. En esa zona plana suele venir el número: <b>3 mm, 4 mm, 5 mm…</b> Cuanto más alto el número, más gordo el gancho y más grandes los puntos.', fig: ['hook', 0] },
      { h: 'La lana', t: 'Si aún tienes la etiqueta, mírala: suele traer un dibujito de un gancho con un número recomendado (por ejemplo <b>4–5 mm</b>). Si no hay etiqueta, tienes una regla aproximada: <b>dobla la lana en dos</b>; el gancho debería ser más o menos así de gordo.' },
      { h: 'Elige tu pareja para aprender', t: 'Para empezar, coge el gancho <b>más gordo</b> de los dos y una lana <b>lisa</b> (sin pelitos), de <b>color claro</b> (rosa, verde clarito, amarillo…) y de grosor medio. En lana oscura o peluda no se ven los puntos y es muy frustrante.' },
      { h: 'Lo que no tienes (y cómo apañarte)', t: '<ul><li><b>Tijeras</b>: las de casa o un cortaúñas.</li><li><b>Marcadores de punto</b>: un trocito de lana de otro color, una horquilla o un clip.</li><li><b>Aguja lanera</b>: no hace falta, todo lo haremos con el gancho.</li><li><b>Relleno</b> (para el muñeco final): restos de lana cortados.</li><li><b>Cinta métrica</b>: una regla o la del móvil.</li></ul>' },
    ],
    tips: {
      kitty: 'Guarda el gancho pequeño para el amigurumi del final: con gancho fino los puntos quedan apretaditos y no se ve el relleno.',
      shrek: 'Lana negra y peluda para aprender, no. Ni un ogro se aclara con eso.',
    },
    errors: ['Usar el gancho más fino con la lana más gorda: no entra y se deshilacha.', 'Empezar con lana de pelo o tipo toalla: imposible ver dónde va cada punto.'],
    practice: {
      title: 'Prepara tu “kit de aprendiza”',
      who: 'kitty',
      steps: ['Mira el número de tus dos ganchos y apúntalo aquí abajo en tus notas.', 'Elige una lana clara y lisa para practicar.', 'Ten a mano tijeras y un trocito de lana de otro color (será tu marcador).'],
    },
    notes: true,
    video: 'partes del ganchillo y como elegir lana principiantes',
  },

  sujetar: {
    title: 'Sujetar gancho y lana',
    host: 'shrek',
    time: '10 min',
    goal: 'Encontrar una postura cómoda y una tensión regular.',
    intro: 'La mano derecha mueve el gancho; la izquierda controla la lana y sujeta la labor. (Si eres zurda, todo al revés: funciona exactamente igual en espejo).',
    steps: [
      { h: 'Gancho como un lápiz', t: 'Coge el gancho como si fueras a escribir, con el pulgar y el índice en la zona plana. Es la forma más habitual. La otra opción es <b>como un cuchillo</b>, con la mano por encima. Prueba las dos y quédate con la que te canse menos: las dos son correctas.' },
      { h: 'La lana entre los dedos', t: 'La lana viene del ovillo, pasa por debajo del meñique (puedes darle una vuelta), por encima del anular, por debajo del corazón y por encima del índice. El índice levantado hace de “grúa”: desde ahí el gancho coge la lana.', fig: ['grip'] },
      { h: 'Pinza para sujetar la labor', t: 'El pulgar y el dedo corazón de la mano izquierda pellizcan lo que vas tejiendo, justo debajo del gancho. Así no baila.' },
      { h: 'La tensión', t: 'La lana tiene que correr <b>con un poco de resistencia</b>, ni floja ni estrangulada. Si los puntos salen muy apretados y cuesta meter el gancho, afloja el meñique. Si salen enormes y flojos, dale una vuelta más al meñique.' },
    ],
    tips: {
      kitty: 'Al principio irá todo rarísimo y torpe. Es normal: tus manos están aprendiendo un idioma nuevo. A los tres días ya no piensas en ello.',
      shrek: 'Si te duele la mano, suelta. Hombros abajo, respira. Nadie teje bien enfadado. Salvo yo.',
    },
    errors: ['Apretar el gancho con fuerza: se cansa la mano. Sujétalo suave.', 'Tirar de la lana con la mano derecha. La lana la controla siempre la izquierda.'],
    practice: {
      title: 'Ensayo sin tejer',
      who: 'shrek',
      steps: ['Pasa la lana por tus dedos como en el dibujo.', 'Tira del extremo con la otra mano: tiene que salir con algo de resistencia, de forma uniforme.', 'Repite hasta que te salga sin mirar.'],
    },
    video: 'como sujetar el ganchillo y la lana principiantes',
  },

  nudo: {
    title: 'El nudo corredizo',
    host: 'kitty',
    time: '5 min',
    goal: 'Poner la lana en el gancho para empezar cualquier labor.',
    intro: 'Casi todo empieza así: un nudo que se ajusta al gancho y que no cuenta como punto.',
    steps: [
      { h: 'Haz un lazo', t: 'Deja unos 15 cm de cola. Con la hebra que va al ovillo, haz un círculo cruzando la lana por encima de la cola.', fig: ['slipknot'] },
      { h: 'Pesca la hebra', t: 'Mete el gancho en el círculo, engancha la hebra del ovillo y sácala por dentro, formando un bucle.' },
      { h: 'Ajusta', t: 'Tira de las dos puntas para cerrar el nudo alrededor del gancho. Que quede justo: que se mueva por el gancho, pero que no se caiga.' },
    ],
    tips: {
      kitty: 'Si tiras de la cola y el bucle se hace más pequeño, ¡lo has hecho bien!',
      shrek: 'Si al tirar se deshace del todo, no era un nudo, era un intento. Otra vez.',
    },
    errors: ['Apretarlo tanto que el gancho no se mueve.', 'Dejar la cola demasiado corta: luego no podrás esconderla.'],
    practice: {
      title: 'Diez nudos',
      who: 'kitty',
      steps: ['Haz el nudo, ajústalo, sácalo del gancho y deshazlo tirando.', 'Repítelo 10 veces.', 'El último intenta hacerlo sin mirar el dibujo.'],
    },
    video: 'nudo corredizo ganchillo',
  },

  cadeneta: {
    title: 'La cadeneta',
    host: 'shrek',
    abbr: 'cad',
    time: '20 min',
    goal: 'Tejer cadenetas regulares y saber contarlas.',
    intro: 'La cadeneta es la base de casi todo: el “suelo” sobre el que construyes las filas.',
    steps: [
      { h: 'Posición de partida', t: 'Nudo corredizo en el gancho. La mano izquierda sujeta la cola del nudo con pulgar y corazón.', fig: ['hook', 1] },
      { h: 'Lazada', t: 'Pasa la lana por encima del gancho, de atrás hacia delante (o gira el gancho para que la coja él). Esto se llama <b>lazada</b> y lo vas a hacer miles de veces.', fig: ['hook', 1, { yo: true }] },
      { h: 'Saca a través', t: 'Gira un poco el gancho hacia abajo para que la garganta no se enganche y saca la lana por el bucle que tenías. Ya tienes <b>1 cadeneta</b>, y vuelves a tener 1 bucle en el gancho.', fig: ['hook', 2, { pull: 1 }] },
      { h: 'Repite y sube la pinza', t: 'Lazada, saca, lazada, saca… Cada 3 o 4 cadenetas, sube los dedos de la mano izquierda para pellizcar cerca del gancho.' },
      { h: 'Cómo se cuentan', t: 'Mira la cadena de frente: verás una fila de <b>“V”</b>. Cada V es una cadeneta. El bucle que hay en el gancho <b>no cuenta</b>, y el nudo inicial tampoco.', fig: ['chainAnatomy'] },
      { h: 'El símbolo', t: 'En los patrones verás la cadeneta como un óvalo y la abreviatura <b>cad</b>.', fig: ['symbols', ['cad']] },
    ],
    tips: {
      kitty: 'Que todas las V tengan el mismo tamaño importa más que la velocidad. ¡La velocidad viene sola!',
      shrek: 'Las cadenetas son como las cebollas: tienen capas. Bueno, no. Pero tienen V. Cuéntalas.',
    },
    errors: ['Cadenetas tan apretadas que luego no entra el gancho. Truco: hazlas con el gancho más gordo que tengas.', 'Contar el bucle del gancho como una cadeneta.'],
    practice: {
      title: 'Pulsera trenzada del pantano',
      who: 'shrek',
      steps: ['Haz 3 cadenas de 40 cadenetas cada una, en 3 colores (verde, marrón y crema le pegan a un ogro; rosa, blanco y rojo, a Kitty).', 'Al terminar cada cadena, corta la lana y saca la hebra por el último bucle para que no se deshaga.', 'Ata las 3 por un extremo, trénzalas y ata el otro extremo.', '¡Póntela! Es tu primera pieza de ganchillo.'],
    },
    video: 'cadeneta ganchillo principiantes',
  },

  raso: {
    title: 'El punto raso',
    host: 'kitty',
    abbr: 'pr',
    time: '15 min',
    goal: 'Hacer el punto más bajito, que sirve para unir y cerrar.',
    intro: 'El punto raso (también llamado <b>punto enano</b>) casi no tiene altura. Sirve para cerrar círculos, unir piezas y desplazarte sin que se note.',
    steps: [
      { h: 'Mete el gancho', t: 'Introduce el gancho en el punto donde quieres trabajar (por ejemplo, en una cadeneta). Ahora hay 1 bucle en el gancho y la lana del punto alrededor.' },
      { h: 'Lazada', t: 'Haz una lazada.', fig: ['hook', 1, { yo: true }] },
      { h: 'Saca por todo', t: 'Saca la lana a la vez por el punto y por el bucle del gancho. Te queda 1 bucle. ¡Hecho!', fig: ['hook', 2, { pull: 2 }] },
      { h: 'Para cerrar un anillo', t: 'Haz unas cadenetas y mete el gancho en la <b>primera</b> de ellas. Haz un punto raso: la cadena se cierra en círculo.', fig: ['symbols', ['cad', 'pr']] },
    ],
    tips: {
      kitty: 'El punto raso tiende a salir muy apretado. Hazlo suave, sin tirar de la lana.',
      shrek: 'Es el punto más corto del mundo. Como la paciencia de Lord Farquaad.',
    },
    errors: ['Retorcer la cadena al cerrar el anillo: comprueba que todas las V miran hacia fuera antes de unir.'],
    practice: {
      title: 'Anillos de Fiona',
      who: 'kitty',
      steps: ['Haz 20 cadenetas y ciérralas en anillo con 1 punto raso en la primera.', 'Sigue haciendo punto raso en cada cadeneta del anillo, dando la vuelta entera.', 'Corta y remata. Haz otro de 12 cadenetas: tendrás un anillo grande (pulsera infantil) y uno pequeño.'],
    },
    video: 'punto raso ganchillo',
  },

  bajo: {
    title: 'El punto bajo',
    host: 'shrek',
    abbr: 'pb',
    time: '30 min',
    goal: 'Dominar el punto más importante del ganchillo.',
    intro: 'Con punto bajo se hacen posavasos, bolsos y todos los amigurumis. Si sabes hacer punto bajo, sabes hacer ganchillo.',
    steps: [
      { h: 'Cadeneta base', t: 'Haz 11 cadenetas. Vas a hacer 10 puntos bajos: siempre se teje <b>1 cadeneta más</b> de los puntos que quieres.' },
      { h: 'Mete el gancho', t: 'Sáltate la cadeneta que está pegada al gancho y mete el gancho en la <b>2.ª cadeneta desde el gancho</b>.' },
      { h: 'Lazada y saca', t: 'Lazada y saca la lana solo a través de la cadeneta. Ahora tienes <b>2 bucles</b> en el gancho.', fig: ['hook', 2] },
      { h: 'Lazada otra vez', t: 'Haz otra lazada…', fig: ['hook', 2, { yo: true }] },
      { h: 'Saca por los 2', t: '…y sácala por los 2 bucles a la vez. Queda 1 bucle: ¡tu primer punto bajo! Repite en cada cadeneta hasta el final.', fig: ['hook', 2, { pull: 2 }] },
      { h: 'El símbolo', t: 'En los esquemas, el punto bajo es una <b>X</b> (o a veces un +). Abreviatura: <b>pb</b>.', fig: ['symbols', ['cad', 'pb']] },
    ],
    tips: {
      kitty: 'Ritmo mental: “entro, saco, cojo, salgo”. Dilo en voz bajita mientras tejes.',
      shrek: 'Si al final de la fila tienes 9 o 11 puntos en vez de 10, no pasa nada. Bueno, sí pasa. Lo arreglamos en la lección 8.',
    },
    errors: ['Meter el gancho solo por una hebrita de la cadeneta: el punto queda flojo. Al principio, cualquier entrada vale, pero intenta que sea siempre la misma.', 'Olvidar que la primera cadeneta (la pegada al gancho) se salta.'],
    practice: {
      title: 'Muestra de 10 × 10',
      who: 'shrek',
      steps: ['Haz 11 cad y una fila de 10 pb.', 'Al terminar la fila: 1 cad, gira la labor como si pasaras la página de un libro.', 'Haz 1 pb en cada punto de la fila anterior (mete el gancho por debajo de las dos hebras de la V de arriba).', 'Repite hasta tener 10 filas. ¡Todavía no la cortes! En la siguiente lección aprendes a rematarla.'],
    },
    video: 'punto bajo ganchillo principiantes',
  },

  rematar: {
    title: 'Rematar y esconder hebras',
    host: 'kitty',
    abbr: 'rem',
    time: '15 min',
    goal: 'Terminar una pieza para que no se deshaga, sin aguja.',
    intro: 'Rematar es cerrar el último punto. Esconder hebras es meter las colitas de lana por dentro para que no se vean. Normalmente se hace con aguja lanera, pero con el gancho funciona igual de bien.',
    steps: [
      { h: 'Corta', t: 'Al terminar el último punto, corta la lana dejando unos <b>15 cm</b>.' },
      { h: 'Saca la cola', t: 'Haz una lazada y saca la hebra <b>entera</b> por el bucle del gancho. Tira fuerte: el punto queda bloqueado.', fig: ['hook', 1, { yo: true }] },
      { h: 'Esconde con el gancho', t: 'Mete el gancho por dentro de 4 o 5 puntos del borde, engancha la cola y sácala. Cambia de dirección y repite en sentido contrario.' },
      { h: 'Corta a ras', t: 'Estira un poquito la labor y corta lo que sobre pegado al tejido. La puntita se esconderá sola.' },
    ],
    tips: {
      kitty: 'Esconde las hebras al terminar cada pieza, no al final del proyecto. ¡Tu yo del futuro te lo agradecerá!',
      shrek: 'Cambiar de dirección al esconder es la clave. En línea recta, la hebra se escapa como Asno cuando le toca fregar.',
    },
    errors: ['Cortar sin dejar cola: no hay manera de esconderla.', 'Esconder la hebra en un solo sentido: con el uso se sale.'],
    practice: {
      title: 'Termina tu muestra',
      who: 'kitty',
      steps: ['Remata la muestra de 10 × 10 de la lección anterior.', 'Esconde la cola del final y también la del principio (la del nudo corredizo).', 'Ya tienes tu primer cuadradito terminado. Guárdalo: luego te hará ilusión compararlo.'],
    },
    video: 'como rematar ganchillo y esconder hebras con el ganchillo',
  },

  filas: {
    title: 'Contar, girar y bordes rectos',
    host: 'shrek',
    time: '45 min',
    goal: 'Que la labor no crezca ni encoja sin querer.',
    intro: 'Lo que más les pasa a quienes empiezan: el cuadrado se convierte en trapecio. Casi siempre es por el primer o el último punto de cada fila.',
    steps: [
      { h: 'El esquema de filas', t: 'Así se ve un trabajo en filas: cadeneta base, filas de pb y, al final de cada fila, 1 cadeneta para subir y girar. Una fila se lee de derecha a izquierda, la siguiente de izquierda a derecha.', fig: ['rows', 8, 4, 'pb'] },
      { h: 'El primer punto', t: 'Después de la cadeneta de vuelta, el primer pb va en el <b>primer punto</b>, justo en la base de esa cadeneta. Es fácil saltárselo.' },
      { h: 'El último punto', t: 'El último punto de la fila suele estar escondido y torcido. Búscalo bien: si te lo saltas, pierdes un punto cada fila.' },
      { h: 'Marca y cuenta', t: 'Pon tu marcador (un trocito de lana de otro color) en el primer y el último punto. Al acabar cada fila, cuenta: siempre tienen que salir los mismos.' },
      { h: 'Deshacer no es fracasar', t: 'Saca el gancho y tira de la lana: los puntos se deshacen solos. Esto en ganchillo se llama “ranear”, y lo hace todo el mundo constantemente.' },
    ],
    tips: {
      kitty: 'Contar es aburrido pero mágico: con contar cada fila durante una semana, ya no te vuelves a perder.',
      shrek: 'Si tu cuadrado parece un trapecio, enhorabuena: has inventado el trapecio. Ahora deshaz y cuenta.',
    },
    errors: ['Saltarse el primer punto (la labor encoge por un lado).', 'Tejer en la cadeneta de vuelta como si fuera un punto (la labor crece).'],
    practice: {
      title: 'Posavasos de Shrek',
      who: 'shrek',
      fig: ['coaster'],
      steps: ['Con lana verde: 17 cad.', 'Fila 1: 1 pb en la 2.ª cad desde el gancho y en cada cad hasta el final (16 pb).', 'Filas 2 en adelante: 1 cad, gira, 16 pb. Cuenta en cada fila.', 'Sigue hasta que la pieza sea un cuadrado (unas 18 filas). Remata y esconde hebras.', 'Extra: cuando hagas la lección de color, vuelve aquí y añádele el “chaleco”: una vuelta de pb marrón alrededor, con 3 pb en cada esquina.'],
    },
    video: 'bordes rectos ganchillo punto bajo principiantes',
  },

  mpa: {
    title: 'El medio punto alto',
    host: 'kitty',
    abbr: 'mpa',
    time: '30 min',
    goal: 'Un punto el doble de alto que el bajo, con su lazada previa.',
    intro: 'Es el puente entre el punto bajo y el alto. Avanza rápido y queda un tejido muy suave.',
    steps: [
      { h: 'Lazada antes de entrar', t: 'La novedad: <b>antes de meter el gancho</b>, haz una lazada.', fig: ['hook', 1, { yo: true }] },
      { h: 'Entra y saca', t: 'Mete el gancho en el punto, haz lazada y saca. Ahora tienes <b>3 bucles</b>.', fig: ['hook', 3] },
      { h: 'Saca por los 3', t: 'Lazada y saca por los 3 bucles a la vez. ¡Listo!', fig: ['hook', 3, { yo: true, pull: 3 }] },
      { h: 'Cadeneta base y vuelta', t: 'Para hacer 8 mpa: 10 cad, y empieza en la <b>3.ª cad desde el gancho</b>. Al final de cada fila: 2 cad, gira, y el primer mpa va en el primer punto. Esas 2 cad no cuentan como punto.' },
      { h: 'Su símbolo', t: 'Una T. Abreviatura <b>mpa</b>.', fig: ['symbols', ['pb', 'mpa']] },
    ],
    tips: {
      kitty: 'Sacar por 3 bucles cuesta al principio. Si se atasca, gira el gancho hacia abajo al tirar y deja la lana un poquito más floja.',
      shrek: 'Lazada, entro, lazada, saco, lazada, salgo por todo. Si se te olvida la primera lazada, has hecho un punto bajo. Tampoco es el fin del mundo.',
    },
    errors: ['Olvidar la lazada previa.', 'Hacer el primer mpa en la cadeneta de vuelta.'],
    practice: {
      title: 'Marcapáginas con borla',
      who: 'kitty',
      steps: ['10 cad. Fila 1: 1 mpa en la 3.ª cad desde el gancho y en cada cad (8 mpa).', 'Siguientes filas: 2 cad, gira, 8 mpa. Hasta que mida unos 18 cm.', 'Remata y esconde hebras.', 'Borla: corta 10 hebras de 12 cm. Mete el gancho por el centro de un extremo, dobla las hebras por la mitad, engánchalas y sácalas un poco formando un bucle; pasa las puntas por ese bucle y tira.'],
    },
    video: 'medio punto alto ganchillo',
  },

  pa: {
    title: 'El punto alto',
    host: 'shrek',
    abbr: 'pa',
    time: '30 min',
    goal: 'El punto alto: rápido y calado, base del granny square.',
    intro: 'El punto alto (pa) mide casi lo mismo que tres cadenetas. Con él las piezas crecen muy rápido.',
    steps: [
      { h: 'Lazada, entra, saca', t: 'Lazada, mete el gancho en el punto, lazada y saca: <b>3 bucles</b> en el gancho (como en el mpa).', fig: ['hook', 3] },
      { h: 'Primera salida: por 2', t: 'Lazada y saca <b>solo por 2</b> bucles. Quedan 2.', fig: ['hook', 3, { yo: true, pull: 2 }] },
      { h: 'Segunda salida: por 2', t: 'Lazada y saca por los 2 que quedan. Queda 1. ¡Punto alto!', fig: ['hook', 2, { yo: true, pull: 2 }] },
      { h: 'Cadeneta base y vuelta', t: 'Para 12 pa: 14 cad. El primer pa va en la <b>4.ª cad desde el gancho</b> (las 3 que te saltas cuentan como el primer pa). Al girar: 3 cad (cuentan como 1 pa), te saltas el primer punto, y el último pa de la fila va en la parte de arriba de las 3 cad de la fila anterior.' },
      { h: 'Compara alturas', t: 'Ya conoces la familia entera. Cada punto añade un “piso” de altura.', fig: ['heights'] },
      { h: 'Su símbolo', t: 'Una T con una rayita cruzada (cada rayita = una lazada). Abreviatura <b>pa</b>.', fig: ['symbols', ['pb', 'mpa', 'pa']] },
    ],
    tips: {
      kitty: 'El truco del pa es “por dos, por dos”. Repítelo como una cancioncita.',
      shrek: 'Lo de que las 3 cadenetas cuentan como punto confunde a todo el mundo. A mí también. Cuenta los puntos y punto.',
    },
    errors: ['Olvidar meter el último pa en la cadeneta de vuelta: la labor encoge.', 'Hacer el primer pa en el primer punto de la fila (cuando las 3 cad ya cuentan): la labor crece.'],
    practice: {
      title: 'Bufanda para un peluche',
      who: 'shrek',
      steps: ['14 cad. Fila 1: 1 pa en la 4.ª cad desde el gancho y en cada cad (12 pa contando las cad).', 'Siguientes filas: 3 cad, gira, sáltate el primer punto, 11 pa (el último en la cadeneta de vuelta). Cuenta: 12.', 'Hasta 30 cm de largo. Remata, esconde hebras y ponle borlas como las del marcapáginas.', 'Pónsela a un peluche. A cualquiera. A mí no, que pica.'],
    },
    video: 'punto alto ganchillo principiantes',
  },

  color: {
    title: 'Cambiar de color',
    host: 'kitty',
    time: '20 min',
    goal: 'Hacer rayas limpias y empezar lana nueva.',
    intro: 'El secreto: el color nuevo entra en la <b>última lazada del punto anterior</b>, no en el punto nuevo.',
    steps: [
      { h: 'El último punto, a medias', t: 'Teje el último punto de la fila con el color viejo, pero párate justo antes de la última lazada (en pb: cuando tienes 2 bucles en el gancho).', fig: ['hook', 2] },
      { h: 'Lazada con el color nuevo', t: 'Deja colgando el color viejo, coge la lana nueva (dejando 15 cm de cola) y haz con ella la lazada final.', fig: ['hook', 2, { yo: true, pull: 2 }] },
      { h: 'Sigue con el nuevo', t: 'Haz la cadeneta de vuelta con el color nuevo y continúa. Para que no se suelte, haz un nudito suave entre las dos colas (lo esconderás luego).' },
      { h: 'Esconde las colas', t: 'Cada cambio deja 2 colas. Escóndelas en su propia raya de color, con el gancho, igual que en la lección de rematar.' },
      { h: 'Unir lana en un borde', t: 'Para empezar un color en cualquier punto (como el borde del posavasos): mete el gancho en el punto, engancha la lana nueva, sácala y haz 1 cad. Ya estás tejiendo con ella.' },
    ],
    tips: {
      kitty: 'Si cambias cada 2 filas, no hace falta cortar: lleva la lana que no usas subiendo por el lateral.',
      shrek: 'Verde y marrón. Siempre verde y marrón. Bueno, el rosa también vale, pero no se lo digas a nadie.',
    },
    errors: ['Cambiar el color al empezar el punto nuevo: queda un puntito del color viejo asomando.'],
    practice: {
      title: 'Marcapáginas a rayas Kitty',
      who: 'kitty',
      steps: ['Colores: rosa, blanco y rojo.', 'Rosa: 9 cad, 8 pb.', 'Haz 2 filas por color, en orden: rosa, blanco, rojo, blanco, rosa…', 'Sigue hasta 18 cm. Remata, esconde todas las hebras y añade una borla roja.', 'Y ahora, si quieres, vuelve al posavasos de Shrek y ponle su chaleco marrón.'],
    },
    video: 'cambiar de color ganchillo rayas',
  },

  aumdism: {
    title: 'Aumentos y disminuciones',
    host: 'shrek',
    abbr: 'aum / dism',
    time: '30 min',
    goal: 'Hacer crecer o menguar la labor a voluntad.',
    intro: 'Con estas dos herramientas puedes hacer cualquier forma: triángulos, círculos, bolas, orejas…',
    steps: [
      { h: 'Aumento (aum)', t: 'Haz <b>2 puntos en el mismo punto</b>. La fila gana un punto. Así de fácil.', fig: ['symbols', ['aum']] },
      { h: 'Disminución (dism) en pb', t: 'Mete el gancho en un punto, lazada y saca (2 bucles). <b>Sin terminar</b>, mete el gancho en el siguiente punto, lazada y saca (3 bucles).', fig: ['hook', 3] },
      { h: 'Cierra la disminución', t: 'Lazada y saca por los 3 bucles. Has convertido 2 puntos en 1.', fig: ['hook', 3, { yo: true, pull: 3 }] },
      { h: 'Disminución invisible', t: 'Para amigurumis: mete el gancho solo por la <b>hebra delantera</b> de 2 puntos seguidos, lazada y saca por esas 2 hebras (2 bucles en el gancho), lazada y saca por los 2. Casi no se nota.', fig: ['symbols', ['aum', 'dism']] },
    ],
    tips: {
      kitty: 'Pon un marcador en cada aumento la primera vez: así ves cómo crece la forma.',
      shrek: 'Aumentar: dos puntos en uno. Disminuir: dos en uno, pero al revés. Como cuando Asno habla: dos cosas a la vez.',
    },
    errors: ['En la disminución, terminar el primer punto antes de entrar en el segundo.'],
    practice: {
      title: 'Banderín de Muy Muy Lejano',
      who: 'shrek',
      steps: ['21 cad. Fila 1: 20 pb.', 'Fila 2 (disminuye): 1 cad, gira, 1 dism, pb hasta los 2 últimos, 1 dism (18).', 'Fila 3: 1 cad, gira, 1 pb en cada punto (18).', 'Repite filas 2 y 3: 16, 16, 14, 14… hasta tener 2 puntos. Última fila: 1 cad, 1 dism. Remata.', 'Haz 3 o 4 banderines de colores y únelos tejiendo una cadena larga que pase por las esquinas de arriba con un punto raso en cada una.'],
    },
    video: 'aumento y disminucion invisible punto bajo',
  },

  redondo: {
    title: 'Anillo mágico y tejer en redondo',
    host: 'kitty',
    abbr: 'am',
    time: '40 min',
    goal: 'Empezar un círculo cerrado y hacerlo crecer plano.',
    intro: 'El anillo mágico es un lazo ajustable: tejes dentro y luego lo cierras tirando de la cola, sin agujero. Es la base de los amigurumis.',
    steps: [
      { h: 'Haz el lazo', t: 'Cruza la lana formando un círculo, con la cola detrás (como el principio del nudo corredizo, pero <b>sin cerrarlo</b>). Sujeta el cruce con pulgar y corazón.', fig: ['magicRing'] },
      { h: 'Pesca y sube', t: 'Mete el gancho en el círculo, engancha la hebra del ovillo, sácala y haz 1 cad (no cuenta como punto).' },
      { h: '6 pb dentro', t: 'Haz 6 pb dentro del anillo, tejiendo por encima de las dos hebras del círculo.' },
      { h: 'Cierra', t: 'Tira de la cola: el círculo se cierra del todo. Une con 1 pr en el primer pb.' },
      { h: 'Cómo crece un círculo plano', t: 'Cada vuelta suma 6 puntos repartidos: V1: 6 · V2: 2 pb en cada punto (12) · V3: (1 pb, aum) ×6 (18) · V4: (2 pb, aum) ×6 (24). Y así: un pb más entre aumentos en cada vuelta.', fig: ['roundChart', [6, 12, 18, 24]] },
      { h: 'Unido o en espiral', t: '<b>Unido</b>: al final de cada vuelta, 1 pr en el primer punto y 1 cad para empezar la siguiente (ideal para cambiar de color). <b>En espiral</b>: no unes, sigues tejiendo, y un marcador indica dónde empieza cada vuelta (ideal para amigurumis).' },
    ],
    tips: {
      kitty: 'Pon el marcador en el primer punto de cada vuelta y súbelo cada vez. ¡Es tu mejor amigo!',
      shrek: 'Si el círculo se te hace un cuenco, faltan aumentos. Si se ondula como una lechuga, sobran. Sí, ahora ya sabes hacer lechugas.',
    },
    errors: ['Tirar de la cola sin haber hecho los pb: el anillo se deshace. Primero los puntos, luego cerrar.', 'Perder la cuenta de la vuelta: usa el contador de la web.'],
    practice: {
      title: 'Posavasos cebolla (tiene capas)',
      who: 'shrek',
      steps: ['Anillo mágico con 6 pb, unido con pr.', 'Cambia de color en cada vuelta (cebolla: crema, blanco, amarillo pálido; o versión Kitty: rosa, blanco, rojo).', 'V2: 12 · V3: 18 · V4: 24 · V5: (3 pb, aum) ×6 = 30 · V6: (4 pb, aum) ×6 = 36 · V7: (5 pb, aum) ×6 = 42.', 'Remata y esconde todas las colas. Las cebollas tienen capas. Los posavasos ahora también.'],
    },
    video: 'anillo magico ganchillo principiantes',
  },

  lazo: {
    title: 'Proyecto: el lazo de Kitty',
    host: 'kitty',
    time: '1 h',
    goal: 'Tu primer accesorio de verdad, solo con punto bajo.',
    intro: 'El lazo más famoso del mundo, en ganchillo. Es un rectángulo con la cintura apretada. Fácil y monísimo.',
    steps: [
      { h: 'El rectángulo', t: 'En rojo (o rosa): 21 cad. Fila 1: 20 pb. Filas 2–12: 1 cad, gira, 20 pb. Al rematar, deja una cola de <b>50 cm</b>, que la vas a usar.', fig: ['bow'] },
      { h: 'Frunce', t: 'Pellizca el rectángulo por el centro, como un acordeón, para que tome forma de lazo.' },
      { h: 'Ata la cintura', t: 'Con la cola larga, da 8–10 vueltas apretadas alrededor del centro. Termina pasando la cola por debajo de las vueltas con el gancho y haz un nudo por detrás.' },
      { h: 'Para ponértelo', t: 'Teje una cadeneta de unos 40 cm, pásala con el gancho por detrás de la cintura del lazo y átatela al pelo como una cinta. O pásala por un coletero.' },
    ],
    tips: {
      kitty: '¡Hazme uno a juego contigo! Rosa para ti, rojo para mí.',
      shrek: 'Fiona tiene uno. Bueno, no tiene. Pero debería.',
    },
    errors: ['Hacer pocas filas: queda una corbata en lugar de un lazo. El rectángulo tiene que medir más o menos el doble de ancho que de alto.'],
    practice: {
      title: 'Lazo y versión mini',
      who: 'kitty',
      steps: ['Haz el lazo grande siguiendo los pasos.', 'Versión mini para un llavero: 11 cad, 10 pb, 6 filas.', 'Bonus: haz uno verde para Shrek. Le quedará ridículo. Hazlo igual.'],
    },
    video: 'lazo ganchillo facil punto bajo',
  },

  granny: {
    title: 'Proyecto: granny square',
    host: 'shrek',
    time: '1 h',
    goal: 'El clásico cuadrado de la abuela, en punto alto y en redondo.',
    intro: 'Con granny squares se hacen mantas, bolsos, cojines… Se tejen en redondo con grupos de 3 pa y esquinas de cadenetas.',
    steps: [
      { h: 'Vuelta 1', t: 'Anillo mágico. 3 cad (cuentan como 1 pa), 2 pa en el anillo, 2 cad. *3 pa en el anillo, 2 cad* 3 veces más. Cierra el anillo tirando de la cola. Une con 1 pr en la 3.ª de las cad del principio. Tienes 4 grupos y 4 esquinas.', fig: ['granny'] },
      { h: 'Vuelta 2', t: 'Cambia de color uniendo la lana en un hueco de esquina. En esa esquina: 3 cad, 2 pa, 2 cad, 3 pa. Luego 1 cad y en la siguiente esquina: 3 pa, 2 cad, 3 pa. Repite en las 4 esquinas con 1 cad entre ellas. Une con pr.' },
      { h: 'Vuelta 3', t: 'Esquinas igual (3 pa, 2 cad, 3 pa). En los huecos laterales, de 1 cad: 3 pa. Entre cada grupo, 1 cad.' },
      { h: 'Y así siempre', t: 'Cada vuelta, un grupo de 3 pa más por lado. Esquinas: 3 pa, 2 cad, 3 pa. Laterales: 3 pa en cada hueco.', fig: ['symbols', ['am', 'cad', 'pa', 'pr']] },
    ],
    tips: {
      kitty: 'Rosa en el centro, blanco y rojo alrededor… ¡o un granny con los colores de cada personaje!',
      shrek: 'Granny significa “abuela”. Mi abuela tejía. Con barro, pero tejía.',
    },
    errors: ['Hacer los pa dentro de los puntos de abajo: en el granny se tejen en los <b>huecos</b>, metiendo el gancho por debajo de las cadenetas.'],
    practice: {
      title: 'Granny del pantano',
      who: 'shrek',
      steps: ['Haz un granny de 4 vueltas en verdes y marrones.', 'Haz otro en rosa, blanco y rojo.', 'Si te gusta: 9 iguales unidos con punto raso por el revés son un cojín. 4 son un bolsito.'],
    },
    video: 'granny square paso a paso principiantes',
  },

  amigurumi: {
    title: 'Proyecto: bolita ogro (amigurumi)',
    host: 'shrek',
    time: '1 h 30 min',
    goal: 'Tejer en espiral y rellenar tu primer muñeco.',
    intro: 'Un amigurumi es un muñeco tejido. Esta bolita verde con orejas de trompeta es la base de todos: si haces una bola, puedes hacer cualquier cosa.',
    steps: [
      { h: 'Gancho pequeño', t: 'Usa el <b>gancho más fino</b> de los dos con lana verde: el tejido debe quedar apretado para que no asome el relleno. Teje <b>en espiral</b> (sin unir) con marcador en el primer punto de cada vuelta.' },
      { h: 'Crecer', t: 'V1: anillo mágico con 6 pb · V2: 6 aum (12) · V3: (1 pb, aum) ×6 (18) · V4: (2 pb, aum) ×6 (24).', fig: ['roundChart', [6, 12, 18, 24]] },
      { h: 'Recto', t: 'V5 a V9: 24 pb en cada vuelta. Ya ves cómo se curva como un cuenco.' },
      { h: 'Menguar y rellenar', t: 'V10: (2 pb, dism) ×6 (18) · V11: (1 pb, dism) ×6 (12). <b>Rellena ahora</b> con restos de lana cortados a trocitos, bien apretados. V12: 6 dism (6). Remata dejando cola y, con el gancho, pásala por la hebra delantera de los 6 puntos y tira: se cierra. Esconde la cola atravesando la bola.' },
      { h: 'Orejas (×2)', t: 'Anillo mágico con 4 pb · V2: (1 pb, aum) ×2 (6) · V3: 6 pb. Pr y remata dejando 20 cm de cola. Para unirla, mete el gancho por la bola, engancha la cola y sácala por otro punto; repite 3 o 4 veces y anuda. Sin aguja.', fig: ['ballFace'] },
      { h: 'Carita', t: 'Ojos: pasa con el gancho un trocito de lana negra por un punto y haz 2 o 3 nudos encima: queda un ojito. Boca: pasa una hebra oscura de un punto a otro, 4 puntos más allá.' },
    ],
    tips: {
      kitty: '¿Y si la haces blanca? Orejitas de gata (anillo mágico con 3 pb · V2: 3 aum · V3: 6 pb) y un lazo mini rojo de la lección anterior… ¡y tienes otra amiga!',
      shrek: '¡FUERA DE MI PANTANO! Ah, no, que eres tú. Pasa. Y rellena bien, que una bola blanda es una bola triste.',
    },
    errors: ['Tejer flojo: se ve el relleno. Gancho más fino o aprieta más.', 'Cerrar antes de rellenar. Rellena en la V11, cuando aún cabe el dedo.', 'Olvidar subir el marcador cada vuelta.'],
    practice: {
      title: 'Tu primera bolita ogro',
      who: 'shrek',
      steps: ['Teje la bola siguiendo el patrón con el contador de vueltas de la web.', 'Teje y pon las dos orejas.', 'Ponle ojos y boca.', 'Hazle una foto y mándasela a quien te ha hecho esta web. 💚'],
    },
    video: 'amigurumi bola esfera punto bajo principiantes',
  },
};

export const GLOSSARY = [
  ['cad', 'cadeneta', 'chain (ch)', 'chain (ch)'],
  ['pr', 'punto raso / enano', 'slip stitch (sl st)', 'slip stitch (ss)'],
  ['pb', 'punto bajo', 'single crochet (sc)', 'double crochet (dc)'],
  ['mpa', 'medio punto alto', 'half double crochet (hdc)', 'half treble (htr)'],
  ['pa', 'punto alto', 'double crochet (dc)', 'treble (tr)'],
  ['aum', 'aumento', 'increase (inc)', 'increase (inc)'],
  ['dism', 'disminución', 'decrease (sc2tog / dec)', 'decrease (dc2tog)'],
  ['am', 'anillo mágico', 'magic ring (MR)', 'magic loop'],
  ['—', 'lazada', 'yarn over (yo)', 'yarn round hook (yrh)'],
  ['F', 'fila', 'row', 'row'],
  ['V', 'vuelta', 'round (rnd)', 'round (rnd)'],
  ['rem', 'rematar', 'fasten off (FO)', 'fasten off'],
  ['hd / ht', 'hebra delantera / trasera', 'front loop / back loop (FLO / BLO)', 'front loop / back loop'],
  ['esp', 'espacio, hueco', 'space (sp)', 'space (sp)'],
  ['* *', 'repetir lo que hay entre asteriscos', 'repeat', 'repeat'],
  ['( ) ×6', 'repetir el paréntesis 6 veces', '( ) ×6', '( ) ×6'],
];

export const WORDS = [
  ['Gancho / ganchillo', 'La herramienta. También se llama así a la técnica (crochet / croché).'],
  ['Ovillo', 'La bola o madeja de lana.'],
  ['Bucle', 'Cada vuelta de lana que queda puesta en el gancho.'],
  ['Muestra', 'Un cuadradito de prueba para ver cómo te queda el punto.'],
  ['Tensión', 'Lo apretado o flojo que tejes. Lo ideal es que sea siempre igual.'],
  ['Marcador', 'Algo (hilo de otro color, horquilla) para marcar un punto concreto.'],
  ['Ranear', 'Deshacer tirando de la lana. Totalmente normal.'],
  ['Amigurumi', 'Muñeco tejido, normalmente en punto bajo y en espiral.'],
];
