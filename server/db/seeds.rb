# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require('faker')

3.times do
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password)
end

  HealthRegion.create(region_name: "Toronto", region_code: "3595", max_indoor_gathering: 5, max_outdoor_gathering: 10
  retail: "", ceremony: "50% capacity of the room", food_establishment: "take-out allowed, indoor dining closed", sports_recreational: "", entertainment: "", color_code: "orange")

  HealthRegion.create(region_name: "Toronto", region_code: "3595", max_indoor_gathering: 5, max_outdoor_gathering: 10
  retail: "50% capacity of the room", ceremony: "50% capacity of the room", food_establishment: "take-out allowed, indoor dining closed", sports_recreational: "", entertainment: "", color_code: "orange")

  {
    stage1:{
      retail:
      max_outdoor_gathering:
      ceremony:
      color_code: "red"
      entertainment:
    },
    stage2:{
      retail:
      max_outdoor_gathering:
      ceremony:
      color_code: "orange"
      entertainment:
    },
    stage3:{
      retail:
      max_outdoor_gathering:
      ceremony:
      color_code:
      entertainment: "green"
    },

  }
