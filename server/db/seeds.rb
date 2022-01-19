# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require('faker')

3.times do
  Admin.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: 'test@test.com', password: '123')
end

6.times do
  Admin.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: 'test@test.com', password: '123')
end

Stage.create(max_indoor_gathering: 5, max_outdoor_gathering: 10,
  food_establishments: "Indoor dining is closed. Takeout & Outdoor dining: Maximum of 4 people per table exclusing
  large households.",
  retail: "25% capacity of essential retail and 15% capacity of Non-essential retail both with no restricitons on
  goods being sold",
  ceremony: "Indoor religious services, rites, or ceremonies, including wedding services
  and funeral services permitted at up to 15 per cent capacity of the particular room. Outdoor services max capacity
  limited to the number of people that can maintain a physical distance of two metres.",
  sports_recreational: "Indoor sports and recreational fitness facilities are closed including gyms.Outdoor fitness classes,
  outdoor groups in personal training and outdoor individual/team sport training to be permitted with up toMaximum:10 people",
  entertainment: "Concert venues, theatres and cinemas may open outdoors for the purpose of rehearsing or performing
  a recorded or broadcasted concert, artistic event, theatrical performance or other performance with no more than
  10 performers",
  personal_care: "Salons and Barbershops closed to the general public",
  color_code: "red")

Stage.create(max_indoor_gathering: 5, max_outdoor_gathering: 10,
  food_establishments: "Indoor dining is closed. Takeout & Outdoor dining: Maximum of 4 people per table exclusing
  large households.",
  retail: "25% capacity of essential retail and 15% capacity of Non-essential retail both with no restricitons on
  goods being sold",
  ceremony: "Indoor religious services, rites, or ceremonies, including wedding services
  and funeral services permitted at up to 15 per cent capacity of the particular room. Outdoor services max capacity
  limited to the number of people that can maintain a physical distance of two metres.",
  sports_recreational: "Indoor sports and recreational fitness facilities are closed including gyms.Outdoor fitness classes,
  outdoor groups in personal training and outdoor individual/team sport training to be permitted with up toMaximum:10 people",
  entertainment: "Concert venues, theatres and cinemas may open outdoors for the purpose of rehearsing or performing
  a recorded or broadcasted concert, artistic event, theatrical performance or other performance with no more than
  10 performers",
  personal_care: "Salons and Barbershops closed to the general public",
  color_code: "red")

Stage.create(max_indoor_gathering: 5,
  max_outdoor_gathering: 10 , food_establishments: "Indoor dining is closed. Outdoor dining has some restrictions. ",
  retail:"50% capacity. For shopping malls physical distancing will be required in line-ups,
  loitering will not be permitted and food courts will be required to close." ,
  ceremony: "Indoor religious services, rites, or ceremonies, including wedding services
  and funeral services limited to 50% capacity of the room.",
  sports_recreational:"Indoor sports and recreational fitness facilities are closed including gyms except
  for except for professional athletes. Outdoor facilities limited by 50% occupancy.",
  entertainment:"Indoor concert venues, theatres, cinemas are closed. Rehearsals and recorded performances
  permitted with restrictions.",
  personal_care: "50% capacity and other restrictions. Saunas, steam rooms,
  and oxygen bars closed.",
  color_code: "orange")


