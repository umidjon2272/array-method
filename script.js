let books = [
    { id: 1, title: "JavaScript boshlang'ich", pages: 1000, genre: "programming", rating: 4.5 },
    { id: 2, title: "Uzuklar hukmdori", pages: 1200, genre: "fantasy", rating: 4.9 },
    { id: 3, title: "CSS chuqur o'rganish", pages: 700, genre: "programming", rating: 4.3 },
    { id: 4, title: "Garri Potter", pages: 800, genre: "fantasy", rating: 4.8 },
    { id: 5, title: "JavaScript algoritmlari", pages: 600, genre: "programming", rating: 4.7 }
];
let result = books
    .filter(b => b.genre === "programming")
    .sort((a, b) => a.pages - b.pages)
    .map(b => ({
        id: "Id - " + b.id,
        info: `Kitob "${b.title}" ${b.pages} sahifa va reytingi ${b.rating}`
    }));

console.log(result);


let clothes = [
    { id: 1, name: 'Futbolka', price: 20, size: 'M', color: 'white' },
    { id: 2, name: 'Kurtka', price: 150, size: 'L', color: 'black' },
    { id: 3, name: 'Shtanlar', price: 60, size: 'S', color: 'gray' },
    { id: 4, name: 'Krossovka', price: 120, size: 'M', color: 'white' },
    { id: 5, name: 'Shapka', price: 15, size: 'S', color: 'black' }
]
let natija = clothes
    .filter(n => n.color === "white")
    .sort((i, j) => j.price - i.price)
    .map(b => ({
        id: b.id,
        description: `Mahsulot: ${b.name}, Narxi: $${b.price}`,
        short: b.color + "-" + b.size
    }));

console.log(natija);


let students = [
    { id: 1, name: 'Ali', group: 'A', scores: [80, 75, 90], active: true },
    { id: 2, name: 'Vali', group: 'B', scores: [60, 65, 70], active: false },
    { id: 3, name: 'Sami', group: 'A', scores: [90, 95, 100], active: true },
    { id: 4, name: 'Lola', group: 'B', scores: [85, 80, 75], active: true },
    { id: 5, name: 'Nodir', group: 'C', scores: [40, 55, 60], active: false }
]
let urtabal = students
    .map(student => {
        let total = student.scores
            .reduce((sum, score) => sum + score, 0);
        let average = total / 3;
        return { name: student.name, average: parseFloat(average.toFixed(1)) };
    });

console.log(urtabal);
