import { Question } from '../../models/question.model';

export const QUESTIONS: Question[] = [
  {
    id: 4,
    question:
      "In UP, la disciplina dei requisiti ha l'obbiettivo di produrre una lista dei requisiti, capire il contesto del sistema, catturare i requisiti funzionali e i requisiti non-funzionali",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 5,
    question:
      'Il modello di dominio include la definizione di oggetti, associazioni e attributi di classi software',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 7,
    question:
      'Il modello di dominio è un dizionario visuale delle classi concettuali',
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 9,
    question:
      'Il modello di dominio è una rappresentazione testuale delle classi concettuali, oggetti reali del dominio',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 35,
    question:
      'Il modello di dominio non è parte della disciplina dei requisiti',
    answer: true,
    answer_reason: 'fa parte della disciplina di modellazione del buisness',
    options: ['true', 'false'],
  },
  {
    id: 36,
    question:
      'Nelle associazioni nel modello di dominio la direzione di lettura va sempre specificata',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 37,
    question:
      "L'associazione nel modello di dominio è per sua natura unidirezionale",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 38,
    question:
      "L'associazione nel modello di dominio rappresenta una relazione significativa tra classi",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 39,
    question:
      "L'associazione nel modello di dominio rappresenta un valore logico degli oggetti di una classe",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 40,
    question:
      "L'associazione nel modello di dominio rappresenta un’insieme di n-tuple di oggetti delle classi",
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 21,
    question:
      'Il modello di dominio è una rappresentazione testuale delle classi concettuali, oggetti reali del dominio',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 22,
    question:
      'Il modello di dominio è un dizionario visuale delle classi concettuali',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 64,
    question:
      'il MODELLO DI DOMINIO: Insieme di diagrammi di classi UML che includono associazioni tra classi software',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 65,
    question:
      'il MODELLO DI DOMINIO: Rappresentazione grafica degli oggetti software',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 66,
    question:
      'il MODELLO DI DOMINIO: Rappresentazione visuale delle classi concettuali',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 67,
    question:
      'il MODELLO DI DOMINIO: Insieme di diagrammi di classi UML che includono associazioni tra classi concettuali',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 68,
    question:
      'il MODELLO DI DOMINIO: Rappresentazione visuale delle classi JAVA',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 69,
    question:
      'il MODELLO DI DOMINIO: Insieme di diagrammi di classi UML che includono le responsabilità di fare',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 0,
    question:
      "Un caso d'uso rappresenta una maniera di utilizzare il sistema da parte di un utente per raggiungere un suo obbiettivo",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 97,
    question:
      'La narrativa di un caso d’uso viene espressa a livello delle intenzioni dell’utente e della responsabilità del sistema',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 98,
    question:
      'La narrativa di un caso d’uso viene espressa a livello delle azioni concrete dell’utente e delle responsabilità del sistema',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 99,
    question:
      'Un caso d’uso è sempre completato (implementato) in una solo iterazione',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 2,
    question:
      "Un caso d'uso rappresenta l'insieme di funzionalità di un sistema",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 1,
    question:
      "I requisiti funzionali non catturati dai casi d'uso vengono descritti nelle specifiche supplementari",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 6,
    question:
      "L'analisi linguistica dei casi d'uso nel formato dettagliato è una fonte di ispirazione per la costruzione del modello di dominio",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 8,
    question:
      "Il modello di dominio riporta i concetti significativi relativi ai casi d'uso",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 20,
    question:
      "L'analisi linguistica dei casi d'uso nel formato dettagliato è una fonte di ispirazione per la costruzione del modello di dominio",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 3,
    question:
      "I requisiti non funzionali sono descritti completamente dai casi d'uso",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 112,
    question:
      'I contratti sono considerati parte del modello dei casi d’uso poiché forniscono maggiori dettagli dell’analisi, sull’effetto delle operazioni di sistema implicate dai casi d’uso',
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 114,
    question:
      'I CASI D’USO Sono una collezione di soli scenari di successo che descrivono un attore che usa il sistema per raggiungere un obbiettivo specifico',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 115,
    question:
      'I casi d’uso sono descrizioni testuali di scenari di uso interessanti del sistema software che si deve realizzare',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 116,
    question: 'I casi d’uso servono a catturare i requisiti funzionali',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 31,
    question:
      'In UP i casi d’uso vengono utilizzati per catturare i requisiti funzionali nella disciplina dei requisiti',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 32,
    question: 'I casi d’uso sono caratteristiche del sistema',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 33,
    question: 'I casi d’uso sono utilizzati per pianificare le iterazioni',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 34,
    question: 'In UP i casi d’uso sono descritti mediante il linguaggio UML',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 43,
    question:
      'DURANTE LA FASE DI ELABORAZIONE Si scrivono circa il 10% dei casi d’uso tra i più critici in formato dettagliato utilizzando template appositi',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 56,
    question:
      'In percentuale sul totale di casi d’uso complessivi di un progetto, quanti sono quelli che dovrebbero essere realizzati entro la conclusione della fase di ideazione??',
    answer: '5%',
    options: ['5%', '50%', '70%', '100%'],
  },

  {
    id: 59,
    question: 'I casi d’uso mettono in risalto gli obbiettivi degli utenti',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 60,
    question:
      'I casi d’uso sono utilizzati per la scoperta e la definizione dei requisiti non funzionali',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 61,
    question:
      'I casi d’uso sono utilizzati per la scoperta e la definizione dei requisiti funzionali',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 62,
    question: 'I casi d’uso mettono in risalto gli obbiettivi del sistema',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 63,
    question:
      'I casi d’uso sono utilizzati solo nelle prime iterazioni di sviluppo',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 109,
    question:
      'Il principale input per la redazione dei contratti sono le operazioni di sistema e il modello di dominio',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 75,
    question:
      'Le post-condizioni descrivono i cambiamenti di stato degli oggetti nel modello di dominio dopo il completamento dell’operazione',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 77,
    question: 'I contratti servono come input per il modello di dominio',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 105,
    question:
      'La responsabilità sono assegnate ai concetti definiti nel modello di dominio',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 78,
    question:
      'I contratti delle operazioni di sistema usano pre e post- condizioni per descrivere nel dettaglio i cambiamenti agli oggetti (concettuali) in un modello di dominio',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 113,
    question:
      'Le pre-condizioni descrivono i cambiamenti di stato degli oggetti nel modello di dominio dopo il completamento dell’operazione',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 11,
    question:
      'La composizione di oggetti è definita staticamente attraverso la specifica delle classi e delle associazioni',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 12,
    question:
      'Il meccanismo di specializzazione per il riuso del codice è detto white-box',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 13,
    question:
      "La modifica dell'interfaccia di una classe ha in generale un basso impatto nelle sottoclassi",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 16,
    question:
      'I pattern GRASP sono espressi in termini di responsabilità, ruoli e collaborazioni',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 17,
    question:
      "La decisione sull'assegnazione delle responsabilità precede sempre la codifica",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 18,
    question:
      "L'utilizzo dei pattern GRASP è svolto all'interno della disciplina dei requisiti di UP",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 19,
    question: 'Le responsabilità sono assegnate alle classi durante la OOD',
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 24,
    question:
      'Il meccanismo di delega è preferibile al meccanismo di specializzazione per il riuso del codice',
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 26,
    question: 'L’ereditarietà rispetta l’incapsulamento',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 28,
    question:
      'La composizione di oggetti è un meccanismo di riuso del codice detto black-box',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 29,
    question:
      'Un metodo di una classe software rappresenta una responsabilità “a fare” per le istanze di tale classe',
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 41,
    question:
      'DURANTE LA FASE DI ELABORAZIONE Non vengono effettuati test al codice di sviluppo',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 42,
    question: 'DURANTE LA FASE DI ELABORAZIONE Non si sviluppa codice',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 44,
    question:
      'DURANTE LA FASE DI ELABORAZIONE Viene scoperta e stabilizzata la maggior parte dei requisiti',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 45,
    question:
      'DURANTE LA FASE DI ELABORAZIONE Si realizza uno studio economico per stabilire l’ordine di grandezza del progetto e dei costi',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 46,
    question:
      'DURANTE LA FASE DI ELABORAZIONE Viene programmato il nucleo, rischioso, dell’architettura',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 177,
    question:
      "DURANTE LA FASE DI ELABORAZIONE Si scrivono circa il 10% dei casi d'uso tra i piu critici in formato dettagliato utilizzando template appositi (caso d' uso dettagliato e strutturato)",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 47,
    question:
      'In UML per responsabilità si intende la specifica di un metodo associato ad una classe Java',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 48,
    question:
      'In UML per responsabilità si intende la specifica di una variabile di istanza di una classe Java',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 49,
    question:
      'In UML per responsabilità si intende un contratto o un obbligo di un classificatore',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 50,
    question:
      'In UML per responsabilità si intende la specifica di una variabile di istanza o di un metodo associato ad una classe Java',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 51,
    question:
      'Gli SSD Sono espressi attraverso i diagrammi di comunicazione di UML',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 52,
    question:
      'Gli SSD Mostrano l’ordine degli eventi generati dagli attori esterni al sistema',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 53,
    question:
      'I contratti costituiscono un input per gli SSD delle operazioni e per la progettazione degli oggetti',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 54,
    question: 'Un evento di sistema è un evento interno al sistema',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 55,
    question:
      'Gli SSD mostrano gli eventi generati dagli attori esterni al sistema',
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 57,
    question:
      'In percentuale sul totale dei requisiti funzionali di un progetto, quanti sono quelli che dovrebbero essere identificati entro la conclusione della fase di ideazione??',
    answer: '70%',
    options: ['5%', '50%', '70%', '100%'],
  },
  {
    id: 58,
    question:
      'In percentuale sul totale dei requisiti funzionali di un progetto, quanti sono quelli che dovrebbero essere identificati entro la conclusione della fase di elaborazione?? Quasi',
    answer: '100%',
    options: ['5%', '50%', '70%', '100%'],
  },

  {
    id: 70,
    question: 'Il riuso white-box è preferibile al riuso black-box',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 71,
    question:
      'Il meccanismo di ereditarietà non è preferibile al meccanismo di delega per ottenere il riuso del software',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 72,
    question: 'L’ereditarietà si avvale del meccanismo di delega',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 73,
    question: 'Il meccanismo di composizione non rispetta l’incapsulamento',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 74,
    question:
      'Le operazioni di sistema possono essere identificate mentre si abbozzano gli DSD',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 76,
    question:
      'I contratti descrivono in modo dettagliato i cambiamenti richiesti dall’esecuzione di una operazione di sistema, descrivono come devono essere ottenuti questi risultati',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 27,
    question:
      'I pattern GoF incentivano l’uso dell’ereditarietà come meccanismo di riuso del codice, in particolare attraverso il pattern composite',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 14,
    question:
      "I pattern GoF prediligono l'utilizzo del meccanismo di ereditarietà per ottenere la specializzazione",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 10,
    question:
      'I pattern GoF incentivano i meccanismi di riuso del software attraverso la definizione di gerarchie di classi',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 25,
    question:
      "I pattern GoF prediligono l'utilizzo del meccanismo di ereditarietà per ottenere il polimorfismo",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 79,
    question:
      'I pattern GoF composite fornisce caratteristiche addizionali ad elementi atomici (foglie), mantenendo una interfaccia comune',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 80,
    question:
      'Il pattern GoF composite permette di costruire tassonomie di classi',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 81,
    question:
      'Il pattern GoF composite utilizza il meccanismo di specializzazione per rendere l’interfaccia delle entità atomiche esattamente come l’interfaccia delle entità composte',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 82,
    question:
      'Il pattern GoF composite permette di evitare l’esplosione delle sottoclassi per supportare un ampio numero di estensioni e combinazioni di esse',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 83,
    question:
      'Il pattern GoF composite permette di costruire strutture ricorsive in modo che ad un cliente l’intera struttura sia vista come una singola entità',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 84,
    question: 'L’extreme programming promuove lo sviluppo seguito dai test',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 85,
    question:
      'I test unitari hanno lo scopo di verificare la comunicazione tra specifiche parti del sistema',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 86,
    question:
      'Preparazione, esecuzione, verifica e rilascio sono le parti del test unitario',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 87,
    question:
      'Il refactoring prevede di applicare piccole trasformazioni che preservano il comportamento',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 88,
    question:
      'I test unitari sono utilizzati per dimostrare che il refactoring non abbia causato una regressione',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 89,
    question:
      'La progettazione object-oriented in UP ha il fine di identificare le responsabilità e assegnarle ad un opportuno oggetto o classe',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 90,
    question:
      'La coesione è la misura di quanto fortemente un elemento è connesso ad altri elementi, ha conoscenza di altri elementi e dipende da altri elementi',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 91,
    question:
      'Il pattern GRASP Information Expert e High Cohesion sono pattern valutativi',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 92,
    question:
      'La creazione di un oggetto è di responsabilità di un oggetto che aggrega, contiene un’istanza dell’oggetto da creare',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 93,
    question:
      'Una classe con accoppiamento alto fa molte cose non correlate tra loro e svolte troppo lavoro',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 94,
    question:
      'Il refactoring è una pratica promossa dal metodo iterativo e agile xp',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 95,
    question:
      'Il refactoring prevede lo sviluppo guidato dai test, ovvero uno sviluppo preceduto dai test',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 96,
    question:
      'Il refactorin è un metodo strutturato e disciplinato per scrivere o ristrutturare del codice esistente',
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 100,
    question:
      'DURANTE LA FASE DI ELABORAZIONE: I requisiti e le iterazioni sono organizzati in base alla richiesta dell’utente finale',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 101,
    question:
      'DURANTE LA FASE DI ELABORAZIONE: I requisiti e le iterazioni sono organizzati in base al rischio, copertura (devono coprire tutto il sistema) e criticità',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 102,
    question:
      'DURANTE LA FASE DI ELABORAZIONE: Si effettua attività di programmazione di qualità-produzione e test',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 103,
    question:
      'DURANTE LA FASE DI ELABORAZIONE: Vengono realizzati prototipi “usa e getta” per ottenere i rischi maggiori',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 104,
    question:
      'La responsabilità è un’astrazione di ciò che ha o rappresenta un oggetto o un componente software',
    answer: true,
    options: ['true', 'false'],
  },

  {
    id: 106,
    question:
      'Nel reponsibility-Drive Developement gli oggetti software sono considerati come dotati di responsabilità',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 107,
    question:
      'La disciplina dei requisiti è il processo per scoprire cosa deve essere costruito',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 108,
    question:
      'La disciplina dei requisiti deve orientare lo sviluppo verso il sistema corretto',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 110,
    question:
      'I contratti usano precondizioni e post-condizioni per descrivere nel dettaglio i cambiamenti agli oggetti in un modello di progetto (software)',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 117,
    question: 'Si consideri la seguente associazione R tra a e B:',
    subQuestion:
      'se A = {a1,a2,a3} e B = {b1,b2}, R può essere {(a1,b1),(a2,b2)}',
    imgName: 'question_117_118_119_120.png',

    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 118,
    question: 'Si consideri la seguente associazione R tra a e B: ',
    subQuestion:
      'se A = {a1,a2} e B = {b1,b2,b3}, R può essere {(a1,b1),(a2,b2),(a1,b2),(a2,b3)}',
    imgName: 'question_117_118_119_120.png',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 119,
    question: 'Si consideri la seguente associazione R tra a e B: ',
    subQuestion:
      'se A = {a1,a2} e B = {b1,b2,b3}, R può essere {(a1,b1),(a1,b2),(a2,b3)}',
    imgName: 'question_117_118_119_120.png',

    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 120,
    question: 'Si consideri la seguente associazione R tra a e B: ',
    subQuestion: 'se A = {a1,a2} e B = {b1,b2}, R può essere {(a1,b1),(a1,b2)}',
    imgName: 'question_117_118_119_120.png',

    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 121,
    question:
      'Si consideri l’associazione “Contained-in” nel seguente Modello di Dominio: ',
    subQuestion:
      'Una istanza di Sale deve essere distrutta prima di un’istanza di SalesLineItem',
    imgName: 'question_121_to_126.png',
    answer_reason:
      'l’istanza Sale è l’intero ( il contenitore) e la parte è SalesLineItem. Dato che siamo in una composizione, la parte (SalesLineItem) non può esistere senza l’intero e quindi non posso distruggere l’istanza intero (Sale) prima di un’istanza parte. ',
    answer: false,
    options: ['true', 'false'],
  },

  {
    id: 122,
    question:
      'Si consideri l’associazione “Contained-in” nel seguente Modello di Dominio: ',
    subQuestion:
      'Una istanza di SalesLineItem deve essere distrutta prima di un’istanza di Sale.',
    imgName: 'question_121_to_126.png',
    answer: true,
    answer_reason: 'è il contrario di quanto detto prima (domanda 122)',
    options: ['true', 'false'],
  },

  {
    id: 123,
    question:
      'Si consideri l’associazione “Contained-in” nel seguente Modello di Dominio: ',
    subQuestion:
      'Le istanze di SalesLineItem appartengono ad una sola istanza di Sale alla volta.',
    imgName: 'question_121_to_126.png',
    answer: true,
    answer_reason: 'data dalla cardinalità dell’associazione “contained-in” ',
    options: ['true', 'false'],
  },

  {
    id: 124,
    question:
      'Si consideri l’associazione “Contained-in” nel seguente Modello di Dominio: ',
    subQuestion:
      'Le istanze di Sale appartengono ad una sola istanza di SalesLineItem alla volta.',
    imgName: 'question_121_to_126.png',
    answer_reason:
      'perché la cardinalità dell’associazione “contained-in” è 1..* ',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 125,
    question:
      'Si consideri l’associazione “Contained-in” nel seguente Modello di Dominio: ',
    subQuestion:
      'Una istanza di SalesLineItem pu`o essere creata dopo un’istanza di Sale.',
    imgName: 'question_121_to_126.png',
    answer: true,
    answer_reason:
      'per quanto detto in precedenza sulla composizione (domanda 122)',

    options: ['true', 'false'],
  },
  {
    id: 126,
    question:
      'Si consideri l’associazione “Contained-in” nel seguente Modello di Dominio: ',
    subQuestion:
      'Una istanza di Sale pu`o essere creata dopo un’istanza di SalesLineItem.',
    imgName: 'question_121_to_126.png',
    answer_reason:
      'per quanto detto in precedenza sulla composizione (domanda 122)',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 127,
    question:
      'Si consideri il seguente Modello di Dominio: Si supponga Product Catalog = {c1, c2} e Product Description = {d1, d2, d3, d4}. ',
    subQuestion:
      'Contains pu`o essere {(c1, d1), (c1, d2), (c2, d2), (c2, d3), (c2, d4)}.',
    imgName: 'question_127_to_130.png',
    answer_reason:
      'd2 è associato a 2 elementi di c (c1 e c2) e questo non va bene perché dev’essere associato solo ad un elemento di c per la cardinalità dell’associazione (1 --- 1..*)',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 128,
    question:
      'Si consideri il seguente Modello di Dominio: Si supponga Product Catalog = {c1, c2} e Product Description = {d1, d2, d3, d4}. ',
    subQuestion:
      'Contains pu`o essere {(c1, d1), (c1, d2), (c1, d3), (c2, d4)}.',
    imgName: 'question_127_to_130.png',
    answer_reason: 'vengono rispettate le cardinalità',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 129,
    question:
      'Si consideri il seguente Modello di Dominio: Si supponga Product Catalog = {c1, c2} e Product Description = {d1, d2, d3, d4}. ',
    subQuestion: 'Contains pu`o essere {(c1, d1), (c1, d2), (c2, d3)}.',
    imgName: 'question_127_to_130.png',
    answer_reason: 'perché d3 non è associato a nessun elemento di c',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 130,
    question: 'Si consideri il seguente Modello di Dominio: ',
    subQuestion:
      'Contains pu`o essere {(c1, d1), (c1, d2), (c1, d3), (c1, d4)}.',
    imgName: 'question_127_to_130.png',
    answer_reason: 'perché c2 non è associato a nessun elemento di d',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 131,
    question:
      'Si consideri il diagramma seguente e Si supponga A = {a1, a2, a3, a4} e B = {b1, b2}.',
    subQuestion: 'R pu`o essere {(b1, a1), (b1, a2), (b2, a1)}.',
    imgName: 'question_131_to_134.png',
    answer_reason:
      'perché a1 è associato a 2 elementi di b, quando invece la cardinalità è (0..1). ',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 132,
    question:
      'Si consideri il diagramma seguente e Si supponga A = {a1, a2, a3, a4} e B = {b1, b2}.',
    subQuestion: 'R pu`o essere {(b1, a1), (b1, a2), (b1, a3)}.',
    imgName: 'question_131_to_134.png',
    answer_reason:
      'perché b2 non è associato a nessun elemento di a, quando invece la cardinalità è (1..3)',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 133,
    question:
      'Si consideri il diagramma seguente e Si supponga A = {a1, a2, a3, a4} e B = {b1, b2}.',
    subQuestion:
      'R pu`o essere {(b1, a1), (b1, a2), (b1, a3), (b1, a4), (b2, a3)}.',
    imgName: 'question_131_to_134.png',
    answer_reason:
      'perché a3 è associato a 2 elementi di b, quando invece la cardinalità è (0..1)',
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 134,
    question:
      'Si consideri il diagramma seguente e Si supponga A = {a1, a2, a3, a4} e B = {b1, b2}.',
    subQuestion: 'R pu`o essere {(b1, a1), (b1, a2), (b2, a3), (b2, a4)}.',
    imgName: 'question_131_to_134.png',
    answer_reason: 'tutto ok, le cardinalità sono rispettate',
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 135,
    question:
      "[Da qui le ho aggiunte io] Le pre-condizioni sono ipotesi significativi del sistema o degli oggetti del modello di progetto prima dell'esecuzione dell'operazione a cui è associata",
    answer: false,
    answer_reason: 'le ipotesi sono sul modello di dominio non di progetto',
    options: ['true', 'false'],
  },
  {
    id: 136,
    question:
      "La post-condizione descrive i cambiamenti di stato degli oggetti nel Modello di Dominio dopo il completamento dell'operazione",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 137,
    question:
      "Le post-condizioni descrivono i cambiamenti nello stato degli oggetti del modello di progetto. I cambiamenti dello stato del modello di progetto comprendono oggetti creati, i collegamenti formati o rotti e attributi modificati",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 138,
    question:
      "La narrativa di un caso d'uso viene espressa a livello delle azioni concrete dell'utente edelle responsabilita del sistema",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 139,
    question:
      "Un caso d'uso è sempre completato in una sola iterazione",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 140,
    question:
      "La narrativa di un caso d'uso viene espressa a livello delle intenzioni dell'utente edelle responsabilita del sistema",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 141,
    question:
      "Un modello di dominio è la rappresentazione visuale degli oggetti software",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 142,
    question:
      "La disciplina dei requisiti è parte della fasi di ideazione",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 143,
    question:
      "La programmazione di qualità-produzione per un sottoinsieme dei requisiti si inizia dopo che I'analisi di tutti i requisiti sia stata completata",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 144,
    question:
      "Una sottoclasse è fortemente accoppiata alla sua superclasse",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 145,
    question:
      "Ricevere un parametro di tipo A per un metodo di una classe B rappresenta una relazione di dipendenza da B a A mentre estendere una classe A per una classe B non rappresenta una relazione di dipendenza da B a A.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 146,
    question:
      "E' possibile che due classi siano collegate da più di una assodazione",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 147,
    question:
      "[Relativamente agli SSD è vero che ] Sono espressi attraverso i diagrammi di comunicazione di UML",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 148,
    question:
      "[Relativamente agli SSD è vero che ] Mostrano l'ordine degli eventi generati dagli attori esterni al sistema.",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 149,
    question:
      "[Relativamente agli SSD è vero che ] I contratti costituiscono un input per gli SSD delle operazioni e per la progettazione degli oggetti.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 150,
    question:
      "[Relativamente agli SSD è vero che ] Un evento di sistema e un evento interno al sistema.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 151,
    question:
      "[Relativamente agli SSD è vero che ] Mostrano gli eventi generati dagli attori esterni al sistema.",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 152,
    question:
      "[Scegli pattern grasp] Chi crea un oggetto A? Ovvero, chi deve essere responsabile della creazione di una nuova istanza di una classe?",
    answer: 'Creator',
    options: ['Creator', 'High Coesion', 'Low Coupling', 'Expert', 'Controller'],
  },
  {
    id: 153,
    question:
      "[Scegli pattern grasp] Qual e il primo oggetto oltre lo strato UI che riceve e coordina un' operazione di sistema?",
    answer: 'Controller',
    options: ['Creator', 'High Coesion', 'Low Coupling', 'Expert', 'Controller'],
  },
  {
    id: 154,
    question:
      "[Scegli pattern grasp] Come mantenere gli oggetti focalizzati, comprensibili e gestibili e, come effetto collaterale, sostenere Low",
    answer: 'High Coesion',
    options: ['Creator', 'High Coesion', 'Low Coupling', 'Expert', 'Controller'],
  },
  {
    id: 155,
    question:
      "[Scegli pattern grasp] Quale un principio di base, generale, per l'assegnazione di responsabilità agli oggetti?",
    answer: 'Expert',
    options: ['Creator', 'High Coesion', 'Low Coupling', 'Expert', 'Controller'],
  },
  {
    id: 156,
    question:
      "[Scegli pattern grasp] Come ridurre l'impatto dei cambiamenti? Come sostenere una dipendenza bassa, un impatto dei cambiamenti basso e una maggiore opportunita di riuso?",
    answer: 'Low Coupling',
    options: ['Creator', 'High Coesion', 'Low Coupling', 'Expert', 'Controller'],
  },
  {
    id: 157,
    question:
      "La disciplina dei requisiti è completata durante la fase dell'elaborazione",
    answer: true,
    answer_reason: "Non è detto che sia giusta (nessuno sa dirlo)",
    options: ['true', 'false'],
  },
  {
    id: 158,
    question:
      "La disciplina dei requisiti è completata durante la fase dell'ideazione",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 159,
    question:
      "La disciplina dei requisiti è iniziata durante l'ideazione",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 160,
    question:
      "Nei processi a cascata, l'analisi e la progettazione si basano sulla realizzazione di casi d'uso",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 161,
    question:
      "All'inizio del progetto vengono definiti in dettaglio tutti i requisiti relativi dai casi d'uso",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 162,
    question:
      "La fase di ideazione viene prima della fase di elaborazione. ",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 163,
    question:
      "la fase di ideazione vieni dopo la fase di Costruzione.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 164,
    question:
      "La fase di ideazione è suddivisa in iterazioni.",
    answer: true,
    answer_reason: "normalmente ha una sola iterazione ma è comunque divisa in iterazioni",
    options: ['true', 'false'],
  },
  {
    id: 165,
    question:
      "La fase di ideazione e una visione raffinata, implemenrazione ,iterariva del nucleo dell'architettura, risoluzione dei rischi maggiori, identificazione della maggior parte dei requisiti e della portata.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 166,
    question:
      "Il processo sviluppo incrementale e migliore rispetto al processo a cascata sotto ogni punto di vista e contesto di applicazione attuale.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 167,
    question:
      "II processo sviluppo incrementale e basata su uno svolgimento sequenziale delle diverse attività dello sviluppo software.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 168,
    question:
      "Il processo a cascata e migliore rispetto allo sviluppo incrementale sotto ogni punto di vista e contesto di applicazione attuale.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 169,
    question:
      "Lo sviluppo a cascata si basa sull'idea di sviluppare un'implementazione  iniziale, esporla agli utenti e perfezionarla attraverso molte  versioni.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 170,
    question:
      "In generale il Controller MVC delega le richieste di lavoro dall'utente al Controller GRASP del dominio",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 171,
    question:
      "II controller GRASP fa parte della UI e gestisce l'interazione con l'utente; la sua implementazione dipende in larga misura dalla tecnologia UI e dalla piattaforma che viene utilizzata.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 172,
    question:
      "Sia il Controller GRASP che il Controller MVC si occupano di gestire le richieste provenienti dall'utente.",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 173,
    question:
      "Durante l'elaborazione i documenti vengono abbozzati e definiti in maniera 'leggera'.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 174,
    question:
      "La pianificazione delle iterazioni e basata sul rischio, inizialmente vengono scelti i casi d'uso meno rischiosi.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 175,
    question:
      "L'ideazione è la prima iterazione dell'elaborazione.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 177,
    question:
      "La maggior parte dei requisiti è individuata durante la fase di ideazione.",
    answer: false,
    answer_reason:
      "La maggior parte degli UC è individuata durante la idealizzazione ma la maggior parte dei requisiti è individuata e stabilizzata durante l'elaborazione.",
    options: ['true', 'false'],
  },
  {
    id: 178,
    question:
      "Il modello dei casi d'uso viene iniziato durante l'elaborazione.",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 179,
    question:
      "Durante la costruzione l'enfasi è maggiore sull'implementazione e minore sull'analisi dei requisiti.",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 181,
    question:
      "Quante iterazioni ha la fase di idealizzazione",
    answer: 'normalmente una',
    options: ['quante ne servono', 'normalmente una','dipende dalla percentuale dei casi d’uso che si intende implementare', 'non ha iterazioni'],
  },
  {
    id: 182,
    question:
      "Cos’è il modello di dominio?",
    answer: 'è una rappresentazione concettuale del sistema',
    options: ['è un altro nome per indicare il modello di progetto', 'è una rappresentazione concettuale del sistema','è una rappresentazione implementativa del sistema', 'serve a rappresentare i casi d’uso in modo grafico'],
  },
  {
    id: 183,
    question:
      "[Si fa il System Sequence Diagram (SSD)] quando si comincia a scrivere il codice",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 184,
    question:
      "[Si fa il System Sequence Diagram (SSD)] all’inizio dell’analisi dei requisiti",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 185,
    question:
      "[Si fa il System Sequence Diagram (SSD)] dopo i casi d’uso dettagliati",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 186,
    question:
      "[il System Sequence Diagram (SSD)] Non esiste questo diagramma in UP",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 187,
    question:
      "[ Quando si parla di regression testing o test di regressione?] quando si effettua dei test frequenti e non esaustivi relativi alle funzionalità principali, per decidere se il prodotto è sufficientemente stabile per essere testato da un team specializzato",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 188,
    question:
      "[ Quando si parla di regression testing o test di regressione?] quando si testano i componenti o le unità in ordine inverso rispetto a quando sono stati realizzati",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 189,
    question:
      "[ Quando si parla di regression testing o test di regressione?] quando si scrivono i test prima di avere implementato il codice",
    answer: false,
    options: ['true', 'false'],
  },
  {
    id: 190,
    question:
      "[ Quando si parla di regression testing o test di regressione?]  Quando, a seguito della correzione di un bug o dell’integrazione di un nuovo componente, si vanno a ripetere i test già effettuati per verificare che le modifiche apportate non abbiano introdotto dei problemi nuovi o non rilevanti",
    answer: true,
    options: ['true', 'false'],
  },
  {
    id: 191,
    question:
      "Quale de seguenti NON è una delle tante forme di riuso dell'ingegneria del software?",
    answer: 'pattern matching',
    options: ['framework', 'design pattern', 'pattern matching', 'librerie'],
  },
  {
    id: 192,
    question:
      "Quali dei seguenti ruoli non è previsto dal metodo SCRUM di gestione dei progetti Agili?",
    answer: 'Tester',
    options: ['Scrum Master', 'Project manager', 'Developer', 'Tester'],
  },
  {
    id: 193,
    question:
      " Dire quale NON è un pattern GoF.",
    answer: 'Factory',
    options: ['Abstract Factory', 'Proxy', 'Factory', 'Composite'],
  },

];