Stage.create(max_indoor_gathering: 25, max_outdoor_gathering: 100,
  food_establishments: "Indoor dining permitted with no limits to number of peopl per table. Indoor food or
  drink establishments where dance facilities are provided, including nightclubs and
  restobars, permitted up to 25 per cent capacity or up to a maximum limit of 250 people (whichever is less)",
  retail: "Capacity limited to the number of people that can maintain a physical distance of two metres",
  ceremony:"Indoor religious services, rites or ceremonies, including wedding services and
  funeral services permitted with physical distancing;",
  sports_recreational: "Maximum 50% capacity or 1000 people(whichever is less). Outdoor: 75% capacity or 15,000 people
  whichever is less",
  entertainment: "Concert, cinemas, and theatres can operate at  50 per cent capacity indoors or 1000 peopl which ever
  is less or 75% Capacity outdoors or a maximum of 5,000 people for unseated events (whichever is less); 75% capacity
  outdoors or a maximum of 15,000 people for events with fixed seating (whichever is less)",
  personal_care: "Services that require removal of face coverings capacity is limited to the number of people that can
  maintain a physical distance of two metres;",
  color_code: "green")


  HealthRegion.create(region_name: "Algoma", region_code: 3526, stage_id: 2)
  HealthRegion.create(region_name: "Brant County", region_code: 3527, stage_id: 2)
  HealthRegion.create(region_name: "Durham Region", region_code: 3530, stage_id: 2)
  HealthRegion.create(region_name: "Elgin-St Thomas", region_code: 3531, stage_id: 2)
  HealthRegion.create(region_name: "Grey Bruce", region_code: 3533, stage_id: 2)
  HealthRegion.create(region_name: "Haldimand-Norfolk", region_code: 3534, stage_id: 2)
  HealthRegion.create(region_name: "Haliburton, Kawartha, Pine Ridge", region_code: 3535, stage_id: 2)
  HealthRegion.create(region_name: "Halton Region", region_code: 3536, stage_id: 2)
  HealthRegion.create(region_name: "Hamilton", region_code: 3537, stage_id: 2)
  HealthRegion.create(region_name: "Hastings and Prince Edward Counties", region_code: 3538, stage_id: 2)
  HealthRegion.create(region_name: "Huron County", region_code: 3539, stage_id: 2)
  HealthRegion.create(region_name: "Chatham-Kent", region_code: 3540, stage_id: 2)
  HealthRegion.create(region_name: "Kingston, Frontenac and Lennox and Addington", region_code: 3541, stage_id: 2)
  HealthRegion.create(region_name: "Lambton", region_code: 3542, stage_id: 2)
  HealthRegion.create(region_name: "Leeds, Grenville and Lanark", region_code: 3543, stage_id: 2)
  HealthRegion.create(region_name: "Middlesex–London", region_code: 3544, stage_id: 2)
  HealthRegion.create(region_name: "Niagara Regional Area", region_code: 3546, stage_id: 2)
  HealthRegion.create(region_name: "North Bay Parry Sound", region_code: 3547, stage_id: 2)
  HealthRegion.create(region_name: "Ottawa", region_code: 3551, stage_id: 2)
  HealthRegion.create(region_name: "Oxford County", region_code: 3552, stage_id: 2)
  HealthRegion.create(region_name: "Peel Region", region_code: 3553, stage_id: 2)
  HealthRegion.create(region_name: "Perth District", region_code: 3554, stage_id: 2)
  HealthRegion.create(region_name: "Peterborough County–City", region_code: 3555, stage_id: 2)
  HealthRegion.create(region_name: "Porcupine ", region_code: 3556, stage_id: 2)
  HealthRegion.create(region_name: "Renfrew County and District", region_code: 3557, stage_id: 2)
  HealthRegion.create(region_name: "Eastern Ontario", region_code: 3558, stage_id: 2)
  HealthRegion.create(region_name: "Simcoe Muskoka Distric", region_code: 3560, stage_id: 2)
  HealthRegion.create(region_name: "Sudbury and District", region_code: 3561, stage_id: 2)
  HealthRegion.create(region_name: "Thunder Bay District", region_code: 3562, stage_id: 2)
  HealthRegion.create(region_name: "Timiskaming", region_code: 3563, stage_id: 2)
  HealthRegion.create(region_name: "Waterloo", region_code: 3565, stage_id: 2)
  HealthRegion.create(region_name: "Wellington–Dufferin-Guelph ", region_code: 3566, stage_id: 2)
  HealthRegion.create(region_name: "Windsor–Essex County", region_code: 3568, stage_id: 2)
  HealthRegion.create(region_name: "York", region_code: 3570, stage_id: 2)
  HealthRegion.create(region_name: "Toronto", region_code: 3595, stage_id: 2)