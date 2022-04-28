const app = new Vue({
    el: '#app',
    data: {
        activeChat: 0,
        newChat: "",
        search: "",
        contacts: [{
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './assets/img/avatar_6.jpg',
                visible: true,
                messages: [{
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
            },
            {
                name: 'Federico',
                avatar: './assets/img/avatar_7.jpg',
                visible: true,
                messages: [{
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
            },
            {
                name: 'Davide',
                avatar: './assets/img/avatar_8.jpg',
                visible: true,
                messages: [{
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
            }
        ]
    },

    methods: {
        selectContact(index) {
            console.log("hai cliccato" + index);
            this.activeChat = index;
        },
        addSand() {
            console.log(this.newChat)
            if (this.newChat === '') {
                console.log("devi inserire il valore");
            } else {
                let now = new Date();
                let datestring = now.toString()
                let hour = datestring.substring(5, 30)
                    //console.log(datestring);
                    //console.log(hour);
                this.contacts[this.activeChat].messages.push({ message: this.newChat, status: 'sent', date: hour })
                this.newChat = ''
                setTimeout(this.answerMessage, 3000)
                setTimeout(this.typingOn, 0)
                setTimeout(this.typingIn, 3000)
            }
        },
        answerMessage() {
            let now = new Date();
            let datestring = now.toString()
            let hour = datestring.substring(5, 30)
            const randomChat = ['va bene', 'se lo dici tu', 'io non ho fatto niente!', 'ok!', 'no! scordatelo'];
            let randanswerchoise = Math.floor(Math.random() * randomChat.length);
            let randanswer = randomChat[randanswerchoise];
            //console.log(rValue)
            let answer = { message: randanswer, status: 'received', date: hour }
            this.contacts[this.activeChat].messages.push(answer)
        },
        typingOn() {
            document.getElementById("typing").classList.remove('notVisibleTyping');
        },
        typingIn() {
            document.getElementById("typing").classList.add('notVisibleTyping');
        },
        deleteMessage(index) {
            this.contacts[this.activeChat].messages.splice(index, 1)
        },
        deleteAllMessage() {
            console.log("elliminiamo tutto");
            let emptyChat = []
            console.log(emptyChat);
            this.contacts[this.activeChat].messages = emptyChat
        },
        filterChat() {
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.search.toLowerCase())) {
                    contact.visible = true
                } else {
                    contact.visible = false
                }
            });
        },
    },
});