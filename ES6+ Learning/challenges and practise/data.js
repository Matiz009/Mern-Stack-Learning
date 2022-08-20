//exporting function
export const doSum = (a, b) => {
    let c = a + b;
    return c;
};

class player {
    constructor(name, player) {
        this.name = name;
        this.player = player;
    }
    introduce() {
        console.log(`${this.name} plays for ${this.player}`);
    }
}

class Tennisplayer extends player {
    constructor(age, name, player) {
        super(name, player);
        this.age = age;
    }
    playTennis() {
        console.log(
            `${this.name} is ${this.age} years old and knows how to play Tennis`
        );
    }
}

const roger = new TennisPlayer("Roger Federer", "Spain", 38);
const messi = new player("Messi", "Argentina");
roger.introduce();
roger.playTennis();