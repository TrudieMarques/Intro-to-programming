//Claude exercises:

// let playlist = ["Bohemian Rhapsody", "Hotel California", "Stairway to Heaven", "Imagine", "Hey Jude"];
// console.log(playlist[0]);
// console.log(playlist[2]);
// console.log(playlist[playlist.length -1])
// console.log(playlist.length)
// console.log(playlist[playlist.length -2])

// let tasks = ["Buy groceries", "Walk the dog", "Do laundry"];
// tasks[1] = "Feed the cat";
// console.log(tasks);
// tasks[0] = "Buy groceries and snacks";
// console.log(tasks);
// tasks[tasks.length] = "Wash the car";
// console.log(tasks);
// tasks[5] = "Pay bills";
// console.log(tasks);
// console.log(tasks[4]);

// let cart = [];
// cart.push("Milk");
// console.log(cart);
// cart.push("Bread");
// console.log(cart);
// cart.push("Eggs");
// console.log(cart);
// cart.push("Butter", "Cheese");
// console.log(cart);
// console.log(cart.length);

// let queue = ["Charlie", "Dave", "Eve"];
// queue.unshift("Bob");
// console.log(queue);
// queue.unshift("Alice");
// console.log(queue);
// queue.unshift("Yara", "Zoe");
// console.log(queue);
// console.log(queue[0]);
// console.log(queue.length);

// let toRead = ["Dune", "1984", "The Hobbit", "Brave New World"];
// let readingNow = ["Sapiens"];

// nextBook = toRead.pop();
// console.log(nextBook);
// readingNow.unshift(nextBook);
// console.log(readingNow);
// console.log(toRead);
// readingNow.unshift(toRead.pop());
// console.log(toRead);
// console.log(readingNow);
// console.log(toRead.length);
// console.log(readingNow.length);

// let prizes = ["Gold Coin", "Silver Coin", "Bronze Coin", "Mystery Box", "Nothing"];
// console.log(Math.random());
// console.log(Math.floor(Math.random() * prizes.length));
// console.log(prizes[Math.floor(Math.random() * prizes.length)]);
// console.log(Math.floor(Math.random() * 7) + 1);
// console.log(Math.floor(Math.random() * 11) + 10);

// let fortunes = ["You will travel far", "A surprise awaits you", "Trust your instincts", "Good luck is near", "Patience brings reward"];
// let luckyColors = ["Red", "Blue", "Green", "Purple", "Gold"];

// console.log(fortunes[Math.floor(Math.random() * fortunes.length)]);
// console.log(luckyColors[Math.floor(Math.random() * luckyColors.length)]);
// console.log([Math.floor(Math.random() * 10)] + 1 );

// let flip = Math.floor(Math.random() * 2);

// if (flip === 0) {
//     console.log("Heads");
// }   else {
//     console.log("Tails");
// }

// let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
// console.log(planets[0]);
// console.log(planets[3]);
// console.log(planets[planets.length -1]);
// console.log(planets[10]);

// let snacks = ["Chips", "Cookies", "Popcorn"];
// snacks[1]= "Pretzels";
// console.log(snacks);
// snacks[3] = "Nuts";
// console.log(snacks);
// snacks[6] = "Candy";
// console.log(snacks);

// let superheroes = ["Batman", "Spider-Man", "Wonder Woman", "Thor"];
// console.log(superheroes.length);
// console.log(superheroes[superheroes.length -1]);
// superheroes[4] = "Trudie";
// console.log(superheroes);

// let plates = [];
// plates.push("Plate 1");
// plates.push("Plate 2");
// plates.push("Plate 3");
// console.log(plates);
// console.log(plates.length);
// let topPlate = plates.pop();
// console.log(topPlate);
// console.log(plates);

// let playlist = ["Song A", "Song B", "Song C"];
// console.log(playlist[0]);
// console.log(playlist[playlist.length -1]);
// playlist[1] = "Favourite Song";
// console.log(playlist);
// playlist.push("Song D");
// console.log(playlist);
// playlist.unshift("Intro Track");
// console.log(playlist);
// console.log(playlist.length);
// console.log(playlist.indexOf("Favourite Song"));
// console.log(playlist.join(" | "));

// let line = ["Customer 1", "Customer 2", "Customer 3"];
// let completed = [];
// let firstCust = line.shift();
// completed.push(firstCust)
// completed.push(line.shift())
// console.log(line);
// console.log(completed);
// console.log(line.length);
// console.log(line.unshift("VIP"));
// console.log(line);

// let storeA = ["Pen", "Notebook", "Eraser"];
// let storeB = ["Marker", "Notebook", "Ruler"];
// let allStock = storeA.concat(storeB);
// console.log(allStock);
// console.log(allStock.length);
// console.log(allStock.indexOf("Notebook"));
// console.log(allStock.indexOf("Stapler"));
// allStock.push("Stapler");
// console.log(allStock);
// console.log(allStock.indexOf("Stapler"));
// console.log(storeA);

// let players = ["Alex", "Bailey", "Casey", "Drew"];
// let roles = ["Captain", "Defender", "Striker"];
// console.log(players[Math.floor(Math.random () * players.length)]);
// console.log(roles[Math.floor(Math.random () * roles.length)]);
// console.log(players[Math.floor(Math.random () * players.length)], "is the", roles[Math.floor(Math.random () * roles.length)]);
// let actions = ["scored a goal", "made a great save", "passed brilliantly"];
// let randomPlayers = players[Math.floor(Math.random () * players.length)];
// let randomRoles = roles[Math.floor(Math.random () * roles.length)];
// let randomActions = actions[Math.floor(Math.random () * actions.length)];

// let sentence = [randomPlayers, ", the ", randomRoles, ", ", randomActions, "."].join("");
// console.log(sentence);

// let stops = [];
// stops.push("Home", "Gas Station", "Diner", "Beach")
// console.log(stops);
// console.log(stops.length);
// stops.unshift("Garage");
// console.log(stops);
// console.log(stops[2]);
// console.log(stops.indexOf("Diner"));
// console.log(stops.pop());
// let friendStops = ["Mountain", "Lake"];
// let route = stops.concat(friendStops);
// console.log(route);
// console.log(route.join(" -> "));