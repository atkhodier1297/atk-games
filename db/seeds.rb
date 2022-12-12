puts 'Destroying seeds...'

User.destroy_all
Review.destroy_all
Product.destroy_all

User.create(name: 'atkhodier', password: 'naruto', email: 'atkhodier@gmail.com', admin: true)

Product.create(
    name: 'God of War Ragnarok',
    description: 'Embark on a mythic journey for answers and allies before Ragnarök arrives. Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.',
    price: 70,
    img_url: 'https://media.gamestop.com/i/gamestop/11206962-11206961?fmt=auto&$pdp-gallery$',
    rating: 5,
    category: 'PS5 Game'
)

Review.create(description: 'Greatest game I have ever played, amazing!', rating: 5, user_id: 1, product_id: 1)


