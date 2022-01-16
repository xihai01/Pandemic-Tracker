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

  HealthRegion.create(region_name: "Toronto", region_code: "3595")
  HealthRegion.create(region_name: "York", region_code: "3570")
  StageOneRestriction.create(ceremony: "15% capacity", max_indoor_gathering: 5, max_outdoor_gathering: 10,
  retail: "25% capacity, Non-essential:15%", food_establishment: "Takeout & Outdoor dining: Maximum of 4 people per table", sports_recreational: "Maximum:10 people", entertainment: "Concert venues, theatres and cinemas may open outdoors for the purpose of rehearsing or performing a recorded or broadcasted concert, artistic event, theatrical performance or other performance with no more than 10 performers", personal_care: "Salons and Barbershops closed to the general public",color_code: "red")

  StageTwoRestriction.create(ceremony: "50% venue capacity", max_indoor_gathering: 5, max_outdoor_gathering: 10,
  retail: "", food_establishment: "", sports_recreational: "",entertainment: "", personal_care: "",color_code: "red")

  StageThreeRestriction.create(ceremony: "Indoor meeting and event spaces permitted to operate with physical distancing and other restrictions still in effect and capacity limited to not exceed 50 per cent capacity or 1,000 people,(whichever is less)", max_indoor_gathering: 25, max_outdoor_gathering: 100,
  retail: "Essential and non-essential retail with with capacity limited to the number of people that can maintain a physical distance of two metres", food_establishment: "Indoor food or drink establishments where dance facilities are provided, including nightclubs and restobars, permitted up to 25 per cent capacity or up to a maximum limit of 250 people (whichever is less)", sports_recreational: " Maximum 50% capacity or 1000 people(whichever is less). Outdoor: 75% capacity or 15,000 people, whichever is less",entertainment: "75% Capacity outdoors or a maximum of 5,000 people for unseated events (whichever is less); 75% capacity outdoors or a maximum of 15,000 people for events with fixed seating (whichever is less)", personal_care: "Including services requiring the removal of a face covering, with capacity limited to the number of people that can maintain a physical distance of two metres;",color_code: "green")

