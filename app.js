window.onload = function () {

    // let and const keyword
    var items = document.getElementsByTagName('li');
    const x = 10
    for (let x = 0; x < items.length; x++) {
        items[x].onclick = function () {
            console.log(x);
        }
    }
    console.log(x);

    // defaults parameters 
    function logNinja(name = "Yoshi", age = 25) {
        console.log(name, age);
    }
    logNinja()

    // The spread operator
    var nums1 = [1, 2, 3];
    var nums2 = [...nums1, 4, 5, 6]
    console.log(nums2);
    function nums(a, b, c) {
        console.log(a + b + c);
    }
    nums(...nums1);

    // Template strings
    function logNinja(name = "Ryu", age = 25) {
        console.log(`my name is ${name} and my age is ${10 + 9}`)
    }
    logNinja()

    // Objects literal improvements
    var name = "Ryu";
    var belt = "Red";
    var ninja = {
        name,
        belt,
        chop(x = 10) {
            console.log(`you chopped the enemy ${x} times`)
        }
    }
    ninja.chop();
    /* 
    New string methods
    - repaeat
    - starWith
    - endWith
    - includes
    */

    var str = "goodbye";
    console.log(str.repeat(5));
    console.log(str.startsWith('good'));
    console.log(str.endsWith('good', str.length - 3));

    var youSay = "goodbye";
    if (youSay.startsWith("goodbye")) {
        var iSay = "hello";
    }

    console.log(`you say ${youSay}, I say ${iSay}`);

    var test = "My name is Ryu";
    console.log(test.includes("name"));

    /* Arrow functions */

    // var ninjaGreeting = (name) => console.log(`${name} Hiiiya!`);
    var ninjaGreeting = name => console.log(`${name} Hiiiya!`);
    ninjaGreeting("Marc");

    var ninja = {
        name: "Ruy",
        chop(x) {
            window.setInterval(() => {
                if (x > 0) {
                    console.log(this.name + " chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    };
    ninja.chop(3);

    // Sets
    var names = new Set();
    names.add("Shaun").add("Ryu").add("Crystal").add("Ryu");
    names.delete("Ryu");
    names.clear();
    console.log(names);
    console.log(names.size);

    var ninjas = ["shaun", "crystal", "yoshi", "ryu", "yoshi", "ryu"];
    var refinedNinjas = new Set(ninjas);
    ninjas = [...refinedNinjas];

    console.log(ninjas);

    // Generators

    function* gen() {
        var x = yield "banana";
        var y = yield "apple";
        var z = yield "pear";
        return x + z + y;
    }

    var myGen = gen();
    console.log(myGen.next());
    console.log(myGen.next(5));
    console.log(myGen.next(5));
    console.log(myGen.next(5));

}