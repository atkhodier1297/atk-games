class User < ApplicationRecord
    has_many :reviews, dependent: :destroy 
    has_many :products, through: :reviews

    has_one :cart, dependent: :destroy

    has_secure_password
    validates :name, presence: true
    validates :email, presence: true,
    format: { with: /(.+)@(.+).com/, message: "Email invalid"  },
              uniqueness: { case_sensitive: false },
              length: { minimum: 5, maximum: 50 }
end
