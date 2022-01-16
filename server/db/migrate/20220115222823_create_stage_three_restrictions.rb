class CreateStageThreeRestrictions < ActiveRecord::Migration
  def change
    create_table :stage_three_restrictions do |t|
      t.string :ceremony
      t.integer :max_indoor_gathering
      t.integer :max_outdoor_gathering
      t.string :retail
      t.string :food_establishment
      t.string :sports_recreational
      t.string :entertainment
      t.string :personal_care
      t.string :color_code
      t.timestamps null: false
    end
  end
end
