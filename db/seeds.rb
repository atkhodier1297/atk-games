puts 'Destroying seeds...'

User.destroy_all
Cart.destroy_all
Product.destroy_all
Review.destroy_all

User.create(name: 'atkhodier', password: 'naruto', email: 'atkhodier@gmail.com', admin: true)
User.create(name: 'antonioreid', password: 'antonioreid', email: 'antonioreid@gmail.com', admin: false)


godOfWarRagnarok = Product.create(
    name: 'God of War Ragnarok',
    description: 'Embark on a mythic journey for answers and allies before Ragnarök arrives. Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.',
    price: 70,
    img_url: 'https://media.gamestop.com/i/gamestop/11206962-11206961?fmt=auto&$pdp-gallery$',
    rating: 5,
    category: 'PS5 Game'
)

horizonForbiddenWest = Product.create(
    name: 'Horizon Forbidden West',
    description: 'Join Aloy as she braves the Forbidden West, a majestic but dangerous frontier that conceals mysterious new threats.',
    price: 50,
    img_url: 'https://media.gamestop.com/i/gamestop/11158704/Horizon-Forbidden-West-Launch-Edition---PlayStation-5?fmt=auto&$pdp-gallery$',
    rating: 4,
    category: 'PS5 Game'
)

stray = Product.create(
    name: 'Stray',
    description: 'Roam the streets, defend yourself against unforeseen threats, and uncover the secrets of a city filled with dangerous creatures.',
    price: 70,
    img_url: 'https://media.gamestop.com/i/gamestop/11207207/Stray?fmt=auto&$pdp-gallery$',
    rating: 4,
    category: 'PS5 Game'
)

nba2k23 = Product.create(
    name: 'NBA 2k23',
    description: 'Redefine the game as you put together your dream team in MyTEAM and develop your skills on the court with authentic gameplay in this iconic basketball video game.',
    price: 50,
    img_url: 'https://media.gamestop.com/i/gamestop/11206859-11206849?fmt=auto&$pdp-gallery$',
    rating: 2,
    category: 'PS5 Game'
)

sonicFrontiers = Product.create(
    name: 'Sonic Frontiers',
    description: 'Join Sonic on his latest adventure in Sonic Frontiers. Sprint through a vast open zone using Sonic’s super speed, attack enemies head on, and gain new skills to boost Sonic’s range of moves.',
    price: 60,
    img_url: 'https://media.gamestop.com/i/gamestop/20000861-680826cd?fmt=auto&$pdp-gallery$',
    rating: 5,
    category: 'PS5 Game'
)

dbzKakarot = Product.create(
    name: 'Dragonball Z Kakarot',
    description: 'Relive the story of Goku and other Z Fighters in DRAGON BALL Z: KAKAROT! Beyond the epic battles, experience life in the DRAGON BALL Z world as you fight, fish, eat, and train with Goku, Gohan, Vegeta and others.',
    price: 10,
    img_url: 'https://media.gamestop.com/i/gamestop/10172926-2e0ec255?fmt=auto&$pdp-gallery$',
    rating: 5,
    category: 'PS5 Game'
)

seaOfThieves = Product.create(
    name: 'Sea of Thieves',
    description: 'Enjoy thrilling stories, dangerous sea creatures, and hauls of hidden treasure that help shape your own unique pirate legend.',
    price: 30,
    img_url: 'https://media.gamestop.com/i/gamestop/10157070/Sea-of-Thieves---Xbox-One?fmt=auto&$pdp-gallery$',
    rating: 3,
    category: 'Xbox Game'
)

cyberpunk2077 = Product.create(
    name: 'Cyberpunk 2077',
    description: 'You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your characters cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.',
    price: 40,
    img_url: 'https://media.gamestop.com/i/gamestop/11094721/Cyberpunk-2077---Xbox-One?fmt=auto&$pdp-gallery$',
    rating: 2,
    category: 'Xbox Game'
)

hogwartsLegacy = Product.create(
    name: 'Hogwarts Legacy',
    description: 'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s.',
    price: 50,
    img_url: 'https://media.gamestop.com/i/gamestop/11203514-7a0ba190?fmt=auto&$pdp-gallery$',
    rating: 4,
    category: 'Xbox Game'
)

wreckfest = Product.create(
    name: 'Wreckfest',
    description: 'Break the rules and take full-contact racing to the limit with Wreckfest! Expect epic crashes, neck-to-neck fights over the finish line and brand-new ways for metal to bend.',
    price: 20,
    img_url: 'https://media.gamestop.com/i/gamestop/10170000/Wreckfest---Xbox-One?fmt=auto&$pdp-gallery$',
    rating: 2,
    category: 'Xbox Game'
)

madden23 = Product.create(
    name: 'Madden 23',
    description: 'Experience different competitive gameplay modes, make strategic, play-making decisions, explore the updated roster, and build your ultimate team as you rise to fame on the field and take control of the game in this highly-anticipated NFL football video game.',
    price: 10,
    img_url: 'https://media.gamestop.com/i/gamestop/11190740?fmt=auto&$pdp-gallery$',
    rating: 1,
    category: 'Xbox Game'
)

forzaHorizon5 = Product.create(
    name: 'Forza Horizon 5',
    description: 'Lead breathtaking expeditions across the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.',
    price: 40,
    img_url: 'https://media.gamestop.com/i/gamestop/11148773/Forza-Horizon-5---Xbox-Series-X?fmt=auto&$pdp-gallery$',
    rating: 2,
    category: 'Xbox Game'
)



Review.create(description: 'Greatest game I have ever played, amazing!', rating: 5, user_id: 1, product_id: 1)
Review.create(description: 'Really solid game, abit too much dialogue!', rating: 4, user_id: 1, product_id: 2)
Review.create(description: 'Story got boring towards the end, but gameplay was solid!', rating: 3, user_id: 1, product_id: 3)
Review.create(description: 'Worst basketball simulation ever, do not buy!', rating: 1, user_id: 2, product_id: 4)
Review.create(description: 'Man I love that sonic is back and better than ever!', rating: 5, user_id: 2, product_id: 5)
