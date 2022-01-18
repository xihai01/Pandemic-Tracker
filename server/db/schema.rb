# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20220115222823) do

  create_table "admins", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "health_regions", force: :cascade do |t|
    t.string   "region_name"
    t.string   "region_code"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "stage_one_restrictions", force: :cascade do |t|
    t.string   "ceremony"
    t.integer  "max_indoor_gathering"
    t.integer  "max_outdoor_gathering"
    t.string   "retail"
    t.string   "food_establishment"
    t.string   "sports_recreational"
    t.string   "entertainment"
    t.string   "personal_care"
    t.string   "color_code"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "stage_three_restrictions", force: :cascade do |t|
    t.string   "ceremony"
    t.integer  "max_indoor_gathering"
    t.integer  "max_outdoor_gathering"
    t.string   "retail"
    t.string   "food_establishment"
    t.string   "sports_recreational"
    t.string   "entertainment"
    t.string   "personal_care"
    t.string   "color_code"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "stage_two_restrictions", force: :cascade do |t|
    t.string   "ceremony"
    t.integer  "max_indoor_gathering"
    t.integer  "max_outdoor_gathering"
    t.string   "retail"
    t.string   "food_establishment"
    t.string   "sports_recreational"
    t.string   "entertainment"
    t.string   "personal_care"
    t.string   "color_code"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
