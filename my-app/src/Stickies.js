class Stickies {
    //-----------------------------------------------------------------------------------------------
    // constructor
    //-----------------------------------------------------------------------------------------------
    constructor() {
        this.stickies = [];
    
        this.stickies.push({
            backgroundColor: 'pink',
            height: 300,
            width: 300,
            text: 'You got this!',
            x: 50,
            y: 50,
        });
    
        this.stickies.push({
            backgroundColor: 'yellow',
            height: 300,
            width: 300,
            text: 'Effort is more important than perfection',
            x: 60,
            y: 60,
        });
    
        this.stickies.push({
            backgroundColor: 'lightblue',
            height: 300,
            width: 300,
            text: 'Just keep coding :)',
            x: 70,
            y: 70,
        });
    }
    
    //-----------------------------------------------------------------------------------------------
    // getStickies
    //-----------------------------------------------------------------------------------------------
    getStickies() {
        return this.stickies;
    }
}
    
const stickies = new Stickies();
// console.log(stickies.getStickies());
export default stickies;   