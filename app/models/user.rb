class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :products, through: :reviews

    has_secure_password
end
