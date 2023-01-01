puts 'Destroying seeds...'

User.destroy_all
Cart.destroy_all
Product.destroy_all
Review.destroy_all

User.create(name: 'atkhodier', password: 'naruto', email: 'atkhodier@gmail.com', admin: true)
User.create(name: 'antonioreid', password: 'antonioreid', email: 'antonioreid@gmail.com', admin: false)

cartOne = Cart.create(user_id: 2, total: 0)

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
    price: 52,
    img_url: 'https://media.gamestop.com/i/gamestop/11206859-11206849?fmt=auto&$pdp-gallery$',
    rating: 2,
    category: 'PS5 Game'
)

sonicFrontiers = Product.create(
    name: 'Sonic Frontiers',
    description: 'Join Sonic on his latest adventure in Sonic Frontiers. Sprint through a vast open zone using Sonic’s super speed, attack enemies head on, and gain new skills to boost Sonic’s range of moves.',
    price: 65,
    img_url: 'https://media.gamestop.com/i/gamestop/20000861-680826cd?fmt=auto&$pdp-gallery$',
    rating: 5,
    category: 'PS5 Game'
)


Review.create(description: 'Greatest game I have ever played, amazing!', rating: 5, user_id: 1, product_id: 1)
Review.create(description: 'Really solid game, abit too much dialogue!', rating: 4, user_id: 1, product_id: 2)
Review.create(description: 'Story got boring towards the end, but gameplay was solid!', rating: 3, user_id: 1, product_id: 3)
Review.create(description: 'Worst basketball simulation ever, do not buy!', rating: 1, user_id: 2, product_id: 4)
Review.create(description: 'Man I love that sonic is back and better than ever!', rating: 5, user_id: 2, product_id: 5)
