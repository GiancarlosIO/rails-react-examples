# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Role.destroy_all

Role.create(name: 'Admin');
Role.create(name: 'Super User')
Role.create(name: 'Guest')

50.times do |t|
  if t % 2 == 0
    role_id = Role.first.id
  elsif t % 3 == 0
    role_id = Role.second.id
  else
    role_id = Role.third.id
  end
  user = User.create(first_name: "user #{t}", last_name: "lastname #{t}", age: t+10, email: "user#{t}@gmail.com", role_id: role_id)
end
