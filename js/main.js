const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      show: false,
      dt: new Date(),
      newMessage: "",
      currentContact: null,
      contactSearch: "",
      filteredArray: [{}],
      currentMessageIndex: null,
      avatarsArray: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    sendNewMessage() {
      this.currentContact.messages.push({
        date: this.dt.toLocaleString(),
        message: this.newMessage,
        status: "sent",
      });
      this.newMessage = "";

      this.receiveNewMessage();
    },
    receiveNewMessage() {
      setTimeout(() => {
        this.currentContact.messages.push({
          date: this.dt.toLocaleString(),
          message: "ok bro",
          status: "received",
        });
      }, 1000);
    },
    getFilteredList() {
      this.filteredArray = this.avatarsArray.filter((user) => {
        return user.name
          .toLowerCase()
          .includes(this.contactSearch.toLowerCase());
      });
    },
    showInfo(msgIndex) {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
      if (!this.show) {
        this.currentMessageIndex = null;
      } else if (this.show) {
        this.currentMessageIndex = msgIndex;
      }
    },
    messageDelete(currentMessageIndex) {
      this.currentContact.messages.splice(currentMessageIndex, 1);
    },
  },
  beforeMount() {
    this.currentContact = this.avatarsArray[0];
  },
  mounted() {
    this.filteredArray = this.avatarsArray;
  },
}).mount("#app");
