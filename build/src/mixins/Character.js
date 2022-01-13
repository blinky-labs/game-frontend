// Social media character maker - this might eventually be hosted on a node server
class Character {
    constructor() {
        this.name = generateName();
        this.handle = generateHandle();
        this.age = generateAge();
        this.followers = generateFollowers(); //arbetary
        this.interest = generateInterest();

        this.posts = [];
        this.messages = [];
    }

    generateHandle() {
        // sometimes uses part of name, sometimes related to career, sometimes personality, sometimes random
    }
    
    generateAge() {
        let date = new Date();
        return date.getFullYear() - this.year; //gen birthday
    }

    managePosts() {
        // Posts older than 7 game days get removed
        
    }

    message() {
        
    }

    tick() {
        
    }

    destroy() {
        
    }
}
