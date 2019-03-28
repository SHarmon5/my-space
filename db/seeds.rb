200.times do
  firstname = Faker::Name.first_name
  lastname = Faker::Name.last_name
  from = Faker::Address.state
  avatar = Faker::Avatar.image(firstname, "100x150", 'png', "set1")
  Member.create(firstname: firstname, lastname: lastname, from: from, avatar: avatar)
end

puts "200 Members Seeded"