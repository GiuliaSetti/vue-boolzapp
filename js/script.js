// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato


// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


// console.log("prova sa sa");

const { createApp } = Vue

createApp({
  data() {
    return {
        user: {
            name: "Sofia",
            avatar: "img/avatar_io.jpg",

        }, 
        contacts: [
            {
            name: "Michele",
            visible: true,
            avatar:"./img/avatar_1.jpg",
            messages: [
                {
                    date: "16/03/2023",
                    message: "Oe, come va?",
                    status: "sent",
                },
                {
                    date: "16/03/2023",
                    message: "Tutto bene?",
                    status: "sent",
                },
                {
                    date: "16/03/2023",
                    message: "Sisi, tutto bene! Come è andata la lezione?",
                    status: "received",
                },
                {
                    date: "16/03/2023",
                    message: "E' andata bene! Sto venendo via ora!",
                    status: "sent",
                }
               
              ],
              //fine messaggi
            },
            //fine contatto
            {
                name: "Fabio",
                visible: true,
                avatar:"./img/avatar_2.jpg",
                messages: [
                    {
                        date: "14/03/2023",
                        message: "Allora ci vediamo sabato?",
                        status: "received",
                    },
                    {
                        date: "14/03/2023",
                        message: "Certo! Decidi tu dove vuoi andre però, sei tu il festeggiato!",
                        status: "sent",
                    },
                    {
                        date: "15/03/2023",
                        message: "Pensavo di andare in Cambusa!",
                        status: "received",
                    },
                    {
                        date: "15/03/2023",
                        message: "Perfetto!",
                        status: "sent",
                    }
                   
                  ],
                  //fine messaggi
            },
            //fine contatto
            {
                name: "Samuele",
                visible: true,
                avatar:"./img/avatar_3.jpg",
                messages: [
                    {
                        date: "12/03/2023",
                        message: "Ti ho mandato tutto il materiale per mail!",
                        status: "sent",
                    },
                    {
                        date: "13/03/2023",
                        message: "(Grazie per tutto, comunque)",
                        status: "sent",
                    },
                    {
                        date: "15/03/2023",
                        message: "Grazie, ho ricevuto tutto!",
                        status: "received",
                    },
                    {
                        date: "15/03/2023",
                        message: "Bene, perfetto! Domani ti mando il resto!",
                        status: "sent",
                    },
                    {
                        date: "16/03/2023",
                        message: "Mandato anche il resto!",
                        status: "sent",
                    }
                   
                  ],
                  //fine messaggi
            },
            //fine contatto
            {
                name: "Claudia",
                visible: true,
                avatar:"./img/avatar_6.jpg",
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
        
                   
                  ],
                  //fine messaggi
            },
            //fine contatto
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
        
                  //fine messaggi
            },
            //fine contatto
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
        
                  //fine messaggi
            },
            //fine contatto
      
      
          ],
          // fine array contatti

          counter: 0,
    }
  },



}).mount('#app')