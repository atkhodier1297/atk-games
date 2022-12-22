puts 'Destroying seeds...'

User.destroy_all
Review.destroy_all
Product.destroy_all

User.create(name: 'atkhodier', password: 'naruto', email: 'atkhodier@gmail.com', admin: true)

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

callOfDutyMw2 = Product.create(
    name: 'Call of Duty Modern Warfare 2',
    description: 'Call of Duty: Modern Warfare II drops players into an unprecedented global conflict that features the return of the iconic operators of Task Force 141.',
    price: 60,
    img_url: 'https://media.gamestop.com/i/gamestop/11206901-11206901?fmt=auto&$pdp-gallery$',
    rating: 4,
    category: 'PS5 Game'
)



Review.create(description: 'Greatest game I have ever played, amazing!', rating: 5, user_id: 1, product_id: 1)
Review.create(description: 'Really solid game, abit too much dialogue!', rating: 4, user_id: 1, product_id: 2)
Review.create(description: 'Story got boring towards the end, but gameplay was solid!', rating: 3, user_id: 1, product_id: 3)
