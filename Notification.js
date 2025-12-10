class EmailNotif{
    constructor(email){
        this.email = email;
    }

    send(message){ 
        console.log("Email envoyer à =>", this.email , "avec le message =>", message);
    }
}

class LogNotif{
    constructor(logName){
        this.logName = logName;
    }
    send(message){
        console.log("Log dans =>", this.logName , "avec le message =>", message);
    }
}

class DiscordNotif{
    constructor(BotDiscord){
        this.BotDiscord = BotDiscord;
    }
    send(message){
        console.log("Message Discord envoyer avec =>", this.BotDiscord , "avec le message =>", message);
    }
}